"use client";
import { useState, useEffect } from "react";
import selector from "@/app/rtk/selector";
import Link from "next/link";
export default function Header() {

  interface Link {
    name: string;
    link: string;
    typelink: string;
  
  }
  const { token } = selector();
  let tab: Link[] = [
    { name: "accueil", link: "/", typelink: "default"},
    { name: "inscription", link: "/inscription", typelink: "deconnected" },
    { name: "connection", link: "/connection", typelink: "deconnected" },
    { name: "panier", link: "/panier", typelink: "connected" },
    { name: "déconnection", link: "/deconnection", typelink: "connected" }
  ];
  const [tablink, setTabLink] = useState<Link[]>(tab);
  useEffect(() => {
    setTabLink(
      tab.filter((link) => link.typelink === "default" || 
      (link.typelink === "connected" && token) ||
        (link.typelink === "deconnected" && !token))
    );
  }, [token]);

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
                <Link
                  className="text-blue-500 underline"
                  key={index}
                  href={link.link}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
