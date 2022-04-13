import styled from "styled-components";

export const Container = styled.section`
  border-top: 1px solid var(--color-gray);
  border-bottom: 1px solid var(--color-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 0em 1.5em 0em;
  width: 1100px;
`;

export const Price = styled.h5`
  font-weight: 700;
  font-size: 1.1rem;
  padding-bottom: 0.9em;
`;

export const Span = styled.span``;

export const Size = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 2.3em;

  span {
    padding: 0.6em;
    min-width: 20px;
    text-align: center;
    border: 1px solid black;
    margin: 0.7em 0.7em 0.7em 0em;
    cursor: pointer;
  }
`;

export const Control = styled.div``;

export const ControlWithStyle = styled(Control)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.2rem;
    width: 25px;
    text-align: center;
    border: 1px solid black;
    margin-right: 0.7em;
    cursor: pointer;
    margin-bottom: 0.2em;
  }
`;

export const SectionWrap = styled.section`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
`;

export const Name = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  margin: 1em 0em 0.6em 0em;
`;

export const Picture = styled.img``;
