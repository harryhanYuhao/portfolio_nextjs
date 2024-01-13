"use client";

import { motion } from 'framer-motion';

export default function Square() {
    return (
        <div className='container m-auto border-2 border-solid border-black text-center text-black'>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
            >
                <div className='box m-auto'>
                </div>
            </motion.div>

        </div>
    );
}
