import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark">
      <div className="flex py-8 items-center justify-around font-medium">
        <Link href="/about">
          <span >Harry&apos;s Portfolio </span>
        </Link>
        <span className="hidden md:block">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div className="flex items-center ">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>
          <span className="hidden md:block">, Next.js, TailwindCSS, and Vercel</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
