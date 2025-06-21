'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const images = [
  '/images/image_1.jpg',
  '/images/image_2.jpg',
  '/images/image_3.jpg',
  '/images/image_2.jpg',
]

export default function Carousel() {
  const [[current, direction], setCurrent] = useState([0, 0])

  const paginate = (newDirection: number) => {
    setCurrent([
      (current + newDirection + images.length) % images.length,
      newDirection,
    ])
  }

  const variants = {
    enter: (direction : number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1.2,
    },
    exit: (direction : number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden py-10 px-4">
      {/* Left Arrow */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-black/40 p-2 rounded-full hover:bg-black/60"
      >
        <ArrowLeft className="text-white w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 p-2 rounded-full hover:bg-black/60"
      >
        <ArrowRight className="text-white w-6 h-6" />
      </button>

      <div className="flex justify-center items-center">
        <div className="relative w-[70%] h-[400px] left-5">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={current}
              src={images[current]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 150, damping: 30, mass: 0.8 },
                opacity: { duration: 0.2, ease: 'easeInOut' },
              }}
              className="absolute w-full h-full object-cover rounded-xl shadow-lg"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Side Previews */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none -z-10">
        <Image
          src={images[(current - 1 + images.length) % images.length]}
          alt="Previous image preview"
          className="w-[100px] h-[200px] object-cover rounded-xl opacity-50 "
          width={1000}
          height={600}
        />
        <Image
          src={images[(current + 1) % images.length]}
          alt="Next image preview"
          className="w-[100px] h-[200px] object-cover rounded-xl opacity-50 "
          width={1000}
          height={600}
        />
      </div>
    </div>
  )
}
