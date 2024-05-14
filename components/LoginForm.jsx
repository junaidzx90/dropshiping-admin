'use client'
import { SignIn } from "@/lib";
import { useState } from "react";

function LoginForm() {
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formdata = new FormData(event.target);

        setLoading(true);

        const result = await SignIn({
            email: formdata.get("email"),
            password: formdata.get("password")
        });

        setAlert(!result);
        setLoading(false);

        const tmout = setTimeout(() => {
            setAlert(false);
            clearTimeout(tmout);
        }, 2000);
    }

    return (
        <>
        <div style={{
            height: alert?'auto': 0,
            paddingBlock: alert?16: 0,
        }} className="px-4 mb-4 text-sm rounded-lg bg-red-300 text-red-400 bg-opacity-10 transition-all overflow-hidden" role="alert">
            <span className="font-medium text-red-500">Error!</span> Email and password is incorrect.
        </div>

        <form onSubmit={handleSubmit} className="w-[100%]">
            <div className="flex flex-col gap-[20px]">
            <input type="email" name="email" autoComplete="username" className="border-0 outline-0 border-b border-black-normal py-3 focus:border-primary transition-all" placeholder="Email address"/>
            <input type="password" name="password" autoComplete="current-password" className="!bg-transparent border-0 outline-0 border-b border-black-normal py-3 focus:border-primary transition-all" placeholder="Password"/>
            <button disabled={loading} type="submit" className="!bg-transparent mt-5 py-2 px-3 outline-0 border border-primary rounded-md text-primary text-[18px] hover:!bg-primary hover:text-white transition-all">{loading ? 'Sign In....': 'Login'}</button>
            </div>
        </form>
        </>
    )
}

export default LoginForm