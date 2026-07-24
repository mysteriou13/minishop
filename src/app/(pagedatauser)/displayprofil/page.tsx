"use client";
import { useProfileUserQuery } from "@/app/rtk/api/apiUser";
import Link from "next/link";
import selector from "@/app/rtk/selector";
import { useEffect } from "react";
import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";
import { useRouter } from "next/navigation";
import NavLinkUser from "@/app/components/NavLinkUser/NavLinkUser";
export default function Profil() {
  const router = useRouter();
  const { token } = selector();
  const { data, isLoading } = useProfileUserQuery();

  useEffect(() => {
    if (!token) {
      router.replace("/connection");
    }
  }, [token]);

  return (
    <div>
      <div>
        <div>
         
        </div>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {data?.databack?.map((item) => (
            <div key={item.name}>
              <strong>{item.name} :</strong> {item.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
