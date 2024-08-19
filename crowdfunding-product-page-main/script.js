"use strict";

const elProjectTitle = document.getElementById("project_title");
const elProjectSummary = document.getElementById("project_summary");
const elProjectDescription = document.getElementById("project_description");
const elCurrentProjectValue = document.getElementById("current_projectValue");
const elProjectTarget = document.getElementById("project_target");
const elTotalBackers = document.getElementById("total_backer");
const elDaysLeft = document.getElementById("remaining_time");

const currentDate = new Date();

const projectIdPage = 2;

// POPULATE PAGE WITH THE CURRENT ELEMENT
function projectLeftDay(object) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const arrProjectDate = this.compeleteDateProject.split("/");
  const projectDate = new Date(
    arrProjectDate[2],
    arrProjectDate[1],
    arrProjectDate[0]
  );
  return Math.round(Math.abs((currentDate - projectDate) / oneDay) + 1);
}

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
    compeleteDateProject: "20/7/2024",
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
    projectDescription: `The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.`,
    projectValue: {
      projectTarget: 350000,
      currentProjectTarget: 0,
    },
    totalBacker: 0,
    compeleteDateProject: "24/02/2024",
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
    projectId: 3,
    projectName: "Mastercraft Bamboo Monitor Riser",
    projectSummary:
      "A beautifully handcrafted monitor stand to reduce neck and eye strain",
    projectDescription: `The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.`,
    projectValue: {
      projectTarget: 100000,
      currentProjectTarget: 0,
    },
    totalBacker: 0,
    compeleteDateProject: "24/02/2024",
    projectDayLeft: projectLeftDay(projectPage),
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

// IMAGINE IT WILL POPULATE DYNAMICLY BY USER REQUEST. USER CLICK CARD IN PROJECT LIST VIEW, AND IT WILL DIRECT TO PROJECT DETAIL PAGE

const projectPage = getData(projectIdPage);

function getData(idProject) {
  //FIND METHOD
  const selectedProject = project.find((project) => {
    if (project.projectId == idProject) {
      console.log(project);
      return project;
    }
  });
  return selectedProject || "project not found";
}

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
elDaysLeft.textContent = projectLeftDay() || " No day left";

function projectLeftDay(object) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const arrProjectDate = object.compeleteDateProject.split("/");
  const projectDate = new Date(
    arrProjectDate[2],
    arrProjectDate[1],
    arrProjectDate[0]
  );
  return Math.round(Math.abs((currentDate - projectDate) / oneDay) + 1);
}

// LAST NOTES : SET DAY LEFT UNTUK DITAMPILIN DI FRONTEND
