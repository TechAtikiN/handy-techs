'use client'
import { useState } from 'react'
import { sendMail } from '@/actions/sendMail'
import { compileEmailTemplate } from '@/lib/template'

export default function Home() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const sendEmailToUser = sendMail.bind(null, {
    to: email,
    name: name!,
    subject: 'Welcome to Handy Techs!',
    body: compileEmailTemplate(name!)
  })

  return (
    <main className='bg-slate-900 min-h-screen text-white px-10'>
      <h1 className='text-4xl text-center font-bold py-5'>Handy Techs</h1>
      <p
        className='text-lg font-bold text-center my-4'
      >
        Template Emailing
      </p>

      <div className='flex mx-auto items-center w-1/2 justify-center'>
        <form action={sendEmailToUser}>
          <h3 className='text-center text-xl my-2 underline'>Subscribe to Newsletter</h3>
          <div
            className='flex flex-col justify-center mt-10 space-y-3 border border-slate-600 bg-slate-800 p-8 px-16'
          >
            <label className='' htmlFor='email'>Enter your email address:</label>

            <input
              name='name'
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='p-2 bg-gray-300 text-sm focus:outline-none'
            />
            <input
              name='email'
              type='text'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='p-2 bg-gray-300 text-sm focus:outline-none'
            />
            <button
              className='p-1 text-center w-1/2 mx-auto bg-lime-300 font-bold text-black' type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
