import { UserModel } from "../user.model";
import { TUser } from "./user.interface";
import { Order } from "./user.interface";


const createUserIntoDB = async (userData: TUser) => {
    const result = await UserModel.create(userData);
    return result;
}

const getAllUsersFromDB = async () => {
    const result = await UserModel.find();
    return result;
}

const getSingleUserFromDB = async (userId: string) => {
    const result = await UserModel.findOne({ userId: userId });
    return result;
}

const updateStudentFromDB = async (userId: string, updatedUserData: TUser) => {
    const result = await UserModel.updateOne({ userId: userId }, { $set: updatedUserData });
    return result;
}

const deleteStudentFromDB = async (userId: string) => {
    const result = await UserModel.deleteOne({ userId: userId });
    return result;
}






export const UserServices = {
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUserFromDB,
    updateStudentFromDB,
    deleteStudentFromDB,

}