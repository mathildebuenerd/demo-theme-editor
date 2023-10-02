const express = require("express");
const request = require("request");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();
const THEME_SERVER_URL = "http://localhost:8080";

// Endpoint to handle API requests
app.get("/api/modules", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Serve static files directly from Theme Editor server
app.use(express.static(path.join(__dirname, "public")));

// Proxy requests for /public folder to the Theme server
app.use("/public", (req, res) => {
  const url = `${THEME_SERVER_URL}${req.originalUrl}`;
  req.pipe(request(url)).pipe(res);
});

// Render Theme
app.get("/theme-editor", (req, res) => {
  const url = `${THEME_SERVER_URL}/theme`;

  request.get(url, (error, response, body) => {
    if (error) {
      res.status(500).send("Error retrieving theme HTML", error);
    } else {
      const themeHtmlWithScript = appendScriptToHTML(
        body,
        "/path/to/templateModule.js",
      );
      res.send(themeHtmlWithScript);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on Backend API (Port: ${PORT})`);
});

function appendScriptToHTML(html, scriptSrc) {
  const insertionIndex = html.lastIndexOf("</head>");
  const scriptTag = `<script src="${scriptSrc}"></script>`;
  return html.slice(0, insertionIndex) + scriptTag + html.slice(insertionIndex);
}
