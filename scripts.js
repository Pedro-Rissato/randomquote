function fetchRandomQuote() {
    fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: {
        'X-Api-Key': '/utuzvnY3/Aw7w5ck4DKWA==udmGTR8SbtINIZbZ' // <- coloque sua chave aqui
      }
    })
      .then(response => response.json())
      .then(data => {
        const quote = data[0].quote;
        const author = data[0].author;
  
        document.getElementById("quote").textContent = `"${quote}"`;
        document.getElementById("author").textContent = `– ${author}`;
      })
      .catch(error => {
        console.error("Erro ao buscar frase", error);
      });
  }
  
  document.getElementById("generator").addEventListener("click", fetchRandomQuote);
  
  // opcional: já exibe uma ao carregar
  fetchRandomQuote();
  