import { results, mbtis } from "./data.js";

// http://127.0.0.1:5500/results.html?mbti=intj
const mbti = new URLSearchParams(location.search).get("mbti");

const result = results[mbtis[mbti]];

const titleEl = document.querySelector(".page-title");
const characterEl = document.querySelector(".character");
const boxEls = document.querySelectorAll(".box");
const jobEls = document.querySelectorAll(".job");
const mbtiEl = document.querySelector(".mbti");
const mbtiImg = document.querySelector(".mbti img");

titleEl.innerHTML = result.title;
characterEl.src = result.character;
boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index];
});
jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index];
});
mbtiEl.href = result.mbtiUrl;
mbtiImg.src = result.mbtiImg;
