import { format } from "currencyformatter.js";

const currencyPattern = "! ,##0.";
export function currency(value) {
  return format(value, {
    currency: "IDR",
    pattern: currencyPattern,
  });
}

// REDUX ACTION TYPE
export const BUY = "BUY";
export const DELETE = "DELETE";
export const EDIT = "EDIT";

export const SHOW = "SHOW";
export const HIDE = "HIDE";
export const SET_QTY = "QTY";

// MODAL TYPE
export const MODAL_BUY = "M_BUY";
export const MODAL_EDIT = "M_EDIT";
export const MODAL_CHECKOUT = "M_CHECKOUT";
export const MODAL_LOADING = "M_LOADING";

// MODAL BODY TYPE
export const BODY_INPUT = "B_INPUT";
export const BODY_MESSAGE = "B_MESSAGE";
export const BODY_LOADING = "B_LOADING";

// MODAL BUTTON TYPE
export const BUTTON_BUY = "BT_BUY";
export const BUTTON_EDIT = "BT_EDIT";
export const BUTTON_DELETE = "BT_DELETE";
export const BUTTON_OK = "BT_OK";
export const BUTTON_CANCEL = "BT_CANCEL";

export const MAX_QTY = 9;
