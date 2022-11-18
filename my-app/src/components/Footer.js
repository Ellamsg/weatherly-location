export default function Footer() {
  return (
    <div>
        <div className="w-full bg-range2  h-6">

</div>
    <div className="footer bg-range p-3 md:px-6 text-white ">
        
      <div className="flex flex-col lg:flex-row justify-between py-6 border-b-2 border-white  ">
        <div className="flex  flex-col gap-y-5">
          <div>
            <img src="image/icon.png" />
          </div>
          <div className="know_more flex flex-col md:flex-row gap-5">
            <p>About us</p>
            <p>Careers</p>
            <p>Weather news</p>
            <p>For business</p>
            <p>FAQs</p>
            <p>Contact us</p>
          </div>
        </div>

        <div className=" ">
          <p className="md:py-2 py-4 md:pt-4 lg:pt-0 pt-5">Download the mobile app</p>
          <div className="flex gap-5 flex-row">
            <img src="image/apple.png" />
            <img src="image/playstore.png" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-0 gap-3 
      justify-between py-4">
        <div className="md:-order-none order-last">
          <p>2020 weatheer, all rights reserved to team gear</p>
        </div>
        <div className="flex gap-3 flex-row ">
          <div className="flex flex-row">
            <img src="image/world.png" />
            <p className="lg:block hidden">English</p>
          </div>

          <div className="flex gap-3 flex-row">
            <img src="image/uk.png" />
            <p className="lg:block hidden">United kingdom</p>
          </div>
          <div className="flex gap-3 flex-row">
            <img src="image/profile.png" />
            <p className="lg:block hidden">Customer support</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );

}
