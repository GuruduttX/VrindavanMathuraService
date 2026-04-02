"use client";

import { motion } from "framer-motion";

export default function AboutHero() {

  return (
    
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-amber-50 py-32">

      {/* Floating Images LEFT */}
      <div className="hidden lg:block absolute left-10 top-20 space-y-6 mt-10">
        <FloatingImage src="https://dynamic.tourtravelworld.com/package-images/photo-big/dir_17/496456/348961.jpg" size="w-24 h-24" />
        <FloatingImage src="https://static2.tripoto.com/media/filter/tst/img/OgData/1609564964_beautiful_ghats_of_vrindavan_1.jpg" size="w-20 h-20 ml-10" />
        <FloatingImage src="https://th.bing.com/th/id/R.a886750a47c913b6baeffa7c6092863b?rik=H5hmCUB9Y651WQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-gCnO4P6jfMg%2fT8n4CTQoLJI%2fAAAAAAAABog%2fBbwi6VVQzZo%2fs1600%2fRadha%2bSyamasundar.jpg&ehk=7rY2XINAqReORFq%2fn0r%2fkkxojgS%2fbi7kNck5R9QZGE0%3d&risl=&pid=ImgRaw&r=0" size="w-28 h-28" />
      </div>

      {/* Floating Images RIGHT */}
      <div className="hidden lg:block absolute right-10 top-24 space-y-6 mt-10">
        <FloatingImage src="https://mathuravrindavantourism.com/wp-content/uploads/2025/02/Mathura-Vrindavan-Gokul.jpg" size="w-24 h-24" />
        <FloatingImage src="https://www.indiaparenting.com/images/76/krishnas-life-in-gokul.jpg" size="w-20 h-20 mr-8" />
        <FloatingImage src="https://vrindavanmathura.com/wp-content/uploads/Daan_Ghati_Temple_in_Govardhan-scaled.jpg" size="w-28 h-28" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-semibold text-gray-900 leading-tight"
        >
          Your Spiritual Journey,
          <span className="block text-pink-600 italic">
            Perfectly Curated.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-gray-700"
        >
          Explore expert-designed Mathura & Vrindavan tours —
          crafted with devotion, authenticity, and comfort.
        </motion.p>

      </div>
    </section>
  );
}

/* Floating Image Component */
function FloatingImage({
  src,
  size,
}: {
  src: string;
  size: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative ${size} rounded-xl overflow-hidden shadow-xl`}
    >
      <img
        src={src}
        alt="Tour Preview"
        
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
}