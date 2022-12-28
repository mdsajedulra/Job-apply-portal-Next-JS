import {
  Checkbox,
  FileInput,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import React from "react";
import { HiMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import Header from "../Component/Header/Header";

const ApplyForm = () => {
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



const handleForm = event =>{
event.preventDefault();
const form = event.target;
// console.log(form)
const personalInformatin = {
  applicantNameBangla : form.applicantNameBangla.value,
  applicantNameEnglish : form.applicantNameEnglish.value,
  fatherNameBangla : form.fatherNameBangla.value,
  fatherNameEnglish : form.fatherNameEnglish.value,
  motherNameBangla : form.motherNameBangla.value,
  motherNameEnglish : form.motherNameEnglish.value,
}
console.log(personalInformatin)  
}





  return (
    <div className="flex flex-col gap-4 w-11/12 mx-auto">
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
              <Select id="gender" name="gender" >
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </Select>
            </div>
            <div id="Religion">
              <div className="mb-2 block">
                <Label htmlFor="religion" value="Religion" />
              </div>
              <Select id="religion" name="religion" >
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
              <Select name="bloodGroup" id="bloodGroup" >
                {bloodGroups.map((bloodGroup, i) => (
                  <option key={i}>{bloodGroup}</option>
                ))}
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="height" value="Height (Feet)" />
              </div>
              <TextInput id="height" type="text" sizing="sm" />
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
                name="idNo"
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
              <TextInput name="village" id="village" type="text" sizing="sm" />
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
          <legend className="font-bold text-xl">Education Qualification</legend>
          <div className="flex gap-5">
            <div className="w-1/2 border-2 p-5 rounded-xl">
              <h1 className="font-bold text-xl">SSC or Equivalent Level</h1>
              <div id="select">
                <div className="mb-2 block">
                  <Label htmlFor="countries" value="Examination" />
                </div>
                <Select id="countries" >
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
                <Select name="board" id="board" >
                  {boards.map((board) => (
                    <option>{board}</option>
                  ))}
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Roll" />
                </div>
                <TextInput name="roll" id="small" type="text" sizing="sm" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Reg No" />
                </div>
                <TextInput name="reg" id="small" type="text" sizing="sm" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Result" />
                </div>
                <TextInput name="Result" id="small" type="text" sizing="sm" />
              </div>
              <div id="select">
                <div className="mb-2 block">
                  <Label htmlFor="board" value="Group" />
                </div>
                <Select name="Group" id="Group" >
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
                <Select
                  name="hscLevelExamination"
                  id="examination"
                  
                >
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
                <Select name="board" id="board" >
                  {boards.map((board) => (
                    <option>{board}</option>
                  ))}
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Roll" />
                </div>
                <TextInput name="roll" id="small" type="text" sizing="sm" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Reg No" />
                </div>
                <TextInput name="reg" id="small" type="text" sizing="sm" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="small" value="Result" />
                </div>
                <TextInput name="Result" id="small" type="text" sizing="sm" />
              </div>
              <div id="select">
                <div className="mb-2 block">
                  <Label htmlFor="board" value="Group" />
                </div>
                <Select name="Group" id="Group" >
                  {groups.map((group) => (
                    <option>{group}</option>
                  ))}
                </Select>
              </div>
            </div>

            {/* Graduation Level */}

            <div className="w-1/2 border-2 p-5 rounded-xl">
              <h1 className="font-bold text-xl">Graduation Level</h1>
              <div id="select">
                <div className="mb-2 block">
                  <Label
                    htmlFor="graduationLevelExamination"
                    value="Examination"
                  />
                </div>
                <TextInput
                  name="graduationLevelExamination"
                  id="graduationLevelExamination"
                  type="text"
                  sizing="sm"
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="graducationLevelResult" value="Result" />
                </div>
                <TextInput name="Result" id="small" type="text" sizing="sm" />
              </div>
            </div>
          </div>
        </fieldset>

        <h1 className="font-bold text-xl">Skills/Extra Curricular</h1>
        <Textarea placeholder="Explain about your self whay you good fit for this position"></Textarea>
        <div className="flex gap-10">
          <div id="fileUpload" className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="file" value="Signature" />
            </div>
            <FileInput
              id="file"
              // helperText="A profile picture is useful to confirm your are logged into your account"
            />
          </div>
          <div id="fileUpload" className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="file" value="Applicant Photo" />
            </div>
            <FileInput
              id="file"
              // helperText="A profile picture is useful to confirm your are logged into your account"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            The above information is correct and I would like to go to the next
            step.
          </Label>
        </div>
        <div className=" my-20 flex justify-center ">
          <input
            value="Apply
      "
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            Apply
            Button
          />
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
