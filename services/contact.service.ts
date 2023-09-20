import axios, { AxiosResponse } from "axios";

interface IContact {
    firstName: string;
    lastName: string;
    email: string;
    linkedin: string;
    tech: string;
    message: string;
  }
  
  export default IContact;

  // https://twilio-pricing-go-api-production.up.railway.app/search_csv

const apiUrl = 'https://twilio-pricing-go-api-production.up.railway.app';

export const allCountries = async() => {
  try {
    const { data } = await axios.get(`${apiUrl}/countries`);
    return data
  } catch (error) {
    return error
  }
}
export const searchCountry = async(countryName: string) => {
  try {
    const stucture = {
      "search_column": "Country",
      "search_value": countryName
    }
    const country = await axios.post(`${apiUrl}/search_csv`, stucture)
    return country
  } catch (error) {
    return error
  }
}

export  async function contactService(contact: IContact): Promise<AxiosResponse<any>> {
  try {
    return await axios.post(apiUrl, contact)
  } catch (error) {
    throw error;
  }
}


  

  
