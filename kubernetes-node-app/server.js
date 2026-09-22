const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req,res) => {
	res.json({
	message:"Hello from Kubernetes v2",
	hostname: process.env.HOSTNAME || "something",
	environment: process.env.NODE_ENV || "development" 
	})
})

app.listen(PORT, () => {
	console.log("server runing on port 3000");
})
