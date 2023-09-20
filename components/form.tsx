'use client';
import { z } from "zod";
import Footer from "@/components/footer";
import MyInputField from "@/components/input-field";


import MySelectField from "@/components/select-input-field";
import { useEffect, useState } from "react";

import { FormEvent } from "react";
import { BiSearch, BiSolidEnvelope, BiSolidUser } from "react-icons/bi";
import { SiLinkedin } from "react-icons/si";

import { contactService, searchCountry } from "@/services/contact.service";
import Success from "./messages/Success";
import Error from "./messages/Error";
import { allCountries } from "@/services/contact.service";
import { CountryTable } from "./table";


export function MyForm() {
    const [tabControl, setTabControl] = useState(false)
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    const [countries, setCountries] = useState<string[]>([])
    const [tableDatas, setTableDatas] = useState([]);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState("Let's go");
    const [formData, setFormData] = useState({
        country: '',
    });
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    useEffect(() => {
        allCountries().then(countries => {
            setCountries(countries)
        }).catch(error => {
            console.log(error)
        })
    }, [''])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTabControl(false)
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        
        const filteredCountries = countries.filter((country) =>
            country.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(filteredCountries);
        setSelectedCountry(null); 
    };

    const handleCountrySelect = (country: string) => {
        setSelectedCountry(country);
        setFormData({ ...formData, country: country });
        setSuggestions([]);
    };

    async function handleFormSubmit(e: FormEvent): Promise<any> {
        e.preventDefault();
        setLoading('Loading...')
        const { country } = formData;

        try {
            const { data }: any = await searchCountry(country);
            setTableDatas(data)
            setLoading("Let's go")
            setTabControl(true)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(tableDatas)

    return (
        <>

            {error ? <Error /> : ''}

            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <MyInputField
                        icon={<BiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
                        type="text"
                        placeholder="Search by country and see the prices we offer"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        btnText={loading}
                    />

                    {suggestions.length > 0 && !selectedCountry && (
                        <ul className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleCountrySelect(suggestion)}
                                    className="cursor-pointer px-4 py-2"
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}

                    
                    {errorMessages.includes("country must contain at least 3 character(s)") && (
                        <div className="text-red-500">country must contain at least 3 character(s)</div>
                    )}
                    {errorMessages.includes("country must contain at least 3 character(s)") && (
                        <div className="text-red-500">country must contain at least 3 character(s)</div>
                    )}
                </div>
            </form>

            {tabControl? <CountryTable data={tableDatas}  />: ''}
            <div className="relative overflow-x-auto">

            </div>
        </>
    );
}


