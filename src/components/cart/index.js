import {
  Control,
  Container,
  Price,
  Span,
  SectionWrap,
  Size,
  ControlWithStyle,
  Name,
  Picture,
} from "./styles/Cart";

export default function Cart({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Cart.Control = function CartControl({ children, ...restProps }) {
  return <Control {...restProps}>{children}</Control>;
};

Cart.Price = function CartPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};

Cart.Span = function CartSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

Cart.Size = function CartSize({ children, ...restProps }) {
  return <Size {...restProps}>{children}</Size>;
};

Cart.SectionWrap = function CartSectionWrap({ children, ...restProps }) {
  return <SectionWrap {...restProps}>{children}</SectionWrap>;
};

Cart.ControlWithStyle = function CartControlWithStyle({
  children,
  ...restProps
}) {
  return <ControlWithStyle {...restProps}>{children}</ControlWithStyle>;
};

Cart.Name = function CartName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Cart.Picture = function CartPicture({ ...restProps }) {
  return <Picture {...restProps} />;
};
