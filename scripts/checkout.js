import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadFromStorage } from "../data/cart.js";
import { loadCart } from "../data/cart.js";
// import "../data/backend-practice.js";

async function loadPage() {
  try {
    //throw "error1";

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      //throw "error2";
      loadFromStorage();
      loadCart(() => {
        //reject("error3");
        resolve("value3");
      });
    });
  } catch (error) {
    console.log("Unexpected error. Please try again later.");
  }

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadFromStorage();
    loadCart(() => {
      resolve("hi");
    });
  }),
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});*/

/*new Promise((resolve) => {
  loadProducts(() => {
    resolve("value1");
  });
})
  .then((value) => {
    console.log(value);

    return new Promise((resolve) => {
      loadFromStorage();
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });*/

/*
loadFromStorage();
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});*/
