import { Request, Response } from "express";
import { UserServices } from "./user.service";


const createUser = async (req: Request, res: Response) => {
    try {
        const { user: userData } = req.body;

        const result = await UserServices.createUserIntoDB(userData);
        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: result,
        })
    }
    catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            error: err,
        })
    }
}


export const UserControllers = {
    createUser
}