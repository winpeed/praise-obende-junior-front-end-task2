import styled from "styled-components";

export const Container = styled.section`
  width: 270px;
  border: 1px solid var(--color-gray);
  padding: 1em;
  background: var(--color-white);
  position: absolute;
  right: 0em;
  z-index: 10000;
  max-height: 420px;
  overflow-y: auto;

  @media (max-width: 430px) {
    right: -4.5em;
  }
`;

export const ErrorMsg = styled.h3`
  text-align: center;
  padding: 1em;
  font-weight: 400;
  font-size: 1.3rem;
`;

export const Info = styled.h4`
  margin: 0.1em 0em 1em 0em;
`;

export const ProductItem = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 2em 0em;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5em 0em;
  min-width: ${(props) => (props.min === "true" ? "50%" : "10%")};

  > span {
    padding: 0.4em;
    min-width: 20px;
    text-align: center;
    border: 1px solid black;
    margin: 0.7em 0.7em 0.7em 0em;
    cursor: pointer;
  }
`;

export const ProductName = styled.h5`
  font-weight: ${(props) => (props.bold === "true" ? "700" : "300")};
  font-size: 0.8rem;
  max-width: 80%;
  text-transform: capitalize;
`;

export const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 0.9rem;
`;

export const ProductSize = styled.p`
  display: flex;
  flex-wrap: wrap;
  width: 90%;

  span {
    font-size: 0.8rem;
    padding: 0.2em 0.4em;
    text-align: center;
    border: 1px solid black;
    margin-bottom: 0.5em;
    margin-right: 0.7em;
    cursor: pointer;
  }
`;

export const Span = styled.span``;

export const CartControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.img``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Button = styled.button`
  flex: 0 0 45%;
  padding: 1em;
  font-size: 0.6rem;
  text-transform: uppercase;
  border: 1px solid var(--color-black);
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.1em;
  margin: 0em 1em;
  background: ${(props) =>
    props.color === "green" ? "var(--color-green)" : "var(--color-white)"};
  color: ${(props) =>
    props.color === "green" ? "var(--color-white)" : "var(--color-green)"};

  a {
    text-decoration: none;
    color: ${(props) =>
      props.color === "green" ? "var(--color-white)" : "var(--color-black)"};
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5em 0em 2.5em 0em;
`;
