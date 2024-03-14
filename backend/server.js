import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import {loadEmployees} from "./controllers/employeeController.js";
import {dirname} from "path";
import {fileURLToPath} from "url";
import path from "path";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api",router);


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildPath = path.join(__dirname, "build");
app.use(express.static(buildPath));

console.log(buildPath);
app.get('/', async(req,res)=>{
    // res.send('<h1>Welcome to the backend</h1>');
    res.sendFile(path.join(buildPath, "index.html"));
})
loadEmployees();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});