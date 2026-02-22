import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadFromStorage } from "../data/cart.js"; // ← ADD THIS

loadFromStorage(); // ← ADD THIS

renderOrderSummary();
renderPaymentSummary();
