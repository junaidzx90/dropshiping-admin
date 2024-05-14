'use server'

import mongoose from "mongoose";
import DbConnect from "./mongoose/mdb";
import User from "./scheemas/users";
const { cookies } = require("next/headers");

export async function getSession(){
    const uid = cookies().get("session")?.value;
    if(!uid) return null;
    return uid;
}

export async function updateSession(request){
    const session = request.cookies.get("session")?.value;
    if(!session) return;

    const expires = new Date(Date.now() + 120 * 1000);
    request.cookies.set({name: "session", value: session, httpOnly: true, expires });

    return session;
}

export async function SignIn(formdata) {
    await DbConnect();
    const result = await User.findOne(formdata);
  
    if(result){
      const expires = new Date(Date.now() + 60 * 60 * 24 * 365 * 1000);
      cookies().set("session", result.id??null, {expires, httpOnly: true});

      return true;
    }

    return false;
}

// Getting user data information from database
export async function getUserData(){
    await DbConnect();
    const uid = await getSession();
    if(mongoose.Types.ObjectId.isValid(uid)){
        const result = await User.findById(uid);
        // Passing plain data to the client
        return JSON.stringify(result);
    }

    return null;
}

export async function Logout(){
    cookies().set("session", null, {expires: "", httpOnly: true});
}