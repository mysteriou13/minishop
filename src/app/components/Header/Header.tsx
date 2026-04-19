import Link from "next/link";
export default function Header() {
  return (
    <div>
      <div className="flex">
        <div>mini shop</div>
        <div>
         <input type="search" id="first_name" className="bg-neutral-secondary-medium border " placeholder="John" required />
        </div>
        <div className="flex justify-between gap-5">
          <div> <Link href = "/inscription" className="text-blue-500 underline">par encore client</Link></div> 
          <div> <Link  href = "/connection"className="text-blue-500 underline">déjà client </Link></div> 
          <div>panier</div>
        </div>
      </div>
    </div>
  );
}
