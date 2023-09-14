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

export function MyForm() {
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
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
        try {
            const datas = ContactSchema.parse(formData)
           const result = await contactService(datas)
           console.log(result)
            setErrorMessages([]);
        } catch (error) {
            console.log(error)
            if (error instanceof z.ZodError) {
                const messages = error.errors.map((e) => e.message);
                setErrorMessages(messages);
            }
        }

    }
const toggleSuccess = () => {
    
}

    return (
        <>
            <div id="alert-border-3" className="flex items-center p-4 mb-4 text-green-800  dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div className="ml-3 text-sm font-medium">
                    A simple success alert with an <a href="#" className="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
                </div>
                <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-border-3" aria-label="Close">
                    <span className="sr-only">Dismiss</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <MyInputField
                        icon={<BiSolidUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
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
                        required
                    />

                    {errorMessages.includes("String must contain at least 2 character(s)") && (
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
                        required
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
                        required
                    />

                    {errorMessages.includes("Invalid url") && (
                        <div className="text-red-500">Invalid url</div>
                    )}
                </div>

                <div className="mb-4">
                    <MySelectField name="tech" options={stacktechs}
                        value={formData.message}
                        onChange={handleChange}
                        required
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
                        required
                    />
                    {errorMessages.includes("String must contain at least 100 character(s)") && (
                        <div className="text-red-500">String must contain at least 100 character(s)</div>
                    )}
                </div>

                <div className="mb-4">
                    <button

                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                    >
                        <svg
                            aria-hidden="true"
                            role="status"
                            className="inline w-4 h-4 mr-3 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Seu SVG de carregamento aqui */}
                        </svg>
                        Loading...
                    </button>
                </div>
            </form>
        </>
    );
}
function setTech(selectedTech: string) {
    throw new Error("Function not implemented.");
}

