const express = require("express");
const specsRouter = require("./routes/productSpecs/specsRouter");
const app = express();

app.use(express.json());
app.use("/product-specs", specsRouter);

app.listen(8080, () => console.log("connected"));
