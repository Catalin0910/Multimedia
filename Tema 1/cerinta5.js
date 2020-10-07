let j =1.2;

document.getElementById("scaleButton").addEventListener("click", () => {
document.querySelector("#scaleButton").style.transform =
"scale" + "(" + j + ")";
j += 0.2;
});