import { BUY, DELETE, EDIT, MAX_QTY } from "../constant";

export const actionBuy = (item) => {
  return { type: BUY, payload: item };
};

export const actionEdit = (index, value) => {
  return {
    type: EDIT,
    payload: { index: index, value: value },
  };
};

export const actionDelete = (index) => {
  return { type: DELETE, payload: index };
};

const initialState = {
  item: [],
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY:
      return {
        ...state,
        item: addItem(action.payload, ...state.item),
      };
    case EDIT:
      return {
        ...state,
        item: editItem(action.payload, ...state.item),
      };
    case DELETE:
      return {
        ...state,
        item: [
          ...state.item.slice(0, action.payload),
          ...state.item.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};

const editItem = (payload, ...item) => {
  return [
    ...item.slice(0, payload.index),
    {
      ...item[payload.index],
      qty: payload.value,
    },
    ...item.slice(payload.index + 1),
  ];
};

// Adding qty instead when item is already listed
const addItem = (payload, ...item) => {
  let index = item.findIndex((obj) => obj.id === payload.id);
  if (index != -1) {
    // If already listed
    return [
      ...item.slice(0, index),
      {
        ...item[index],
        qty: maxQty(MAX_QTY, item[index].qty, payload.qty),
      },
      ...item.slice(index + 1),
    ];
  } else {
    return [...item, payload];
  }
};

const maxQty = (max, ...value) => {
  let sum = 0;
  for (let num of value) sum += parseInt(num);
  if (sum > max) alert("Order maksimal " + max);
  return sum > max ? max : sum;
};
