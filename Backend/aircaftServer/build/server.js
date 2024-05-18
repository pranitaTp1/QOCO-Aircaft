"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const cors_1 = __importDefault(require("cors"));
const flights_1 = require("./flights");
const workPackages_1 = require("./workPackages");
database_1.sequelizeInstance.sync({ alter: true }).then(() => console.log("db is ready"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.json({ message: "Aircaft maintaince" });
});
app.post("/flights", async (req, res) => {
    await flights_1.Flight.bulkCreate(req.body);
    res.json({ message: "Flight is inserted" });
});
app.get("/flights", async (req, res) => {
    const flights = await flights_1.Flight.findAll();
    res.json({ data: flights });
});
app.post("/workPackages", async (req, res) => {
    await workPackages_1.WorkPackage.bulkCreate(req.body);
    res.json({ message: "Workpackage is inserted" });
});
app.get("/workPackages", async (req, res) => {
    const workPackages = await workPackages_1.WorkPackage.findAll();
    res.json({ data: workPackages });
});
app.listen(port, () => {
    console.log(`connected suceesfully on port ${port}`);
});
