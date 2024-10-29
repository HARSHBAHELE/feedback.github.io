let rating = document.querySelectorAll(".rating");
let button = document.querySelector(".btn");
let container = document.querySelector(".container");

let seleactRating = "";

rating.forEach((ratings)=> {
    ratings.addEventListener("click",(event)=> {
        removeActive();
        seleactRating =
        event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

button.addEventListener("click", () => {
    if (seleactRating !== "") {
      container.innerHTML = `
          <strong>Thank you!</strong>
          <br>
          <br>
          <strong>Feedback: ${seleactRating}</strong>
          <p>We'll use your feedback to improve our customer support  <br>🙏💝</p>
          `;
    }
  });
  function removeActive() {
    rating.forEach((ratings) => {
      ratings.classList.remove("active");
    });
  }