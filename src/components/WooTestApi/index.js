import React from "react";

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

export default function WooTestApi() {
  const api = new WooCommerceRestApi({
    url: "https://quomodosoft.com/test",
    consumerKey: "ck_cee08482576054c83affb38d55488d1b944db45e",
    consumerSecret: "cs_ca18f58a0328ee6f33f493021a71f1ff7f41a303",
    version: "wc/v3",
  });
  api
    .get("products/2968", {
      per_page: 20, // 20 products per page
    })
    .then((response) => {
      // Successful request
      console.log("Response Status:", response.status);
      console.log("Response Headers:", response.headers);
      console.log("Response Data:", response.data);
      console.log("Total of pages:", response.headers["x-wp-totalpages"]);
      console.log("Total of items:", response.headers["x-wp-total"]);
    })
    .catch((error) => {
      // Invalid request, for 4xx and 5xx statuses
      console.log("Response Status:", error.response.status);
      console.log("Response Headers:", error.response.headers);
      console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });
  return (
    <>
      <div>hello</div>
    </>
  );
}
