import React from 'react'
function SideBar({...props}) {
  return (
    <div {...props}>
        <ul className='pl-4 my-4'>
            <li className='p-2'>Menu1</li>
            <li className='p-2'>Menu1</li>
            <li className='p-2'>Menu1</li>
            <li className='p-2'>Menu1</li>
        </ul>
    </div>
  )
}

export default SideBar