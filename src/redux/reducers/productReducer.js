import allData from "../../data.json";
import { combineReducers } from "redux";

const initState = allData;

const productReducer = (state = initState.data, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state;
    default:
      return state;
  }
};

const currencyReducer = (state = { currency: "USD", symbol: "$" }, action) => {
  switch (action.type) {
    case "USD":
      return { ...state, currency: action.payload, symbol: "$" };
    case "GBP":
      return { ...state, currency: action.payload, symbol: "£" };
    case "AUD":
      return { ...state, currency: action.payload, symbol: "A$" };
    case "JPY":
      return { ...state, currency: action.payload, symbol: "¥" };
    case "RUB":
      return { ...state, currency: action.payload, symbol: "₽" };
    default:
      return state;
  }
};

const cartState = {
  allItems: allData.data.categories.filter(
    (category) => category.name === "all"
  ),
  cartItems: [],
  overlayItems: [],
  size: [],
};

const cartReducer = (state = cartState, action) => {
  const newCartItems = state.allItems[0].products.filter(
    (item) => item.id === action.payload
  );
  switch (action.type) {
    case "ADD_TO_CART":
      const newestCartItems = state.allItems[0].products.filter(
        (item) => item.id === action.payload.productId
      );
      const cartFirstItems = [...state.cartItems, ...newestCartItems];
      const uniqueCartItems = [...new Set(cartFirstItems)];

      const overlayCartItems = uniqueCartItems.map((item) => {
        let length = 0;
        cartFirstItems.forEach((element) => {
          if (element === item) {
            length++;
          }
        });
        return { value: item, frequency: length };
      });
      return {
        ...state,
        cartItems: [...cartFirstItems],
        overlayItems: [...overlayCartItems],
        size: [...state.size, action.payload.size],
      };
    case "INCREASE_FREQUENCY":
      const secondFirstItems = [...state.cartItems, ...newCartItems];
      const secondUniqueCartItems = [...new Set(secondFirstItems)];
      const overlayIncreaseItem = secondUniqueCartItems.map((item) => {
        let length = 0;
        secondFirstItems.forEach((element) => {
          if (element === item) {
            length++;
          }
        });
        return { value: item, frequency: length };
      });
      return {
        ...state,
        cartItems: [...secondFirstItems],
        overlayItems: [...overlayIncreaseItem],
      };
    case "DECREASE_FREQUENCY":
      const thirdFirstItems = [...state.cartItems];
      const selectItem = thirdFirstItems.filter((item) => {
        return item.id === action.payload;
      });
      selectItem.pop();
      const otherItems = thirdFirstItems.filter((item) => {
        return item.id !== action.payload;
      });
      const allItems = [...selectItem, ...otherItems];
      const thirdUniqueCartItems = [...new Set(allItems)];
      const overlayDecreaseItem = thirdUniqueCartItems.map((item) => {
        let length = 0;
        allItems.forEach((element) => {
          if (element === item) {
            length++;
          }
        });
        return { value: item, frequency: length };
      });
      return {
        ...state,
        cartItems: [...allItems],
        overlayItems: [...overlayDecreaseItem],
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  productReducer,
  currencyReducer,
  cartReducer,
});
