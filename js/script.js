const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title");
  const content = document.getElementById("content");

  //   const array = [nome, email, tel, city, estado, password];
  //   array.map((item) => {
  //     console.log(item);
  //   });

  // Trasformar os dados em JSON
  const userData = JSON.stringify({
    tilte: title.value,
    content: content.value,
    image: "",
  });

  // Enviar para o server!! FETCH (POST)
  fetch("http://10.92.198.38:3001/signup", {
    method: "Post",
    body: userData,
    headers: { "Content-type": "application/json; charset=utf-8" },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err));
});
