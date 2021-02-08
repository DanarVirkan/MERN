import { SHOW, HIDE, SET_QTY } from "../constant";

export const setQty = (value) => {
  return {
    type: SET_QTY,
    payload: value,
  };
};

export const toggleShow = (content = {}, modalType, index = 1) => {
  return {
    type: SHOW,
    payload: { content: content, modalType: modalType, index: index },
  };
};

export const toggleHide = () => {
  return {
    type: HIDE,
  };
};

let initialState = {
  showing: false,
  content: {},
  modalType: "",
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        showing: true,
        content: action.payload.content,
        modalType: action.payload.modalType,
        index: action.payload.index,
      };
    case HIDE:
      return {
        ...state,
        showing: false,
      };
    case SET_QTY:
      return {
        ...state,
        content: {
          ...state.content,
          qty: action.payload,
        },
      };
    default:
      return state;
  }
};
