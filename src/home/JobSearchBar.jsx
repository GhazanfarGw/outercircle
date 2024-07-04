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
        { id: 1, title: 'Technology', type: 'Technology', level: 'Level 2', location: 'London' },
        { id: 2, title: 'Engineering & Management', type: 'Engineering & Management', level: 'Level 3', location: 'North East' },
        { id: 3, title: 'Accounting & Finance', type: 'Accounting & Finance', level: 'Level 4 & 5', location: 'North West' },
        { id: 4, title: 'Nurse', type: 'Health & Science', level: 'Level 6 & 7', location: 'Yorkshire' },
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
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className="block text-gray-700">Select Type Filter:</label>
          <select 
            value={type} 
            onChange={handleTypeChange} 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Type</option>
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
        <div>
          <label className="block text-gray-700">Select Level Filter:</label>
          <select 
            value={level} 
            onChange={handleLevelChange} 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Level</option>
            <option value="Level 2">Level 2</option>
            <option value="Level 3">Level 3</option>
            <option value="Level 4 & 5">Level 4 & 5 (Higher)</option>
            <option value="Level 6 & 7">Level 6 & 7 (Degree/Masters)</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Select Location Filter:</label>
          <select 
            value={location} 
            onChange={handleLocationChange} 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Location</option>
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
        className={`mt-4 w-full py-2 rounded-md ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        disabled={isLoading}
      >
        {isLoading ? 'Searching...' : 'Search Jobs'}
      </button>

      {showJobs && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Available Jobs:</h2>
          {jobs.length > 0 ? (
            <ul className="mt-2 space-y-2">
              {jobs.map(job => (
                <li key={job.id} className="p-4 border border-gray-300 rounded-md">
                  <h3 className="text-lg font-medium">{job.title}</h3>
                  <p className="text-gray-700">Type: {job.type}</p>
                  <p className="text-gray-700">Level: {job.level}</p>
                  <p className="text-gray-700">Location: {job.location}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-gray-700">No jobs found matching the selected filters.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default JobSearchBar;