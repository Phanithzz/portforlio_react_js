import z from 'zod'

const ContactMe= z.object({
    firstName: z.string().min(1, "First Name must have a value!"),
    lastName: z.string().min(1, "Last Name must have a value!"),
    subject: z.string().min(1, "Subject must have a value!"),
    message: z.string().min(1, "Message must have a value!"),
})

export default ContactMe