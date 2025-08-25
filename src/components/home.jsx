import { motion } from "framer-motion";
import bgImage from "../images/homebg.png"
import bgImagehome from "../images/Group 12.png"
import { RiDownload2Line } from "react-icons/ri";

const Home = () => {
    return (
        <section className="bg-[#F9EFE5] p-2">
            <main className="relative mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between max-w-screen-2xl gap-10">
                
                {/* Left Side: Text */}
                <motion.div
                    className="z-10 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-3xl sm:text-4xl lg:text-4xl 2xl:text-5xl lg:w-[65%] w-full 2xl:w-[50%] font-normal text-gray-900 leading-snug mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Simplify Business Dues. One Tap at a Time.
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg lg:text-2xl lg:w-[65%]  2xl:w-[51%] w-full text-[#00000099] mb-8"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Fast Secure, Trackable UPI payments for your business
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start"
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-3xl font-medium text-sm lg:text-sm 2xl:text-lg hover:bg-[#F9EFE5] hover:text-black border border-black transition w-full sm:w-auto"
                        >
                            <RiDownload2Line className="text-xl lg:text-2xl" /> Download App
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 bg-[#F9EFE5] border border-black px-5 py-3 font-medium rounded-3xl text-sm lg:text-sm 2xl:text-lg hover:bg-black hover:text-white transition w-full sm:w-auto"
                        >
                            <RiDownload2Line className="text-xl lg:text-2xl" /> Watch Demo
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right Side: Card Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="flex justify-center md:justify-end items-center relative "
                >
                    <motion.img
                        src={bgImage}
                        alt="Card"
                        className="block md:hidden w-[700px] object-contain z-10 right-0 top-2 md:top-24 lg:top-32 2xl:top-44 relative"
                    />
                    <motion.img
                        src={bgImagehome}
                        alt="Card"
                        className="hidden md:block w-[700px] object-contain z-10 right-0 top-2 md:top-24 lg:top-32 2xl:top-44 relative"
                    />
                </motion.div>

            </main>
        </section>
    )
}

export default Home;
