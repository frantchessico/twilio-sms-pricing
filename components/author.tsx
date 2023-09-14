import { Calendar } from "lucide-react";

interface AuthorProps {
  name: string;
  profile_image: string
  username: string

}

export default function Author({ name, profile_image, username }: AuthorProps) {
  return (


    <div className="flex items-center space-x-4">
    <img className="w-10 h-10 rounded-full" src={profile_image} alt=""/>
    <div className="font-medium dark:text-white">
        <div>{name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{username}</div>
    </div>
</div>
  );
}
