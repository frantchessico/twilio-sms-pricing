
import { SiHearth } from "react-icons/si";
import { AiFillHeart } from "react-icons/ai"
import { BiLinkExternal } from 'react-icons/bi'
import Author from "./author";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { IBlogPosts } from "@/lib/data";
import Link from "next/link";


interface BlogShowcaseProps {
  blog: IBlogPosts;

}

export default function BlogPosts({blog}: BlogShowcaseProps) {


  return (
    <div className="">
      <div className="space-y-2 ">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
          <Link href={blog.url} target="_blank">
        <BiLinkExternal/>
        </Link>
            <h3 className="font-semibold leading-none tracking-tight">
              {blog.title} 
              
            </h3>
          </div>
          




        </div>
        <p className="text-sm text-muted-foreground pb-2">
          {blog.description}
          
        </p>
       
       
        <Author name={blog.user.name} username={blog.user.username} profile_image={blog.user.profile_image}/>
       <Separator />
      </div>
    </div>
  );
}
