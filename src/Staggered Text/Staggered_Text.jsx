import { motion } from "framer-motion";
import "./Staggered_Text.css";

const Staggered_Text = () => {
    const text = "FANCY";
    const DURATION = 0.5;
    const STAGGER = 0.05;
    const variants = {
        initial: { y: "100%" },
        animate: {
            y: 0,
        },
        hovered: {
            y: "-50%",
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hovered"
            className="staggered-text-container"
        >
            {text.split("").map((char, index) => (
                <motion.div
                    variants={variants}
                    transition={{
                        duration: DURATION,
                        type: "spring",
                        delay: STAGGER * index,
                    }}
                    key={index}
                    className="staggered-text">
                    <h1>
                        {char}
                        <br />
                        {char}
                    </h1>
                </motion.div >
            ))}
        </motion.div>
    );
};

export default Staggered_Text;