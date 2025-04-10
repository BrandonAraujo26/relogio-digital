<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Relógio Digital</title>
</head>
<body>
  <script>
    // Criação de estilo via JS
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        margin: 0;
        height: 100vh;
        background: linear-gradient(135deg, #0f172a, #1e3a8a);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Courier New', monospace;
        color: white;
      }
      #clock {
        font-size: 5em;
        padding: 30px 60px;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid #38bdf8;
        border-radius: 20px;
        box-shadow: 0 0 30px rgba(56, 189, 248, 0.4);
        text-align: center;
      }
    `;
    document.head.appendChild(style);

    // Criação do elemento do relógio
    const clock = document.createElement('div');
    clock.id = 'clock';
    document.body.appendChild(clock);

    // Função que atualiza a hora
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      clock.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Atualiza a cada segundo
    setInterval(updateClock, 1000);
    updateClock(); // chamada inicial
  </script>
</body>
</html>
