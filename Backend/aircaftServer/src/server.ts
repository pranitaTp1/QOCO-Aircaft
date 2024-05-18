import express, { Application, Request, Response } from "express";
import { sequelizeInstance } from "./database";
import cors from "cors";
import { Flight } from "./flights";
import { WorkPackage } from "./workPackages";

sequelizeInstance.sync({ alter:true }).then(() => console.log("db is ready"));

const app: Application = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Aircaft maintaince" });
});

app.post("/flights", async (req: Request, res: Response) => {
  await Flight.bulkCreate(req.body);
  res.json({ message: "Flight is inserted" });
});

app.get("/flights", async (req: Request, res: Response) => {
  const flights = await Flight.findAll();
  res.json({ data: flights });
});

app.post("/workPackages", async (req: Request, res: Response) => {
  await WorkPackage.bulkCreate(req.body);
  res.json({ message: "Workpackage is inserted" });
});

app.get("/workPackages", async (req: Request, res: Response) => {
  const workPackages = await WorkPackage.findAll();
  res.json({ data: workPackages });
});

app.listen(port, () => {
  console.log(`connected suceesfully on port ${port}`);
});
