      let numeroAleatorio = Math.floor(Math.random() * 10);

      function verificar() {
          let tentativa = parseInt(document.getElementById("userGuess").value);
          let mensagem = document.getElementById("message");

          if (tentativa === numeroAleatorio) {
              mensagem.innerText = "Parabéns! Você acertou!";
              mensagem.style.color = "green";
          } else {
              mensagem.innerText = "Errou! O número era " + numeroAleatorio;
              mensagem.style.color = "red";
              document.body.style.backgroundColor = "red"; 

              setTimeout(() => {
                  document.body.style.backgroundColor = "white";
              }, 1000);
          }
      }