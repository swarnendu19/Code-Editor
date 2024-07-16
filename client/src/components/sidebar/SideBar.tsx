import classNames from 'classnames'
import React from 'react'

const SideBar = () => {
  return (
    <aside className='flex w-full md:h-full md:max-h-full md:min-h-full md:w-auto'>
     <div className={
      classNames(
        "fixed bottom-0 left-0 z-50 flex h-[50px] w-ful ",
      )
     }>

     </div>
    </aside>
  )
}

export default SideBar
