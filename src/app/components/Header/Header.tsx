"use client";
import { useState, useEffect } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser,FaUserSlash,FaHome } from "react-icons/fa";
import selector from "@/app/rtk/selector";
import Link from "next/link";
export default function Header() {

  interface Link {
    name: string;
    link: string;
    typelink: string;
    icon?: React.ReactNode;

  }
  const { token } = selector();
  let tab: Link[] = [
    { name: "accueil", link: "/", typelink: "default", icon: <FaHome /> },
    { name: "inscription", link: "/inscription", typelink: "deconnected", icon: <FaUser /> },
    { name: "connection", link: "/connection", typelink: "deconnected", icon: <FaUser /> },
    { name: "panier", link: "/panier", typelink: "connected", icon: <FaBasketShopping /> },
    { name: "profil", link: "/displayprofil", typelink: "connected", icon: <FaUser /> },
    { name: "déconnection", link: "/deconnection", typelink: "connected", icon: <FaUserSlash /> }
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
              <div  key={index}>
                <Link
                  className="text-blue-500 underline"
                  key={index}
                  href={link.link}
                >
                  <div className="flex items-center">
                    {link.icon && <span className="mr-2">{link.icon}</span>}
                    {link.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
