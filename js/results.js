import { results, mbtis } from "./data.js";

// http://127.0.0.1:5500/results.html?mbti=intj
const mbti = new URLSearchParams(location.search).get("mbti");
console.log(mbti);

const result = results[mbtis[mbti]];
