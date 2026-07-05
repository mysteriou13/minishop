"use client";
import From from "@/app/components/From/From";
import selector from "@/app/rtk/selector";
interface PageFromProps {  
  title: string;
  handleSubmit: () => void | Promise<void>;
}

export default function PageFrom({
  handleSubmit,
  title, 
}: PageFromProps) {
  return (
    <div>
      <div
        className="MainDivPageFrom">
        <p className="font-bold text-[24px]">{title}</p>
        <From
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
