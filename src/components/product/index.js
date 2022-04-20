import {
  PageContainer,
  PageTitle,
  Container,
  Item,
  Picture,
  Stock,
  CartIcon,
  Name,
  NameHeading,
  HeadTitle,
  Price,
  CartMain,
  OverlayWrapper,
  OverlayButton,
  Main,
  Swatch,
  ImageWrapper,
  DetailsWrapper,
  Size,
  Button,
  Span,
  Description,
  Form,
  Label,
  Input,
  InputWrapper,
} from "./styles/Product";

export default function Product({ children, ...restProps }) {
  return <PageContainer {...restProps}>{children}</PageContainer>;
}

Product.PageTitle = function ProductPageTitle({ children, ...restProps }) {
  return <PageTitle {...restProps}>{children}</PageTitle>;
};

Product.Main = function ProductMain({ children, ...restProps }) {
  return <Main {...restProps}>{children}</Main>;
};

Product.Swatch = function ProductSwatch({ children, ...restProps }) {
  return <Swatch {...restProps}>{children}</Swatch>;
};

Product.HeadTitle = function ProductHeadTitle({ children, ...restProps }) {
  return <HeadTitle {...restProps}>{children}</HeadTitle>;
};

Product.ImageWrapper = function ProductImageWrapper({
  children,
  ...restProps
}) {
  return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
};

Product.DetailsWrapper = function ProductDetailsWrapper({
  children,
  ...restProps
}) {
  return <DetailsWrapper {...restProps}>{children}</DetailsWrapper>;
};

Product.Container = function ProductContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Product.Button = function ProductButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Product.Item = function ProductItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Product.Picture = function ProductPicture({ ...restProps }) {
  return <Picture {...restProps} />;
};

Product.Stock = function ProductStock({ children, ...restProps }) {
  return <Stock {...restProps}>{children}</Stock>;
};

Product.CartIcon = function ProductCartIcon({ children, ...restProps }) {
  return <CartIcon {...restProps}>{children}</CartIcon>;
};

Product.Name = function ProductName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Product.NameHeading = function ProductNameHeading({ children, ...restProps }) {
  return <NameHeading {...restProps}>{children}</NameHeading>;
};

Product.Price = function ProductPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};

Product.CartMain = function ProductCartMain({ children, ...restProps }) {
  return <CartMain {...restProps}>{children}</CartMain>;
};

Product.OverlayWrapper = function ProductOverlayWrapper({
  children,
  ...restProps
}) {
  return <OverlayWrapper {...restProps}>{children}</OverlayWrapper>;
};

Product.OverlayButton = function ProductOverlayButton({
  children,
  ...restProps
}) {
  return <OverlayButton {...restProps}>{children}</OverlayButton>;
};

Product.Size = function ProductSize({ children, ...restProps }) {
  return <Size {...restProps}>{children}</Size>;
};

Product.Span = function ProductSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

Product.Description = function ProductDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Product.Form = function ProductForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Product.Label = function ProductLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Product.InputWrapper = function ProductInputWrapper({
  children,
  ...restProps
}) {
  return <InputWrapper {...restProps}>{children}</InputWrapper>;
};

Product.Input = function ProductInput({ ...restProps }) {
  return <Input {...restProps} />;
};
