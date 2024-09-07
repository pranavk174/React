import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Card({ post }) {
  return (
    <div className="space-y-3">
      <div>
        {" "}
        <NavLink to={`/blog/${post.id}`}>
          {" "}
          <h2 className="font-bold hover:underline">{post.title}</h2>
        </NavLink>
        <p className="text-[.9rem]">
          By <i>{post.author} </i>on 
         <NavLink to={`/category/${post.category.replaceAll(" ","-")}`}> <b className="hover:underline">{post.category}</b></NavLink>
        </p>
        <p className="text-[.9rem]"> Posted On {post.date}</p>
      </div>
      <p className="wrap">{post.content}</p>

      <ul className="flex space-x-2">
        {post.tags.map((tag, index) => {
          return (
           <NavLink key={index} to={`/tag/${tag.replaceAll(" ","-")}`}>
             <span  className="text-[.8rem] text-blue-700 hover:underline">
              {" "}
              {`#${tag}`}
            </span>
           </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
