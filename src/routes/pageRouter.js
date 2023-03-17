const { Router } = require("express");
const pageRouter = Router();

pageRouter.get("/*", (req, res) => {
    return res.sendFile("index.html", { root: "./src/public/" });
});
// pageRouter.get("/pag21", (req, res) => {
//     return res.sendFile("index.html", { root: "./src/public/" });
// });
// pageRouter.get("/page2", (req, res) => {
//     return res.sendFile("index.html", { root: "./src/public/" });
// });

module.exports = { pageRouter };


