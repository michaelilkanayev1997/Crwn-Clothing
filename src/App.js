import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";
import Spinner from "./components/spinner/spinner.component";
import { GlobalStyle } from "./global.styles";
import Category from "./routes/category/category.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Home from "./routes/home/home.component";
//import Authentication from "./routes/authentication/authentication.component";
//import Navigation from "./routes/navigation/navigation.component";
//import Shop from "./routes/shop/shop.component";
//import Checkout from "./routes/checkout/checkout.component";
//import ItemDetails from "./components/item-details/item-details.component";

//***************** Lazy imports ******************//
const Home = lazy(() => import("./routes/home/home.component"));
const Authentication = lazy(() =>
  import("./routes/authentication/authentication.component")
);
const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const ItemDetails = lazy(() =>
  import("./components/item-details/item-details.component")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      console.log(setCurrentUser(pickedUser));
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Spinner />}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/:category/:itemid" element={<ItemDetails />} />
            <Route path="shop/:category" element={<Category />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
