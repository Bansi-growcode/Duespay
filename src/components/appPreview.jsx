import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import mobile1 from "../images/mobile1.png";
import phone2 from "../images/phone2.png";
import mobile3 from "../images/mobile3.png";

const slides = [
  {
    img: mobile1,
    title: "HOME DASHBOARD",
    desc: "Track all your dues in one place",
  },
  {
    img: phone2,
    title: "MAKE A PAYMENT",
    desc: "Enter amount and pay via UPI pay",
  },
  {
    img: mobile3,
    title: "SCAN & PAY",
    desc: "Instantly scan QR codes to send money",
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AppPreview = () => (
  <section className="py-16 px-4 overflow-hidden">
    {/* Title */}
    <motion.h2
      className="text-2xl md:text-4xl font-normal text-center mb-4 text-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6 }}
      variants={fadeUp}
    >
      App Preview
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      className="text-center text-xl font-medium text-[#00000096] mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6 }}
      transition={{ delay: 0.2 }}
      variants={fadeUp}
    >
      Swipe through the core features of the app.
    </motion.p>

    {/* Swiper */}
    <motion.div
      className="max-w-full mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeUp}
    >
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        className="rounded-3xl"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 12px 35px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-[#232323] rounded-3xl flex flex-col gap-4 lg:flex-row items-center p-6 md:p-10 h-full cursor-pointer"
            >
              {/* Phone Image */}
              <motion.img
                src={slide.img}
                alt={slide.title}
                className="h-40 sm:h-48 md:h-40 lg:h-60 xl:h-60 mb-6 md:mb-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
              />

              {/* Text Content */}
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h3 className="text-white text-xl sm:text-2xl md:text-2xl lg:text-2xl 2xl:text-3xl font-normal mb-3 whitespace-nowrap">
                  {slide.title}
                </h3>
                <p className="text-[#FFFFFFB2] text-base sm:text-lg md:text-xl lg:text-2xl">
                  {slide.desc}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  </section>
);

export default AppPreview;
