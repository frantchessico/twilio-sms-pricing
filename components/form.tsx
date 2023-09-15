'use client';
import { z } from "zod";
import Footer from "@/components/footer";
import MyInputField from "@/components/input-field";
import MyTextArea from "@/components/my-textarea";
import Navbar from "@/components/navbar";
import MySelectField from "@/components/select-input-field";
import { useEffect, useState } from "react";
import { stacktechs } from "@/lib/data";
import { FormEvent } from "react";
import { BiSolidEnvelope, BiSolidUser } from "react-icons/bi";
import { SiLinkedin } from "react-icons/si";
import { ContactSchema } from "@/lib/zod";
import { contactService } from "@/services/contact.service";
import Success from "./messages/Success";
import Error from "./messages/Error";

export function MyForm() {
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    const [error, setError] = useState(false)
    const [success, setScuccess] = useState(false)
    const [loading, setLoading] = useState("Let's go");
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        linkedin: '',
        tech: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    async function handleFormSubmit(e: FormEvent): Promise<any> {
        e.preventDefault();
        setLoading('Loading...')
        try {
           const datas = ContactSchema.parse(formData)
           const response = await contactService(formData)
           if(!response) {
            setLoading("Let's go")
             return setError(true)
           }

           
           setScuccess(true)
           setError(false)
            setErrorMessages([]);
            setLoading("Let's go")
        } catch (error) {
            
            
            if (error instanceof z.ZodError) {
                setLoading("Let's go")
                const messages = error.errors.map((e) => e.message);
                return setErrorMessages(messages);
            }
            setScuccess(false)
            setError(true)
            setLoading("Let's go")
        }
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            linkedin: '',
            tech: '',
            message: '',
          });
    }


    return (
        <>
           {success? <Success />: ''}
           {error? <Error/>: ''}
           
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <MyInputField
                        icon={<BiSolidUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        // required
                    />
                    {errorMessages.includes("String must contain at least 3 character(s)") && (
                        <div className="text-red-500">First name must contain at least 3 character(s)</div>
                    )}
                </div>

                <div className="mb-4">
                    <MyInputField
                        icon={<BiSolidUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        // required
                    />

                    {errorMessages.includes("String must contain at least 3 character(s)") && (
                        <div className="text-red-500">Last name must contain at least 3 character(s)</div>
                    )}
                </div>

                <div className="mb-4">
                    <MyInputField
                        icon={<BiSolidEnvelope className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
                        type="text"
                        placeholder="E-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        // required
                    />
                    {errorMessages.includes("Invalid email") && (
                        <div className="text-red-500">Invalid email</div>
                    )}
                </div>

                <div className="mb-4">
                    <MyInputField
                        icon={<SiLinkedin className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
                        type="text"
                        placeholder="Your LinkedIn"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        // required
                    />

                    {errorMessages.includes("Invalid url") && (
                        <div className="text-red-500">Invalid url</div>
                    )}
                </div>

                <div className="mb-4">
                    <MySelectField name="tech" options={stacktechs}
                        value={formData.message}
                        onChange={handleChange}
                        // required
                    />

                    {errorMessages.includes("String must contain at least 3 character(s)") && (
                        <div className="text-red-500">Tech field must contain at least 3 character(s)</div>
                    )}
                </div>

                <div className="mb-4">
                    <MyTextArea
                        label="Your message"
                        id="message"
                        rows={4}
                        placeholder="Write your thoughts here..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        // required
                    />
                    {errorMessages.includes("String must contain at least 100 character(s)") && (
                        <div className="text-red-500">String must contain at least 100 character(s)</div>
                    )}
                </div>

                <div className="mb-4">
                <button
  type="submit"
  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center mobile-button"
>
  {loading}
</button>

                </div>
            </form>
        </>
    );
}


