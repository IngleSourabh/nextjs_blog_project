"use client";

import React, { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const data: any = [
  { id: "1", name: "Sourabh" },
  { id: "2", name: "Pratik" },
  { id: "3", name: "Akshay" },
];

const Experimenate = () => {
  
  const searchParams = useSearchParams();
  
  const pathname = usePathname();
  const { replace } = useRouter();
  console.log(searchParams.get("id")?.toString(),"searchParams");

  function handleClick(id: any) {
    
    const params = new URLSearchParams(searchParams);
    console.log(params.toString(),"Before");
    // params.set("id", id);
    // let idss =  params.get('id');
    // console.log(idss,'iiiiiiddd')
    if (id) {
      params.set("id", id);
    } 
    else {
      params.delete("id");
    }
    replace(`${pathname}?${params.toString()}`);
    
  }
  return (
    <div>
      {data.map((data: any) => {
        return (
          <li
            key={data.id}
            onClick={() => handleClick(data.id)}
            style={{ color: searchParams.get("id")?.toString() === data.id ? "red" : "blue" }}
          >
            {data.name}
          </li>
        );
      })}

      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="Search..."
        onChange={(e) => {
            handleClick(e.target.value);
        }}
        defaultValue={searchParams.get("id")?.toString()}
      />
    </div>
  );
};

export default Experimenate;
