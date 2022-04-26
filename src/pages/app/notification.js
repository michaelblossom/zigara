import React from "react";
import Button from "../../components/button/button";
const Notification = () => {
  return (
    <div>
      <section className="col-span-2">
        <div className="mb-12">
          <h3 className="font-bold text-3xl mt-4">Notification Settings</h3>
        </div>
        <div className="flex items-center justify-between mb-14 font-semibold">
          <div>
            <p>Get notified via email</p>
          </div>
          <div>
            <input type="checkbox" />
          </div>
        </div>
        <div className="flex items-center justify-between mb-14 font-semibold">
          <div>
            <p>Get notified via email</p>
          </div>
          <div>
            <input type="checkbox" />
          </div>
        </div>

        <div className="flex justify-start">
          <div className="mr-4 ">
            <Button
              text="Change"
              type="submit"
              // onClick={() => console.log("Button Clicked")}
              className="bg-rose-500 text-center px-2 py-2 mt-7 text-white w-36 rounded"
            />
          </div>
          <div>
            <Button
              text="Cancel"
              type="submit"
              // onClick={() => console.log("Button Clicked")}
              className="bg-white text-center px-2 py-2 mt-7 text-black border border-rose-500 w-36 rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Notification;
