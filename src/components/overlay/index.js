import {
  Container,
  Info,
  ProductItem,
  ProductWrapper,
  ProductName,
  ProductPrice,
  ProductSize,
  ProductImage,
  ErrorMsg,
  ButtonWrapper,
  Button,
  Total,
  Span,
} from "./styles/Overlay";

export default function Overlay({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Overlay.Info = function OverlayInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Overlay.ProductItem = function OverlayProductItem({ children, ...restProps }) {
  return <ProductItem {...restProps}>{children}</ProductItem>;
};

Overlay.ProductWrapper = function OverlayProductWrapper({
  children,
  ...restProps
}) {
  return <ProductWrapper {...restProps}>{children}</ProductWrapper>;
};

Overlay.ProductName = function OverlayProductName({ children, ...restProps }) {
  return <ProductName {...restProps}>{children}</ProductName>;
};

Overlay.Span = function OverlaySpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

Overlay.ProductPrice = function OverlayProductPrice({
  children,
  ...restProps
}) {
  return <ProductPrice {...restProps}>{children}</ProductPrice>;
};

Overlay.ProductSize = function OverlayProductSize({ children, ...restProps }) {
  return <ProductSize {...restProps}>{children}</ProductSize>;
};

Overlay.ErrorMsg = function OverlayErrorMsg({ children, ...restProps }) {
  return <ErrorMsg {...restProps}>{children}</ErrorMsg>;
};

Overlay.Total = function OverlayTotal({ children, ...restProps }) {
  return <Total {...restProps}>{children}</Total>;
};

Overlay.ButtonWrapper = function OverlayButtonWrapper({
  children,
  ...restProps
}) {
  return <ButtonWrapper {...restProps}>{children}</ButtonWrapper>;
};

Overlay.Button = function OverlayButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Overlay.ProductImage = function OverlayProductImage({ ...restProps }) {
  return <ProductImage {...restProps} />;
};
