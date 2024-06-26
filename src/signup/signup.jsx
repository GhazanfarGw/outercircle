import { useLocation,} from "react-router-dom";
import Steppers from "./stepper";
import React, { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Register = () => {
  const location = useLocation();
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [picture, setPicture] = useState(null);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState ('');
  const [phoneno, setPhoneno] = useState ('');
  const [dbirth, setDbirth] = useState (null);
  const [gender, setGender] = useState ('');
  const [ethnicity, setEthnicity] = useState ('');
  const [loading, setLoading] = useState(false);

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
  
    if (!file) {
      console.log("No file selected.");
      return;
    }
  
    if (window.FileReader) {
      const reader = new FileReader();
  
      reader.onload = () => {
        console.log(reader.result);
        setPicture(reader.result);
      };
  
      reader.onerror = (error) => {
        console.log("Error occurred while reading the file.");
      };
  
      reader.readAsDataURL (file);
    } else {
      console.log("FileReader is not supported in this browser.");
    }
  };  
  
  const handleFullnameChange = (event) => {
    setFullname(event.target.value);
  };

  const handlePhonenoChange = (event) => {
    setPhoneno(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleDbirthChange = (date) => {
    setDbirth(date);
    const today = new Date();
    const selectedDate = new Date(date);
    const age = today.getFullYear() - selectedDate.getFullYear();

    // Check if the user is under 18 years old
    if (age < 15) {
      setError('You must be at least 15 years old.');
    } else {
      setError('');
    }
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handleEthnicityChange = (event) => {
    setEthnicity(event.target.value);
  }
  
  // Step 2 Educational Background
  const [schoolcollege, setSchoolcollege] = useState ('');
  const [year, setYear] = useState ('');
  const [field, setField] = useState ('');
  const [qualifications, setQualifications] = useState({
    GCSEs: false,
    ALevels: false,
    BTEC: false,
    Other: false,
  });

  const handleSchoolcollegeChange = (event) => {
    setSchoolcollege(event.target.value);
  }

  const handleYearChange = (event) => {
    setYear(event.target.value);
  }

  const handleFieldChange = (event) => {
    setField(event.target.value);
  }

  const handleQualificationsChange = (event) => {
    const { name, checked } = event.target;
    setQualifications((prevQualifications) => ({
      ...prevQualifications,
      [name]: checked,
    }));
  };

  // Step 3 Apprenticeship Knowledge and Experience *
  const [rating, setRating] = useState('');
  const [applied, setApplied] = useState('');
  const [details, setDetails] = useState('');
  const [challenges, setChallenges] = useState({
    lackOfInformation: false,
    applicationProcess: false,
    interviewPreparation: false,
    findingOpportunities: false,
    other: false,
  });
  const [otherDetails, setOtherDetails] = useState('');
  
const handleRatingChange = (event) => {
  setRating(event.target.value);
}

  const handleAppliedChange = (event) => {
    setApplied(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  const handleChallengesChange = (event) => {
    setChallenges({
      ...challenges,
      [event.target.name]: event.target.checked,
    });
  };

  const handleOtherDetailsChange = (event) => {
    setOtherDetails(event.target.value);
  };


  // Step 4 Interests and Goals*
  const [apprenticeshipTypes, setApprenticeshipTypes] = useState({
    degree: false,
    higher: false,
    advanced: false,
    intermediate: false,
    notSure: false,
  });
  const [careerGoals, setCareerGoals] = useState('');
  const [skills, setSkills] = useState('');


  const handleApprenticeshipTypesChange = (event) => {
    setApprenticeshipTypes({
      ...apprenticeshipTypes,
      [event.target.name]: event.target.checked,
    });
  };

  const handleCareerGoalsChange = (event) => {
    setCareerGoals(event.target.value);
  };

  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };


  // Steps 5 Support and Resources*

  const [resources, setResources] = useState({
    cvWriting: false,
    interviewPreparation: false,
    findingOpportunities: false,
    networking: false,
    workshops: false,
    mentorship: false,
    other: false,
  });
  const [resourceDetails, setResourceDetails] = useState('');
  const [support, setSupport] = useState('');

  const handleResourcesChange = (event) => {
    setResources({
      ...resources,
      [event.target.name]: event.target.checked,
    });
  };

  const handleResourceDetailsChange = (event) => {
    setResourceDetails(event.target.value);
  };

  const handleSupportChange = (event) => {
    setSupport(event.target.value);
  };

  // steps 6 Engagement and Feedback*
  const [heardAbout, setHeardAbout] = useState('');
  const [heardAboutOther, setHeardAboutOther] = useState('');
  const [participateEvents, setParticipateEvents] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleHeardAboutChange = (event) => {
    setHeardAbout(event.target.value);
  };

  const handleHeardAboutOtherChange = (event) => {
    setHeardAboutOther(event.target.value);
  };

  const handleParticipateEventsChange = (event) => {
    setParticipateEvents(event.target.value);
  };

  const handleSuggestionsChange = (event) => {
    setSuggestions(event.target.value);
  };

  // steps 7 Consent and Agreement
  const [consent, setConsent] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  const handleConsentChange = (event) => {
    setConsent(event.target.checked);
  };

  const handleSubscribeChange = (event) => {
    setSubscribe(event.target.checked);
  };

  const handleNext = () => {
    switch (step) {
      case 0:
        if (!picture || !fullname || !email || !phoneno || !gender || !dbirth || !ethnicity) {
          setErrorMessage('Please fill in all the fields');
          return;
        }
        break;
      case 1:
        if (!schoolcollege || !year || !field || !Object.values(qualifications).some(Boolean)) {
          setErrorMessage('Please fill in all the fields');
          return;
        }
        break;
      case 2:
        if (!applied || (applied === 'yes' && !details) || !rating || !Object.values(challenges).some(Boolean)) {
          setErrorMessage('Please fill in all the fields');
          return;
        }
        break;
      case 3:
        if (!Object.values(apprenticeshipTypes).some(Boolean) || !careerGoals || !skills) {
          setErrorMessage('Please fill in all the fields');
          return;
        }
        break;
      case 4:
        if (!Object.values(resources).some(Boolean) || !support) {
          setErrorMessage('Please fill in all the fields');
          return;
        }
        break;
      case 5:
        if (!heardAbout || !participateEvents || !suggestions) {
          setErrorMessage('Please fill in all the fields');
          return;
        }
        break;
      case 6:
        if (!consent || !subscribe) {
          setErrorMessage('Please fill in all the fields');
          return;
        }
        break;
      default:
        break;
    }
  
    setErrorMessage('');
    setStep(step + 1);
  };  

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    // Store input data in local storage
    const inputData = { picture, fullname, gender, dbirth, phoneno, email, ethnicity, schoolcollege, year, field, qualifications, applied, details, rating, challenges, apprenticeshipTypes, careerGoals, skills, resources, resourceDetails, support, heardAbout, participateEvents, suggestions, consent, subscribe };
    localStorage.setItem('inputData', JSON.stringify(inputData));
  
    try {
      const response = await postDataToAPI(inputData);
      if (response.ok) {
        const confirmation = window.confirm("Are you sure you want to submit this form?");
        if (confirmation) {
          window.location.href = '/TfdgjkldfQ9Xqvgdv1Ct9EBgdfklgfkldgjklfd2GVJ8jc12vCt7nj9xxTQ9Xqvgdv1Ct9EBg2GVJ8jc12vCt7nj9xxkdlfgrtgkdfjgkl';
        }
      } else {
        // Handle server error or invalid response
        console.error('Failed to submit form:', response.statusText);
        // Set error state or notify user accordingly
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Set error state or notify user accordingly
    } finally {
      setLoading(false);
    }
  };
  
  const postDataToAPI = async (data) => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response;
    } catch (error) {
      throw new Error('Failed to fetch data from server:', error);
    }
  };  

  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-3 md:pt-44 pt-16">
        <div className="md:block lg:block hidden -z-30 md:col-span-1 bg-side md:h-[100vh] mt-10 md:-mt-[165px] md:fixed md:w-[20%] w-[90%] mx-auto">
          <Steppers activeStep={step} />
        </div>
        <form onSubmit={handleSubmit} className="md:col-span-2 md:ml-[300px] lg:ml-[400px] xl:ml-[500px] md:w-[75%] mx-auto w-[90%]">
          {step === 0 && (
            <div>
              <div className="mt-10">
                <p className=" font-semibold">Personal Picture</p>
                <p className="text-gray-400 text-sm py-4 md:w-1/2 md:mt-5">
                  Please upload picture of dimension 200 x 200 px Personal picture Size
                  must be from 5 to 100 Kb Allowed picture file types are .jpg,
                  .jpeg, .png, .gif, .bmp Photo Specifications
                </p>
                <div style={{ width: 'auto' }}>
                  <input type="file" accept="image/*" required onChange={handlePictureUpload} />
                  {picture == "" || picture == null ? "": <img className="pt-10 w-44" src={picture}/>}
                </div>
              </div>
              <div className="mt-10">
                <label className="text-[#1790E8] font-medium ">
                  First Name or Given Name (English)*
                </label> 
                <br />
                <input
                  type="text"
                  value={fullname}
                  required
                  onChange={handleFullnameChange}
                  placeholder="First Name or Given Name (English)"
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
                />
              </div>
              <div className="mt-10">
                  <label className="text-[#1790E8] font-medium">Email</label>
                  <br />
                  <input
                    type="mail"
                    value={email}
                    required
                    onChange={handleEmailChange}
                    placeholder="example@example.com"
                    className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
                  />
              </div>
              <div className="mt-10">
                <input
                  type="number"
                  value={phoneno}
                  required
                  onChange={handlePhonenoChange}
                  placeholder="+332222222232"
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%] placeholder-gray-400"
                />
              </div>
              <div className="mt-10">
                <label className="text-[#1790E8] font-medium ">
                  Date of Birth*
                </label>
                <br />
                <DatePicker
                  selected={dbirth}
                  required
                  onChange={handleDbirthChange}
                  className="mt-3 border-[1px] border-gray-400 py-3 px-4 w-[21rem] md:w-[56.5rem] md:px-4 placeholder-gray-400"
                />
                {error && <p className="text-red-500 text-sm pt-3">{error}</p>}
                <p className="text-[12px] mt-2 text-gray-400">
                  Click on the title of the popup window to scroll multiple
                  months/years at a time
                </p>
              </div>
              <div className="mt-10 ">
                <label className="text-[#1790E8] font-medium ">Gender*</label>
                <br />
                <select value={gender} 
                  onChange={handleGenderChange}
                  type="text"
                  required 
                  className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-5 placeholder-gray-400">
                  <option value="" disabled>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Non binary">Non-Binary</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              <div className="mt-10 ">
                <label className="text-[#1790E8] font-medium ">Ethnicity*</label>
                <br />
                <select value={ethnicity} 
                  onChange={handleEthnicityChange}
                  type="text"
                  required 
                  className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-5 placeholder-gray-400">
                  <option value="" disabled>Select</option>
                  <option value="Male">White</option>
                  <option value="Female">Black or African American</option>
                  <option value="Non binary">Hispanic or Latino</option>
                  <option value="Prefer not to say">Asian or Pacific Islander</option>
                  <option value="Prefer not to say">Native American or Alaskan Native</option>
                  <option value="Prefer not to say">Middle Eastern</option>
                  <option value="Prefer not to say">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              {/* Display error message */}
              {errorMessage && <p>{errorMessage}</p>}
              <button 
                className="ml-5 text-[#1790E8] md:text-lg text-sm border-4 border-[#1790E8] md:w-64 w-48 items-center p-3 rounded-full block self-end my-10" 
                variant="primary" onClick={handleNext}>
                Next
              </button>
            </div>
          )}

          {step === 1 && (
            <div>
              <p className="mt-10 text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-[#1790E8]">
                Educational Background *
              </p>
              <div className="mt-10">
                <label className="text-[#1790E8] font-medium ">Current School/College*</label>
                <br />
                <input
                  type="text"
                  value={schoolcollege}
                  required
                  onChange={handleSchoolcollegeChange}
                  placeholder="School/College"
                  className="mt-3 border-[1px] border-gray-400 py-3 px-4 w-[21rem] md:w-[56.5rem] md:px-4 placeholder-gray-400"
                />
              </div>

              <div className="mt-10 ">
                <label className="text-[#1790E8] font-medium ">Year*</label>
                <br />
                <select 
                  value={year}
                  required 
                  onChange={handleYearChange} 
                  className="border-[1px]  border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400 ">
                  <option value="" disabled>Select</option>
                  <option value="year 10">Year 10</option>
                  <option value="year 11">Year 11</option>
                  <option value="year 12">Year 12</option>
                  <option value="year 13">Year 13</option>
                  <option value="year 14">Year 14</option>
                  <option value="year 15">Year 15</option>
                  <option value="year 16">Year 16</option>
                  <option value="year 17">Year 17</option>
                  <option value="year 18">Year 18</option>
                  <option value="year 19">Year 19</option>
                  <option value="year 20">Year 20</option>
                  <option value="year 21">Year 21</option>
                  <option value="year 22">Year 22</option>
                  <option value="year 23">Year 23</option>
                  <option value="year 24">Year 24</option>
                  <option value="year 25">Year 25</option>
                </select>
              </div>

              <div className="mt-10 ">
                <label className="text-[#1790E8] font-medium">Field of Interest*</label>
                <br />
                <select 
                  value={field}
                  required 
                  onChange={handleFieldChange} 
                  className="border-[1px]  border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400 ">
                  <option value="" disabled>Select</option>
                  <option value="IT and Technology">IT and Technology</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Business and Administration">Business and Administration</option> 
                  <option value="Health and Social Care">Health and Social Care</option>
                  <option value="Creative and Media">Creative and Media</option>
                  <option value="Construction">Construction</option>
                  <option value="Other">Other</option>  
                </select>
              </div>
              <div className="mt-5">
                <label className="text-[#1790E8] font-medium">Current Qualifications*</label>
                <br />
                <div className="flex gap-5 pt-3">
                  <label className="block">
                    <input
                      type="checkbox"
                      name="GCSEs"
                      checked={qualifications.GCSEs}
                      onChange={handleQualificationsChange}
                      className="mr-2"
                    />
                    GCSEs
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      name="ALevels"
                      checked={qualifications.ALevels}
                      onChange={handleQualificationsChange}
                      className="mr-2"
                    />
                    A-Levels
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      name="BTEC"
                      checked={qualifications.BTEC}
                      onChange={handleQualificationsChange}
                      className="mr-2"
                    />
                    BTEC
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      name="Other"
                      checked={qualifications.Other}
                      onChange={handleQualificationsChange}
                      className="mr-2"
                    />
                    Other
                  </label>

                </div>
              </div>
              {errorMessage && <p>{errorMessage}</p>}
              <div className="flex justify-center my-16 md:my-20 md:gap-16">
                <button className="cool-link text-black md:text-lg text-sm cursor-pointer self-center" onClick={handlePrev}>
                  Previous
                </button>{" "}
                <button 
                  className="ml-5 text-[#1790E8] md:text-lg text-sm border-4 border-[#1790E8] md:w-64 w-48 items-center p-3 rounded-full block self-end my-10" 
                  variant="primary" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="mt-10 text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-[#1790E8]">
                Apprenticeship Knowledge and Experience *
              </p>
              <div className="mt-10 ">
                <label className="text-[#1790E8] font-medium ">How would you rate your current knowledge of apprenticeships?</label>
                <br />
                <select 
                  value={rating}
                  required 
                  onChange={handleRatingChange} 
                  className="border-[1px]  border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400 ">
                  <option value="" disabled>Rating Scale</option>
                  <option value="year 10">1</option>
                  <option value="year 11">2</option>
                  <option value="year 11">3</option>
                  <option value="year 11">4</option>
                  <option value="year 11">5</option>
                </select>
              </div>
              <div className="mt-10">
                <label className="text-[#1790E8] font-medium">Have you previously applied for any apprenticeships?</label>
                <br />
                <select 
                  value={applied}
                  required 
                  onChange={handleAppliedChange} 
                  className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400">
                  <option value="" disabled>Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {applied === 'yes' && (
                  <div className="mt-5">
                    <label className="text-[#1790E8] font-medium">If yes, please provide details of the application(s):</label>
                    <br />
                    <textarea
                      value={details}
                      onChange={handleDetailsChange}
                      className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400"
                      placeholder="Provide details here..."
                    ></textarea>
                  </div>
                )}
              </div>
              <div className="mt-10">
                <label className="text-[#1790E8] font-medium">What are your main challenges in understanding apprenticeships?</label>
                <div className="mt-3">
                  <label className="block">
                    <input 
                      type="checkbox" 
                      name="lackOfInformation" 
                      checked={challenges.lackOfInformation}
                      onChange={handleChallengesChange}
                    />
                    Lack of information
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="applicationProcess" 
                      checked={challenges.applicationProcess}
                      onChange={handleChallengesChange}
                    />
                    Application process
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="interviewPreparation" 
                      checked={challenges.interviewPreparation}
                      onChange={handleChallengesChange}
                    />
                    Interview preparation
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="findingOpportunities" 
                      checked={challenges.findingOpportunities}
                      onChange={handleChallengesChange}
                    />
                    Finding suitable opportunities
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="other" 
                      checked={challenges.other}
                      onChange={handleChallengesChange}
                    />
                    Other
                  </label>
                  {challenges.other && (
                    <textarea
                      value={otherDetails}
                      onChange={handleOtherDetailsChange}
                      className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400"
                      placeholder="Please specify..."
                    ></textarea>
                  )}
                </div>
              </div>
              {errorMessage && <p>{errorMessage}</p>}
              <div className="flex justify-center my-16 md:my-20 md:gap-16">
                <button className="cool-link text-black md:text-lg text-sm cursor-pointer self-center" onClick={handlePrev}>
                  Previous
                </button>{" "}
                <button 
                  className="ml-5 text-[#1790E8] md:text-lg text-sm border-4 border-[#1790E8] md:w-64 w-48 items-center p-3 rounded-full block self-end my-10" 
                  variant="primary" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div>
              <p className="mt-10 text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-[#1790E8]">
                Interests and Goals *
              </p>
              <div className="mt-10">
                <label className="text-[#1790E8] font-medium">What type of apprenticeships are you interested in?</label>
                <div className="mt-3">
                  <label className="block">
                    <input 
                      type="checkbox" 
                      name="degree" 
                      checked={apprenticeshipTypes.degree}
                      onChange={handleApprenticeshipTypesChange}
                    />
                    Degree Apprenticeship
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="higher" 
                      checked={apprenticeshipTypes.higher}
                      onChange={handleApprenticeshipTypesChange}
                    />
                    Higher Apprenticeship
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="advanced" 
                      checked={apprenticeshipTypes.advanced}
                      onChange={handleApprenticeshipTypesChange}
                    />
                    Advanced Apprenticeship
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="intermediate" 
                      checked={apprenticeshipTypes.intermediate}
                      onChange={handleApprenticeshipTypesChange}
                    />
                    Intermediate Apprenticeship
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="notSure" 
                      checked={apprenticeshipTypes.notSure}
                      onChange={handleApprenticeshipTypesChange}
                    />
                    Not sure
                  </label>
                </div>
              </div>
              <div className="mt-10">
                <label className="text-[#1790E8] font-medium">What are your career goals?</label>
                <br />
                <textarea
                  value={careerGoals}
                  onChange={handleCareerGoalsChange}
                  className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400"
                  placeholder="Describe your career goals here..."
                ></textarea>
              </div>
              <div className="mt-10">
                <label className="text-[#1790E8] font-medium">What skills do you want to develop through an apprenticeship?</label>
                <br />
                <textarea
                  value={skills}
                  onChange={handleSkillsChange}
                  className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400"
                  placeholder="Describe the skills you want to develop here..."
                ></textarea>
              </div>
              {errorMessage && <p>{errorMessage}</p>}
              <div className="flex justify-center my-16 md:my-20 md:gap-16">
                <button className="cool-link text-black md:text-lg text-sm cursor-pointer self-center" onClick={handlePrev}>
                  Previous
                </button>{" "}
                <button 
                  className="ml-5 text-[#1790E8] md:text-lg text-sm border-4 border-[#1790E8] md:w-64 w-48 items-center p-3 rounded-full block self-end my-10" 
                  variant="primary" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <p className="mt-10 text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-[#1790E8]">
                Support and Resources *
              </p>
              <div className="mt-10">
                <label className="text-[#1790E8] font-medium">Which resources would be most helpful for you?</label>
                <div className="mt-3">
                  <label className="block">
                    <input 
                      type="checkbox" 
                      name="cvWriting" 
                      checked={resources.cvWriting}
                      onChange={handleResourcesChange}
                    />
                    CV writing tips
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="interviewPreparation" 
                      checked={resources.interviewPreparation}
                      onChange={handleResourcesChange}
                    />
                    Interview preparation
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="findingOpportunities" 
                      checked={resources.findingOpportunities}
                      onChange={handleResourcesChange}
                    />
                    Finding apprenticeship opportunities
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="networking" 
                      checked={resources.networking}
                      onChange={handleResourcesChange}
                    />
                    Networking with professionals
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="workshops" 
                      checked={resources.workshops}
                      onChange={handleResourcesChange}
                    />
                    Workshops and webinars
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="mentorship" 
                      checked={resources.mentorship}
                      onChange={handleResourcesChange}
                    />
                    Mentorship programs
                  </label>
                  <label className="block mt-2">
                    <input 
                      type="checkbox" 
                      name="other" 
                      checked={resources.other}
                      onChange={handleResourcesChange}
                    />
                    Other
                  </label>
                  {resources.other && (
                    <textarea
                      value={resourceDetails}
                      onChange={handleResourceDetailsChange}
                      className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400"
                      placeholder="Please specify..."
                    ></textarea>
                  )}
                </div>
              </div>
              <div className="mt-10">
                <label className="text-[#1790E8] font-medium">Do you need any specific support or accommodations?</label>
                <br />
                <textarea
                  value={support}
                  onChange={handleSupportChange}
                  className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400"
                  placeholder="Describe any specific support or accommodations you need here..."
                ></textarea>
              </div>
              {errorMessage && <p>{errorMessage}</p>}
              <div className="flex justify-center my-16 md:my-20 md:gap-16">
                <button className="cool-link text-black md:text-lg text-sm cursor-pointer self-center" onClick={handlePrev}>
                  Previous
                </button>{" "}
                <button 
                  className="ml-5 text-[#1790E8] md:text-lg text-sm border-4 border-[#1790E8] md:w-64 w-48 items-center p-3 rounded-full block self-end my-10" 
                  variant="primary" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          )}
            
          {step === 5 && (
            <div>
              <p className="mt-10 text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-[#1790E8]">
                Engagement and Feedback *
              </p>
              <div className="mt-10">
                <label className="text-[#1790E8] font-medium">How did you hear about OuterCircle?</label>
                <br />
                <select 
                  value={heardAbout}
                  required 
                  onChange={handleHeardAboutChange} 
                  className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400">
                  <option value="" disabled>Select your source</option>
                  <option value="schoolCollege">School/College</option>
                  <option value="socialMedia">Social Media</option>
                  <option value="friendFamily">Friend/Family</option>
                  <option value="onlineSearch">Online Search</option>
                  <option value="other">Other</option>
                </select>
                {heardAbout === 'other' && (
                  <textarea
                    value={heardAboutOther}
                    onChange={handleHeardAboutOtherChange}
                    className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400"
                    placeholder="Please specify..."
                  ></textarea>
                )}
              </div>
              <div className="mt-10">
                <label className="text-[#1790E8] font-medium">Would you be interested in participating in our events and workshops?</label>
                <br />
                <select 
                  value={participateEvents}
                  required 
                  onChange={handleParticipateEventsChange} 
                  className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400">
                  <option value="" disabled>Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="mt-10">
                <label className="text-[#1790E8] font-medium">Do you have any suggestions or feedback for us?</label>
                <br />
                <textarea
                  value={suggestions}
                  onChange={handleSuggestionsChange}
                  className="border-[1px] border-gray-400 px-3 w-[100%] py-3 mt-3 placeholder-gray-400"
                  placeholder="Provide your suggestions or feedback here..."
                ></textarea>
              </div>
              {errorMessage && <p>{errorMessage}</p>}
              <div className="flex justify-center my-16 md:my-20 md:gap-16">
                <button className="cool-link text-black md:text-lg text-sm cursor-pointer self-center" onClick={handlePrev}>
                  Previous
                </button>{" "}
                <button 
                  className="ml-5 text-[#1790E8] md:text-lg text-sm border-4 border-[#1790E8] md:w-64 w-48 items-center p-3 rounded-full block self-end my-10" 
                  variant="primary" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          )}
            
          {step === 6 && (
            <div>
              <p className="mt-10 text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-[#1790E8]">
                Consent and Agreement *
              </p>
              <div className="mt-10">
                <label className="block">
                  <input 
                    type="checkbox" 
                    name="consent" 
                    checked={consent}
                    onChange={handleConsentChange}
                  />
                  I agree to the collection and use of my personal data by OuterCircle for the purpose of receiving support and resources related to apprenticeships.
                </label>
                <label className="block mt-2">
                  <input 
                    type="checkbox" 
                    name="subscribe" 
                    checked={subscribe}
                    onChange={handleSubscribeChange}
                  />
                  I would like to subscribe to the OuterCircle newsletter for updates and information.
                </label>
              </div>
              {errorMessage && <p>{errorMessage}</p>}
              <div className="flex justify-center my-16 md:my-20 md:gap-16">
                <button className="cool-link text-black md:text-lg text-sm cursor-pointer self-center" onClick={handlePrev}>
                  Previous
                </button>{" "}            
                  <button
                    value={handleSubmit} 
                    className="ml-5 text-[#1790E8] md:text-lg text-sm border-4 border-[#1790E8] md:w-64 w-48 items-center p-3 rounded-full block self-end my-10"
                    type="submit">
                    {loading ? (
                      <div className='flex items-center gap-3 cursor-progress'>
                        <span className='text-base text-center justify-center'>Loading</span>
                        <ThreeDots height="20" width="20" radius="9" color="secondary" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true}/>
                      </div>
                      ) : (
                      'Submit'
                    )}
                  </button>
              </div>
            </div>
            )}
        </form>
      </div>
    </>
  );
}

export default Register;