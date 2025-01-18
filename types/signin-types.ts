import {z} from 'zod'


export const signInSchema = z.object({
    password: z.string(),
    email: z.string().email()
})



