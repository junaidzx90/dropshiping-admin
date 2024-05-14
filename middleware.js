import { NextResponse } from "next/server";

export default async function Middleware(request){
    // const session = await updateSession(request);
    // if(session){
        
    // }

    return NextResponse.next();
}