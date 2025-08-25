import user1 from '../images/user1.jpg';
import user2 from '../images/user2.jpg';
import user3 from '../images/user3.jpg';
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    img: user1,
    name: "Albert Flores",
    text: "Makes monthly collections super easy!",
  },
  {
    img: user2,
    name: "Jerome Bell",
    text: "Clean UI and very fast payments.",
  },
  {
    img: user3,
    name: "Arlene McCoy",
    text: "Love how I can track who paid when.",
  },
];

// Animation for cards
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

// Animation for section title
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Testimonials = () => (
  <section className="py-12">
    {/* Section Title */}
    <motion.h2
      className="text-2xl md:text-3xl font-normal text-center mb-10 md:mb-20 text-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6 }}
      variants={fadeUp}
    >
      WHAT OUR USERS SAY
    </motion.h2>

    {/* Testimonial Cards */}
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-2 sm:px-4 py-6 sm:py-10">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
          }}
          className="relative rounded-2xl shadow-sm border bg-[#D9D9D9] border-gray-100 flex flex-col gap-2 items-center pt-8 pb-12 sm:gap-4 cursor-pointer"
        >
          <img
            src={t.img}
            alt={t.name}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-lg -mt-16 sm:-mt-24 md:-mt-28"
          />
          <h3 className="font-bold text-xl sm:text-2xl text-gray-900 text-center">{t.name}</h3>
          <p className="text-gray-900 font-semibold text-base sm:text-base lg:text-lg px-2 sm:px-5 text-center mb-2">
            {t.text}
          </p>
          <div className="absolute left-0 bottom-0 flex justify-between px-2 w-full bg-[#00000096] rounded-b-2xl py-2 sm:py-3">
            {[...Array(5)].map((_, idx) => (
              <FaStar key={idx} className="text-yellow-400 text-base sm:text-xl mx-1" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
