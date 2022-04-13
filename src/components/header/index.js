import {
  Container,
  Nav,
  UnorderedLeft,
  UnorderedCenter,
  UnorderedRight,
  ListItem,
  Wrapper,
  Span,
  CurrencyDropdown,
} from "./styles/Header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.UnorderedLeft = function HeaderUnorderedLeft({
  children,
  ...restProps
}) {
  return <UnorderedLeft {...restProps}>{children}</UnorderedLeft>;
};

Header.UnorderedCenter = function HeaderUnorderedCenter({
  children,
  ...restProps
}) {
  return <UnorderedCenter {...restProps}>{children}</UnorderedCenter>;
};

Header.UnorderedRight = function HeaderUnorderedRight({
  children,
  ...restProps
}) {
  return <UnorderedRight {...restProps}>{children}</UnorderedRight>;
};

Header.ListItem = function HeaderListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Header.CurrencyDropdown = function HeaderCurrencyDropdown({
  children,
  ...restProps
}) {
  return <CurrencyDropdown {...restProps}>{children}</CurrencyDropdown>;
};

Header.Span = function HeaderSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
