import React, { useState } from 'react';

const JobSearchBar = () => {
  const [type, setType] = useState('');
  const [level, setLevel] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);
  const [showJobs, setShowJobs] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    setIsLoading(true); // Set loading state to true when search starts

    // Simulate loading with a 2-second delay
    setTimeout(() => {
      // Example job data (simulated)
      const availableJobs = [
        { 
          id: 1, 
          logo: './outercircle.png', // Example logo URL
          title: 'Chartered Managemant Degree Apprenticeship (in person)', 
          company: 'University of Kent (Employers)',
          salary: 'N/A',
          type: 'Bussiness',
          location: 'London',
          university:'University of Kent',
          qualification: 'Chartered Business Managemant (BA/BSc)',
          requirements:'CCC/AAB A-Level',
          date: '09/09/2024',
          deadline: 'TBD',
          level: 'Level 2' 
        },
        { 
          id: 2, 
          logo: './outercircle.png', // Example logo URL
          title: 'Chartered Managemant Degree Apprenticeship (in person)', 
          company: 'University of Kent (Employers)',
          salary: 'N/A',
          type: 'Bussiness',
          location: 'London',
          university:'University of Kent',
          qualification: 'Chartered Business Managemant (BA/BSc)',
          requirements:'CCC/AAB A-Level',
          date: '09/09/2024',
          deadline: 'TBD',
          level: 'Level 2' 
        },
        // Add more jobs as needed
      ];

      // Filter jobs based on selected filters
      const filteredJobs = availableJobs.filter(job =>
        (type === '' || job.type === type) &&
        (level === '' || job.level === level) &&
        (location === '' || job.location === location || location === 'All')
      );

      setJobs(filteredJobs);
      setShowJobs(true);
      setIsLoading(false); // Set loading state to false when search completes
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 py-3 pb-5 px-8">
        <div className='text-left'>
          <label className="block text-white font-semibold py-1">Select Type</label>
          <select 
            value={type} 
            onChange={handleTypeChange} 
            className="w-full mt-1 p-2 border border-[#A04FC8] rounded-md"
          >
            <option value="" disabled>Select Type</option>
            <option value="Bussiness">Chartered Managemant</option>
            <option value="Technology">Technology</option>
            <option value="Engineering & Management">Engineering & Management</option>
            <option value="Accounting & Finance">Accounting & Finance</option>
            <option value="Law">Law</option>
            <option value="Construction">Construction</option>
            <option value="Health & Science">Health & Science</option>
            <option value="Marketing & Media">Marketing & Media</option>
            <option value="Sales & Procurement">Sales & Procurement</option>
          </select>
        </div>
        <div className='text-left'>
          <label className="block text-white font-semibold py-1">Select Level</label>
          <select 
            value={level} 
            onChange={handleLevelChange} 
            className="w-full mt-1 p-2 border border-[#A04FC8] rounded-md"
          >
            <option value="" disabled>Select Level</option>
            <option value="Level 2">Level 2</option>
            <option value="Level 3">Level 3</option>
            <option value="Level 4 & 5">Level 4 & 5 (Higher)</option>
            <option value="Level 6 & 7">Level 6 & 7 (Degree/Masters)</option>
          </select>
        </div>
        <div className='text-left'>
          <label className="block text-white font-semibold py-1">Location</label>
          <select 
            value={location} 
            onChange={handleLocationChange} 
            className="w-full mt-1 p-2 border border-[#A04FC8] rounded-md"
          >
            <option value="" disabled>Select Location</option>
            <option value="All">All</option>
            <option value="London">London</option>
            <option value="North East">North East</option>
            <option value="North West">North West</option>
            <option value="Yorkshire">Yorkshire</option>
            <option value="West Midlands">West Midlands</option>
            <option value="East Midlands">East Midlands</option>
            <option value="South East">South East</option>
            <option value="East of England">East of England</option>
          </select>
        </div>
      </div>
      <button 
        onClick={handleSearch} 
        className={`mt-8 px-20 py-2 rounded-md ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-l from-[#1790E8] to-[#A04FC8] text-white'}`}
        disabled={isLoading}
      >
        {isLoading ? 'Searching...' : 'Search Jobs'}
      </button>

      {showJobs && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Available Jobs:</h2>
          {jobs.length > 0 ? (
            <div className="mt-10 items-center md:flex grid md:grid-cols-2 gap-5 justify-between mx-auto">
              {jobs.map(job => (
                <div key={job.id} className="p-4 border border-[#A04FC8] rounded-md text-left md:py-12 py-5">
                  <div className=''>
                    <img src={job.logo} alt={`${job.title} logo`} className="md:w-20 w-12" />
                  </div>
                  <div className='pt-5'>
                    <h3 className="md:text-lg font-medium">{job.title}</h3>
                    <div className='flex items-center gap-2 pt-2'>
                      <img className='md:w-6 w-5' src='./application_icons/icons8-company-100.png'/>
                      <p className="text-gray-700 md:pt-0 pt-3 md:text-base text-xs font-semibold">Company:
                        <span className='ml-2 font-normal'>{job.company}</span></p>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                      <img className='md:w-6 w-5' src='./application_icons/icons8-salary-100.png'/>
                      <p className="text-gray-700 font-semibold md:pt-0 pt-2 md:text-base text-xs">Salary:
                        <span className='ml-2 font-normal'>{job.salary}</span></p>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                      <img className='md:w-6 w-5' src='./application_icons/icons8-type-100.png'/>
                      <p className="text-gray-700 font-semibold md:pt-0 pt-2 md:text-base text-xs">Type:
                        <span className='ml-2 font-normal'>{job.type}</span></p>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                      <img className='md:w-6 w-5' src='./application_icons/icons8-location-100.png'/>
                      <p className="text-gray-700 font-semibold md:pt-0 pt-2 md:text-base text-xs">Location:
                        <span className='ml-2 font-normal'>{job.location}</span></p>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                      <img className='md:w-6 w-5' src='./application_icons/icons8-university-100.png'/>
                      <p className="text-gray-700 font-semibold md:pt-0 pt-2 md:text-base text-xs">University:
                        <span className='ml-2 font-normal'>{job.university}</span></p>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                      <img className='md:w-6 w-5' src='./application_icons/icons8-university-100 (1).png'/>
                      <p className="text-gray-700 font-semibold md:pt-0 pt-2 md:text-base text-xs">Qualification:
                        <span className='ml-2 font-normal'>{job.qualification}</span></p>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                      <img className='md:w-6 w-5' src='./application_icons/icons8-entry-100.png'/>
                      <p className="text-gray-700 font-semibold md:pt-0 pt-2 md:text-base text-xs">Entry Requirements:
                        <span className='ml-2 font-normal'>{job.requirements}</span></p>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                      <img className='md:w-6 w-5' src='./application_icons/icons8-time-100.png'/>
                      <p className="text-gray-700 font-semibold md:pt-0 pt-2 md:text-base text-xs">Start Date:
                        <span className='ml-2 font-normal'>{job.date}</span></p>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                      <img className='md:w-6 w-5' src='./application_icons/icons8-deadline-100.png'/>
                      <p className="text-gray-700 font-semibold md:pt-0 pt-2 md:text-base text-xs">Application Deadline:
                        <span className='ml-2 font-normal'>{job.deadline}</span></p>
                    </div>
                  </div>
                  <a href="./">
                    <span className="md:w-44 md:mt-10 mt-6 text-center flex bg-gradient-to-l from-[#1790E8] to-[#A04FC8] items-center shadow-xl rounded-r-lg md:px-8 px-20 md:py-4 py-2 text-white text-sm font-semibold mr-4">
                      Apply Now
                    </span>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-gray-700">No jobs found matching the selected filters.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default JobSearchBar;