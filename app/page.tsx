
import Footer from "@/components/footer";
import { MyForm } from "@/components/form";





export default async function Home() {
  return (
    <div className="md:max-w-2xl min-w-ful mx-auto md:mt-8">
  
    <div className="md:min-w-[65vh] min-w-full space-y-10 text-center">
      <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Twilio</h1>
      <span className="text-3xl font-bold dark:text-white">SMS Pricing - SMS API and Messaging Service software pricing details.</span>
      <MyForm />
   
  </div>
  <Footer />
</div>

  );
}
