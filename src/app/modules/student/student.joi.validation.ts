
import Joi from "joi";

const userNameValidationSchema = Joi.object({
    firstName: Joi.string()
        .trim()
        .required()
        .max(20)
        .pattern(/^[A-Z][a-z]*$/, { name: 'capitalized' })
        .messages({
            'string.empty': 'First Name is Required',
            'string.max': 'First Name Cannot be more than 20 characters',
            'string.pattern.base': 'First Name should start with a capital letter and contain only alphabetic characters',
        }),
    middleName: Joi.string(),
    lastName: Joi.string()
        .required()
        .pattern(/^[A-Za-z]+$/)
        .messages({
            'string.empty': 'Last Name is Required',
            'string.pattern.base': 'Last Name should contain only alphabetic characters',
        }),
});

const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContactNo: Joi.string().required(),
});

const localGuardianValidationSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
    address: Joi.string().required(),
});

const studentValidationSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameValidationSchema.required(),
    gender: Joi.string()
        .valid('male', 'female', 'other')
        .required()
        .messages({
            'any.only': 'Gender should be male, female, or other',
        }),
    dateOfBirth: Joi.string(),
    email: Joi.string().email().required().messages({
        'string.email': 'Email should be in proper format',
        'string.empty': 'Email is Required',
    }),
    contactNo: Joi.string().required(),
    emergencyContactNo: Joi.string().required(),
    bloogGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guardian: guardianValidationSchema.required(),
    localGuardian: localGuardianValidationSchema.required(),
    profileImg: Joi.string(),
    isActive: Joi.string().valid('active', 'blocked').default('active'),
});


export default studentValidationSchema;