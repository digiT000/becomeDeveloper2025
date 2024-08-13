"Use Strict";
const productListContainer = document.querySelector(".productListWrapper");
const elCartButton = document.getElementsByClassName("cartButton");
const cart = [];
let cartItem = {};

async function fetchProducts() {
  const res = await fetch("./data.json");
  const product = await res.json();
  return product;
}

function buildProductItem() {
  // DIV PRODUCT ITEM CONTAINER
  const productItemContainer = document.createElement("div");
  productItemContainer.setAttribute("class", "productItem");

  // DIV PRODUCT IMAGE CONTAINER
  const productImageContainer = document.createElement("div");
  productImageContainer.setAttribute("class", "productImage");

  // PRODUCT IMAGE
  //const productImage = document.createElement("img");

  const pictureContainer = document.createElement("picture");

  const mobileImage = document.createElement("img");
  const tabletImage = document.createElement("source");
  const desktopImage = document.createElement("source");

  pictureContainer.appendChild(desktopImage);
  pictureContainer.appendChild(tabletImage);
  pictureContainer.appendChild(mobileImage);

  //ADD IMAGE TO PRODUCT IMAGE CONTAINER
  productImageContainer.appendChild(pictureContainer);

  // DIV PRODUCT CALL TO ACTION CONTAINER
  const productCallToAction = document.createElement("div");
  productCallToAction.setAttribute("class", "productCallToAction");

  // BUTTON IN PRODUCT CALL TO ACTION
  const elCartButton = document.createElement("button");
  elCartButton.setAttribute("class", "primaryButton centerButton cartButton");

  // CART ICON
  const elCartImageContainer = document.createElement("span");
  const cartImage = document.createElement("img");

  elCartImageContainer.appendChild(cartImage);

  productCallToAction.appendChild(elCartButton);
  elCartButton.appendChild(elCartImageContainer);

  elCartButton.textContent = "Add To Cart";

  const productBodyContainer = document.createElement("div");
  productBodyContainer.setAttribute("class", "productbody");

  const productCategory = document.createElement("p");
  productCategory.setAttribute("class", "captionText categoryColor");

  const productTitle = document.createElement("h3");
  productTitle.setAttribute("class", "heading-3");

  const productPrice = document.createElement("p");
  productPrice.setAttribute("class", "bodyText priceColor");
  productBodyContainer.appendChild(productCategory);
  productBodyContainer.appendChild(productTitle);
  productBodyContainer.appendChild(productPrice);

  productItemContainer.appendChild(productImageContainer);
  productItemContainer.appendChild(productCallToAction);
  productItemContainer.appendChild(productBodyContainer);

  productListContainer.appendChild(productItemContainer);

  return [
    productTitle,
    productCategory,
    productPrice,
    mobileImage,
    tabletImage,
    desktopImage,
  ];
}

function populateProduct(title, category, price, image, index) {
  const [
    productTitle,
    productCategory,
    productPrice,
    mobileImage,
    tabletImage,
    desktopImage,
  ] = buildProductItem();

  productTitle.textContent = title;
  productCategory.textContent = category;
  productPrice.textContent = price;

  mobileImage.src = image.mobile;

  tabletImage.srcset = image.tablet;
  tabletImage.media = "(min-width:600px)";

  desktopImage.srcset = image.desktop;
  desktopImage.media = "(min-width:992px)";

  elCartButton[index].addEventListener("click", function () {
    const addProduct = title;
    console.log(addProduct);
  });
}
//FOR EACH INI KAN LOOPING. GET DATA DAN OLAH DATA ITU LNGSUNG KE DALAM FUNCTION ATAU KONDISI
fetchProducts().then((product) => {
  product.forEach((product, i) => {
    populateProduct(
      product.name,
      product.category,
      product.price,
      product.image,
      i
    );
  });
});
