'use client'
// name imports
import { useState } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
// default imports
import Image from 'next/image'

// carousel data
export const data = [
  {
    id: 0,
    name: 'Jianna Zhang',
    title: 'Co-Founder & CEO',
    company: 'Airbnb',
    image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, deleniti repellendus ullam, molestiae ea, similique nesciunt illum deserunt dolorum soluta sapiente adipisci libero amet incidunt atque possimus repudiandae. Doloribus ullam dignissimos repudiandae a ad dolore quaerat alias eius facere ducimus.',
  },
  {
    id: 1,
    name: 'Katie Smith',
    title: 'Founder',
    company: 'Coinbase',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, deleniti repellendus ullam, molestiae ea, similique nesciunt illum deserunt dolorum soluta sapiente adipisci libero amet incidunt atque possimus repudiandae. Doloribus ullam dignissimos repudiandae a ad dolore quaerat alias eius facere ducimus..',
  },
  {
    id: 2,
    name: 'Millie Brown',
    title: 'CEO',
    company: 'Pinterest',
    image: 'https://plus.unsplash.com/premium_photo-1675034393500-dc5fe64b527a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, deleniti repellendus ullam, molestiae ea, similique nesciunt illum deserunt dolorum soluta sapiente adipisci libero amet incidunt atque possimus repudiandae. Doloribus ullam dignissimos repudiandae a ad dolore quaerat alias eius facere ducimus..',
  }
]

export default function Home() {
  const [count, setCount] = useState(0)
  let [tuple, setTuple] = useState([null, count]) // tuple to store previous count

  if (tuple[1] !== count) {
    setTuple([tuple[1], count])
  }

  let prev = tuple[0]!

  let direction = count > prev ? 1 : -1 // direction of animation

  const handleNext = () => {
    let nextSlide = count === data.length - 1 ? 0 : count + 1 // if count is at the end of the array, go back to the start
    setCount(nextSlide)
  }

  const handlePrev = () => {
    let prevSlide = count === 0 ? data.length - 1 : count - 1 // if count is at the start of the array, go back to the end
    setCount(prevSlide)
  }

  return (
    <div className='min-h-screen text-white bg-slate-950 py-6 relative'>
      <h1 className='text-2xl text-center font-semibold py-10'>Custom Carousel built in Next.js & Framer motion</h1>

      <AnimatePresence custom={direction}>
        {data.map((testimonial, index) => (
          <div
            key={index}>
            <m.div
              className={`flex justify-center space-x-20 ${index === count ? '' : 'hidden'}`}
              key={count}
              variants={variants}
              initial='enter'
              animate='center'
              custom={direction}
              exit='exit'
              transition={{ duration: 0.3 }}
            >
              <div className='relative h-96 w-72'>
                <Image
                  fill
                  src={testimonial.image}
                  alt='This is a carousel slide'
                  key={index}
                  className={`rounded-t-full rounded-b-full`}
                />
              </div>
              <div className='w-[409px] flex flex-col space-y-7 mt-20'>
                <p className='text-white font-light'>{testimonial.review}</p>
                <div className='space-y-1'>
                  <p className='text-xl'>{testimonial.name}</p>
                  <p className='text-'>{testimonial.title}, <span>{testimonial.company}</span></p>
                </div>
              </div>
            </m.div>
          </div>
        ))}
      </AnimatePresence>

      {/* buttons */}
      <div className='space-x-3 absolute right-[558px] -mt-10'>
        <button onClick={handlePrev} className='bg-white text-black rounded-full'><ChevronLeftIcon className='h-12 w-12 p-3' /></button>
        <button onClick={handleNext} className='bg-white text-black rounded-full'><ChevronRightIcon className='h-12 w-12 p-3' /></button>
      </div>
    </div>
  )
}

// framer motion variants
let variants = {
  enter: (direction: number) => ({ x: direction * 100, opacity: 0.1 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction * -100, opacity: 0.3 }),
}
