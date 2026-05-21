import Link from "next/link";
export default function Header() {
  return (
    <header>
      <div className="text-3xl font-bold">MiniShop</div>

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
        <div className="flex justify-between gap-5">
          <div className="Form ">
            <Link href="/inscription" className="Link">
              par encore client
            </Link>
          </div>
          <div className="Form ">
            {" "}
            <Link href="/connection" className="Link">
              déjà client{" "}
            </Link>
          </div>
          <div className="Form ">panier</div>
        </div>
      </div>
    </header>
  );
}
