import React from 'react'
import { Link } from 'react-router-dom'

const BlogsCard = ({image, date, title, description, author}) => {
  return (
    <>
        <Link 
            to={`/blogs/${title}`}
            onClick={() => {
                window.scrollTo(0,0);
            }}
            state={{image, date, title, description, author }}
        >
         <div className="p-4 transition-all duration-500 shadow-lg hover:shadow-xl dark:bg-slate-950 dark:text-white">
          <div className="overflow-hidden">
            <img
              src={image}
              alt="No image"
              className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
          </div>
          <div className="flex justify-between pt-2 text-slate-600">
            <p>{date}</p>
            <p className="line-clamp-1">By {author}</p>
          </div>
          <div className="py-3 space-y-2">
            <h1 className="font-bold line-clamp-1">{title}</h1>
            <p className="line-clamp-2">{description}</p>
          </div>
        </div>

        </Link>
    </>
  )
}

export default BlogsCard