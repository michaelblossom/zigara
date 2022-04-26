import React, { useState } from "react";
import Input from "../../components/input/input";
// import Input from "../../components/input/input";
import { TiUserOutline } from "react-icons/ti";
import { BiLock } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { logo } from "../../asset/images";
import { vector } from "../../asset/images";

import { MdNotificationImportant } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsArrowDownRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowUpRight } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AdminDashboard = () => {
  const [active, setActive] = useState("orders");

  return (
    <div className=" w-screen h-screen ">
      <div className=" border shadow grid grid-cols-5 gap-4 ">
        <div className="col-span-1 bg-zinc-900 text-white ">
          <div className="flex items-center justify-center mt-8 mb-8 text-black">
            <Input
              type={"search"}
              placeholder={"search for anything"}
              icon={<BsSearch size={25} className="text-white" />}
              className={"outline-none p-2 rounded"}
              // onChange={handleChange}
              // value={values.password}
              // error={errors.password && touched.password}
              // name="password"
            />
          </div>
          <div className="text-white flex items- justify-start ml-12 mt-8 mb-10">
            <img src={logo} />
          </div>
          <div className="flex items-center flex-start text-lg ml-14">
            <div>
              <div
                className={` ${
                  active === "orders" ? "text-black bg-white" : null
                }`}
                onClick={() => setActive("orders")}
              >
                <p className="flex items-center justify-flex-start mb-12">
                  <span className="mr-2">
                    <TiUserOutline size={30} />
                  </span>
                  Orders
                </p>
              </div>
              <div
                className={`  ${
                  active === "employee" ? "text-black bg-white" : null
                }`}
                onClick={() => setActive("employee")}
              >
                <p className="flex items-center justify-flex-start mb-12 ">
                  <span className="mr-2">
                    <BiLock size={30} />
                  </span>
                  Employees
                </p>
              </div>
              <div
                className={`${
                  active === "notification" ? "text-black bg-white" : null
                }`}
                onClick={() => setActive("notification")}
              >
                <p className="flex items-center justify-flex-start mb-12">
                  <span className="mr-2">
                    <IoMdNotificationsOutline size={30} />
                  </span>
                  Notifications
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 mt-8 mr-8 ">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold py-2">Welcome back, Admin</h1>
              <p className="font-sans">Like what you see?</p>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <BiLock size={25} className="mr-2" />
                <IoPersonCircleSharp size={25} />
                <p>Adanna O ^</p>
              </div>
              <div>
                <p className="text-right mt-2">April 16th 2022</p>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-4 mt-4 mb-2 gap-4">
            <div className="col-span-3 border-2 border-grey-100 rounded-xl px-4">
              {" "}
              space for map
            </div>
            <div className="col-span-1 border-2 border-grey-100 rounded-xl px-4">
              <div className="border-b-2 border-b-grey-100 py-8">
                <p className="flex items-center justify-between">
                  Invoice Paid
                  <span className="flex items-center justify-center bg-green-100 text-green-600 rounded-lg p-1 ml-4">
                    <BsArrowUpRight />
                    15.3%
                  </span>
                </p>
                <p className="font-bold text-xl">77800</p>
              </div>
              <div className="border-b-2 border-b-grey-100 py-8">
                <p className="flex items-center justify-between">
                  Delivered in Transit
                  <span className="flex items-center justify-center bg-green-100 text-green-600 rounded-lg p-1 ml-4">
                    <BsArrowUpRight />
                    13.3%
                  </span>
                </p>
                <p className="font-bold text-xl">456</p>
              </div>
              <div className=" py-8">
                <p className="flex items-center justify-between">
                  Delayed Delivery
                  <span className="flex items-center justify-center bg-red-100 red-green-600 rounded-lg p-1 ml-4">
                    <BsArrowDownRight />
                    1.9%
                  </span>
                </p>
                <p className="font-bold text-xl">89</p>
              </div>
            </div>
          </div>
          <div className="p-5 h-screen bg-gray-100 shadow rounded-lg">
            <h1>Your Orders</h1>
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Date
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Client
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Owner's Contact
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Package
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Receiver
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Drop-Off
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="p-3 text-sm text-gray-700">Apr 23,2022</td>
                  <td className="p-3 text-sm text-gray-700">Joshua</td>
                  <td className="p-3 text-sm text-gray-700">08133792998</td>
                  <td className="p-3 text-sm text-gray-700">Text Book</td>
                  <td className="p-3 text-sm text-gray-700">08076532798</td>
                  <td className="p-3 text-sm text-gray-700">Mkpokiti</td>
                  <td className="p-3 text-sm text-gray-700">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
                      Delayed
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-sm text-gray-700">Apr 22,2022</td>
                  <td className="p-3 text-sm text-gray-700">Nnamani</td>
                  <td className="p-3 text-sm text-gray-700">08098792998</td>
                  <td className="p-3 text-sm text-gray-700">Telephone</td>
                  <td className="p-3 text-sm text-gray-700">08063456743</td>
                  <td className="p-3 text-sm text-gray-700">Ogui Rd</td>
                  <td className="p-3 text-sm text-gray-700">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      Delivered
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 text-sm text-gray-700">Apr 30,2022</td>
                  <td className="p-3 text-sm text-gray-700">Maxwell</td>
                  <td className="p-3 text-sm text-gray-700">0813890998</td>
                  <td className="p-3 text-sm text-gray-700">Sports Ware</td>
                  <td className="p-3 text-sm text-gray-700">08063456789</td>
                  <td className="p-3 text-sm text-gray-700">Okpara Square</td>
                  <td className="p-3 text-sm text-gray-700">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50">
                      In-transit
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-sm text-gray-700">Apr 24,2022</td>
                  <td className="p-3 text-sm text-gray-700">Henry</td>
                  <td className="p-3 text-sm text-gray-700">08133554398</td>
                  <td className="p-3 text-sm text-gray-700">Bread</td>
                  <td className="p-3 text-sm text-gray-700">08063454321</td>
                  <td className="p-3 text-sm text-gray-700">Abani rd</td>
                  <td className="p-3 text-sm text-gray-700">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50">
                      In-transit
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 text-sm text-gray-700">Apr 21,2022</td>
                  <td className="p-3 text-sm text-gray-700">Adanna</td>
                  <td className="p-3 text-sm text-gray-700">08133792897</td>
                  <td className="p-3 text-sm text-gray-700">Tomatoes</td>
                  <td className="p-3 text-sm text-gray-700">08063456098</td>
                  <td className="p-3 text-sm text-gray-700">Fire Service</td>
                  <td className="p-3 text-sm text-gray-700">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      Delivered
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-sm text-gray-700">Apr 18,2022</td>
                  <td className="p-3 text-sm text-gray-700">Michael</td>
                  <td className="p-3 text-sm text-gray-700">08133792975</td>
                  <td className="p-3 text-sm text-gray-700">Bag of Rice</td>
                  <td className="p-3 text-sm text-gray-700">08098656798</td>
                  <td className="p-3 text-sm text-gray-700">Abgani</td>
                  <td className="p-3 text-sm text-gray-700">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50">
                      In-transit
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 text-sm text-gray-700">Apr 19,2022</td>
                  <td className="p-3 text-sm text-gray-700">Kosi</td>
                  <td className="p-3 text-sm text-gray-700">08133776543</td>
                  <td className="p-3 text-sm text-gray-700">Food Stuffs</td>
                  <td className="p-3 text-sm text-gray-700">08098609788</td>
                  <td className="p-3 text-sm text-gray-700">Holy Ghost</td>
                  <td className="p-3 text-sm text-gray-700">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
                      Delayed
                    </span>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-sm text-gray-700">Apr 11,2022</td>
                  <td className="p-3 text-sm text-gray-700">Victoria</td>
                  <td className="p-3 text-sm text-gray-700">08176792975</td>
                  <td className="p-3 text-sm text-gray-700">Garri</td>
                  <td className="p-3 text-sm text-gray-700">08076543798</td>
                  <td className="p-3 text-sm text-gray-700">Old Park</td>
                  <td className="p-3 text-sm text-gray-700">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50">
                      In-transit
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
