import { TagIcon } from "@heroicons/react/24/solid";

export default function SingleProject({ title, category, text, tag }) {
  return (
    <div className="flex flex-col transition duration-500 bg-white shadow-lg hover:shadow-2xl">
      <div className="w-full h-52 border bg-center bg-[url('../assets/project-card-bg.jpg')]">
      </div>
      <div className="flex flex-col justify-between p-4 h-60">
        <div className="flex flex-col text-gray-600 gap-y-1">
          <p className="font-bold">{title}</p>
          <p>{category}</p>
          <p>{text}</p>
        </div>
        <div className="flex items-center pt-2 text-gray-600 border-t gap-x-2">
          <TagIcon className="w-5 text-teal-600" />
          <p className="text-sm">{tag}</p>
        </div>
      </div>
    </div>
  );
}
