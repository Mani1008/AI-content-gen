import React from 'react'
import { Search } from 'lucide-react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='bg-color p-10 bg-gradient-to-br from-blue-600 to to-pink-700 flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold text-white'>Browse All Templates</h2>
        <p>What would you like to create today?</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-3 w-[39%]'>
                <Search className='text-primary'/>
                <input type="text" placeholder='Search'
                onChange={(event)=>onSearchInput(event.target.value)} className='bg-transparent outline-none w-full'/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection