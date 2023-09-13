import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import validator from "validator"
import bcrypt from 'bcrypt'
import * as jose from 'jose'

interface Formdata {
    email: string,
    password: string
}

const prisma = new PrismaClient()

export async function POST(request: Request) {
    const res: Formdata = await request.json();
    const errors: string[] = []
    const validationSchema = [
        {
            valid: validator.isEmail(res.email),
            errorMessage: "Email is Invalid"
        },
        {
            // valid: validator.isStrongPassword(res.password),
            valid: validator.isLength(res.password, { min: 5 }),
            errorMessage: "Password is invalid"
        }
    ]

    validationSchema.forEach((check) => {
        if (!check.valid) {
            errors.push(check.errorMessage)
        }
    })
    if(errors.length) return new NextResponse(JSON.stringify({errorMessage : errors[0]}), {
        status: 400     //bad request
    })

    const userWithEmail = await prisma.user.findUnique({
        where: {
            email: res.email
        }
    })
    if (!userWithEmail) return NextResponse.json({ errorMessage: "No Account Find" })

    const isMatch = bcrypt.compare(res.password, userWithEmail.password)

    if(!isMatch) return NextResponse.json({errorMessage: 'Password is incorrect'})

    const alg = "HS256"
    const signature = new TextEncoder().encode(process.env.JWT_SECRET)
    const token = await new jose.SignJWT({email: res.email})
    .setProtectedHeader({alg})
    .setExpirationTime("24h")
    .sign(signature)

    return NextResponse.json({token})
}