import React from 'react'
function SideBar({...props}) {
  return (
    <div {...props} >
        <ul className='pl-4 my-4'>
            <li className='p-2'>Party/Ledger</li>
            <li className='p-2'>Invoice</li>
            <li className='p-2'>Sign Up</li>
            <li className='p-2'>Log Out</li>
        </ul>
    </div>
  )
}

export default SideBar