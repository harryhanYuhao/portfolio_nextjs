import React from "react";
import Link from "next/link";

const Menu = ({ className, links, onClick }: { className?: string; links: any; onClick: any }) => {
  return (
    <div
      className={`${className} flex-row justify-center rounded-xl bg-gray-100 space-x-1 space-y-1`}
    >
      {links.map((link: any) => {
        return (
          <div key={link.title} className="flex justify-center">
            <button onClick={onClick} className="text-base hover:bg-gray-300 rounded-xl">
              <Link href={link.href}>
                <span className=" py-0">{link.title}</span>
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
