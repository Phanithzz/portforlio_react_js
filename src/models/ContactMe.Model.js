import z from 'zod'

const ContactMe= z.object({
    firstName: z.string().min(1, "First Name is required!"),
    lastName: z.string().min(1, "Last Name is required!"),
    subject: z.string().min(1, "Subject is required!"),
    message: z.string().min(1, "Message is required!"),
})

export default ContactMe