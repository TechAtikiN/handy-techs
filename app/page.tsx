'use client'
export default function Home() {
  return (
    <main className='bg-slate-900 min-h-screen text-white px-10'>
      <h1 className='text-4xl text-center font-bold py-5'>Handy Techs</h1>
      <p
        className='text-lg'
      >
        Sentry-next
      </p>

      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => {
          throw new Error('Sentry Frontend Error');
        }}
      >
        Throw an error
      </button>

    </main>
  )
}
