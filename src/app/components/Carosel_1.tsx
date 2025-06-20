    import { useState } from 'react';
    import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
    import { images } from '../../../types';


    const Carousel = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const imageVariants = {
        enter: (direction : any) => {
          return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1,
        },
        exit: (direction) => {
          return {
            zIndex: 0,
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
          };
        },
      };

      const paginate = (newDirection) => {
        setCurrentIndex(currentIndex + newDirection);
      };

      return (
        <div>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            />
          </AnimatePresence>
          <button onClick={() => paginate(-1)}>Previous</button>
          <button onClick={() => paginate(1)}>Next</button>
        </div>
      );
    };

    export default Carousel;
