"use client";
import ClientOnly from "./components/ClientOnly";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { motion } from "framer-motion";

const BasePageLayout = (props: React.PropsWithChildren) => {
  return (
    <motion.main initial={{ y: 0 }} className="pb-10">
      <ClientOnly>
        <div className="absolute top-0 w-full bg-transparent z-50 overflow-x-hidden">
          <Navbar />
        </div>
      </ClientOnly>
      {props.children}
      <Footer />
    </motion.main>
  );
};

export default BasePageLayout;
