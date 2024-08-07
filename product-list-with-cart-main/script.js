"Use strict";

// 1. Bagaiman caranya kita menampilkan list product dengan menggunakan JSON?
// 2. Bagaiman populate get and display data dengan JSON

fetch("./data.json").then((res) => {
  res
    .json()
    .then((product) => {
      product.forEach((product) => {
        buildProduct(product.name, product.price, product.category);
      });
    })
    .catch((error) => console.error(error));
});

function buildProduct(productName, productPrice, productCategory) {
  console.log(productName, productPrice, productCategory);
}
