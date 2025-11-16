 const emojis = [
      "😀","😂","🤣","😎","😍","🤩","😴","😡","🤔","🤖",
      "👻","💩","🎃","🐱","🐶","🐵","🐸","🐼","🐧","🐢",
      "⚽","🏀","🎮","🎲","🎧","💻","📱","🚀","🌈","🔥",
      "🍕","🍔","🍟","🍎","🍓","🌭","🥦","☕","🍺","🍰"
    ];

    function gerarEmoji() {
      const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];
      const emojiDiv = document.getElementById("emoji");
      emojiDiv.textContent = emojiAleatorio;
      emojiDiv.style.transform = "scale(1.3)";
      setTimeout(() => {
        emojiDiv.style.transform = "scale(1)";
      }, 150);
    }
