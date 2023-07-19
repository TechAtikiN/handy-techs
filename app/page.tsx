'use client'
import { useMemo, useState } from 'react'
import { CSVLink } from 'react-csv'
type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function Home() {

  const [data, setData] = useState<Todo[]>([])

  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
    const data = await res.json()
    setData(data)
  }

  const todos = useMemo(() => fetchData(), [])
  const headers = [
    { label: 'User Id', key: 'userId' },
    { label: 'Id', key: 'id' },
    { label: 'Title', key: 'title' },
    { label: 'Completed', key: 'completed' },
  ]

  const csvReport = {
    data: data,
    headers: headers,
    filename: 'data.csv'
  }

  return (
    <main className='bg-slate-900 min-h-screen text-white px-10'>
      <h1 className='text-2xl font-bold pt-5 pb-3'>Download Data</h1>
      <p>Download CSV and JSON files in Next.js</p>
      <table className='mt-5 bg-slate-800'>
        <thead>
          <tr>
            <th className='px-4 py-3 border-2 font-semibold text-lg border-slate-500'>User Id</th>
            <th className='px-4 py-3 border-2 font-semibold text-lg border-slate-500'>Id</th>
            <th className='px-4 py-3 border-2 font-semibold text-lg border-slate-500'>Title</th>
            <th className='px-4 py-3 border-2 font-semibold text-lg border-slate-500'>Completed</th>
          </tr>
        </thead>
        <tbody className=''>
          {data.map((todo, index) => (
            <tr key={index} className='hover:bg-slate-950 hover:cursor-pointer'>
              <td className='text-center px-3 py-2 border-2 border-slate-600'>{todo.userId}</td>
              <td className='text-center px-3 py-2 border-2 border-slate-600'>{todo.id}</td>
              <td className='text-center px-3 py-2 border-2 border-slate-600'>{todo.title}</td>
              <td className='text-center px-3 py-2 border-2 border-slate-600'>{todo.completed ? 'True' : 'False'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className='mt-5 px-3 py-2 rounded-full w-1/6 bg-white text-black font-semibold hover:bg-gray-200'>
        <CSVLink {...csvReport}>Export to CSV</CSVLink>
      </button>
    </main>
  )
}
