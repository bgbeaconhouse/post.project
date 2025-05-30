const express = require("express");
const app = express();

const PORT = 3000;
const prisma = require("./prisma"); 
app.use(express.json());
app.use(require("morgan")("dev"));


app.post("/api/register", async (req, res, next) => {
    const {username, password} = req.body
    const newUser = await prisma.user.create({
        data: {username, password}
    })
    res.status(201).json(newUser)
})

app.post("/api/login", async (req, res, next) => {
    const {username, password} = req.body
    const User = await prisma.user.findUnique({
        where: {username: username, password: password}
    })
    res.status(200).json(User)
})



app.use("/api", require("./api"));

app.use((err, req, res, next) => {
    console.error(err);
    const status = err.status ?? 500;
    const message = err.message ?? 'Internal servor error.';
    res.status(status).json({ message});
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});