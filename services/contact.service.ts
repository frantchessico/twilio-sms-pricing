import axios from "axios";

interface IContact {
    firstName: string;
    lastName: string;
    email: string;
    linkedin: string;
    tech: string;
    message: string;
  }
  
  export default IContact;
  

export const contactService = async(contact: IContact) => {
    console.log(contact)
    try {
        const datas = await axios.post<IContact>('https://api.franciscoinoque.tech/api/contact', contact)
        
        return datas
    } catch (error) {
       return error 
    }
}