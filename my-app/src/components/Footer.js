export default function Footer() {
  return (
    <div className="footer bg-range px-6 text-white ">
      <div className="flex flex-row justify-between py-6 border-b-2 border-white bg-blue ">
        <div className="flex bg-yellow flex-col gap-y-5">
          <div>
            <img src="image/icon.png" />
          </div>
          <div className="know_more flex flex-row gap-5">
            <p>About us</p>
            <p>Careers</p>
            <p>Weather news</p>
            <p>For business</p>
            <p>FAQs</p>
            <p>Contact us</p>
          </div>
        </div>

        <div className=" bg-green">
          <p className="py-2">Download the mobile app</p>
          <div className="flex gap-5 flex-row">
            <img src="image/apple.png" />
            <img src="image/playstore.png" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between py-4">
        <div className="">
          <p>2020 weatheer, all rights reserved to team gear</p>
        </div>
        <div className="flex gap-3 flex-row">
          <div className="flex flex-row">
            <img src="image/world.png" />
            <p>english</p>
          </div>

          <div className="flex gap-3 flex-row">
            <img src="image/uk.png" />
            <p>english</p>
          </div>
          <div className="flex gap-3 flex-row">
            <img src="image/profile.png" />
            <p>english</p>
          </div>
        </div>
      </div>
    </div>
  );
}
