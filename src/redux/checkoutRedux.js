import { ADD, EDIT, REMOVE } from "../constant";

export const add = (item) => {
  return { type: ADD, payload: item };
};

export const edit = (index, value) => {
  return {
    type: EDIT,
    payload: { index: index, value: value },
  };
};

export const remove = (index) => {
  return { type: REMOVE, payload: index };
};

const defaultState = {
  item: [],
};
export const checkoutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        item: sorter(action.payload, ...state.item),
      };
    case EDIT:
      return {
        ...state,
        item: editLogic(action.payload, ...state.item),
      };
    case REMOVE:
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

const editLogic = (payload, ...item) => {
  return [
    ...item.slice(0, payload.index),
    {
      ...item[payload.index],
      qty: payload.value,
    },
    ...item.slice(payload.index + 1),
  ];
};

const sorter = (payload, ...item) => {
  let index = item.findIndex((obj) => obj.id === payload.id);
  if (index != -1) {
    return [
      ...item.slice(0, index),
      {
        ...item[index],
        qty: max(9, item[index].qty, payload.qty),
      },
      ...item.slice(index + 1),
    ];
  } else {
    return [...item, payload];
  }
};

const max = (max, ...value) => {
  let sum = 0;
  for (let num of value) sum += num;
  if (sum > max) alert("Order maksimal " + max);
  return sum > max ? max : sum;
};
