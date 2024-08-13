"Use Strict";
const productListContainer = document.querySelector(".productListWrapper");
const listCartItemContainer = document.querySelector(".listCartItem");
const elCartButton = document.getElementsByClassName("cartButton");
const elCartButtonWrapper = document.getElementsByClassName("buttonWrapper");
const elProductItemQty = document.getElementsByClassName("qtyItem");
const elIncrementQtyBtn = document.getElementsByClassName("incrementQty");
const elDecrementQtyBtn = document.getElementsByClassName("decrementQty");
const elTotalCartQty = document.getElementById("cartQty");
const elCartItem = document.getElementsByClassName("cartItem");
const cart = [];
let cartItem = [];

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

  // BUTTON WHEN HAVE QTY
  const elButtonWrapper = document.createElement("div");
  elButtonWrapper.setAttribute("class", "buttonWrapper hideContainer");

  const qtyText = document.createElement("p");
  qtyText.setAttribute("class", "captionText textWhite qtyItem");

  // DECREMENT BTN
  const decrementBtn = document.createElement("button");
  decrementBtn.setAttribute("class", "btnItem decrementQty");
  const decrementImg = document.createElement("img");
  decrementImg.src = "./assets/images/icon-decrement-quantity.svg";

  // INCREMENT BTN
  const incrementBtn = document.createElement("button");
  incrementBtn.setAttribute("class", "btnItem incrementQty");
  const incrementImg = document.createElement("img");
  incrementImg.src = "./assets/images/icon-increment-quantity.svg";

  elButtonWrapper.appendChild(decrementBtn);
  elButtonWrapper.appendChild(qtyText);
  elButtonWrapper.appendChild(incrementBtn);

  decrementBtn.appendChild(decrementImg);
  incrementBtn.appendChild(incrementImg);

  // CART ICON
  const elCartImageContainer = document.createElement("span");
  const cartImage = document.createElement("img");

  elCartImageContainer.appendChild(cartImage);

  productCallToAction.appendChild(elButtonWrapper);
  productCallToAction.appendChild(elCartButton);
  elCartButton.appendChild(elCartImageContainer);

  elCartButton.textContent = "Add To Cart";

  const productBodyContainer = document.createElement("div");
  productBodyContainer.setAttribute("class", "productbody");

  const productCategory = document.createElement("p");
  productCategory.setAttribute("class", "captionText categoryColor");

  const productTitle = document.createElement("h3");
  productTitle.setAttribute("class", "heading-3");

  // PRODUCT PRICE
  const productPrice = document.createElement("p");
  productPrice.setAttribute("class", "heading-4 priceColor");

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
    qtyText,
    mobileImage,
    tabletImage,
    desktopImage,
  ];
}

function buildCartItem() {
  // DIV CART ITEM CONTAINER
  const cartItemContainer = document.createElement("div");
  cartItemContainer.setAttribute("class", "cartItem");

  // DIV CART ITEM CONTENT  (LEFT SIDE)
  const cartItemContent = document.createElement("div");

  //CART ITEM TITLE
  const cartItemTitle = document.createElement("h4");
  cartItemTitle.setAttribute("class", "heading-5");

  // CART ITEM WRAPPER
  const cartItemWrapper = document.createElement("div");
  cartItemWrapper.setAttribute("class", "cartItemWrapper");
  // CART ITEM QTY
  const cartItemQty = document.createElement("p");
  cartItemQty.setAttribute("class", "bodyText-500 redColor");

  //CART ITEM SINGLE PRICE
  const cartItemPrice = document.createElement("p");
  cartItemPrice.setAttribute("class", "captionText categoryColor ml-12");

  //CART ITEM TOTAL PRICE
  const cartItemTotalPrice = document.createElement("p");
  cartItemTotalPrice.setAttribute("class", "captionText-500 categoryColor");

  cartItemWrapper.appendChild(cartItemQty);
  cartItemWrapper.appendChild(cartItemPrice);
  cartItemWrapper.appendChild(cartItemTotalPrice);

  cartItemContent.appendChild(cartItemTitle);
  cartItemContent.appendChild(cartItemWrapper);

  // DIV REMOVE ITEM CONTENT
  const removeCartContainer = document.createElement("div");
  const imageRemoveCart = document.createElement("img");
  imageRemoveCart.src = "./assets/images/icon-remove-item.svg";

  removeCartContainer.appendChild(imageRemoveCart);

  cartItemContainer.appendChild(cartItemContent);
  cartItemContainer.appendChild(removeCartContainer);

  listCartItemContainer.appendChild(cartItemContainer);

  return [cartItemTitle, cartItemQty, cartItemPrice, cartItemTotalPrice];
}

function populateProduct(title, category, price, image, index) {
  const [
    productTitle,
    productCategory,
    productPrice,
    productQty,
    mobileImage,
    tabletImage,
    desktopImage,
  ] = buildProductItem();

  productTitle.textContent = title;
  productCategory.textContent = category;
  productPrice.textContent = `$ ${price}`;

  mobileImage.src = image.mobile;

  tabletImage.srcset = image.tablet;
  tabletImage.media = "(min-width:600px)";

  desktopImage.srcset = image.desktop;
  desktopImage.media = "(min-width:992px)";

  elCartButton[index].addEventListener("click", function () {
    addToCart(title, price, productQty, index);
  });
  elIncrementQtyBtn[index].addEventListener("click", function () {
    let itemIndex;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i][0] === title) {
        itemIndex = i;
        break;
      }
    }
    incrementCartItem(itemIndex, productQty);
  });
  elDecrementQtyBtn[index].addEventListener("click", function () {
    let itemIndex;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i][0] === title) {
        itemIndex = i;
        break;
      }
    }
    decrementCartItem(itemIndex, productQty, index);
    console.log(cart);
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

// ADD PRODUCT TO CART
function addToCart(title, price, productQty, index) {
  let itemContainInsideCart = false;
  let itemIndex;

  if (cart.length === 0) {
    addNewItem(title, price, productQty, index);
  } else {
    for (i = 0; i < cart.length; i++) {
      // LOOPING KE DALAM CART
      if (cart[i][0] === title) {
        // CHECK APAKAH CART ITEM MEMILIKI NAMA TITLE YANG SAMA
        itemIndex = i;
        itemContainInsideCart = true;
        break;
      }
    }
    if (itemContainInsideCart) {
      incrementCartItem(itemIndex, productQty);
    } else {
      addNewItem(title, price, productQty, index);
    }
  }
  return cart;
}

function addNewItem(title, price, productQty, index) {
  cart.push([title, price, 1]);
  // MANIPULATE DOM START HERE
  productQty.textContent = cart[cart.length - 1][2]; // menggunakan cart.length karena push item ke index terakhir dan jangan lupa dikurang 1

  elCartButtonWrapper[index].classList.remove("hideContainer");
  elCartButton[index].classList.add("hideContainer");

  updateCart(cart);
}

function incrementCartItem(itemIndex, productQty) {
  cart[itemIndex][2]++;
  productQty.textContent = cart[itemIndex][2];

  updateCart(cart);
}

function decrementCartItem(itemIndex, productQty, index) {
  if (cart[itemIndex][2] > 1) {
    cart[itemIndex][2]--;
    productQty.textContent = cart[itemIndex][2];
  } else {
    elCartButtonWrapper[index].classList.add("hideContainer");
    elCartButton[index].classList.remove("hideContainer");
    removeItemFromCart(itemIndex);
    updateCart(cart);
  }
}

function removeItemFromCart(itemIndex) {
  cart.splice(itemIndex, 1);
}

function updateCart(cart) {
  const [cartItemTitle, cartItemQty, cartItemPrice, cartItemTotalPrice] =
    buildCartItem();
  for (let i = 0; i < elCartItem.length; i++) {
    elCartItem[i].remove();
  }

  for (let i = 0; i < cart.length; i++) {
    console.log("tes");
    cartItemTitle.textContent = cart[i][0];
    cartItemQty.textContent = cart[i][2];
    cartItemPrice.textContent = cart[i][1];
    cartItemTotalPrice.textContent = cart[i][2] * cart[i][1];
  }

  console.log(cart);
}
