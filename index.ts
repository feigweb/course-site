import express, {Request, Response, NextFunction} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { user, courses, questions, User } from './db';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const router = express.Router();
const secret: string = process.env["SECRET_KEY_TOKEN_GENETATION"];

function requiredParams(requiredParams: string[]): (req: Request, res: Response, next: NextFunction)=>void{
    return (req, res, next)=>{
        const hasAllRequiredParams = requiredParams.every(param=>req.body[param]);
        if(hasAllRequiredParams){
            next();
        }
        else{
            res.send({
                ok: false
            });
        }
    }
}

function authorizer(req: Request, res: Response, next: NextFunction){

}

router.post("/auth/signin", requiredParams(["phoneNumber", "password"]), (req, res)=>{
    const { phoneNumber, password } = req.body;
    user.findOne({ phoneNumber }, (err: any, user: User)=>{
        if(err){
            res.send({
                ok: false
            })
        }
        else if(!user){

            res.send({
                ok: false
            });

        }
        const token = jwt.sign(user._id, secret, { expiresIn: '1h' });
        res.send({
            ok: true,
            token
        })
    });
});
router.post("/auth/signup", (req, res)=>{
});
router.post("/auth/forgot-password", (req, res)=>{
});
router.post("/auth/delete", (req, res)=>{
    
})

app.use(router);