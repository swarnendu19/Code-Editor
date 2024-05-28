import React, { KeyboardEvent, useEffect, useRef, useState } from 'react'
import CodeIcon from '@mui/icons-material/Code';
import { useEditor } from '@/context/AppContext';

const LanguageMenu : React.FC = () => {

    const [isOpen , setIsOpen] = useState(false);
    const {setLanguage} = useEditor();
    const container = useRef<HTMLDivElement>(null)

    // Close dropdown when clicked outside the dropdown
    useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (container.current && !container.current.contains(e.target as Node)) {
          if (!isOpen) return;
          setIsOpen(false);
        }
      };
  
      window.addEventListener("click", handleOutsideClick);
      return () => window.removeEventListener("click", handleOutsideClick);
    }, [isOpen, container]);
    
    useEffect(()=>{
      const handleEscape: (e: KeyboardEvent) => void = (e: KeyboardEvent) => {
        if (!isOpen) return;
    
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };

      document.addEventListener("keyup",()=> handleEscape);
      return ()=> document.removeEventListener('keyup',()=> handleEscape)
    }, [isOpen])

    const handleOpen =()=>{
       setIsOpen((prev)=> !prev)
    }

    const handleChange = (value: string)=>{
      setLanguage(false)
      setIsOpen(false)
    }
  return (
    <div>
      <div  ref={container} className='relative inline-block' >
       <button 
       className='flex items-center gap-2 px-4 py-2 rounded-md justify-evenly hover:text-textSecondary focus:outline-none'
       onClick={handleOpen}
       >
        <CodeIcon/>
        <span className='text-sm'>Languages</span>
       </button>
       
      </div>
    </div>
  )
}

export default LanguageMenu
