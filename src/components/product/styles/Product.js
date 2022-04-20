import styled from "styled-components";

export const PageContainer = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
`;

export const Main = styled.section`
  flex-direction: row;
  max-width: 1100px;
  margin: 11em auto 0em auto;
  display: flex;
  justify-content: space-between;
  padding: 0em 1em;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Swatch = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 0 0 15%;
  align-self: flex-start;

  img {
    margin-right: 0.6em;
  }
`;

export const ImageWrapper = styled.section`
  flex: 0 0 50%;
`;

export const DetailsWrapper = styled.section`
  flex: 0 0 35%;
`;

export const PageTitle = styled.h1`
  margin: 0.5em 0em;
  text-align: left;
  padding: 4em 1em 0em 1em;

  @media (max-width: 600px) {
    text-align: center;
    padding: 6em 0em 0em 0em;
  }
`;

export const Container = styled.section`
  max-width: 1200px;
  flex-wrap: wrap;
  padding: 0em 1.5em;
  text-align: center;
  margin-top: ${(props) => (props.welcome ? "14em" : "null")};
  display: flex;
  flex-direction: ${(props) => (props.welcome ? "column" : "row")};
  align-items: ${(props) => (props.welcome ? "center" : "null")};

  a {
    display: inline;
    flex: 0 0 45%;
    width: 45%;
    text-decoration: none;
  }

  @media (min-width: 500px) {
    justify-content: flex-start;
  }
`;

export const Item = styled.div`
  display: inline;
  margin: 2em 2em 3em 0em;
  text-decoration: none;
  color: var(--color-black);
  position: relative;
  background: var(--color-white);
  padding: 1.5em 1em;
  flex: 0 0 90%;

  a {
    text-decoration: none;
    color: var(--color-black);

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  @media (min-width: 600px) {
    flex: 0 0 40%;
    margin: 3em 2em 3em 0em;
  }

  @media (min-width: 900px) {
    flex: 0 0 26%;
    margin: 3em 3.5em 3em 0em;

    &:hover {
      transition: all 0.5s ease-in 0.1s;
      box-shadow: 1px 1px 1px 1px var(--color-gray);
    }
  }
`;

export const Picture = styled.img``;

export const Stock = styled.h2`
  background: var(--color-white);
  position: absolute;
  left: 25%;
  top: 33%;
  opacity: 1;
  color: var(--color-gray);
`;

export const CartIcon = styled(Stock)`
  background: var(--color-green);
  padding: 0.2em;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: -5.2em;
  position: absolute;
  z-index: 100;
  left: 78%;
  cursor: pointer;
  top: 100%;
  right: 0;

  svg {
    fill: var(--color-white);
    cursor: pointer;
  }
`;

export const Name = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin: 1em 0em 0.6em 0em;
  text-align: ${(props) => (props.align === "center" ? "center" : "left")};
`;

export const NameHeading = styled(Name)`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-black);
  max-width: 200px;
  padding: 0.4em 0em;
  line-height: 1.4;
`;

export const HeadTitle = styled.h4`
  font-family: var(--font-secondary);
  padding-bottom: 0.5em;
  font-size: 0.8rem;
  margin: 0.9em 0em;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
`;

export const CartMain = styled.section`
  max-width: 800px;
  margin: 1em 0;
  left: 0;
  padding: 0em 1.5em;
`;

export const OverlayWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;

  .btn--white {
    background: var(--color-white);
    color: var(--color-black);
    border: 1px solid var(--color-black);
  }

  .btn--green {
    background: var(--color-green);
    color: var(--color-white);
  }
`;

export const OverlayButton = styled.button`
  flex: 0 0 45%;
  padding: 1em;
  min-width: 150px;
  font-size: 0.6rem;
  text-transform: uppercase;
  border: none;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.1em;
  margin: 0em 1em;
  background: var(--color-green);
  color: var(--color-white);

  a {
    text-decoration: none;
    color: var(--color-white);
  }
`;

export const Size = styled.div`
  display: flex;
  margin: 1.5em 0em;

  span {
    padding: 0.6em;
    min-width: 20px;
    text-align: center;
    border: 1px solid black;
    margin: 0.7em 0.7em 0.7em 0em;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  color: var(--color-white);
  display: block;
  width: 100%;
  border: none;
  padding: 0.9em 2.5em;
  text-transform: uppercase;
  font-weight: 600;
  margin: 2.5em 0em;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
  background-color: ${(props) =>
    props.disabled ? "var(--color-disabled)" : "var(--color-green)"};
  color: var(--color-white);
`;

export const Span = styled.span``;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
  font-family: var(--font-secondary);
`;

export const Form = styled.form``;

export const Label = styled.label`
  padding: 0.6em;
  min-width: 20px;
  text-align: center;
  border: 1px solid black;
  margin: 0.7em 0.7em 0.7em 0em;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;

export const InputWrapper = styled.div``;
