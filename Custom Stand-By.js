async function run() {
  let wv = new WebView();
  let html = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin:0;
          height:50vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:black; /* fallback kleur */
          
          /* >>> HIER zet je je eigen achtergrondlink <<< */
          background-image: url('https://i.postimg.cc/nL2sHqsR/IMG-4296.jpg');
          background-size: cover;      /* vult volledig scherm */
          background-position: center; /* gecentreerd */
          background-repeat: no-repeat;
        }
        #clock {
          font-size:70px;
          font-family:monospace;
          color:white;
          text-shadow:0 0 10px rgba(255,255,255,0.7); /* subtiele glow */
        }
      </style>
    </head>
    <body>
      <div id="clock">--:--:--</div>
      <script>
        function updateClock() {
          const now = new Date();
          const h = String(now.getHours()).padStart(2,"0");
          const m = String(now.getMinutes()).padStart(2,"0");
          const s = String(now.getSeconds()).padStart(2,"0");
          document.getElementById("clock").innerHTML = h+":"+m+":"+s;
        }
        updateClock();
        setInterval(updateClock, 1000);
      </script>
    </body>
  </html>`;
  await wv.loadHTML(html);
  await wv.present(false);
}
await run();
