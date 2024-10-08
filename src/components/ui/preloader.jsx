import { motion } from "framer-motion";

export default function Preloader() {
  const slideUp = {
    initial: {
      y: 0,
    },
    exit: {
      y: "-100vh",
      transition: { duration: 0.8, ease: [0.83, 0, 0.17, 0.5] },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed left-0 top-0 z-[999] flex h-screen w-screen items-center justify-center bg-white-100"
    >
      <motion.p
        className="text-2xl font-bold tracking-tight text-orange-500"
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 0.5] }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Create by tn823
      </motion.p>
    </motion.div>
  );
}
