import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { NextResponse } from "next/server";
import validator from "validator"
import bcrypt from 'bcrypt'

interface formData {
    firstName : string, 
    lastName: string,
    email:string,
    city: string,
    phoneNumber: number,
    password: string
}

export async function GET() {
    return NextResponse.json({
        id: 'harry'
    })
}

const prisma = new PrismaClient()

export async function POST(request: Request){
    const res:formData = await request.json()
    const errors:string[] = []

    console.log(typeof res.phoneNumber)

    const validateSchema =[
        {
            valid: validator.isLength(res.firstName, { min: 1}),
            errorMessage: "First Name is invalid"
        },
        {
            valid: validator.isLength(res.lastName, {min: 1}),
            errorMessage: "Last Name is invalid"
        },
        {
            valid: validator.isLength(res.city, {min: 1}),
            errorMessage :"City is invalid"
        },
        {
            valid: validator.isEmail(res.email),
            errorMessage: "Email is invalid"
        },
        {
            valid: validator.isMobilePhone(String(res.phoneNumber)),
            errorMessage : "Phone Number is invalid"
        },
        {
            // valid: validator.isStrongPassword(res.password),
            valid: validator.isLength(res.password, {min:5}),
            errorMessage: "Password is Invalid"
        }
    ]

    validateSchema.forEach((check) => {
        if(!check.valid){
            errors.push(check.errorMessage)
        }
    })

    if(errors.length) return NextResponse.json({errorMessage: errors[0]})

    const userWithEmail = await prisma.user.findUnique({
        where : {
            email : res.email
        }
    })

    if(userWithEmail) return NextResponse.json(
        {errorMessage : "Email address already associated with another account"})

    const hashedPassword = await bcrypt.hash(res.password, 10)

    return NextResponse.json({res, hashedPassword})
}