import { Request, Response } from "express";
import { UserServices } from "./user.service";
import UserValidationSchema from "./user.zod.validation";


const createUser = async (req: Request, res: Response) => {
    try {
        const { user: userData } = req.body;
        const zodParsedData = UserValidationSchema.parse(userData);


        const result = await UserServices.createUserIntoDB(zodParsedData);
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


const getAllUsers = async (req: Request, res: Response) => {

    try {
        const result = await UserServices.getAllUsersFromDB();
        res.status(200).json({
            success: true,
            message: "Users fetched successfully!",
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
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const result = await UserServices.getSingleUserFromDB(userId);

        if (!result) {
            throw new Error("User not found");
        }

        res.status(200).json({
            success: true,
            message: "User fetched successfully!",
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
    createUser,
    getAllUsers,
    getSingleUser,
}