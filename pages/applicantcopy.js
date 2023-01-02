import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import logo from "/public/assets/icon.png";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const options = {
  orientation: "portrait",
  unit: "in",
  format: [11.7, 8.3],
};
const ApplicantCopyDownload = () => {
  const [data, setData] = useState({});
  const handleForm = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    // const phone = form.phone.value;
    // console.log(email, phone)
    const emailPhone = {
      email: email,
      // phone: phone,
    };
    const url = `http://localhost:5000/download?email=${emailPhone?.email}`;
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  const { educationQualification, personalInformatin, presentAddress, skills } =
    data;
  console.log(personalInformatin);
  return (
    <div className="h-auto">
      <div className="flex justify-center items-center">
        <div className=" ">
          <div className="flex justify-center items-center flex-col">
            <form onSubmit={handleForm} className="w-96  mt-16 ">
              <div>
                {/* <label
              htmlFor="small-input"
              className="block mb-2 text-center text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label> */}
                <input
                  placeholder="Enter Apllicant Email"
                  name="email"
                  type="email"
                  id="small-input"
                  className="block text-center w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/* <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone
            </label>
            <input
              name="phone"
              type="text"
              id="small-input"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div> */}
              <div className="flex justify-center">
                <input
                  name=""
                  className="my-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  type="submit"
                  value="See Application"
                />
              </div>
            </form>
          </div>
          {data.educationQualification ? (
            <div className="">
              <Pdf
                targetRef={ref}
                options={options}
                scale={1}
                filename={personalInformatin?.applicantNameEnglish}
              >
                {({ toPdf }) => (
                  <div className="flex justify-center">
                    <button
                      className="my-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      onClick={toPdf}
                    >
                      Download Applicatin
                    </button>
                  </div>
                )}
              </Pdf>
              <div className="pdf-page" ref={ref}>
                <div className="text-center flex flex-col items-center">
                  <Image
                    className="w-24"
                    width="50"
                    height="50"
                    src={logo}
                    alt=""
                  />
                  <h1 className="text-center text-2xl font-semibold">
                    Organisation for Social Advancement & Cultural
                    Activities(OSACA)
                  </h1>
                  <p>Chak Ramanondopur, Gachhpara, Pabna.</p>
                </div>

                <div className="flex justify-between items-center gap-10 mt-5">
                  <div className="">
                    <thead>
                      <tr>
                        <th className="th">Post Name</th>
                        <th className="th">Micro Credit Officer</th>
                      </tr>
                    </thead>

                    <tr>
                      <td className="th">Applicant Name (Bangla):</td>
                      <td>{personalInformatin?.applicantNameBangla}</td>
                    </tr>
                    <tr>
                      <td className="th">Applicant Name (English):</td>
                      <td c>{personalInformatin?.applicantNameEnglish}</td>
                    </tr>
                    <tr>
                      <td className="th">Father's Name (Bangla):</td>
                      <td>{personalInformatin?.fatherNameBangla}</td>
                    </tr>
                    <tr>
                      <td className="th">Father's Name (English):</td>
                      <td>{personalInformatin?.fatherNameEnglish}</td>
                    </tr>
                    <tr>
                      <td className="th">Mother's Name (Bangla):</td>
                      <td>{personalInformatin?.motherNameBangla}</td>
                    </tr>
                    <tr>
                      <td className="th">Mother's Name (English)</td>
                      <td>{personalInformatin?.motherNameEnglish}</td>
                    </tr>
                    <tr>
                      <td className="th">Spouse Name (Bangla):</td>
                      <td>{personalInformatin?.spouseNameBangla}</td>
                    </tr>
                    <tr>
                      <td className="th">Spouse Name (English):</td>
                      <td>{personalInformatin?.spouseNameEnglish}</td>
                    </tr>
                  </div>
                  <Image
                    width="200"
                    height="200"
                    loader={() => personalInformatin?.photo}
                    src={personalInformatin?.photo}
                    alt=""
                  />
                  {/* <Image
                    width="300"
                    height="300"
                    loader={() =>
                      "https://i.ibb.co/CWW7kQz/profile-picture.jpg"
                    }
                    src="https://i.ibb.co/CWW7kQz/profile-picture.jpg"
                    alt=""
                  /> */}
                </div>

                <div>
                  <div>
                    <h1 className="text-xl font-semibold my-3">
                      Address Information:
                    </h1>
                    <table className="table">
                      {/* <thead >
            <tr>
                <th  >
                Post Name
                </th>
                <th  >
                Micro Credit Officer
                </th>
              
            </tr>
        </thead> */}

                      <tr>
                        <th className="th">Village</th>
                        <td>{presentAddress?.village}</td>

                        <th className="th">Upazila</th>
                        <td>{presentAddress?.upazila}</td>

                        <th className="th">Union</th>
                        <td>{presentAddress?.union}</td>

                        <th className="th">Post Office</th>
                        <td>{presentAddress?.postOffice}</td>

                        <th className="th">District</th>
                        <td>{presentAddress?.district}</td>
                      </tr>
                    </table>
                  </div>

                  <div>
                    <h1 className="text-xl font-semibold my-3">
                      Academic Qualifications:
                    </h1>
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="th">Examination</th>
                          <th className="th">Board/Institute</th>
                          <th className="th">Group/Subject/Degree</th>
                          <th className="th">Result</th>
                          <th className="th">Roll</th>
                          <th className="th">Reg</th>
                        </tr>
                      </thead>

                      <tr>
                        {educationQualification?.sscLevel.map((option) => (
                          <td>{option}</td>
                        ))}
                      </tr>
                      <tr>
                        {educationQualification?.hscLevel.map((option) => (
                          <td>{option}</td>
                        ))}
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* <a href="javascript:window.print()">Download this as a PDF</a> */}
      </div>
    </div>
  );
  // const rootElement = document.getElementById("root");
};

export default ApplicantCopyDownload;
