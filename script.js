const container = document.querySelector(".container");
const option = {
  root: null,
  threshold: 0.3,
};
function callback(entries, observer) {
  const entry = [...entries];
  console.log(entry[0]);
  if (entry[0].isIntersecting) {
    container.classList.add("display");
  } else {
    container.classList.remove("display");
  }
}
const observer = new IntersectionObserver(callback, option);
observer.observe(container);
