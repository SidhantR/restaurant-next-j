import { NextRequest, NextResponse } from "next/server";
import jose from 'jose'
export default async function middleware(request: NextRequest) {
    const BearerToken = request.headers.get("authorization") as string;
  
    if (!BearerToken) {
        return new NextResponse(
            JSON.stringify({ errorMessage: "Bearer token not defined" }),
            {status: 401}   //unauthorize
        );
    }
  
    const token = BearerToken.split(" ")[1];
    if(!token) return new NextResponse(JSON.stringify({errorMessage: 'Token not defined'}), {status: 401})
  
    const signature = new TextEncoder().encode(process.env.JWT_SECRET)
    try{
     await jose.jwtVerify(token, signature)    // check if our own server created it 
    }catch(err){
      return new NextResponse(JSON.stringify({errorMessage: "Unauthorized request"}), {status: 401})
    }
}

export const config = {
    matcher : ['/api/auth/me']  //only run middleware for this route
}