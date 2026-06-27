"use client";
import { useState, useEffect } from "react";
import selector from "@/app/rtk/selector";
import Link from "next/link";
export default function Header() {

  interface Link {
    name: string;
    link: string;
    typelink: string;
    visible: boolean;
  }

  const { token, loading } = selector();

  let tab: Link[] = [
    { name: "par encore client", link: "/inscription", typelink: "deconnected", visible: true },
    { name: "déjà client", link: "/connection", typelink: "deconnected", visible: true },
    { name: "panier", link: "/panier", typelink: "connected", visible: false },
    { name: "déconnection", link: "/deconnection", typelink: "connected", visible: false }

  ];

  const [tablink, setTabLink] = useState<Link[]>(tab)
 ;
  /*loading page*/

  useEffect(() => {
  
    if (token) {
      setTabLink(tab.map(link => ({ ...link, visible: link.typelink === "connected" })));
    } else {
      setTabLink(tab.map(link => ({ ...link, visible: link.typelink === "deconnected" })));
    }
 

  }, [token]);

   useEffect(() => {
    let token = localStorage.getItem('token');

    if (token) {
      setTabLink(tab.map(link => ({ ...link, visible: link.typelink === "connected" })));
    } 


  }, []);

  return (
    <header>
  

      <div className="flex">
        <div>
          <input
            type="search"
            id="first_name"
            className="bg-neutral-secondary-medium border "
            placeholder="John"
            required
          />
        </div>
        <div className="">
          <div className=" flex ml-5 gap-7">
            {tablink.map((link, index) => (
              <div key={index}>
              {link.visible && (
                <Link className="text-blue-500 underline" key={index} href={link.link}>
                  {link.name}
                </Link>
              )}
              </div>

            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
