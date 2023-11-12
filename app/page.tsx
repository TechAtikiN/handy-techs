import Link from 'next/link'

export default function Home() {
  return (
    <main className='bg-slate-900 min-h-screen text-white px-10'>
      <h1 className='text-4xl text-center font-bold py-5'>Handy Techs</h1>
      <p className='text-lg'>
        <strong>Handy Techs</strong> is a initiative to provide handy and useful techs. Explore more in the branches. Few of the techs that have been implemented are as follows:<br></br>
        (Refer README.md of specific branch for more details)
      </p>
      <Link className='text-xl font-semibold underline' href={'/about'}>About</Link>
    </main>
  )
}
