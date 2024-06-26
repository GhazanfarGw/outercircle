import React, { useEffect, useState } from "react";

const Application = () => {
  const [inputData, setInputData] = useState(null);

  useEffect(() => {
    // Retrieve input data from local storage
    const data = localStorage.getItem('inputData');
    if (data) {
      setInputData(JSON.parse(data));
    }
  }, []);



  if (!inputData) {
    return (
      <p className="py-3 px-5 text-red-500 max-w-xs md:text-sm text-xs justify-center text-center items-center overflow-hidden mx-auto font-semibold">
        No address data found.
      </p>
    );
  }

  return (
    <>
      <div className="bg-[#F5F3F1] overflow-hidden">
        <div className="ustify-center mx-auto items-center md:pt-5 overflow-hidden max-w-screen-xl lg:px-10 md:px-10 sm:px-5 px-5 pb-10">
          <div className="bg-white max-w-5xl mx-auto justify-center px-10 py-12">
            <div className="mt-16">
              <div className="flex justify-between relative h-16">
                <div>
                  <p className="font-displace font-medium text-[30px] mt-5">
                    Application Summary
                  </p>
                </div>
                <div>
                  <img className="w-40 border-2 border-[#1790E8]" src={inputData.picture} alt="Image"/>
                </div>
              </div>
              <p className="text-[#1790E8] text-[12px] mt-10">Application Type</p>
              <p className="text-gray-500 text-base">OuterCircle Aspiring Apprentice Member</p>
            </div>
            <div className="border-b">
              <p className="font-displace font-medium text-xl mt-12">
                Basic Information
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 bg-gray-100 p-5 mt-10">
                <div>
                  <p className="text-[13px] text-[#1790E8]">
                    Full Name or Given Name (English)
                  </p>
                  <p className="md:text-lg text-base mt-2">{inputData.fullname}</p>
                </div>
                <div>
                  <p className="text-[13px] text-[#1790E8]">
                    Gender
                  </p>
                  <p className="md:text-lg text-base mt-2">{inputData.gender}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 p-5">
                <div>
                  <p className="text-[13px] text-[#1790E8]">Date of Birth</p>
                  <p className="md:text-lg text-base mt-2">{inputData.dbirth}</p>
                </div>
                <div>
                  <p className="text-[13px] text-[#1790E8]">Ethnicity</p>
                  <p className="md:text-lg text-base mt-2">{inputData.ethnicity}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-gray-100 p-5">
                <div>
                  <p className="text-[13px] text-[#1790E8]">Phone Number</p>
                  <p className="md:text-lg text-base mt-2">{inputData.phoneno}</p>
                </div>
                <div>
                  <p className="text-[13px] text-[#1790E8]">Email Address</p>
                  <p className="md:text-lg text-base mt-2">{inputData.email}</p>
                </div>
              </div>
            </div>

            <div>
              <p className=" text-[25px] mt-14">Educational Background</p>

              <div className="grid grid-cols-2 bg-gray-100 p-5 mt-10">
                <div>
                  <p className="text-[13px] text-[#1790E8]">School/College</p>
                  <p className="md:text-lg text-base mt-2">{inputData.schoolcollege}</p>
                </div>

                <div>
                  <p className="text-[13px] text-[#1790E8]">Year</p>
                  <p className="md:text-lg text-base mt-2">{inputData.year}</p>
                </div>
              </div>

              <div className="grid grid-cols-2  p-5 ">

                <div className="grid grid-cols-2  p-5 ">
                  <div>
                    <p className="text-[13px] text-[#1790E8]">Field</p>
                    <p className="md:text-lg text-base mt-2">{inputData.field}</p>
                  </div>
                  <div>
                  <p className="text-[13px] text-[#1790E8]">Qualifications</p>
                </div>
                </div>
              </div>
            </div>

            <div>
              <p className=" text-[25px] mt-10">
                Apprenticeship Knowledge and Experience
              </p>

              <div className="grid grid-cols-2 bg-gray-100 p-5 mt-10">
                <div>
                  <p className="text-[13px] text-[#1790E8]">Passport Type</p>
                  <p className="md:text-lg text-base mt-2">{inputData.passport}</p>
                </div>

                <div>
                  <p className="text-[13px] text-[#1790E8]">Passport No.</p>
                  <p className="md:text-lg text-base mt-2">{inputData.passportno}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 p-5 ">
                <div>
                  <p className="text-[13px] text-[#1790E8]">
                    Passport Issue Place (Country or City)
                  </p>
                  <p className="md:text-lg text-base mt-2">{inputData.passportissueplace}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-gray-100 p-5 ">
                <div>
                  <p className="text-[13px] text-[#1790E8]">
                    Passport Issue Date
                  </p>
                  <p className="md:text-lg text-base mt-2">{inputData.passportissuedate}</p>
                </div>

                <div>
                  <p className="text-[13px] text-[#1790E8]">Passport No.</p>
                  <p className="md:text-lg text-base mt-2">{inputData.passportno}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 p-5 ">
                <div>
                  <p className="text-[13px] text-[#1790E8]">
                    Expected Date of Arrival
                  </p>
                  <p className="md:text-lg text-base mt-2">{inputData.arrivaldate}</p>
                </div>

                <div>
                  <p className="text-[13px] text-[#1790E8]">
                    Expected Date of Departure
                  </p>
                  <p className="md:text-lg text-base mt-2">{inputData.departuredate}</p>
                </div>
              </div>
            </div>

            <div>
              <p className=" text-[25px] mt-14">Interests and Goals</p>

              <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
                <div>
                  <p className="text-[20px] ">
                    Event, Family & Relatives, Leisure, Umrah
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className=" text-[25px] mt-14">Support and Resources</p>

              <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
                <div>
                  <p className="text-[13px] text-[#1790E8]">
                    Do you want to receive the visa on a email other than your
                    original email?
                  </p>
                  <p className="md:text-lg text-base mt-2">{inputData.communication}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 p-5">
                <div>
                  <p className="text-[13px] text-[#1790E8]">
                    Do you want to receive the visa on a phone number other than
                    your original phone number?
                  </p>
                  <p className="md:text-lg text-base mt-2">{inputData.phoneno}</p>
                </div>
              </div>
            </div>

            <div>
              <p className=" text-[25px] mt-14">
                Engagement and Feedback
              </p>

              <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
                <div>
                  <p className="text-[13px] text-[#1790E8]">City</p>
                  <p className="md:text-lg text-base mt-2">{inputData.scity}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 p-5">
                <div>
                  <p className="text-[13px] text-[#1790E8]">Address 1</p>
                  <p className="md:text-lg text-base mt-2">{inputData.address1}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
                <div>
                  <p className="text-[13px] text-[#1790E8]">Address 2</p>
                  <p className="md:text-lg text-base mt-2">{inputData.address2}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 p-5">
                <div>
                  <p className="text-[13px] text-[#1790E8]">
                    Name of Person or Hotel
                  </p>
                  <p className="md:text-lg text-base mt-2">{inputData.nameofperson}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
                <div>
                  <p className="text-[13px] text-[#1790E8]">
                    Primary Contact Number
                  </p>
                  <p className="md:text-lg text-base mt-2">{inputData.primarynumber}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 p-5">
                <div>
                  <p className="text-[13px] text-[#1790E8]">Email</p>
                  <p className="md:text-lg text-base mt-2">{inputData.email}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-16 md:my-20 md:gap-16">
              <button onClick={window.print}
                className="ml-5 text-[#1790E8] md:text-lg text-sm border-4 border-[#1790E8] md:w-64 w-48 items-center p-3 rounded-full block self-end">
                  Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Application;