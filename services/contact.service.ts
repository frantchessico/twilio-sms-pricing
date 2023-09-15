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

  

  const apiUrl = 'https://api.franciscoinoque.tech/api/contact';

export  async function contactService(contact: IContact): Promise<AxiosResponse<any>> {
  try {
    return await axios.post(apiUrl, contact)
  } catch (error) {
    throw error;
  }
}


  

  
