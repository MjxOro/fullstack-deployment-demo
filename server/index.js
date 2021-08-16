const express = require("express");
const cors = require("cors");
const warehouseRouter = require("./routes/warehouse");
const inventoryRouter = require("./routes/inventory");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"))

if (process.env.NODE_ENV === "production"){
	ap.use( express.static(path.resolve(__dirname,"..", "client", "build")) )
}
app.use("/api/v1/warehouse", warehouseRouter);
app.use("/api/v1/inventory", inventoryRouter);

if(process.env.NODE_ENV === "production" ){
	 app.get("*", (req,res) =>{
		 response.sendFile(
			 path.resolve(__dirname, "..", "client", "build", "index.html" )
		 );
	 })
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
