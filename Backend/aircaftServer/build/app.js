"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const user_1 = require("./user");
const cors_1 = __importDefault(require("cors"));
database_1.sequelize1.sync().then(() => console.log('db is ready'));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.json({ message: 'Hello world Pranita hi' });
});
app.post('/users', async (req, res) => {
    await user_1.User.create(req.body);
    res.send('User is inserted');
});
app.get('/users', async (req, res) => {
    const users = await user_1.User.findAll();
    res.send(users);
});
app.get('/users/:id', async (req, res) => {
    const requestedId = req.params.id;
    const user = await user_1.User.findOne({ where: { id: requestedId } });
    res.send(user);
});
// app.put('users/:id', async(req:Request,res:Response)=>{
//     const requestedId  = req.params.id;
//     let user = await User.findOne<User>({where:{id:requestedId}});
//     if(user && user.username) {
//         user.username = req.body.username;
//         await user.save();
//         res.send("updated");
//     }    
// });
app.listen(port, () => {
    console.log(`connected suceesfully on port ${port}`);
});
