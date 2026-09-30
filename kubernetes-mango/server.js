const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/tasks";

mongoose.connect(MONGO_URL).then(() => {
	console.log("Connected to mongoDB");

}).catch((error)=> {
	console.error("MongoDB connection failed:",error)
});

const Task = mongoose.model("Task", {
	title : String,
	completed : Boolean
});

app.get("/", (req, res) => {
	res.json({
		message: "Kubernetes Task API",
		environment: process.env.NODE_ENV
	})
});

app.get("/tasks", async (req,res) => {
	const tasks = await Task.find();
	res.json(tasks)
});

app.post("/tasks",async (req,res) => {
	const task = await Task.create({
		title: req.body.title,
		completed: false
	})
	res.status(201).json(task);
});

app.listen(PORT, ()=>{
	console.log(`Server runing on the port ${PORT}`)
});
