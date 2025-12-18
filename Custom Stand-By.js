{
  "always_run_in_app" : false,
  "icon" : {
    "color" : "light-gray",
    "glyph" : "magic"
  },
  "name" : "Custom Stand-By",
  "script" : "async function run() {\n  let wv = new WebView();\n  let html = `\n  <html>\n    <head>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <style>\n        body {\n          margin:0;\n          height:50vh;\n          display:flex;\n          justify-content:center;\n          align-items:center;\n          background:black; \/* fallback kleur *\/\n          \n          \/* >>> HIER zet je je eigen achtergrondlink <<< *\/\n          background-image: url('https:\/\/i.postimg.cc\/nL2sHqsR\/IMG-4296.jpg');\n          background-size: cover;      \/* vult volledig scherm *\/\n          background-position: center; \/* gecentreerd *\/\n          background-repeat: no-repeat;\n        }\n        #clock {\n          font-size:70px;\n          font-family:monospace;\n          color:white;\n          text-shadow:0 0 10px rgba(255,255,255,0.7); \/* subtiele glow *\/\n        }\n      <\/style>\n    <\/head>\n    <body>\n      <div id=\"clock\">--:--:--<\/div>\n      <script>\n        function updateClock() {\n          const now = new Date();\n          const h = String(now.getHours()).padStart(2,\"0\");\n          const m = String(now.getMinutes()).padStart(2,\"0\");\n          const s = String(now.getSeconds()).padStart(2,\"0\");\n          document.getElementById(\"clock\").innerHTML = h+\":\"+m+\":\"+s;\n        }\n        updateClock();\n        setInterval(updateClock, 1000);\n      <\/script>\n    <\/body>\n  <\/html>`;\n  await wv.loadHTML(html);\n  await wv.present(false);\n}\nawait run();\n",
  "share_sheet_inputs" : [

  ]
}