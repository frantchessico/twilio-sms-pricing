
import Footer from "@/components/footer";
import { MyForm } from "@/components/form";
import MyInputField from "@/components/input-field";
import MyTextArea from "@/components/my-textarea";
import Navbar from "@/components/navbar";
import MySelectField from "@/components/select-input-field";
import SkillOutline from "@/components/skill-outline";



import {
 
  skills,
  stacktechs

} from "@/lib/data";
import { FormEvent } from "react";
import { BiSolidEnvelope, BiSolidUser, BiSolidUserAccount } from "react-icons/bi";
import { SiLinkedin } from "react-icons/si";

export default function Home() {
  function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="md:max-w-3xl mx-auto md:mt-8 ">
      <Navbar />
      <div className="flex flex-col md:flex-row my-10 mx-10 md:mx-0 space-x-0 md:space-x-10 space-y-10 md:space-y-0 ">
      <div className="space-y-2">
                {skills.map((skill) => (
                  <SkillOutline
                    key={skill.text}
                    Icon={skill.icon}
                    text={''}
                  />
                ))}
              </div>
        <div className="md:min-w-[65vh] min-w-full space-y-10">

<h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Let's build</h1>
<span className="text-3xl font-bold dark:text-white">Good things together!</span>

<MyForm/>












        </div>
       </div>
      <Footer />
    </div>
  );
}
