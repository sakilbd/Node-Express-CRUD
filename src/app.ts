import express, { Request, Response } from 'express';
import cors from 'cors';
import { UserRouters } from './app/modules/users/user.route';
const app = express();

//parser
app.use(express.json());
app.use(cors());




//application routers

app.use('/api', UserRouters);



const getAController = (req: Request, res: Response) => {
  res.send("server is working");
}
app.get('/', getAController);

export default app;
