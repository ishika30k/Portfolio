import { motion, useScroll, useTransform } from 'motion/react'

const ParallaxBackground = () => {
  const {scrollYProgress} = useScroll();
  const mountain3Y = useTransform(scrollYProgress, [0,0.5],["0%", "70%"]);
  const planetsX = useTransform(scrollYProgress, [0,0.5],["0%", "5%"]);
  const mountain2Y = useTransform(scrollYProgress, [0,0.5],["0%", "0%"]);
  const mountain1Y = useTransform(scrollYProgress, [0,0.5],["0%", "0%"]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/sky.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/mountain-3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: mountain3Y,
        }}
      />

      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/planets.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          x: planetsX,
        }}
      />

      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/mountain-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: mountain2Y,
        }}
      />

      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/mountain-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default ParallaxBackground;

