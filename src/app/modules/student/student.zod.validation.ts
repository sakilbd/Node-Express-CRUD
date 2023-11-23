import { z } from 'zod';

const UserNameValidationSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1)
        .max(20)
        .refine((value) => value[0] === value[0].toUpperCase(), {
            message: 'First letter should be capitalized',
        }),
    middleName: z.string().optional(),
    lastName: z
        .string()
        .min(1)
        .refine((value) => /^[A-Za-z]+$/.test(value), {
            message: 'Last Name should contain only alphabetic characters',
        }),
});

const GuardianValidationSchema = z.object({
    fatherName: z.string().min(1),
    fatherOccupation: z.string().min(1),
    fatherContactNo: z.string().min(1),
    motherName: z.string().min(1),
    motherOccupation: z.string().min(1),
    motherContactNo: z.string().min(1),
});

const LocalGuardianValidationSchema = z.object({
    name: z.string().min(1),
    occupation: z.string().min(1),
    contactNo: z.string().min(1),
    address: z.string().min(1),
});

const StudentValidationSchema = z.object({
    id: z.string().min(1),
    password: z.string().max(20),
    name: UserNameValidationSchema,
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string().optional(),
    email: z.string().email(),
    contactNo: z.string().min(1),
    emergencyContactNo: z.string().min(1),
    bloogGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    presentAddress: z.string().min(1),
    permanentAddres: z.string().min(1),
    guardian: GuardianValidationSchema,
    localGuardian: LocalGuardianValidationSchema,
    profileImg: z.string().optional(),
    isActive: z.enum(['active', 'blocked']).default('active'),
    isDeleted: z.boolean(),
});

export default StudentValidationSchema;
