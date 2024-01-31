"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        {children}
      </motion.div>
      {/* <motion.div */}
      {/*   className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary" */}
      {/*   initial={{ x: "100%", width: "100%" }} */}
      {/*   animate={{ x: "0%", width: "0%" }} */}
      {/*   transition={{ duration: 0.4, ease: "easeInOut" }} */}
      {/* ></motion.div> */}
      {/* <motion.div */}
      {/*   className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light" */}
      {/*   initial={{ x: "100%", width: "100%" }} */}
      {/*   animate={{ x: "0%", width: "0%" }} */}
      {/*   transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }} */}
      {/* ></motion.div> */}
      {/* <motion.div */}
      {/*   className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark" */}
      {/*   initial={{ x: "100%", width: "100%" }} */}
      {/*   animate={{ x: "0%", width: "0%" }} */}
      {/*   transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2}} */}
      {/* ></motion.div> */}
      {/* {children} */}
    </>
  );
}
