document.getElementById("heading").innerHTML =
  localStorage["title"] || "Title"; // default text
document.getElementById("heading-sub-text").innerHTML =
  localStorage["title-sub-text"] || "Heading Sub-Text"; // default text
document.getElementById("content").innerHTML =
  localStorage["text"] || "Subtext [inf]"; // default text

function featured() {
  alert ("We are still developing this + no one has submitted to be featured :c");
}
function beFeat() {
  alert ("We are trying to make one, sorry bestieeeeee");
}

setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
  localStorage["heading-sub-text"] = document.getElementById("heading-sub-text").innerHTML
  localStorage["text"] = document.getElementById("content").innerHTML; // content div
}, 1000);
const sub = document.getElementById('example-btn');

sub.addEventListener('click', () => {
  window.open('https://example.com', '_blank');
});

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark_mode");
}
