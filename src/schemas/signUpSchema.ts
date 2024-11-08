
import {z} from 'zod'

export const usernameValidation=z
.string()
.min(2,"Username must be atleast 2 characters")
.max(20,"Username must no More than 20 characters")
.regex(/^[a-zA-Z0-9._-]{2,20}$/
,"Username must not contain special characters")


export const SignUpSchema=z.object({
    username:usernameValidation,
    email:z.string().email({message:"invalid email address"}),
    password:z.string().min(4,{message:"password must be atleast 4 characters"})
})