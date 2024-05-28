import React from 'react'
import dynamic from 'next/dynamic';
const CodeEditor = dynamic(() => import("../components/CodeEditor"), { ssr: false });


const ProgrammingEditor = () => {
  return (
    <div className='flex flex-col w-4/5 gap-10 p-4 mx-auto mt-3'>
      <section className='flex-grow ' style={{height:"80vh"}}>
       <CodeEditor/>
      </section>
      
    </div>
  )
}

export default ProgrammingEditor
