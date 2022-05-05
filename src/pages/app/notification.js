import React from "react";
import Button from "../../components/button/button";
// import AdminDashboard from "./dashboard";
const Notification = () => {
  return (
    <div className="p-6 border-slate-200 w-[700px]">
      <section className="col-span-2">
        <div className="mb-32">
          <h3 className="font-bold text-xl mt-4">Notification Settings</h3>
        </div>

        <div>
          <div className="flex items-center justify-between mb-12 ">
            <div>
              <p>Get notified via email</p>
            </div>
            <div>
              <input type="checkbox" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-14">
            <div>
              <p>Get notified via email</p>
            </div>
            <div>
              <input type="checkbox" />
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="mr-4 ">
            <Button
              text="Change"
              type="submit"
              className="bg-rose-500 text-center px-2 py-2 mt-7 text-white w-36 rounded"
            />
          </div>
          <div>
            <Button
              text="Cancel"
              type="submit"
              className="bg-white text-center px-2 py-2 mt-7 text-black border border-rose-500 w-36 rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Notification;
