import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
        <div className="rounded-full w-14 h-14 bg-[#D1E016] flex justify-center items-center">
          <Image className="rounded-full" src="/favicon.ico" alt="logo" width={50} height={50} />
        </div>
    </Link>
  );
}

export default Logo;
