import React, { useEffect, useState } from "react";
import axios from "axios";
import { chart } from "../../asset/images";
import { BsArrowDownRight } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import AdminDashboard from "./dashboard";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const getOrders = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        "https://zigara-app.herokuapp.com/api/v1/service/orders",
        config
      );

      console.log(response.data.data.services);
      setOrders(response.data.data.services);
    } catch (error) {
      console.log(error.response.message);
    }
  };

  useEffect(() => {
    getOrders();
    // getAdmin();

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <AdminDashboard>
      <div>
        <div className="grid grid-cols-4 mt-4 mb-2 gap-4">
          <div className="col-span-3  rounded-xl px-4">
            <img src={chart} className="w-full" />
          </div>
          <div className="col-span-1 border-2 border-grey-100 rounded-xl px-4">
            <div className="border-b-2 border-b-grey-100 py-8">
              <p className="flex items-center justify-between">
                Invoice Paid
                <span className="flex items-center justify-center bg-green-100 text-green-600 rounded-lg p-1 ml-4">
                  <BsArrowUpRight />
                  0.0%
                </span>
              </p>
              <p className="font-bold text-xl">0</p>
            </div>
            <div className="border-b-2 border-b-grey-100 py-8">
              <p className="flex items-center justify-between">
                Delivered in Transit
                <span className="flex items-center justify-center bg-green-100 text-green-600 rounded-lg p-1 ml-4">
                  <BsArrowUpRight />
                  0.0%
                </span>
              </p>
              <p className="font-bold text-xl">0</p>
            </div>
            <div className=" py-8">
              <p className="flex items-center justify-between">
                Delayed Delivery
                <span className="flex items-center justify-center bg-red-100 red-green-600 rounded-lg p-1 ml-4">
                  <BsArrowDownRight />
                  0.0%
                </span>
              </p>
              <p className="font-bold text-xl">0</p>
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

            {/* 
            dropoffPoint:
email: "hokage5th1@naruto.com"
fullName: "Uzumaki Naruto1"
location: "Konoha1"
phoneNumber: "090960269891"
[[Prototype]]: Object
itemType: (3) ['shoes', 'shirts', 'pams'] */}
            <tbody className="divide-y divide-gray-100">
              {/* {orders.length > 0 &&
                orders.map((order) => {
                  return (
                    <tr className="bg-white">
                      <td className="p-3 text-sm text-gray-700">Apr 23,2022</td>
                      <td className="p-3 text-sm text-gray-700">
                        {order?.dropoffPoint?.fullName}
                      </td>
                      <td className="p-3 text-sm text-gray-700">
                        {order?.dropoffPoint?.phoneNumber}
                      </td>
                      <td className="p-3 text-sm text-gray-700">
                        {order?.dropoffPoint?.itemType[0]}
                      </td>
                      <td className="p-3 text-sm text-gray-700">
                        {order?.dropoffPoint?.email}
                      </td>
                      <td className="p-3 text-sm text-gray-700">
                        {order?.dropoffPoint?.location}
                      </td>
                      <td className="p-3 text-sm text-gray-700">
                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
                          Delayed
                        </span>
                      </td>
                    </tr>
                  );
                })} */}

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
        </div>
      </div>
    </AdminDashboard>
  );
};
export default Orders;
