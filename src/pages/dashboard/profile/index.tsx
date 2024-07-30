import Footer from '@/components/UI/footer'
import Layout from '@/components/UI/layout'
import Navigation from '@/components/UI/navigation'
import SideBar from '@/components/UI/sideBar'
import React, { useState } from 'react'
type DashProps = {
  toggle?:boolean;
}
export default function Dashboard({toggle}: DashProps) {

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

