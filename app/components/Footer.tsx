const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark">
      <div className="flex py-8 items-center justify-around">
        <span className="font-medium">Harry&apos;s Portfolio</span>
        <span className="hidden md:block">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div className="flex items-center font-medium">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>
          <span className="hidden md:block">, Next.js, TailwindCSS, and Vercel</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
