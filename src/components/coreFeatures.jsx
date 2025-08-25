import { motion } from "framer-motion";
import { 
  MdQrCode, 
  MdPeopleAlt, 
  MdHistory, 
  MdVisibilityOff, 
  MdInsights, 
  MdLock 
} from "react-icons/md";
import tablebox from "../images/tablebox.png";

const features = [
  {
    image: tablebox,
    icon: <MdQrCode className="text-7xl text-[#1C1C1C] mb-8" />,
    title: "UPI & QR payment",
    desc: "Instantly collect payments anytime",
  },
  {
    image: tablebox,
    icon: <MdPeopleAlt className="text-7xl text-[#1C1C1C] mb-8" />,
    title: "Track Customer",
    desc: "Know who paid, how much, and when",
  },
  {
    image: tablebox,
    icon: <MdHistory className="text-7xl text-[#1C1C1C] mb-8" />,
    title: "Payment History",
    desc: "Filter dues by customer or date",    
  },
  {
    image: tablebox,
    icon: <MdVisibilityOff className="text-7xl text-[#1C1C1C] mb-8" />,
    title: "Private Access",
    desc: "Only your business sees its data",
  },
  {
    image: tablebox,
    icon: <MdInsights className="text-7xl text-[#1C1C1C] mb-8" />,
    title: "Smart Insights",
    desc: "Quick reports on total dues received",
  },
  {
    image: tablebox,
    icon: <MdLock className="text-7xl text-[#1C1C1C] mb-8" />,
    title: "Data Security",
    desc: "Bank-level protection, always on",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { 
    transition: { staggerChildren: 0.2, delayChildren: 0.2 } 
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};

const CoreFeatures = () => (
  <section className="py-16 overflow-hidden">
    {/* Title */}
    <motion.h2
      className="text-2xl md:text-4xl font-normal text-center mb-12 text-gray-900"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Core Features
    </motion.h2>

    {/* Cards */}
    <motion.div
      className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4"
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
            scale: 1.03,
            boxShadow: "0px 12px 30px rgba(0,0,0,0.08)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-[#EDF1F3E3] rounded-[6vh] px-6 py-8 lg:px-10 2xl:py-10 flex flex-col items-start shadow-sm border border-gray-100 min-h-[180px] cursor-default"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 250, damping: 12 }}
          >
            {f.icon}
          </motion.div>
          <h3 className="font-semibold text-xl lg:text-2xl text-[#1C1C1C] mb-2">
            {f.title}
          </h3>
          <p className="text-[#000000AD] text-base md:text-lg">{f.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default CoreFeatures;
