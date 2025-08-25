import { motion } from "framer-motion";
import feature1 from "../images/account.jpg";
import feature2 from "../images/account2.jpg";
import feature3 from "../images/account3.jpg";

const features = [
  {
    img: feature1,
    title: "Create Account",
    desc: "Sign up as Customer or Business",
  },
  {
    img: feature2,
    title: "Pay or Get Paid",
    desc: "Instantly pay or receive dues with confirmation",
  },
  {
    img: feature3,
    title: "Share or Scan",
    desc: "Send UPI ID or Scan QR Code",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CoreFeaturesCard = () => (
  <section className="py-16 bg-[#F9EFE5] rounded-[6vh] px-2 lg:mx-10 mx-2 overflow-hidden">
    {/* Title */}
    <motion.h2
      className="text-2xl md:text-4xl font-normal text-center mb-12 text-gray-900"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Key Features Section
    </motion.h2>

    {/* Cards */}
    <motion.div
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
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
            boxShadow: "0px 12px 35px rgba(0,0,0,0.12)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-white rounded-[6vh] shadow-sm border border-gray-100 p-6 flex flex-col text-start cursor-pointer"
        >
          <motion.img
            src={f.img}
            alt={f.title}
            className="object-cover rounded-[6vh] mb-6"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          />
          <h3 className="font-semibold text-2xl text-gray-900 mb-2">{f.title}</h3>
          <p className="text-[#000000AD] text-lg md:text-xl">{f.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default CoreFeaturesCard;
