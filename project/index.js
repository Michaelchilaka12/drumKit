import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

app.post("/submit", (reg, res)=>{
  res.sendStatus(201);
    console.log(reg.body);
});

const __dirname = dirname(fileURLToPath(import.meta.url));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
