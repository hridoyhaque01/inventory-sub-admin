import React from "react";
import { Link } from "react-router-dom";

function SearchBar({ title, value, onChange, path, children }) {
  return (
    <div className="bg-primaryMainDarkest p-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <h4 className=" text-whiteHigh text-2xl font-bold">{title}</h4>
        {children}
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <label
            className="absolute left-3 top-1/2 -translate-y-1/2"
            htmlFor="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="cursor-text"
            >
              <path
                d="M13.3137 12.0596H12.6553L12.422 11.8346C13.422 10.668 13.9387 9.07631 13.6553 7.38464C13.2637 5.06798 11.3303 3.21798 8.99701 2.93464C5.47201 2.50131 2.50534 5.46798 2.93867 8.99298C3.22201 11.3263 5.07201 13.2596 7.38867 13.6513C9.08034 13.9346 10.672 13.418 11.8387 12.418L12.0637 12.6513V13.3096L15.6053 16.8513C15.947 17.193 16.5053 17.193 16.847 16.8513C17.1887 16.5096 17.1887 15.9513 16.847 15.6096L13.3137 12.0596ZM8.31367 12.0596C6.23867 12.0596 4.56367 10.3846 4.56367 8.30964C4.56367 6.23464 6.23867 4.55964 8.31367 4.55964C10.3887 4.55964 12.0637 6.23464 12.0637 8.30964C12.0637 10.3846 10.3887 12.0596 8.31367 12.0596Z"
                fill="#797979"
              />
            </svg>
          </label>
          <input
            id="search"
            value={value}
            onChange={onChange}
            className="pl-9 p-3 h-full w-[512px] text-blackMid rounded-md border-none focus:outline-none bg-whiteHigh"
            type="text"
            name="searchInput"
            placeholder="Search"
          />
        </div>
        <div>
          <Link to={path} className="inline-flex p-3 bg-whiteHigh rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
                fill="#234B4C"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
