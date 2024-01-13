"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function Logo() {
    {/* TODO: Color change animation on hover */}
  return (
    <Link href="/">
      <motion.div
        className="rounded-full"
        whileHover={{
          scale: 1.15,
          color: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
        }}
      >
        <div className="rounded-full w-14 h-14 bg-[#D1E016] flex justify-center items-center">
          <Image className="rounded-full" src="/favicon.ico" alt="logo" width={50} height={50} />
        </div>
      </motion.div>
    </Link>
  );
}

export default Logo;
