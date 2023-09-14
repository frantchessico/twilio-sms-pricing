
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

<label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>

<MyForm/>












        </div>
       </div>
      <Footer />
    </div>
  );
}
