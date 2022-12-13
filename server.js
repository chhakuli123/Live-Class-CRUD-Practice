const app = require("./app")
const PORT = process.env.PORT || 400

app.listen(PORT, (req, res) => {
    console.log(` Aapp is running at http://localhost:${PORT} `)
})