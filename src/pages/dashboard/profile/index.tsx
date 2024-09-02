import Layout from '@/components/UI/layout'
import React, { useEffect, useState } from 'react'
export default function Dashboard() {

  return (
    <div className='min-h-[90vh] grid grid-cols-2 gap-4 p-4'>
      <div className='bg-indigo-400 col-span-1 rounded-xl flex justify-center items-center'>
        <h1 className='text-4xl text-white font-semibold'>Tile</h1>
        </div>
      <div className='bg-indigo-400 col-span-1 rounded-xl flex justify-center items-center'>
      <h1 className='text-4xl text-white font-semibold'>Tile</h1>
      </div>
      <div className='bg-indigo-400 col-span-1 rounded-xl flex justify-center items-center'>
      <h1 className='text-4xl text-white font-semibold'>Tile</h1>
      </div>
      <div className='bg-indigo-400 col-span-1 rounded-xl flex justify-center items-center'>
      <h1 className='text-4xl text-white font-semibold'>Tile</h1>
      </div>
    </div>
  )
}

Dashboard.getLayout = Layout;

