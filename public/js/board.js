const writeBtn = document.querySelector(".writeBtn");

function run() {
  writeBtn.addEventListener("click", () => {
    location.href = "/write";
  });
}

run();
