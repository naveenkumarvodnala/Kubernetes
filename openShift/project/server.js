const express = require("express");

const client = require("prom-client")

const mysql = require("mysql2/promise")

const app = express();

const PORT = 3000;

app.use(express.json());

client.collectDefaultMetrics();

const pool = mysql.createPool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT || 3306,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD
})

app.get("/", (req, res)=> {
	res.send("Hello world, welcome to the Node app");
});

app.get("/metrics", async (req, res) => {
	res.set("Content-Type", client.register.contentType);
	res.end(await client.register.metrics());
})

app.get("/about", (req, res) => {
	res.send("This is the about page");
});

app.post("/mysql", async(req, res) => {
	try{
		const {name, email}= req.body;

		const [result] = await pool.query("INSERT INTO users (name, email) VALUES (?,?)",[name, email]);

		res.status(201).json({
			status: "User created sucessfully",
			userId: result.insertId,
			name,
			email
		});
	} catch(error) {
		console.error("MySQL insert failed:", error);

		res.status(500).json({
			status: "Failed to create user",
			error: error.message,
		});
	}
});

app.get("/users", async (req, res) => {
	try {
		const [rows] = await pool.query("SELECT * FROM users");

		res.json(rows);
	} catch(error) {
		console.error("Query failed:", error);

		res.status(500).json({
			error: error.message,
		});
	}

});

app.listen(PORT, () => {
	console.log(`Server is running on the ${PORT}`)
})
