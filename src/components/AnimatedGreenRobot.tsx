import { motion } from "framer-motion";

interface AnimatedGreenRobotProps {
  size?: number;
  animationSpeed?: number;
}

export default function AnimatedGreenRobot({
  size = 200,
  animationSpeed = 2
}: AnimatedGreenRobotProps) {
  return (
    <motion.div
      style={{
        position: "absolute",
        right: "20px",
        bottom: "80px",
        width: `${size}px`,
        height: `${size * 1.4}px`,
        pointerEvents: "none",
        zIndex: 50,
      }}
      animate={{
        y: [0, -8, 0], // gentle float motion
        filter: [
          "drop-shadow(0 0 8px rgba(0,255,0,0.6))",
          "drop-shadow(0 0 16px rgba(0,255,0,0.9))",
          "drop-shadow(0 0 8px rgba(0,255,0,0.6))",
        ],
      }}
      transition={{
        duration: animationSpeed * 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/public/assets/bot_greenprint-H9JtPdDs77kivcY7EdoYWFriVul1yT.gif"
        alt="Animated Green Robot"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          filter: "drop-shadow(0 0 12px rgba(0,255,0,0.8))",
        }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: animationSpeed,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
