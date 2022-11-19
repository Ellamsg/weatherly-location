import React, { useState } from 'react'
import Button from './Buttons';
import { Link } from "react-router-dom"


const Header = () => {
   
    let [open,setOpen]=useState(false);
  return (
    <div className=''>


    <div className=' sticky  top-0 left-0 md:p-0 z-10 lg:text-xl text-xl md:text-base'>
      <div className='md:flex items-center md:py-4  justify-around bg-white '>
      <div className="md:pl-0 pt-3 md:pt-0 pl-2">
       <img className='' src="image/pink.png"/>
      </div>
      
      <div onClick={()=>setOpen(!open)} className=' absolute right-3 top-2 cursor-pointer md:hidden'>
  
      <img className='  h-6 w-6' name={open ? 'close':'menu'} src='image/button.png'/>
      <p className="text-white">.</p>
      </div>
      
      <div className={`md:flex md:items-center bg-white
        lg:gap-9 pt-6 md:pt-0 md:pb-0 pb-12 absolute md:static   md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${open ? 'top-0 ':'top-[-490px]'}`}>
          
          <div>
            <div>
              
            </div>
            <div className='border-b-2 p-2 flex flex-row gap-5 lg:gap-9 md:border-boxwind'>

              <form className='hidden md:block' >
                <div className='flex  pt-2 flex-row gap-4 '>
                <img className='h-4' src="image/search.png"/>
              <input 
                    required
                    type="firstname"
                    placeholder="choose your location"
                    className="form-input-1"
                    name="first_name"
                    id="first_name"
                  />
                 
                  </div>
                  
              </form>
              <button className='bg-range3 md:block hidden text-base py-2 px-4 rounded-md text-white'>search</button>
            </div>
            <div>
              
            </div>
          </div>
        <Button  className="mt-8">
       <Link to="/Back"> Weather settings</Link>
        </Button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Header