import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadFromStorage } from "../data/cart.js";
import "../data/backend-practice.js";

loadFromStorage();

renderOrderSummary();
renderPaymentSummary();
