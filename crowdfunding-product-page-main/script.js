"use strict";

const body = document.body;

const elProjectTitle = document.getElementById("project_title");
const elProjectSummary = document.getElementById("project_summary");
const elProjectDescription = document.getElementById("project_description");
const elCurrentProjectValue = document.getElementById("current_projectValue");
const elProjectTarget = document.getElementById("project_target");
const elTotalBackers = document.getElementById("total_backer");
const elDaysLeft = document.getElementById("remaining_time");
const elContainerProductItem = document.querySelector(".sectionListProduct");
const elContainerProductItemModal = document.querySelector(".listModalProduct");

// MODAL
const modal = document.querySelector(".modal");

const currentDate = new Date();

const projectIdPage = 2; // --> Use to define what page are open

const project = [
  {
    projectId: 1,
    projectName: "Mastercraft Bamboo Monitor Riser",
    projectSummary:
      "A beautifully handcrafted monitor stand to reduce neck and eye strain",
    projectDescription: `The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.`,
    projectValue: {
      projectTarget: 100000,
      currentProjectTarget: 0,
    },
    totalBacker: 0,
    compeleteDateProject: "17/8/2024",
    projectDayLeft: function () {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const arrProjectDate = this.compeleteDateProject.split("/");
      const projectDate = new Date(
        arrProjectDate[2],
        arrProjectDate[1],
        arrProjectDate[0]
      );
      return Math.round(Math.abs((currentDate - projectDate) / oneDay));
    },
    projectProducts: [
      {
        productId: 1,
        productName: "Bamboo Stand",
        productDescription: `You get an ergonomic stand made you’ll be added to a special Backer member list`,
        productPrice: 25,
        productQty: 101,
      },
      {
        productId: 2,
        productName: "product 2",
        productDescription: `You get an ergonomic stand made you’ll be added to a special Backer member list`,
        productPrice: 75,
        productQty: 50,
      },
      {
        productId: 3,
        productName: "Product 3",
        productDescription: `You get an ergonomic stand made you’ll be added to a special Backer member list`,
        productPrice: 150,
        productQty: 10,
      },
    ],
  },
  {
    projectId: 2,
    projectName: "Building First Electric Bike in Bandung",
    projectSummary:
      "First electric bike that produce by Indonesian people, claim to be the fastest and smallest electric consumption",
    projectDescription: `Experience the future of commuting with Bandung's first electric bike. Crafted with local expertise and cutting-edge technology, our e-bike offers a seamless blend of style, performance, and sustainability. Join us in redefining urban transportation.`,
    projectValue: {
      projectTarget: 350000,
      currentProjectTarget: 0,
    },
    totalBacker: 0,
    compeleteDateProject: "01/10/2024",
    projectDayLeft: function () {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const arrProjectDate = this.compeleteDateProject.split("/");
      const projectDate = new Date(
        arrProjectDate[2],
        arrProjectDate[1],
        arrProjectDate[0]
      );
      return Math.round(Math.abs((currentDate - projectDate) / oneDay));
    },
    projectProducts: [
      {
        productId: 1,
        productName: "Green Electric Bike ",
        productDescription: `You get an ergonomic stand made you’ll be added to a special Backer member list`,
        productPrice: 350,
        productQty: 50,
      },
      {
        productId: 2,
        productName: "Racing Electric Bike",
        productDescription: `You get an ergonomic stand made you’ll be added to a special Backer member list`,
        productPrice: 700,
        productQty: 25,
      },
      {
        productId: 3,
        productName: "Top Tier Electric",
        productDescription: `You get an ergonomic stand made you’ll be added to a special Backer member list`,
        productPrice: 950,
        productQty: 10,
      },
    ],
  },
  {
    projectId: 3,
    projectName: "Mastercraft Bamboo Monitor Riser",
    projectSummary:
      "A beautifully handcrafted monitor stand to reduce neck and eye strain",
    projectDescription: `The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.`,
    projectValue: {
      projectTarget: 100000,
      currentProjectTarget: 0,
    },
    totalBacker: 5000,
    compeleteDateProject: "21/7/2024",
    projectDayLeft: function () {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const arrProjectDate = this.compeleteDateProject.split("/");
      const projectDate = new Date(
        arrProjectDate[2],
        arrProjectDate[1],
        arrProjectDate[0]
      );
      return Math.round(Math.abs((currentDate - projectDate) / oneDay));
    },
    projectProducts: [
      {
        productId: 1,
        productName: "Bamboo Stand",
        productDescription: `You get an ergonomic stand made you’ll be added to a special Backer member list`,
        productPrice: 25,
        productQty: 101,
      },
      {
        productId: 2,
        productName: "product 2",
        productDescription: `You get an ergonomic stand made you’ll be added to a special Backer member list`,
        productPrice: 75,
        productQty: 50,
      },
      {
        productId: 3,
        productName: "Product 3",
        productDescription: `You get an ergonomic stand made you’ll be added to a special Backer member list`,
        productPrice: 150,
        productQty: 10,
      },
    ],
  },
];

// FUNCTION TO CREATE PRODUCT ITEM
function buildProductItem(hideSelect) {
  const hideSelection = hideSelect;

  // PRODUCT ITEM WRAPPER
  const elProductItem = document.createElement("div");
  elProductItem.setAttribute("class", "productItem");

  // MODAL CLASS
  // FIRST WRAPPER HEADER
  const elProductHeaderModalWrapper = document.createElement("div");
  elProductHeaderModalWrapper.setAttribute(
    "class",
    "productHeaderModalWrapper"
  );
  // SECOND WRAPPER HEADER
  const elProductItemHeaderWrapper = document.createElement("div");
  elProductItemHeaderWrapper.setAttribute("class", "productItemHeaderWrapper");

  const elRadioButton = document.createElement("input");
  elRadioButton.setAttribute("type", "radio");
  elRadioButton.setAttribute("name", "itemProduct");
  elRadioButton.setAttribute("class", "productSelection");

  // PRODUCT ITEM HEADER WRAPPER --> IN LIST PRODUCT ITEM
  const elProductHeaderWraper = document.createElement("div");
  elProductHeaderWraper.setAttribute("class", "productItemHeader");

  // PRODDUCT TITLE
  const elproductTitle = document.createElement("h3");
  elproductTitle.setAttribute("class", "heading-3 product_name");

  // PRODDUCT PRICE
  const elProductPrice = document.createElement("p");
  elProductPrice.setAttribute("class", "bodyText-500 colorPrice");

  // PRODUCT ITEM BODY WRAPPER
  const elProductBodyWrapper = document.createElement("div");
  elProductBodyWrapper.setAttribute("class", "productItemBody");

  const elProductDescription = document.createElement("p");
  elProductDescription.setAttribute(
    "class",
    "bodyText product_item_decription"
  );

  // PRODUCT ITEM FOOTER WRAPPER
  const elproductFooterWrapper = document.createElement("div");
  elproductFooterWrapper.setAttribute("class", "productItemFooter");

  // STOCK WRAPPER
  const elStockWrapper = document.createElement("div");
  elStockWrapper.setAttribute("class", "stockWrapper");

  // STOCK WRAPPER MODAL
  const elStockWrapperModal = document.createElement("div");
  elStockWrapperModal.setAttribute("class", "stockWrapper");

  const elCopyLeft = document.createElement("p");
  elCopyLeft.setAttribute("class", "bodyText");
  elCopyLeft.textContent = "left";

  const elCopyLeftModal = document.createElement("p");
  elCopyLeftModal.setAttribute("class", "bodyText");
  elCopyLeftModal.textContent = "left";

  const elProductStock = document.createElement("h2");
  elProductStock.setAttribute("class", "heading-2 product_stock");

  // BUTTON
  const elButton = document.createElement("button");
  elButton.setAttribute("class", "primaryButton selectProduct");

  if (hideSelection) {
    elProductHeaderWraper.appendChild(elproductTitle);
    elProductHeaderWraper.appendChild(elProductPrice);

    elProductBodyWrapper.appendChild(elProductDescription);

    elStockWrapper.appendChild(elProductStock);
    elStockWrapper.appendChild(elCopyLeft);
    elproductFooterWrapper.appendChild(elStockWrapper);

    elproductFooterWrapper.appendChild(elButton);

    elProductItem.appendChild(elProductHeaderWraper);
    elProductItem.appendChild(elProductBodyWrapper);
    elProductItem.appendChild(elproductFooterWrapper);

    elContainerProductItem.appendChild(elProductItem);
    return [
      elproductTitle,
      elProductPrice,
      elProductDescription,
      elProductStock,
      elButton,
    ];
  } else {
    const elProductStockModal = document.createElement("h2");
    elProductStockModal.setAttribute("class", "heading-2 product_stock");

    elStockWrapperModal.classList.add("hideStock-m");
    elStockWrapper.classList.add("hideStock-d");

    elProductItemHeaderWrapper.appendChild(elRadioButton);
    elProductItemHeaderWrapper.appendChild(elProductHeaderWraper);

    elStockWrapperModal.appendChild(elProductStockModal);
    elStockWrapperModal.appendChild(elCopyLeftModal);

    elProductHeaderWraper.appendChild(elproductTitle);
    elProductHeaderWraper.appendChild(elProductPrice);

    elProductHeaderModalWrapper.appendChild(elProductItemHeaderWrapper);
    elProductHeaderModalWrapper.appendChild(elStockWrapperModal);

    elProductBodyWrapper.appendChild(elProductDescription);

    elStockWrapper.appendChild(elProductStock);
    elStockWrapper.appendChild(elCopyLeft);
    elproductFooterWrapper.appendChild(elStockWrapper);

    elproductFooterWrapper.appendChild(elStockWrapper);

    elProductItem.appendChild(elProductHeaderModalWrapper);
    elProductItem.appendChild(elProductBodyWrapper);
    elProductItem.appendChild(elproductFooterWrapper);

    elContainerProductItemModal.appendChild(elProductItem);

    return [
      elProductItem,
      elRadioButton,
      elproductTitle,
      elProductPrice,
      elProductDescription,
      elProductStock,
      elProductStockModal,
    ];
  }
}

// IMAGINE IT WILL POPULATE DYNAMICLY BY USER REQUEST. USER CLICK CARD IN PROJECT LIST VIEW, AND IT WILL DIRECT TO PROJECT DETAIL PAGE

function getData(idProject) {
  //FIND METHOD
  const selectedProject = project.find((project) => {
    if (project.projectId == idProject) {
      return project;
    }
  });
  return selectedProject || "project not found";
}

const projectPage = getData(projectIdPage);

elProjectTitle.textContent =
  projectPage.projectName || "Project name will show here";
elProjectSummary.textContent =
  projectPage.projectSummary || "Project summary will show here";
elProjectDescription.textContent =
  projectPage.projectDescription || "project description will show here";
elTotalBackers.textContent =
  projectPage.totalBacker ?? "Value of project backer show here";
elProjectTarget.textContent =
  projectPage.projectValue.projectTarget || "No target";
elDaysLeft.textContent = projectPage.projectDayLeft() || " No day left";

// POPULATE PRODUCT
getListProduct(true);

function showModal() {
  modal.classList.remove("hideModal");
  // POPULATE PRODUCT
  getListProduct(false);
}

function getListProduct(inList) {
  if (inList) {
    projectPage.projectProducts.forEach((productItem, i) => {
      console.log(productItem);
      const [
        productTitle,
        productPrice,
        productDescription,
        productStock,
        button,
      ] = buildProductItem(true);
      productTitle.textContent = productItem.productName;
      productPrice.textContent = `Pledge $${productItem.productPrice} or more`;
      productDescription.textContent = productItem.productDescription;
      productStock.textContent = productItem.productQty;
      button.textContent = "Select Reward";

      button.addEventListener("click", function () {
        body.classList.add("noScroll");
        showModal();
      });
    });
  } else {
    projectPage.projectProducts.forEach((productItem) => {
      const [
        elProductItem,
        radioButton,
        productTitle,
        productPrice,
        productDescription,
        productStock,
        elProductStockModal,
      ] = buildProductItem(inList);
      elProductItem.classList.add("productItemModal");

      productTitle.textContent =
        productItem.productName || "Product Name will show here";

      productPrice.textContent =
        `Pledge $${productItem.productPrice} or more` ??
        "Product price is empty";

      productDescription.textContent =
        productItem.productDescription || "Product Name will show here";

      productStock.textContent = productItem.productQty;
      elProductStockModal.textContent = productItem.productQty;
    });
    const elModalProductItemContainer =
      document.getElementsByClassName("productItemModal");
    const productSelection =
      document.getElementsByClassName("productSelection");

    // RADIO BUTTON LOOPING
    for (let i = 0; i < productSelection.length; i++) {
      productSelection[i].addEventListener("click", function () {
        // LOOPING ON RADIO BUTTON

        // ADDING ACTION SECTION
        const actionSection = buildAction();
        elModalProductItemContainer[i - 1].appendChild(actionSection);
      });
    }
  }
}

function buildAction() {
  // ACTION WRAPPER
  const elActionWrapper = document.createElement("div");
  elActionWrapper.setAttribute("class", "actionWrapper");

  const elButtonWrapper = document.createElement("div");
  elButtonWrapper.setAttribute("class", "actionButtonWrapper");

  const labelText = document.createElement("p");
  labelText.setAttribute("class", "bodyText");
  labelText.textContent = "Enter your pledge";

  const inputMoney = document.createElement("input");
  inputMoney.setAttribute("class", "inputField");

  const buttonSubmit = document.createElement("button");
  buttonSubmit.setAttribute("class", "primaryButton submitBacked");
  buttonSubmit.textContent = "Continue";

  elButtonWrapper.appendChild(inputMoney);
  elButtonWrapper.appendChild(buttonSubmit);

  elActionWrapper.appendChild(labelText);
  elActionWrapper.appendChild(elButtonWrapper);

  return elActionWrapper;
}
