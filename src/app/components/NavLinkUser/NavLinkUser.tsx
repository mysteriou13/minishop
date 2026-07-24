import Link from "next/link";
export default function NavLinkUser() {
  return (
    <div className="flex justify-evenly">
      <div>
        <Link href="/displayprofil" className="text-blue-500 underline">
          <h1>Mon profil</h1>
        </Link>
      </div>
      <div>
        <Link href="/updateUser" className="text-blue-500 underline">
          <h1>Mettre à jour mon profil</h1>
        </Link>
      </div>
    </div>
  );
}