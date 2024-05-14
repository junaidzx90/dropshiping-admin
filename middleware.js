import { NextResponse } from "next/server";

export default async function Middleware(request){
    // Nothing doing here at this time

    // Returning default value
    return NextResponse.next();
}