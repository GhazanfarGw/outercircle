// Function to fetch jobs from the local JSON file
export const fetchJobs = async () => {

    try {
      const response = await fetch('../data/jobs.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jobs = await response.json();
      return jobs;
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
      throw error;
    }
};