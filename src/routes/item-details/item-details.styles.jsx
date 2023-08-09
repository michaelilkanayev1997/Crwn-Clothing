import styled from "styled-components";

export const ItemDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  height: 90vh;
  width: 800px;

  @media screen and (max-width: 800px) {
    padding: 20px;
    height: 80vh;
    width: 100%;
  }
`;

export const TitleLabel = styled.div`
  h2 {
    font-size: 25px;
    padding-bottom: 3px;
    display: inline-block;
    border-bottom: 5px solid lightgray;
  }
  @media screen and (max-width: 800px) {
    h2 {
      border-bottom: 3px solid lightgray;

      padding-bottom: 2px;
      font-size: 17px;
    }
  }
`;

export const BigImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: zoom-in;
  margin-bottom: 20px;
  width: 400px;
  margin: 0 auto; /* Center the big image horizontally */
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
    transition: transform 0.3s ease;
    transform: ${({ zoomed }) => (zoomed ? "scale(1.7)" : "scale(1)")};
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    img {
      width: 100%;
      height: 200px;
      transform: ${({ zoomed }) => (zoomed ? "scale(1.5)" : "scale(1)")};
    }
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  min-height: 70px;
  img {
    max-width: 100px;
    max-height: 80px;
    border: 2px solid transparent;
    transition: border-color 0.3s ease;
    cursor: pointer;

    &:hover {
      border-color: #007bff;
    }

    &.active {
      border-color: #007bff;
    }
  }

  @media screen and (max-width: 800px) {
    img {
      max-width: 80px;
      max-height: 60px;
    }
  }
`;

export const CustomSelect = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  margin-bottom: 10px;
`;

export const Label = styled.h2`
  margin-right: 10px;
  font-size: 16px;
`;

export const StyledSelect = styled.select`
  flex: 1;

  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;

  option {
    color: black;
    padding: 5px 10px;
  }

  @media screen and (max-width: 800px) {
    option {
      font-size: 11px;
      padding: 0px;
    }
  }
`;
