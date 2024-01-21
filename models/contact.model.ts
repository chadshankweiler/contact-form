import { Schema, model, models } from "mongoose";


const contactSchema = new Schema({
    name: String,
    email: String,
    address: String,
    country: String,
    state: String,
    message: String
    },{
        timestamps: true
    }
)

const ContactModel = models.contact || model("contact", contactSchema)

export default ContactModel 