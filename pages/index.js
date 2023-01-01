import {
  Checkbox,
  FileInput,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { HiMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import Footer from "../Component/Header/Footer";
import Header from "../Component/Header/Header";

const ApplyForm = () => {
  const [signature, setSignature] = useState("");
  const [photo, setPhoto] = useState("");
  const [button, setButton] = useState(false);
  // const handleApply = (event) => {
  //   setButton(event.target.apply.value);
  // };

  console.log(signature, photo);

  const boards = [
    "Select One",
    "Dhaka",
    "Rajshahi",
    "Comilla",
    "Jessore",
    "Chittagong",
    "Barisal",
    "Sylhet",
    "Dinajpur",
    "Madrasah",
  ];
  const groups = [
    "Select One",
    "Science",
    "Humanities",
    "Business",
    "Business Studies",
    "Others",
  ];
  const hscLevels = [
    "Select One",
    "H.S.C",
    "Alim",
    "Business Management",
    "Diploma",
    "A Level/Sr. Cambride",
    "H.S.C Equivalent",
    "Diploma (Nursing/Midwifery)",
  ];
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;

    // console.log(form)
    const personalInformatin = {
      applicantNameBangla: form.applicantNameBangla.value,
      applicantNameEnglish: form.applicantNameEnglish.value,
      fatherNameBangla: form.fatherNameBangla.value,
      fatherNameEnglish: form.fatherNameEnglish.value,
      motherNameBangla: form.motherNameBangla.value,
      motherNameEnglish: form.motherNameEnglish.value,
      spouseNameBangla: form.spouseNameBangla.value,
      spouseNameEnglish: form.spouseNameEnglish.value,
      dateOfBirth: form.dateOfBirth.value,
      gender: form.gender.value,
      religion: form.religion.value,
      bloodGroup: form.bloodGroup.value,
      height: form.height.value,
      weight: form.weight.value,
      phone: form.phone.value,
      nid: form.nid.value,
      email: form.email.value,
      signature: signature,
      photo: photo,
    };

    const presentAddress = {
      village: form.village.value,
      postOffice: form.postOffice.value,
      union: form.union.value,
      upazila: form.upazila.value,
      district: form.district.value,
    };

    const educationQualification = {
      sscLevel: [
        form.sscLevel.value,
        form.sscBoard.value,
        form.sscGroup.value,
        form.sscResult.value,
        form.sscRoll.value,
        form.sscReg.value,
      ],
      hscLevel: [
        form.hscLevelExamination.value,
        form.hscBoard.value,
        form.hscGroup.value,
        form.hscResult.value,
        form.hscRoll.value,
        form.hscReg.value,
      ],
    };

    const skills = {
      skills: form.skills.value,
    };

    const allDetails = {
      mainPhone: form.phone.value,
      mainEmail: form.email.value,
      personalInformatin,
      presentAddress,
      educationQualification,
      skills,
    };

    const applicantSignature = form.applicantSignature.files[0];
    const formData = new FormData();
    formData.append("image", applicantSignature);
    const url =
      "https://api.imgbb.com/1/upload?key=b3d74dd6c8e3730b521c7da1d7ed64f2";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => setSignature(imgdata.data.image.url));

    const applicantPhoto = form.applicantPhoto.files[0];
    // const formData = new FormData();
    formData.append("image", applicantPhoto);
    fetch(
      "https://api.imgbb.com/1/upload?key=b3d74dd6c8e3730b521c7da1d7ed64f2",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgdata) => {
        if (imgdata.success) {
          setPhoto(imgdata.data.image.url);
          fetch("http://localhost:5000/applications", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(allDetails),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Your application has been submitted!");
              }
            });
        }
      });
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-11/12 mx-auto mt-6">
        <form onSubmit={handleForm}>
          <fieldset className="rounded border border-solid border-gray-300 p-3">
            <legend className="font-bold text-xl">Personal Information</legend>
            <div className="flex gap-10">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label
                    htmlFor="Applicant Name"
                    value="Applicant Name (Bangla)"
                  />
                </div>
                <TextInput
                  id="Applicant Name"
                  name="applicantNameBangla"
                  type="text"
                  sizing="sm"
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label
                    htmlFor="Applicant Name(English)"
                    value="Applicant Name (English)"
                  />
                </div>
                <TextInput
                  id="Applicant Name(English)"
                  type="text"
                  name="applicantNameEnglish"
                  sizing="sm"
                />
              </div>
            </div>

            <div className="flex gap-10">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="fatherName" value="Father Name (Bangla)" />
                </div>
                <TextInput
                  id="fatherName"
                  name="fatherNameBangla"
                  type="text"
                  sizing="sm"
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Father Name (English)" />
                </div>
                <TextInput
                  id="small"
                  name="fatherNameEnglish"
                  type="text"
                  sizing="sm"
                />
              </div>
            </div>

            <div className="flex gap-10">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label
                    htmlFor="motherNameBangla"
                    value="Mother Name (Bangla)"
                  />
                </div>
                <TextInput
                  id="motherNameBangla"
                  name="motherNameBangla"
                  type="text"
                  sizing="sm"
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label
                    htmlFor="motherNameEnglish"
                    value="Mother Name English"
                  />
                </div>
                <TextInput
                  id="motherNameEnglish"
                  type="text"
                  name="motherNameEnglish"
                  sizing="sm"
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="w-full">
                <div className="mb-2 block">
                  <Label
                    htmlFor="spouseNameBangla"
                    value="Spouse Name (Bangla)"
                  />
                </div>
                <TextInput
                  id="spouseNameBangla"
                  name="spouseNameBangla"
                  type="text"
                  sizing="sm"
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label
                    htmlFor="spouseNameEnglish"
                    value="Spouse Name (English)"
                  />
                </div>
                <TextInput
                  id="spouseNameEnglish"
                  name="spouseNameEnglish"
                  type="text"
                  sizing="sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="dateOfBirth" value="Date of Birth" />
                </div>
                <TextInput
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  sizing="sm"
                />
              </div>
              <div id="gender">
                <div className="mb-2 block">
                  <Label htmlFor="gender" value="Gender" />
                </div>
                <Select id="gender" name="gender">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Select>
              </div>
              <div id="Religion">
                <div className="mb-2 block">
                  <Label htmlFor="religion" value="Religion" />
                </div>
                <Select id="religion" name="religion">
                  {/* Islam Hinduism Christans Buddhists Others */}
                  <option>Islam</option>
                  <option>Hinduism</option>
                  <option>Christans</option>
                  <option>Buddhists</option>
                  <option>Others</option>
                </Select>
              </div>
              <div id="bloodGroup">
                <div className="mb-2 block">
                  <Label htmlFor="bloodGroup" value="Blood Group" />
                </div>
                <Select name="bloodGroup" id="bloodGroup">
                  {bloodGroups.map((bloodGroup, i) => (
                    <option key={i} value={bloodGroup}>
                      {bloodGroup}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="height" value="Height (Feet)" />
                </div>
                <TextInput id="height" name="height" type="text" sizing="sm" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="weight" value="Weight (KG)" />
                </div>
                <TextInput id="weight" name="weight" type="text" sizing="sm" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phone" value="Mobile Number" />
                </div>
                <TextInput
                  id="phone"
                  name="phone"
                  icon={HiPhone}
                  defaultValue={"+8801"}
                  type="tel"
                  sizing="sm"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="idno"
                    value="National Id no / Date of Birth no"
                  />
                </div>
                <TextInput
                  id="idno"
                  placeholder="National Id no / Date of Birth no"
                  sizing="sm"
                  name="nid"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email4" value="Email" />
                </div>
                <TextInput
                  id="email4"
                  type="email"
                  placeholder="name@email.com"
                  name="email"
                  icon={HiMail}
                />
              </div>
            </div>
          </fieldset>

          {/* Address section */}
          <fieldset className="rounded border border-solid border-gray-300 p-3">
            <legend className="font-bold text-xl">Present Address</legend>

            <div className="border-2 p-5 rounded-xl grid gap-x-4 grid-cols-3">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="village" value="Village" />
                </div>
                <TextInput
                  name="village"
                  id="village"
                  type="text"
                  sizing="sm"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="postOffice" value="Post Office" />
                </div>
                <TextInput
                  id="postOffice"
                  name="postOffice"
                  type="text"
                  sizing="sm"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="union" value="Union" />
                </div>
                <TextInput name="union" id="union" type="text" sizing="sm" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="upazila" value="Upazila" />
                </div>
                <TextInput
                  id="upazila"
                  name="upazila"
                  type="upazila"
                  sizing="sm"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="district" value="District" />
                </div>
                <TextInput
                  id="district"
                  name="district"
                  type="text"
                  sizing="sm"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="rounded border border-solid border-gray-300 p-3">
            <legend className="font-bold text-xl">
              Education Qualification
            </legend>
            <div className="flex gap-5">
              <div className="w-1/2 border-2 p-5 rounded-xl">
                <h1 className="font-bold text-xl">SSC or Equivalent Level</h1>
                <div id="select">
                  <div className="mb-2 block">
                    <Label htmlFor="sscLevel" value="Examination" />
                  </div>
                  <Select id="sscLevel" name="sscLevel">
                    <option>S.S.C</option>
                    <option>Dakhil</option>
                    <option>O Level/Cabridge</option>
                    <option>S.S.C Equivalent</option>
                  </Select>
                </div>
                <div id="select">
                  <div className="mb-2 block">
                    <Label htmlFor="board" value="Board" />
                  </div>
                  <Select name="sscBoard" id="board">
                    {boards.map((board) => (
                      <option>{board}</option>
                    ))}
                  </Select>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="Roll" />
                  </div>
                  <TextInput
                    name="sscRoll"
                    id="small"
                    type="text"
                    sizing="sm"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="Reg No" />
                  </div>
                  <TextInput name="sscReg" id="small" type="text" sizing="sm" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="Result" />
                  </div>
                  <TextInput
                    name="sscResult"
                    id="small"
                    type="text"
                    sizing="sm"
                  />
                </div>
                <div id="select">
                  <div className="mb-2 block">
                    <Label htmlFor="board" value="Group" />
                  </div>
                  <Select name="sscGroup" id="Group">
                    {groups.map((group) => (
                      <option>{group}</option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="w-1/2 border-2 p-5 rounded-xl">
                <h1 className="font-bold text-xl">HSC or Equivalent Level</h1>
                <div id="select">
                  <div className="mb-2 block">
                    <Label htmlFor="examination" value="Examination" />
                  </div>
                  <Select name="hscLevelExamination" id="examination">
                    {hscLevels.map((hscLevel, i) => (
                      <option key={i} value={hscLevel}>
                        {hscLevel}
                      </option>
                    ))}
                  </Select>
                </div>
                <div id="select">
                  <div className="mb-2 block">
                    <Label htmlFor="board" value="Board" />
                  </div>
                  <Select name="hscBoard" id="board">
                    {boards.map((board) => (
                      <option>{board}</option>
                    ))}
                  </Select>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="Roll" />
                  </div>
                  <TextInput
                    name="hscRoll"
                    id="small"
                    type="text"
                    sizing="sm"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="Reg No" />
                  </div>
                  <TextInput name="hscReg" id="small" type="text" sizing="sm" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="small" value="Result" />
                  </div>
                  <TextInput
                    name="hscResult"
                    id="small"
                    type="text"
                    sizing="sm"
                  />
                </div>
                <div id="select">
                  <div className="mb-2 block">
                    <Label htmlFor="hscBoard" value="Group" />
                  </div>
                  <Select name="hscGroup" id="Group">
                    {groups.map((group) => (
                      <option>{group}</option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
          </fieldset>

          <h1 className="font-bold text-xl">Skills/Extra Curricular</h1>
          <Textarea
            name="skills"
            placeholder="Explain about your self whay you good fit for this position"
          ></Textarea>
          <div className="flex gap-10">
            <div id="fileUpload" className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Signature" />
              </div>
              <FileInput
                id="file"
                name="applicantSignature"
                // helperText="A profile picture is useful to confirm your are logged into your account"
              />
            </div>
            <div id="fileUpload" className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Applicant Photo" />
              </div>
              <FileInput
                id="file"
                name="applicantPhoto"
                // helperText="A profile picture is useful to confirm your are logged into your account"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 my-4">
            <Checkbox
              id="remember"
              name="apply"
              onChange={() => setButton(event.target.checked)}
            />
            <Label htmlFor="remember">
              The above information is correct and I would like to go to the
              next step.
            </Label>
          </div>
          <div className=" my-20 flex justify-center ">
            {button ? (
              <input
                value="Apply"
                type="submit"
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                Apply
                Button
              />
            ) : (
              <div className="flex flex-col">
                <p>Please fillup this form and checked box</p>

                <button
                  type="button"
                  class="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  disabled
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplyForm;
