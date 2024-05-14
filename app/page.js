import LoginForm from "@/components/LoginForm";
import { getSession } from "@/lib";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
  if(session){
    redirect("/dashboard")
  }

  return (
    <section className="w-screen h-screen flex items-center justify-center relative">
      <div className="md:w-[400px] w-[100%] max-md:px-5">
        <h1 className="text-black-normal mb-2 text-[28px] font-[700]">Welcome</h1>
        <LoginForm/>
      </div>

      <p className="absolute bottom-0 text-black-dark mb-3 text-[14px]">This site is protected by hCaptcha and its Privacy Policy and Terms of Service apply.</p>
    </section>
  );
}