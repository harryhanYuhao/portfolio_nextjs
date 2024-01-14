const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark">
      <div className="flex py-8 items-center justify-around">
        <span className="font-medium">Harry's Portfolio, {new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center font-medium">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>, Next.js, TailwindCSS, and Vercel
        </div>

      </div>
    </footer> 
  )
}

export default Footer;
