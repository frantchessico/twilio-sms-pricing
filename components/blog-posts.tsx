
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
            
            <h3 className="font-semibold leading-none tracking-tight">
              {blog.title}
            </h3>
          </div>
          


<button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<AiFillHeart/>
  <span className="sr-only">Notifications</span>
  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{blog.public_reactions_count}</div>
</button>

        </div>
        <p className="text-sm text-muted-foreground pb-2">
          {blog.description}
          
        </p>
        <Link href={blog.url} target="_blank">
        <BiLinkExternal/>
        </Link>
       
        <Author name={blog.user.name} username={blog.user.username} profile_image={blog.user.profile_image}/>
       <Separator />
      </div>
    </div>
  );
}
