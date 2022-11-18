
 export default function Theme() {
   return(


    <div className="md:p-9 h-40 p-3">

        <div className="border-b-2 flex md:flex-col py-3 md:gap-2 gap-6 flex-row border-boxwind">
          <p className="md:pt-0 pt-1 text-base font-medium">Back</p>
          <p className=" font-bold text-2xl md:py-2">Weathery settings</p>
        </div>
        {/*select lang*/}
        <div className="relative w[400px] overflow-hidden">
            <input type="checkbox"
            className="absolute peer top-0 inset-x-0 
             w-full h-5 opacity-0 
              z-10 cursor-pointer
            "
            />
          <div className=" pt-2 border-b-2 border-boxwind gap-2  w-full 
          flex  flex-col
          ">
          <h1 className="font-medium text-lg ">Language</h1>
          <h1 className=" text-offwhite">choose your preferred language</h1>
          </div>
          <div className="absolute bg-green` top-0 right-3
          text-white transition-transform duration-500
          rotate-0 peer-checked:rotate-180 
          ">
            <p className="text-black">V</p>
          </div>
           {/*select content*/}
          <div className="bg-red text-right overflow-hidden 
          transition-all duration-500 max-h-0
          peer-checked:max-h-9
          ">
            <div className="">
              <p>all in</p>
            </div>
          </div>


        </div>

         {/*select theme*/}
        <div className="relative w[400px] overflow-hidden">
            <input type="checkbox"
            className="absolute peer top-0 inset-x-0 
             w-full h-5 opacity-0 
              z-10 cursor-pointer
            "
            />
          <div className=" pt-2 gap-2 border-b-2 border-boxwind  w-full 
          flex  flex-col
          ">
          <h1 className="font-bold text-lg">Theme</h1>
          <h1 className="  text-offwhite">select  preferred mode</h1>
          </div>
          <div className="absolute bg-green` top-0 right-3
          text-white transition-transform duration-500
          rotate-0 peer-checked:rotate-180 
          ">
            <p className="text-black">V</p>
          </div>
           {/*select content*/}
          <div className="bg-red grid justify-end  overflow-hidden 
          transition-all duration-500 max-h-0
          peer-checked:max-h-9
          ">
            <div className="grid grid-cols-1  border-2 border-blue rounded-md   w-8  ">
                
              <div className=" p-3 border-b-2 border-blue">
                light mode
                </div>
                <div className="text-white p-3 bg-range ">
                Dark mode
                </div>
                </div>
            </div>
        

         <p className="pt-3">Help</p>
        </div>

        
    </div>
   )
}


