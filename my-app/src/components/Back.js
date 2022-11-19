export default function Back (){


return(
    <div className="">

    <div className="flex   flex-col md:py-7 lg:border-b-2 border-boxwind lg:flex-row p-2 md:mx-[29px] lg:mx-6">
       
   <div className="">
   <form className="md:hidden block pt-4">
                <div className='flex border-b-2 py-2 border-boxwind flex-row gap-4 '>
                <img className="h-4" src="image/search.png"/>
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
     <p className="text-2xl font-bold md:pt-0 pt-3">Lagos Nigeria</p>
     <div className="w-full md:pt-0 pt-3 lg:overflow-x-hidden overflow-x-scroll text-center gap-6 flex flex-row ">
        <div>
            <p>sunny</p>
            <img  src="image/outline.png"/>
            <p>now</p>
        </div>
        <div>
            <p>sunny</p>
            <img src="image/outline.png"/>
            <p>now</p>
        </div>
        <div>
            <p>sunny</p>
            <img src="image/outline.png"/>
            <p>now</p>
        </div>
        <div>
            <p>sunny</p>
            <img src="image/outline.png"/>
            <p>now</p>
        </div>
        <div>
            <p>sunny</p>
            <img src="image/outline.png"/>
            <p>now</p>
        </div>
        <div>
        <p>sunny</p>
            <img src="image/outline.png"/>
            <p>now</p>
        </div>
        <div>
        <p>sunny</p>
            <img src="image/outline.png"/>
            <p>now</p>
        </div>
        
        <div>
        <p>sunny</p>
            <img src="image/outline.png"/>
            <p>now</p>
        </div>
        <div>
        <p>sunny</p>
            <img src="image/outline.png"/>
            <p>now</p>
        </div>
     </div>
     <div className=" relative" >
      <img className="md:h-[490px] h-[629px] md:pt-4 pt-4 md:w-[893px]" src="image/rain.png"/>
       <div className="absolute flex flex-col gap-6  top-0 p-4 text-white  w-full" >
        <div className="flex md:pt-3 pt-4 flex-row justify-between">
        <p>today 9:41am</p> 
        <img className=" " src="image/load.png"/>
        </div>
        <div>
            <img src="image/unbrella.png"/>
            <p className="pt-5">Rain</p>
            <p className="font-bold text-[40px]">Expect rain and scattered<br></br> 
            
            thunderstorm by<br></br> 12pm.</p>
            <p className="pt-4 text-sm font-semibold">FLOODING RISK<br></br>HIGH</p>
        </div>
       </div>
     </div>
   </div>

     <div className=" h-[627px]px-2 md:mx-0 lg:px-4 mt-6 md:mt-4 lg:mt-0 md:w-full lg:w-[435px]">
        <div className="border-b-2 border-boxwind  flex flex-col gap-3 pb-3">
          <p className="font-bold text-xl">3-day forecast</p>
          <p className="font-bold pl-2">Tomorrow</p>
        </div>
        <div className="der ">
          <p className="">RAIN</p>
          <p  className="text-xl font-medium">Expect rain and scattered</p>
          <p className="text-xl font-medium">thunderstorm by 12pm</p>
          <p  className="text-sm text-range3 pt-2">View more info</p>
          <p className="font-bold pt-2">16th Nov,2022</p>
        </div>
        <div className="der">
        <p>RAIN</p>
          <p className="text-xl font-medium">Expect rain and scattered</p>
          <p className="text-xl font-medium">thunderstorm by 12pm</p>
          <p  className="text-sm text-range3 pt-2">View more info</p>
          <p className="font-bold pt-2">16th Nov,2022</p>
        </div>
        <div className="md:hidden block border-b-2 border-boxwind">
        <div className="flex flex-row py-3  justify-between p-2">
        <div>
      <p className="font-bold text-xl">Saved location</p>
      <div className="flex flex-row pt-4 gap-3">
          <img className="h-4" src="image/locate.png"/>
      <p className="font-bold text-md ">lagos,Nigeria</p>
      </div>
     
        </div>
        <div>
           <button className=" text-sm border-2 py-1 px-2 border-range3"> + Add city</button>
        </div>
        </div>
    </div>
    
        <div className="pt-2 pl-2">
        <p>RAIN</p>
          <p className="text-xl font-medium">Expect rain and scattered</p>
          <p className="text-xl font-medium">thunderstorm by 12:00pm</p>
          <p  className="text-sm text-range3 pt-2">View more info</p>
         
      <div className="flex flex-row pt-4 pb-3 md:hidden gap-3">
          <img className="h-4" src="image/locate.png"/>
      <p className="font-bold text-md ">Enugu,enugu</p>
      </div>
        </div>
        <div className="pt-2 pl-2 border-t-2 md:pb-0 pb-6 border-boxwind md:hidden block">
        <p>RAIN</p>
          <p className="text-xl font-medium">Expect rain and scattered</p>
          <p className="text-xl font-medium">thunderstorm by 12:00pm</p>
          <p  className="text-sm text-range3 pt-2">View more info </p>
          
        </div>
       
     </div>
    </div>
    <div className="hidden  md:block">
        <div className="flex flex-row  justify-between p-7">
        <div>
      <p className="font-bold text-xl">Saved location</p>
        </div>
        <div>
           <button className="px-5 py-2 text-sm border-2 border-range3"> + Add city</button>
        </div>
        </div>
    </div>
    <div className="md:block hidden">
    <div className=" grid  md:py-5 mb-6 justify-items-center  grid-cols-1">
        <div>
            <img src="image/map-01.png"/>
        </div>
        <div >
           <p className="text-xl font-bold">No location saved</p>
        </div>
        <div>
           <p>You can save a location to view the details later</p>
        </div>
    </div>
    </div>
    </div>
)
}