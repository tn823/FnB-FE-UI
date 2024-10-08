import { Outlet } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";

export default function Layout() {
  const isPresent = useIsPresent();

  return (
    <div className="bg-white-100 font-satoshi">
      <Outlet />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, delay: .5, ease: [0.83, 0, 0.17, 1] }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 h-screen w-screen bg-white-100 flex justify-center items-center"
      >
        <span className="font-bold text-2xl tracking-tight text-orange-500">
          Create by tn823
        </span>
      </motion.div>
    </div>
  );
}
