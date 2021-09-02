const express = require("express");
const productSpecs = require("./routes/productSpecs/productSpecs");
const app = express();

app.use(express.json());
app.use("/product-specs", productSpecs);

app.listen(8080, () => console.log("connected"));
