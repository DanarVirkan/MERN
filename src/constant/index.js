import { format } from "currencyformatter.js";

const currencyPattern = "! ,##0.";
export function currency(value) {
  return format(value, {
    currency: "IDR",
    pattern: currencyPattern,
  });
}

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const EDIT = "EDIT";

export const SHOW = "SHOW";
export const HIDE = "HIDE";
export const SET_QTY = "QTY";

export const MODAL_BUY = "M_BUY";
export const MODAL_EDIT = "M_EDIT";
export const MODAL_CHECKOUT = "M_CHECKOUT";
