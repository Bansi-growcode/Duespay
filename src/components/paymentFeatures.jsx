import { motion } from "framer-motion";
import solar from "../images/solar_book.png";
import Vector from "../images/Vector.png";
import phone from "../images/phone1.png";

const features = [
  {
    icon: solar,
    title: "No more manual entries or follow-ups",
    bg: "bg-[#E8F3FA]",
  },
  {
    icon: Vector,
    title: "Accept UPI & QR payments in seconds",
    bg: "bg-[#FDF2E3]",
  },
  {
    icon: phone,
    title: "Manage business and customer dues from one app",
    bg: "bg-[#E8EAFB]",
  },
];

// Container animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};

const PaymentFeatures = () => (
  <section className="pb-12 pt-28 overflow-hidden">
    {/* Title */}
    <motion.h2
      className="text-2xl md:text-4xl font-normal text-center mb-12 text-gray-900"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Never Miss a Payment Again
    </motion.h2>

    {/* Cards */}
    <motion.div
      className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {features.map((f, i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 12px 35px rgba(0,0,0,0.08)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 py-10 px-6 md:px-8 lg:px-14 2xl:px-20 flex flex-col items-center text-center cursor-default"
        >
          <motion.div
            className={`rounded-3xl w-24 h-24 flex items-center justify-center mb-4 ${f.bg}`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250, damping: 12 }}
          >
            <img src={f.icon} alt={f.title} className="w-12 h-12 object-contain" />
          </motion.div>
          <p className="mt-2 text-gray-700 text-lg md:text-xl font-medium leading-snug">
            {f.title}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default PaymentFeatures;
