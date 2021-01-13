const title = document.querySelector(".inputTitle"),
  textarea = document.querySelector(".textarea"),
  studentNo = document.querySelector(".studentNo"),
  submitBtn = document.querySelector(".submitBtn"),
  backBtn = document.querySelector(".backBtn");

function run() {
  submitBtn.addEventListener("click", write);
  backBtn.addEventListener("click", () => {
    location.href = "/";
  });
}

const write = () => {
  const data = {
    title: title.value,
    textarea: textarea.value,
    studentNo: studentNo.value,
  };

  const post = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };
  const requestWrite = (post) => {
    fetch("/write", post);
  };

  requestWrite(post);
};
run();
