const express = require('express');
const app = express();

app.use(express.static("public"));

// risk evaluation endpoint
app.post("/visit", (req, res) => {
                res.send("test");
})

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
