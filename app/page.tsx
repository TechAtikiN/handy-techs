// default imports
import axios from 'axios'

type Details = {
  name: string;
  location: string;
  age: string;
  profession: string;
} | undefined;

const getData = async () => {
  const res = await axios.get('http://localhost:3001/api/data')
  return res.data
}

const updateDetails = async () => {
  'use server'
  const details = await getData()

  const data = {
    "hobby": "Chess"
  }

  const newData = {
    "primary": "B.Tech",
    "secondary": "M.Tech"
  }

  try {
    const updateEdgeConfig = await fetch(
      'https://api.vercel.com/v1/edge-config/{YOUR EDGE CONFIG STORE ID}/items',
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer {YOUR VERCEL ACCESS TOKEN}}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              operation: 'create',
              key: 'details',
              value: {
                ...details,
                ...newData
              },
            },
            // {
            //   operation: 'update',
            //   key: 'hobbies',
            //   value: {
            //     ...data
            //   }
            // }
          ]
        }),
      },
    );
    const result = await updateEdgeConfig.json();
  } catch (error) {
    console.log(error);
  }
}

async function Home() {
  // const details: Details = await get('details')
  const details = await getData()

  return (
    <div className='bg-slate-900 text-white flex flex-col py-8 items-center mx-auto h-screen'>
      <p className='text-4xl font-bold'>Vercel Crons jobs</p>
      <div className='p-8 rounded-3xl bg-slate-950 my-7 font-semibold'>
        <p>Name: {details?.name}</p>
        <p>Location: {details?.location}</p>
        <p>Age: {details?.age}</p>
        <p>Profession: {details?.profession}</p>
      </div>

      <form action={updateDetails}>
        <button
          className='px-3 py-2 bg-white text-black font-bold hover:bg-slate-100'
        >
          Add Data
        </button>

      </form>

    </div>
  )
}
export default Home
