import React from 'react'
import Image from "next/image";
import { Icon } from '@iconify/react/dist/iconify.js';
import {
    motion,
    useScroll,
} from "framer-motion";

const index = () => {
      const { scrollYProgress: pageScroll } = useScroll();
    
  return (
      <div className='bg-[#e9e4d9] min-h-screen'>
          <motion.div
              style={{ backgroundColor: "#e9e4d9", color: "#000" }}
              className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4"
          >
              <Image
                  src={
                      pageScroll.get() > 0.3 ? "/logo-white.png" : "/logo-2.png"
                  }
                  alt="nueve-logo"
                  width={220}
                  height={120}
              />
              <div className="flex items-center gap-4">
                  <h3 className="m-0">EN</h3>
                  <h3 className="m-0">EL</h3>
                  <Icon
                      icon="mdi-light:menu"
                      className="cursor-pointer"
                      width="40"
                      height="40"
                  />
              </div>
          </motion.div>
      </div>
  );
}

export default index