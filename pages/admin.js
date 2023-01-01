import React, { useEffect, useState } from "react";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
// import Applications from "./Applications";

const Admin = () => {
  const [data, setData] = useState([]);
  const allData = async () => {
    const url = `http://localhost:5000/allApplication`;
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    fetch("http://localhost:5000/allApplication")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      <h1></h1>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div class="flex justify-between items-center pb-4 bg-white dark:bg-gray-900"></div>
        <ReactHtmlTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download as XLS"
        ></ReactHtmlTableToExcel>
        <table
          id="table-to-xls"
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                Position
              </th>
              <th scope="col" class="py-3 px-6">
                Status
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((application) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    class="w-10 h-10 rounded-full"
                    src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <div class="text-base font-semibold">
                      {application.personalInformatin.applicantNameEnglish}
                    </div>
                    <div class="font-normal text-gray-500">
                      {application.mainEmail}
                    </div>
                  </div>
                </th>
                <td class="py-4 px-6">Credit Officer</td>
                <td class="py-4 px-6">
                  <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full"></div> Pending
                  </div>
                </td>
                <td class="py-4 px-6">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
