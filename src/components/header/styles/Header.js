import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 500;
  margin-bottom: 2em;
  background: var(--color-white);
  border-bottom: 1px solid var(--color-gray);
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  ul {
    li {
      list-style-type: none;
      text-transform: uppercase;
      a {
        text-decoration: none;
        color: var(--color-black);
      }
    }
  }

  @media (min-width: 600px) {
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

    ul {
      li {
        margin-left: 3em;
      }
    }
  }
`;

export const UnorderedLeft = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0em;
  flex: 0 0 70%;
  text-align: center;
  justify-content: space-evenly;

  li {
    a {
      display: block;
      padding: 0.6em 0em;
    }

    .active {
      border-bottom: 2px solid var(--color-green);
      padding-bottom: 1.5em;
      color: var(--color-green);
      font-weight: 600;
    }
  }

  @media (min-width: 600px) {
    padding: 0em;
    flex: 0 0 15%;
  }
`;

export const UnorderedCenter = styled.ul`
  flex: 0 0 10%;

  li {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  @media (min-width: 600px) {
    flex: 0 0 20%;
  }
`;

export const UnorderedRight = styled.ul`
  flex: 0 0 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 600px) {
    flex: 0 0 2%;
    display: flex;
    align-items: center;
    padding-right: 1.5em;
  }
`;

export const ListItem = styled.li``;

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

export const CurrencyDropdown = styled.div`
  display: flex;
  position: absolute;
  margin: 1em 0.5em 0.3em -1em;
  flex-direction: column;
  background: white;
  padding: 0.5em 1em;
  width: 55px;
  box-shadow: 1px 1px 1px 1px var(--color-gray);
  border: 1px solid var(--color-gray);
  z-index: 100;

  a {
    display: inline;
    margin: 0.8em 0em;
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

export const Span = styled.span`
  margin-right: 0.3em;
`;
