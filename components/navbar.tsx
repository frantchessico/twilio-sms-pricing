"use client";
import { Button } from "./ui/button";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Home, Briefcase, Mail, Presentation } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BiRocket } from "react-icons/bi";

export default function Navbar() {
  const router = useRouter();

  function navigateTo(path: string) {
    router.push(path);
  }

  return (
    <div className="border bg-card text-card-foreground p-3 shadow-sm md:rounded-lg flex justify-between items-center top-0 sticky z-50">
      <Logo onClick={() => navigateTo("/")} />
      {/* Navigation Menus */}
      <div className="space-x-3 items-center">
        <Button
          onClick={() => navigateTo("/")}
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <Home className=" h-4 w-4" />
          <span className="hidden md:block ml-2">Home</span>
        </Button>
        <Button
          onClick={() => navigateTo("/#projects")}
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <Presentation className=" h-4 w-4" />
          <span className="hidden md:block ml-2">Projects</span>
        </Button>
        <Button
          onClick={() => navigateTo("/#blog")}
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <Briefcase className=" h-4 w-4" />
          <span className="hidden md:block ml-2">Blog</span>
        </Button>
        <Button
          onClick={() => navigateTo("/#contact")}
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <Mail className=" h-4 w-4" />
          <span className="hidden md:block ml-2">Contact</span>
        </Button>

        <Link href={"/challenge-me"}>
       <Button
          variant="outline"
          size="sm"
          className="ml-auto h-8"
        >
          <BiRocket className=" h-4 w-4" />
          <span className="hidden md:block ml-2">Challenge-me</span>
        </Button>
       </Link>
        <ModeToggle />
      </div>
    </div>
  );
}
