import {z} from 'zod'


export const signUpSchema = z.object({
    fullName: z.string().min(3),
    email: z.string().email(),
    universityId: z.coerce.number().min(3),
    universityCard: z.string().nonempty('University Card is required'),
    password: z.string().min(8),

})

