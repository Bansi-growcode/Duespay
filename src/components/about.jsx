import { FaShieldAlt, FaBolt, FaEye, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../images/Modern Blue P Letter Logo-cropped.svg";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

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

  const values = [
    { icon: <FaShieldAlt className="text-[#fbbf24] text-2xl" />, text: "Security and Privacy First" },
    { icon: <FaBolt className="text-[#38bdf8] text-2xl" />, text: "Fast and Reliable Payments" },
    { icon: <FaEye className="text-[#a78bfa] text-2xl" />, text: "Transparent and Trackable Transactions" },
    { icon: <FaHeadset className="text-[#ef4444] text-2xl" />, text: "Exceptional Customer Support" },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#F9EFE5] via-[#f3e6d6] to-[#f9f6f2] py-20 px-4 min-h-screen flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Card */}
        <motion.div
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-16 border border-[#f3e6d6]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          {/* -- Logo & Heading -- */}
          <motion.div
            className="flex flex-col items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={logo}
              alt="DuesPay Logo"
              className="h-20 w-20 mb-4 drop-shadow-lg"
            />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              About Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto text-center">
              DuesPay is dedicated to transforming the way businesses and customers manage payments. Our mission is to make collections and payments effortless, secure, and transparent for everyone.
            </p>
          </motion.div>

          {/* About Text */}
          <motion.div
            className="space-y-6 text-gray-700 text-lg sm:text-xl leading-relaxed text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p>
              With DuesPay, you can send and receive UPI and QR payments instantly, track all transactions, and automate reminders—eliminating manual entries and follow-ups. Our platform is designed for simplicity, speed, and reliability, so you can focus on growing your business.
            </p>
            <p>
              We believe in empowering businesses of all sizes with powerful tools and a clean, intuitive interface. From secure payment processing to real-time tracking, DuesPay helps you stay organized and in control.
            </p>
            <p>
              Join thousands of satisfied users who trust DuesPay for their payment needs. Experience the future of business payments—simple, smart, and seamless.
            </p>
          </motion.div>

          {/* Values & Contact */}
          <motion.div
            itial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariants}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Our Values */}
            <motion.div
              className="bg-[#F9EFE5] rounded-2xl shadow p-6 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 text-center">
                Our Values
              </h3>
              <ul className="space-y-4 text-gray-700 text-lg sm:text-xl">
                {values.map((v, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 group"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={cardVariants}
                  >
                    {v.icon}
                    <span className="group-hover:text-black transition-colors">{v.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Us */}
            <motion.div
              itial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
              className="bg-[#F9EFE5] rounded-2xl shadow p-6 flex flex-col justify-center cursor-pointer"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 text-center">
                Contact Us
              </h3>
              <p className="text-gray-700 text-lg sm:text-xl mb-4 text-center">
                Email:{" "}
                <a
                  href="mailto:hello@duespay.com"
                  className="underline hover:text-black transition"
                >
                  hello@your.company.com
                </a>
              </p>
              <p className="text-gray-700 text-lg sm:text-xl text-center">
                Address: 123, Tech Park, Bengaluru, India
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
