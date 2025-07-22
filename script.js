
document.getElementById("recommendForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const climate = document.getElementById("climate").value;
  const interests = document.getElementById("interests").value;

  const responseBox = document.getElementById("result");
  responseBox.innerText = "Carregando...";

  try {
    const res = await fetch("/api/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ climate, interests })
    });

    const data = await res.json();
    responseBox.innerText = data.recommendation || "Nenhuma sugestão recebida.";
  } catch (err) {
    responseBox.innerText = "Erro ao buscar recomendação.";
    console.error(err);
  }
});
