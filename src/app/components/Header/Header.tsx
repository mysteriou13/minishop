export default function Header() {
  return (
    <div>
      <div className="flex">
        <div>mini shop</div>
        <div>
         <input type="search" id="first_name" className="bg-neutral-secondary-medium border " placeholder="John" required />
        </div>
        <div className="flex justify-between gap-5">
          <div> par encore client</div> <div>déjà client</div> <div>panier</div>
        </div>
      </div>
    </div>
  );
}
