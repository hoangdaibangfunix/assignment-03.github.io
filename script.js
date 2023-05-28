"use strict";

//Selecting elements
const info = document.querySelector(".info");
const emailBox = document.getElementById("email-box");
const signIn = document.querySelector(".sign-in");

const experienceTitle = document.getElementById("experience-title");
const educationTitle = document.getElementById("education-title");
const activityTitle = document.getElementById("activity-title");
const hobbiesTitle = document.getElementById("hobbies-title");
const languageTitle = document.getElementById("language-title");
const skillTitle = document.getElementById("skill-title");

const experienceContent = document.getElementById("experience-content");
const educationContent = document.getElementById("education-content");
const activityContent = document.getElementById("activity-content");
const hobbiesContent = document.getElementById("hobbies-content");
const languageContent = document.getElementById("language-content");
const skillContent = document.getElementById("skill-content");

const submitEmailBtn = document.getElementById("submit-email-box-btn");
const viewMoreExperienceBtn = document.getElementById(
  "view-more-experience-btn"
);
const viewMoreEducationBtn = document.getElementById("view-more-education-btn");
const viewMoreActivityBtn = document.getElementById("view-more-activity-btn");
const viewMoreHobbiesBtn = document.getElementById("view-more-hobbies-btn");
const viewMoreLanguageBtn = document.getElementById("view-more-language-btn");
const viewMoreSkillBtn = document.getElementById("view-more-skill-btn");

//first setup
let email;
let result;
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let experienceContentStatus = false;
let educationContentStatus = false;
let activityContentStatus = false;
let hobbiesContentStatus = false;
let languageContentStatus = false;
let languagenceContentStatus = false;

info.classList.add("hidden");

experienceContent.classList.add("hidden");
educationContent.classList.add("hidden");
activityContent.classList.add("hidden");
hobbiesContent.classList.add("hidden");
languageContent.classList.add("hidden");
skillContent.classList.add("hidden");

viewMoreExperienceBtn.classList.add("hidden");
viewMoreEducationBtn.classList.add("hidden");
viewMoreActivityBtn.classList.add("hidden");
viewMoreHobbiesBtn.classList.add("hidden");
viewMoreLanguageBtn.classList.add("hidden");
viewMoreSkillBtn.classList.add("hidden");

// Check Email

submitEmailBtn.addEventListener("click", function () {
  email = emailBox.value;
  result = regex.test(email);
  if (result) {
    info.classList.remove("hidden");
    signIn.classList.add("hidden");
  } else {
    emailBox.value = "Vui lòng nhập đúng email...";
  }
});

//Hover Jod Title Action

experienceTitle.addEventListener("mouseover", function () {
  viewMoreExperienceBtn.classList.remove("hidden");
});

experienceTitle.addEventListener("mouseout", function () {
  viewMoreExperienceBtn.classList.add("hidden");
});

educationTitle.addEventListener("mouseover", function () {
  viewMoreEducationBtn.classList.remove("hidden");
});
educationTitle.addEventListener("mouseout", function () {
  viewMoreEducationBtn.classList.add("hidden");
});

activityTitle.addEventListener("mouseover", function () {
  viewMoreActivityBtn.classList.remove("hidden");
});
activityTitle.addEventListener("mouseout", function () {
  viewMoreActivityBtn.classList.add("hidden");
});

hobbiesTitle.addEventListener("mouseover", function () {
  viewMoreHobbiesBtn.classList.remove("hidden");
});
hobbiesTitle.addEventListener("mouseout", function () {
  viewMoreHobbiesBtn.classList.add("hidden");
});

languageTitle.addEventListener("mouseover", function () {
  viewMoreLanguageBtn.classList.remove("hidden");
});
languageTitle.addEventListener("mouseout", function () {
  viewMoreLanguageBtn.classList.add("hidden");
});

skillTitle.addEventListener("mouseover", function () {
  viewMoreSkillBtn.classList.remove("hidden");
});
skillTitle.addEventListener("mouseout", function () {
  viewMoreSkillBtn.classList.add("hidden");
});

// View more and View less info-job information

viewMoreExperienceBtn.addEventListener("click", function () {
  if (experienceContentStatus) {
    experienceContent.classList.add("hidden");
    viewMoreExperienceBtn.textContent = "▼ VIEW MORE";
    experienceContentStatus = false;
  } else {
    experienceContent.classList.remove("hidden");
    viewMoreExperienceBtn.textContent = "▲ VIEW LESS";
    experienceContentStatus = true;
  }
});

viewMoreEducationBtn.addEventListener("click", function () {
  if (experienceContentStatus) {
    educationContent.classList.add("hidden");
    viewMoreEducationBtn.textContent = "▼ VIEW MORE";
    experienceContentStatus = false;
  } else {
    educationContent.classList.remove("hidden");
    viewMoreEducationBtn.textContent = "▲ VIEW LESS";
    experienceContentStatus = true;
  }
});

viewMoreActivityBtn.addEventListener("click", function () {
  if (experienceContentStatus) {
    activityContent.classList.add("hidden");
    viewMoreActivityBtn.textContent = "▼ VIEW MORE";
    experienceContentStatus = false;
  } else {
    activityContent.classList.remove("hidden");
    viewMoreActivityBtn.textContent = "▲ VIEW LESS";
    experienceContentStatus = true;
  }
});

viewMoreHobbiesBtn.addEventListener("click", function () {
  if (experienceContentStatus) {
    hobbiesContent.classList.add("hidden");
    viewMoreHobbiesBtn.textContent = "▼ VIEW MORE";
    experienceContentStatus = false;
  } else {
    hobbiesContent.classList.remove("hidden");
    viewMoreHobbiesBtn.textContent = "▲ VIEW LESS";
    experienceContentStatus = true;
  }
});

viewMoreLanguageBtn.addEventListener("click", function () {
  if (experienceContentStatus) {
    languageContent.classList.add("hidden");
    viewMoreLanguageBtn.textContent = "▼ VIEW MORE";
    experienceContentStatus = false;
  } else {
    languageContent.classList.remove("hidden");
    viewMoreLanguageBtn.textContent = "▲ VIEW LESS";
    experienceContentStatus = true;
  }
});

viewMoreSkillBtn.addEventListener("click", function () {
  if (experienceContentStatus) {
    skillContent.classList.add("hidden");
    viewMoreSkillBtn.textContent = "▼ VIEW MORE";
    experienceContentStatus = false;
  } else {
    skillContent.classList.remove("hidden");
    viewMoreSkillBtn.textContent = "▲ VIEW LESS";
    experienceContentStatus = true;
  }
});
