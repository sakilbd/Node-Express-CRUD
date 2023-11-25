import { z } from 'zod';

export const OrderValidationSchema = z.object({
    productName: z.string(),
    price: z.number(),
    quantity: z.number(),
});

const UserValidationSchema = z.object({
    userId: z.number().int().positive(),
    username: z.string(),
    password: z.string(),
    fullName: z.object({
        firstName: z.string(),
        lastName: z.string(),
    }),
    age: z.number().int().positive(),
    email: z.string().email(),
    isActive: z.boolean(),
    hobbies: z.array(z.string()),
    address: z.object({
        street: z.string(),
        city: z.string(),
        country: z.string(),
    }),
    orders: z.array(OrderValidationSchema).optional(), // Making 'orders' field optional
});

export default UserValidationSchema;

