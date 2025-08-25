import faqcard1 from '../images/faqcard1.svg';
import faqcard2 from '../images/faqcard2.png';
import { motion } from "framer-motion";

const faqs = [
  {
    img: faqcard1,
    text: "How do I track customer payments?",
  },
  {
    img: faqcard2,
    text: "Can I use multiple UPI & IDs?",
  },
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FaqCard = () => (
  <section className="py-12 px-2">
    {/* Section Title */}
    <motion.h2
      className="text-2xl md:text-3xl font-normal text-center mb-12 text-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6 }}
      variants={fadeUp}
    >
      Frequently Asked Questions
    </motion.h2>

    {/* FAQ Cards */}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-center">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={cardVariants}
          whileHover={{ scale: 1.05, boxShadow: "0px 12px 30px rgba(0,0,0,0.15)" }}
          className="flex items-center bg-white rounded-[48px] shadow-md px-8 py-6 w-full md:w-[48%] min-h-[120px] cursor-pointer transition-all duration-300"
        >
          <motion.img
            src={faq.img}
            alt="FAQ"
            className="w-20 h-20 object-contain mr-6"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <span className="text-lg lg:text-2xl font-medium text-gray-900">{faq.text}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FaqCard;
