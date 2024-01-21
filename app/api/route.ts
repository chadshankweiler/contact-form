import { connectToMongo } from "@/lib/mongo.lib";
import ContactModel from "@/models/contact.model";
import mongoose, { mongo } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const {
            name,
            email,
            address,
            country,
            state,
            message,
        } = await request.json();
        console.log(name, email, address, country, state, message)
        await connectToMongo();
        await ContactModel.create({ name, email, address, country, state, message })
        await mongoose.connection.close();
        return NextResponse.json({
            message: "Message sent succesfully"
        }, { status: 200 })

    } catch (error) {
        console.error(error);
        await mongoose.connection.close();
        return NextResponse.json({
            message: "Failed to send message"
        }, { status: 400 })
        
    }
}