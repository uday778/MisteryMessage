import {z} from 'zod'


export const AcceptmMessageSchema = z.object({
    acceptMessages:z.boolean(),
})