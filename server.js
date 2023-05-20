const express = require('express');
const app = express();
const port = 8000;

const cors = require('cors');
app.use(cors());

app.get("/api", (req, res) => {
    return res.json({name: "Albert", img:"https://as2.ftcdn.net/v2/jpg/01/22/94/81/1000_F_122948102_mK5rrCUW0U18vikIpb6AX84skMqBuFnW.jpg"})
})

app.listen(port, console.log(`listening on port ${port}`))