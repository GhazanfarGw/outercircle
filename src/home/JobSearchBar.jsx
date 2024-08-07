import React, { useState } from 'react';

const JobSearchBar = () => {
  const [title, seTitle] = useState('');
  const [level, setLevel] = useState('');
  const [region, setRegion] = useState('');
  const [jobs, setJobs] = useState([]);
  const [showJobs, setShowJobs] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTitleChange = (event) => {
    seTitle(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleSearch = () => {
    setIsLoading(true); // Set loading state to true when search starts

    // Simulate loading with a 2-second delay
    setTimeout(() => {
      // Example job data (simulated)
      const availableJobs = [
        {
          id: 1, 
          title: 'Apprentice Data Analyst & IT Solutions', 
          company: 'Primetals Technologies, Limited',
          salary: '£28,400.00',
          type: 'Degree Apprenticeship',
          region: 'London',
          location: 'Building 11 Chiswick Park, 566 Chiswick High Road, London, W4 5YA',
          university: 'The University of West London',
          qualification: 'MSc in Digital and Technology Solutions Specialist',
          requirements: 'Honours Degree (Grade 2:2 or above)',
          date: '05 Aug 2024',
          deadline: '15 July 2024',
          level: 'Level 7',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000261742'
        },        
        {
          id: 2, 
          title: 'Data Scientist Degree Apprentice', 
          company: 'Water Offsets Ltd',
          salary: '£18,000.00',
          type: 'Degree Apprenticeship',
          region: 'East of England',
          location: 'Shire Park, 2 Falcon Gate, Welwyn Garden City, AL7 1TW',
          university: 'University of Hertfordshire',
          qualification: 'BSc Honours Data Science (work-based)',
          requirements: 'GCSE English Language (Grade 4 / C equivalent), GCSE Maths (Grade 4 / C equivalent), A Level Maths (Grade B), BTEC Applied Science AND A Level Maths (Grade C)',
          date: '23 Sep 2024',
          deadline: '10 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000263677'
        },
        {
          id: 3, 
          title: 'Digital Solutions Apprentice', 
          company: 'Smith Institute Ltd',
          salary: '£22,500.00',
          type: 'Degree Apprenticeship',
          region: 'South East',
          location: 'Willow Court, West Way, Minns Business Park, Oxford, OX2 0JB',
          university: 'The Open University',
          qualification: 'BSc (Honours) Degree in Digital and Technology Solutions',
          requirements: 'A Level Computer Science (Grade A), A Level Mathematics (Grade A)',
          date: '02 Sep 2024',
          deadline: '27 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000260948'
        },
        {
          id: 4, 
          title: 'Application Analyst Apprentice', 
          company: 'Worcestershire County Council',
          salary: '£22,230.00 (Scale 3: £22,230 to £22,601)',
          type: 'Degree Apprenticeship',
          region: 'West Midlands',
          location: 'County Hall, Spetchley Road, Worcester, WR5 2NP',
          university: 'The Development Manager Ltd',
          qualification: 'BSc (Hons) in Digital & Technology Solutions',
          requirements: 'GCSE or equivalent in English and Maths (Grade 4-9 (A-C)), NVQ or SVQ Level 1 or equivalent Essential Digital Skills',
          date: '02 Sep 2024',
          deadline: '02 Aug 2024',
          level: 'Level 1',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000262409'
        },
        {
          id: 5, 
          title: 'Digital Transformation Apprentice', 
          company: 'Gardner Group Limited',
          salary: '£24,000.00',
          type: 'Degree Apprenticeship (Level 7 - Master\'s degree)',
          region: 'East Midlands',
          location: 'Unit 9 Victory Park, Victory Road, Derby, DE24 8ZF',
          university: 'Staffordshire University',
          qualification: 'Digital & Technology Solutions Specialist (Level 7)',
          requirements: 'Degree (Grade 2:1)',
          date: '08 Aug 2024',
          deadline: '15 July 2024',
          level: 'Level 7',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000261593'
        },
        {
          id: 6, 
          title: 'Building Services Design Engineer Apprenticeship', 
          company: 'D & P Electrical Solutions Ltd',
          salary: '£20,000.00',
          type: 'Degree Apprenticeship',
          region: 'South East',
          location: 'Unit 11 Chiltern Ind. Estate, Earl Howe Road, Holmer Green, HP15 6QT',
          university: 'London South Bank University',
          qualification: 'BEng (Hons) Building Services Engineering',
          requirements: 'GCSE or equivalent in Maths and English (Grade 4-9), A Level or equivalent in 3 subjects including Maths and Physical Science (Grade B, B, C)',
          date: '01 Sep 2024',
          deadline: '31 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000255663'
        },
        {
          id: 7, 
          title: 'Civil Engineer Apprentice', 
          company: 'Envolve Infrastructure Limited',
          salary: '£25,000.00',
          type: 'Degree Apprenticeship',
          region: 'South West',
          location: 'Envolve Infrastructure, Unit B, St Brendans Court, BS11 9FB',
          university: 'University of Exeter',
          qualification: 'BEng (Hons) Civil Engineering',
          requirements: 'A Level in Maths and a Science Subject (Grade B), BTEC Extended Diploma (Grade DDM), T-level in Design and Development for Engineering (Grade Distinction)',
          date: '30 Sep 2024',
          deadline: '09 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000262555'
        },
        {
          id: 8, 
          title: 'Engineering Apprentice', 
          company: 'Richard Jackson Ltd',
          salary: '£12,480.00 to £22,308.00',
          type: 'Degree Apprenticeship',
          region: 'East of England',
          location: '4 St. Matthews Road, The Old Church, Norwich, NR1 1SP',
          university: 'University of Suffolk',
          qualification: 'BSc or BEng Civil Engineering Degree',
          requirements: 'GCSE in English Language and Mathematics (Grade 4)',
          date: '01 Sep 2024',
          deadline: '31 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000258853'
        },
        {
          id: 9, 
          title: 'Building Services Design Engineer', 
          company: 'Waterman Building Services Limited',
          salary: '£19,000.00 annually',
          type: 'Degree Apprenticeship (Level 6)',
          level: 'Level 6',
          region: 'East Midlands',
          location: 'Nottingham',
          university: 'Coventry University',
          qualification: 'BEng (Hons) in Building Services',
          requirements: 'GCSE or equivalent: 5 including English, Maths, and Science (Grade 9-4), A Level or equivalent: Maths and a Physical Science (Grade B (in maths), B, C), BTEC or equivalent: Engineering (Grade DDM or above)',
          date: '27 Aug 2024',
          deadline: '19 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000262147'
        },
        {
          id: 10, 
          title: 'Engineering Apprentice', 
          company: 'Turbine Surface Technologies Limited',
          salary: '£22,308.00 annually',
          type: 'Degree Apprenticeship (Level 6)',
          region: 'East Midlands',
          location: 'Nottingham',
          university: 'University of Sheffield’s AMRC Training Centre',
          qualification: 'Level 6 Manufacturing Engineer',
          requirements: 'GCSE or equivalent: English Language (Grade C or 4), Mathematics (Grade C or 4)',
          date: '16 Sep 2024',
          level: 'Level 6',
          deadline: '19 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000229518'
        },
        {
          id: 11, 
          title: 'Civil Engineering Apprenticeship', 
          company: 'StructureHaus Limited',
          salary: '£12,480.00 to £22,308.00 annually',
          type: 'Degree Apprenticeship (Level 6)',
          region: 'South West',
          location: 'Exeter, Devon',
          university: 'University of Exeter',
          qualification: 'BEng (Hons) Civil Engineering',
          requirements: 'A Level or equivalent: Another Science Subject (Grade B), Maths (Grade B), BTEC or equivalent: BTEC Extended Diploma (Grade DDM), Other: T-level in Design and Development for Engineering (Grade Distinction)',
          date: '30 Sep 2024',
          level: 'Level 6',
          deadline: '31 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000249349'
        },
        {
          id: 12, 
          title: 'Civil Engineer', 
          company: 'PCA Consulting Engineers',
          salary: '£12,480.00 to £22,308.00 annually',
          type: 'Degree Apprenticeship (Level 6)',
          region: 'South West',
          location: 'Kingsbridge, Devon',
          university: 'University of Exeter',
          qualification: 'BEng (Hons) Civil Engineering',
          requirements: 'A Level or equivalent: Another Science Subject (Grade B), Maths (Grade B), BTEC or equivalent: BTEC Extended Diploma (see University website) (Grade DDM)',
          date: '30 Sep 2024',
          level: 'Level 6',
          deadline: '31 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000259016'
        },
        {
          id: 13, 
          title: 'Audit Associate Graduate Apprenticeship (Corporate)', 
          company: 'BUZZACOTT LLP',
          salary: '£31,000.00',
          type: 'Full-time, 36 Months',
          region: 'London',
          location: '130 Wood Street, London, EC2V 6DL',
          university: 'FIRST INTUITION LIMITED',
          qualification: 'Level 7 (Master\'s degree), ACA qualification',
          requirements: 'GCSE English (Grade 7/A), GCSE Maths (Grade 7/A), A Level (120 UCAS points), Degree (2:1)',
          date: '02 Sep 2024',
          level: 'Level 7',
          deadline: '19 Aug 2024',
          applyLink: 'https://careers.buzzacott.co.uk/'
        },
        {
          id: 14, 
          title: 'ACCA Semi Senior Accountant Apprentice', 
          company: 'Blackthorn Griffiths Limited',
          salary: '£23,000.00',
          type: 'Full-time, 36 Months',
          region: 'Leicestershire',
          location: 'Valley View, Tugby Orchards Business Centre, Wood Lane, Tugby, LE7 9WE',
          university: 'KAPLAN FINANCIAL LIMITED',
          qualification: 'Level 7 (Master\'s degree), ACCA Level 7',
          requirements: 'GCSE Maths (Grade 4-9), GCSE English (Grade 4-9), A Level (Any Grade A-E)',
          date: '02 Sep 2024',
          level: 'Level 7',
          deadline: '26 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000262753'
        },
        {
          id: 15, 
          title: 'Assistant Management Accountant Apprentice (Amwins Global Risk)', 
          company: 'AMWINS GLOBAL RISKS INTERNATIONAL LIMITED',
          salary: '£35,000.00',
          type: 'Full-time, 36 Months',
          region: 'Cheltenham',
          location: 'The Brewery Quarter, The High Street, Cheltenham, GL50 3FF',
          university: 'BPP PROFESSIONAL EDUCATION LIMITED',
          qualification: 'Level 7 (Master\'s degree), ACCA/CIMA professional qualification',
          requirements: 'Lower level accountancy or tax qualification (Grade A*-C/9-4 or equivalent)',
          date: '01 Aug 2024',
          level: 'Level 7',
          deadline: '31 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000257570'
        },
        {
          id: 16, 
          title: 'ACCA Accountant Apprentice', 
          company: 'Wallace Crooke Ltd',
          salary: '£20,000.00',
          type: 'Apprenticeship',
          region: 'West Midlands',
          location: 'Walsall',
          university: 'Kaplan Financial Limited',
          qualification: 'ACCA Level 7 (Master\'s degree)',
          requirements: 'GCSE or equivalent in Basic Maths (Grade 9/A* - 5/B), Standard English (Grade 9/A* - 5/B), A Level or equivalent (Grade A-B)',
          date: '09 Sep 2024',
          level: 'Level 7',
          deadline: '23 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000257448'
        },
        {
          id: 17, 
          title: 'Apprentice Chartered Accountant', 
          company: 'WESTCOTTS (SW) LLP',
          salary: '£21,500.00',
          type: 'Apprenticeship',
          region: 'South West England',
          location: 'Axminster',
          university: 'FIRST INTUITION LIMITED',
          qualification: 'Accountancy or taxation professional Level 7 (Master\'s degree)',
          requirements: 'GCSE or equivalent in Any subject (Grade 4 and upwards), A Level or equivalent in Any subject (Grade C upwards), Degree Qualified (Grade Pass)',
          date: '02 Sep 2024',
          level: 'Level 7',
          deadline: '19 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000225961'
        },
        {
          id: 18, 
          title: 'Quantity Surveyor Degree Apprenticeship', 
          company: 'MORGAN SINDALL PROPERTY SERVICES LIMITED',
          salary: '£23,400.00',
          type: 'Degree Apprenticeship',
          region: 'London',
          location: '63-65 Goldney Road, London, W9 2AR',
          university: 'NOTTINGHAM TRENT UNIVERSITY',
          qualification: 'Level 6 (Degree with honours)',
          requirements: 'GCSE or equivalent Maths and English (Grade 4-9); A Level or equivalent (Grade BBB); BTEC or equivalent (Grade DDM)',
          date: '02 Sep 2024',
          level: 'Level 6',
          deadline: '05 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000263452'
        },
        {
          id: 19, 
          title: 'Quantity Surveyor Degree Apprenticeship', 
          company: 'MORGAN SINDALL PROPERTY SERVICES LIMITED',
          salary: '£23,400.00',
          type: 'Degree Apprenticeship',
          region: 'London',
          location: 'Unit 4, Sandridge Park, Porters Wood, St. Albans, AL3 6PH',
          university: 'NOTTINGHAM TRENT UNIVERSITY',
          qualification: 'Level 6 (Degree with honours)',
          requirements: 'GCSE or equivalent Maths and English (Grade 4-9); A Level or equivalent (Grade BBB); BTEC or equivalent (Grade DDM)',
          date: '02 Sep 2024',
          level: 'Level 6',
          deadline: '26 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000263493'
        },
        {
          id: 20, 
          title: 'Apprentice Commercial Specialist (Quantity Surveyor)', 
          company: 'SOUTHERN WATER SERVICES LIMITED',
          salary: '£23,500.00',
          type: 'Degree Apprenticeship',
          region: 'Brighton',
          location: 'Southern House, Lewes Road, Falmer, Brighton, BN1 9PY',
          university: 'UNIVERSITY OF BRIGHTON',
          qualification: 'Level 6 (Degree with honours)',
          requirements: 'A Level or equivalent (Grade BBC-CCC); BTEC or equivalent Extended Diploma (Grade DMM-MMM)',
          date: '23 Sep 2024',
          level: 'Level 6',
          deadline: '19 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000261213'
        },
        {
          id: 21,
          title: 'Apprentice Quantity Surveyor',
          company: 'STONBURY LIMITED',
          salary: '£22,000.00',
          type: 'Degree Apprenticeship',
          region: 'Beverley',
          location: 'Unit 3, Phoenix Enterprise Park, Grovehill Road, Beverley, HU17 0JG',
          university: 'LEEDS TRINITY UNIVERSITY',
          qualification: 'Level 6 (Degree with honours)',
          requirements: 'GCSE or equivalent Maths and English (Grade 7 or above); A Level or equivalent (Grade C or above)',
          date: '24 Sep 2024',
          level: 'Level 6',
          deadline: '04 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000263054'
        },
        {
          id: 22,
          title: 'Geospatial Mapping Apprentice',
          company: 'VISION SURVEY LTD',
          salary: '£23,166.00',
          type: 'Degree Apprenticeship',
          region: 'Crawley',
          location: 'TALISMAN HOUSE, JUBILEE WALK, CRAWLEY, RH10 1LQ',
          university: 'UNIVERSITY OF EAST LONDON',
          qualification: 'Level 6 (Degree with honours)',
          requirements: 'GCSE or equivalent English (Grade 4); GCSE or equivalent Maths (Grade 4); A Level or equivalent (Grade A2)',
          date: '02 Sep 2024',
          level: 'Level 6',
          deadline: '16 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000261471'
        },
        {
          id: 23,
          title: 'Laboratory Scientist Degree Apprenticeship',
          company: 'Invicro',
          salary: '£22,308.00',
          type: 'Degree Apprenticeship',
          region: 'London',
          location: 'Hammersmith Campus, Du Cane Road, London, W12 0NN',
          university: 'University of Kent',
          qualification: 'BSc Chemical Science',
          requirements: 'GCSE or equivalent, including Maths and English (Grade C/4 or above); A Level or equivalent Chemistry plus an additional Science or Maths (Grade C or above / 80 UCAS points)',
          date: '02 Sep 2024',
          deadline: '22 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000261897'
        },
        {
          id: 24,
          title: 'Environmental Health Officer Apprenticeship in Regulatory Services',
          company: 'London Borough of Brent',
          salary: '£24,616.80 (London Living wage)',
          type: 'Degree Apprenticeship',
          region: 'London',
          location: 'Brent Civic Centre, Engineers Way, Wembley, HA9 0FJ',
          university: 'Middlesex University',
          qualification: 'Environmental Health Degree',
          requirements: 'GCSE or equivalent English (Grade C/4); GCSE or equivalent Maths (Grade C/4); A Level or equivalent Science (Grade C); A Level or equivalent Technology (Grade C); Full Driving License',
          date: '15 Sep 2024',
          deadline: '15 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000264415'
        },
        {
          id: 25,
          title: 'Apprentice Assistant Bacteriologist',
          company: 'Animal and Plant Health Agency',
          salary: '£23,811.00',
          type: 'Degree Apprenticeship',
          region: 'Stonehouse',
          location: 'Nympsfield, Stonehouse, GL10 3UL',
          university: 'To be confirmed',
          qualification: 'Laboratory Scientist Degree (Level 6)',
          requirements: 'GCSE or equivalent English (Grade 4); GCSE or equivalent Maths (Grade 4); GCSE or equivalent Science subject (Grade 4)',
          date: '01 Sep 2024',
          level: 'Level 6',
          deadline: '12 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000263657'
        },
        {
          id: 26,
          title: 'Zenopa Business Degree Apprenticeship',
          company: 'ZENOPA LTD',
          salary: '£20,000.00',
          type: 'Degree Apprenticeship',
          region: 'South Buckinghamshire',
          location: 'THE THREE PINES, CHURCH ROAD, PENN, HP10 8EG',
          university: 'University of West London (UWL)',
          qualification: 'BA Management Practice',
          requirements: 'A Level or equivalent (Grade C or above)',
          date: '03 Sep 2024',
          deadline: '20 Aug 2024',
          applyLink: 'https://www.zenopa.com/2023-business-degree-apprenticeship-buckinghamshire/job/70435'
        },
        {
          id: 27,
          title: 'Digital Marketing Degree Apprentice',
          company: 'University of Birmingham',
          salary: '£22,718.00 (rising to £28,397.00 after 12 months)',
          type: 'Degree Apprenticeship',
          region: 'West Midlands',
          location: 'Edgbaston, Birmingham, B15 2TT',
          university: 'Aston University',
          qualification: 'Digital Marketing Degree Apprenticeship BSc',
          requirements: 'GCSE English (Grade C or above); GCSE Mathematics (Grade C or above); Three A Levels at CCC or above',
          date: '01 Sep 2024',
          deadline: '14 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000260510'
        },
        {
          id: 28,
          title: 'Digital Transformation Apprentice',
          company: 'Gardner Group Limited',
          salary: '£24,000.00',
          type: 'Degree Apprenticeship',
          region: 'Essex',
          location: 'Gardner Aerospace Basildon, Basildon, SS13 1DJ',
          university: 'University of East London',
          qualification: 'Digital and Technology Solutions Specialist (Integrated Degree) Level (Master\'s degree)',
          requirements: 'Minimum 2:1 in a relevant degree',
          date: '14 Aug 2024',
          deadline: '20 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000261587'
        },
        {
          id: 29,
          title: 'Brand Marketing Apprentice',
          company: 'Henkel Limited',
          salary: '£19,000.00',
          type: 'Degree Apprenticeship',
          region: 'Hemel Hempstead',
          location: 'Henkel Limited Wood Lane End, Hemel Hempstead, HP2 4RQ',
          university: 'London South Bank University',
          qualification: 'Chartered Manager (Degree) Level 6 (Degree with honours)',
          requirements: 'A Level or equivalent (Grade A levels: BCC or BTEC)',
          date: '03 Sep 2024',
          level: 'Level 6',
          deadline: '31 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000248971'
        },
        {
          id: 30,
          title: 'Major Accounts Sales Apprenticeship V3, BSc (Hons) B2B Sales',
          company: 'HYSTER-YALE UK LIMITED',
          salary: '£20,600.00',
          type: 'Degree Apprenticeship',
          region: 'Surrey',
          location: 'Centennial House Building 4.5, Frimley Business Park, Frimley, GU16 7SG',
          university: 'Middlesex University, The Burroughs, London NW4 4BT',
          qualification: 'BSc (Hons) Professional Practice in B2B Sales',
          requirements: '2 x A Levels in any subject (Grade C and above); Fluency in either French, German, Spanish or Italian; Will require a passport for travel within Europe',
          date: '02 Sep 2024',
          deadline: '15 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000261494'
        },
        {
          id: 31,
          title: 'Apprentice Data Analyst',
          company: 'DVSA',
          salary: '£28,119.00',
          type: 'Higher Apprenticeship',
          region: 'Multiple (Bristol, Newcastle, Nottingham, Oldham, Birmingham)',
          location: 'Various locations within the specified regions',
          university: 'QA LIMITED',
          qualification: 'Level 4 (Higher national Certificate) in Data Analysis',
          requirements: 'GCSE or equivalent in 3 subjects (Grade 4 or above), including English and Maths; A Level or equivalent (Grade C or above); Must not be over-qualified or over-experienced for funding eligibility',
          date: '09 Sep 2024',
          level: 'Level 4',
          deadline: '14 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000260389'
        },
        {
          id: 32,
          title: 'Software Development Apprentice',
          company: 'ALLSTAR BUSINESS SOLUTIONS LIMITED',
          salary: '£24,000.00',
          type: 'Higher Apprenticeship',
          region: 'Coventry',
          location: 'Heath Farm, Hampton Lane, Meriden, Coventry, CV7 7LL',
          university: 'JUST IT TRAINING LIMITED',
          qualification: 'Level 4 (Higher national Certificate) in Software Development',
          requirements: '5 GCSEs (Grade 9-4) including Maths and English; Level 3 qualifications (A Levels, NVQ/SVQ Level 3, or equivalent)',
          date: '25 Aug 2024',
          level: 'Level 4',
          deadline: '26 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000261456'
        },
        {
          id: 33,
          title: 'Network Engineer Apprentice',
          company: 'ALLSTAR BUSINESS SOLUTIONS LIMITED',
          salary: '£24,000.00',
          type: 'Higher Apprenticeship',
          region: 'Coventry',
          location: 'Heath Farm, Hampton Lane, Meriden, Coventry, CV7 7LL',
          university: 'JUST IT TRAINING LIMITED',
          qualification: 'Level 4 (Higher national Certificate) in Network Engineering',
          requirements: 'GCSE or equivalent in Maths and English (Grade C or above); A Level or equivalent in IT (Grade A-C); NVQ or SVQ Level 3 or equivalent in Computing (Grade Level 3)',
          date: '03 Sep 2024',
          level: 'Level 4',
          deadline: '02 Sep 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000261445'
        },
        {
          id: 34,
          title: 'Data Protection & Information Governance Apprentice',
          company: 'Medicines and Healthcare products Regulatory Agency',
          salary: '£27,469.00',
          type: 'Higher Apprenticeship',
          region: 'London',
          location: '10 S Colonnade, London, E14 4PH',
          university: 'DAMAR LIMITED',
          qualification: 'Level 4 (Higher national Certificate) in Data Protection and Information Governance',
          requirements: 'GCSE or equivalent in Maths and English (Grade 9-4/A*-C); 3 A Levels or equivalent (Grade A*-C)',
          date: '07 Oct 2024',
          level: 'Level 4',
          deadline: '19 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000260293'
        },
        {
          id: 35,
          title: 'Mechanical Engineering Apprentice',
          company: 'NAMMO (U.K) LIMITED',
          salary: '£20,000.00',
          type: 'Apprenticeship',
          region: 'Westcott',
          location: 'Building 47, Westcott Venture Park, Westcott, HP18 0XB',
          university: 'ENGINEERING TRUST TRAINING LIMITED',
          qualification: 'Level 4 Higher National Certificate in Engineering, Engineering Manufacturing Technician Apprenticeship Standard',
          requirements: 'Minimum of 5 GCSEs inc Science, English & Maths (Grade 4-9); A Level or equivalent in relevant subjects (Grade A* - E); Other Engineering qualification (Grade Level 3)',
          date: '02 Sep 2024',
          level: 'Level 4',
          deadline: '01 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000250076'
        },
        {
          id: 36,
          title: 'Lead Engineering Maintenance Technician Level 4',
          company: 'BT GROUP PLC',
          salary: '£21,840.00',
          type: 'Apprenticeship',
          region: 'York',
          location: 'Garden Place, YO1 7NT',
          university: 'STOKE ON TRENT COLLEGE',
          qualification: 'Level 4 Higher National Certificate in Engineering, Lead Engineering Maintenance Technician Apprenticeship Standard',
          requirements: '5 GCSEs at grades 4 - 9 including English Language; Minimum grade B or equivalent in Maths GCSE; 2 A levels at C grade or above, one in a STEM or equivalent',
          date: '09 Sep 2024',
          level: 'Level 4',
          deadline: '26 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000263260'
        },
        {
          id: 37,
          title: 'Apprentice Manufacturing Engineering Technician',
          company: 'EDWARDS LIMITED',
          salary: '£20,500.00',
          type: 'Apprenticeship',
          region: 'Burgess Hill',
          location: 'Innovation Drive, Burgess Hill, West Sussex, RH15 9TW',
          university: 'TRAIN\'D UP RAILWAY RESOURCING LIMITED',
          qualification: 'Level 4 Higher National Certificate in Engineering, Engineering Manufacturing Technician Apprenticeship Standard',
          requirements: 'GCSE or equivalent Maths, English and a Science subject (Grade 4 x GCSE at A-C or 4-9); A Level or equivalent Maths and a technical subject (Grade 2 x AB); BTEC or equivalent Engineering (Grade Merit)',
          date: '02 Sep 2024',
          level: 'Level 4',
          deadline: '16 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000261037'
        },
        {
          id: 38,
          title: 'Level 4 HNC Mechanical Engineering Manufacturing Technician Apprentice',
          company: 'STATIC SYSTEMS GROUP PLC',
          salary: '£22,010.00',
          type: 'Apprenticeship',
          region: 'Wombourne',
          location: 'Heath Mill Road, Wombourne, Wolverhampton, WV5 8AN',
          university: 'DUDLEY COLLEGE OF TECHNOLOGY',
          qualification: 'Level 4 Higher National Certificate in Engineering, Engineering Manufacturing Technician Apprenticeship Standard',
          requirements: 'GCSE or equivalent English (Grade C/4); GCSE or equivalent Maths (Grade C/4); A Level or equivalent Maths (Grade C/4) desired; A Level or equivalent Physics (Grade C/4) desired; BTEC or equivalent Engineering (Grade Pass) desired',
          date: '01 Sep 2024',
          level: 'Level 4',
          deadline: '16 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000261889'
        },
        {
          id: 39,
          title: 'Internal Audit Apprentice',
          company: 'Southend-on-Sea City Council',
          salary: '£24,702.00',
          type: 'Higher Level Apprenticeship (Level 4)',
          region: 'South East',
          location: 'Southend-On-Sea, SS2 6ER',
          university: 'MBKB LTD',
          level: 'Level 4',
          qualification: 'Level 4 Internal Audit Practitioner',
          requirements: 'GCSE English (Grade 4) and Maths (Grade 4)',
          date: '16 Sep 2024',
          deadline: '14 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000258275'
        },
        {
          id: 40,
          title: 'AAT Student Accountant - Audit Apprenticeship',
          company: 'Rawlinson & Hunter LLP',
          salary: '£22,000.00',
          type: 'Higher Level Apprenticeship (Level 4)',
          region: 'South East',
          location: 'Leatherhead, KT22 7TW',
          university: 'KAPLAN FINANCIAL LIMITED',
          qualification: 'Professional accounting or taxation technician (Level 4)',
          requirements: 'GCSE English (Grade 6), Maths (Grade 6), A Level (Grade A - C)',
          date: '02 Sep 2024',
          level: 'Level 4',
          deadline: '05 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000260625'
        },
        {
          id: 41,
          title: 'Senior Financial Administrator - Apprenticeship',
          company: 'ONSIDE ACCOUNTING LIMITED',
          salary: '£28,000.00 - £32,000.00',
          type: 'Higher Level Apprenticeship (Level 4)',
          region: 'London',
          location: 'Work From Home, SW18 2TQ',
          university: 'KAPLAN FINANCIAL LIMITED',
          qualification: 'Professional accounting or taxation technician (Level 4)',
          requirements: 'GCSE English (Grade B/5 or above), Maths (Grade B/5 or above), AAT Assistant Accounting - Level 3 (Pass)',
          date: '01 Oct 2024',
          level: 'Level 4',
          deadline: '31 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000264388'
        },
        {
          id: 42,
          title: 'Internal Audit Apprentice',
          company: 'Royal Borough of Kensington and Chelsea',
          salary: '£28,545.00 - £30,771.00',
          type: 'Higher Level Apprenticeship (Level 4)',
          region: 'London',
          location: 'London, W8 7NX',
          university: 'MBKB LTD',
          qualification: 'Internal audit practitioner (Level 4)',
          requirements: 'GCSE English and Maths (Grade 4) desired',
          date: '01 Sep 2024',
          level: 'Level 4',
          deadline: '15 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000261510'
        },
        {
          id: 43,
          title: 'Design, Construction and Management HNC/HND Apprentice',
          company: 'THE NORTH EAST APPRENTICESHIP COMPANY LIMITED',
          salary: '£21,000.00',
          type: 'Higher Apprenticeship',
          region: 'North East',
          location: 'Gateshead',
          university: 'Gateshead College',
          qualification: 'Level 4 (Higher National Certificate)',
          requirements: 'GCSEs (or equivalent) in English, Maths, and Science (Grade A*-C/9-4); 3 A Levels (Grade C or above); BTEC Extended Diploma (Merit/Distinction)',
          date: '16 Sep 2024',
          level: 'Level 4',
          deadline: '18 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000254987'
        },
        {
          id: 44,
          title: 'Construction Quantity Surveying Technician Apprentice',
          company: 'TAYLOR WOODROW INFRASTRUCTURE LIMITED',
          salary: '£20,000.00',
          type: 'Higher Apprenticeship',
          region: 'South West',
          location: 'Taunton, Bridgwater',
          university: 'Bridgwater and Taunton College',
          qualification: 'Level 4 (Higher National Certificate)',
          requirements: 'GCSEs (or equivalent) in English and Maths (Grade A*-C/9-4)',
          date: '01 Aug 2024',
          level: 'Level 4',
          deadline: '21 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000260511'
        },
        {
          id: 45,
          title: 'Construction Quantity Surveying Technician Apprentice',
          company: 'Lyons & Annoot LTD',
          salary: '£21,060.00',
          type: 'Higher Apprenticeship',
          region: 'London, South East',
          location: 'Ramsgate',
          university: 'C2C Group Limited',
          qualification: 'Level 4 (Higher National Certificate)',
          requirements: 'GCSE (or equivalent) Maths (Grade 4)',
          date: '01 Sep 2024',
          level: 'Level 4',
          deadline: '19 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000259517'
        },
        {
          id: 46,
          title: 'Laboratory Scientist Apprentice',
          company: 'Source Bioscience UK Limited',
          salary: '£23,512.50',
          type: 'Higher Apprenticeship',
          region: 'South East',
          location: 'Vinnetrow Business Park, PO20 1QH',
          university: 'CSR Scientific Training Limited',
          qualification: 'Level 5 (Higher National Diploma)',
          requirements: 'GCSEs (or equivalent) in 2 more subjects (Grade C/4 or above), English, Maths, and Science (Grade C/4 or above); A Level or equivalent in Science (Grade C/Merit or above)',
          date: '02 Sep 2024',
          level: 'Level 5',
          deadline: '09 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000264023'
        },
        {
          id: 47,
          title: 'Business Analyst Apprentice',
          company: 'Allstar Business Solutions Limited',
          salary: '£24,000.00',
          type: 'Higher Apprenticeship',
          region: 'West Midlands',
          location: 'Hampton Lane, Meriden, Coventry, CV7 7LL',
          university: 'Just IT Training Limited',
          qualification: 'Level 4 (Higher National Certificate)',
          requirements: 'GCSEs (or equivalent) in Maths and English (Grade C/4 or above); A Level or equivalent in Maths/Science/Computer Science (Grade A*-C)',
          date: '03 Sep 2024',
          level: 'Level 4',
          deadline: '02 Sep 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000259960'
        },
        {
          id: 48,
          title: 'Business Growth Apprentice',
          company: 'ITEC North East Ltd',
          salary: '£18,000.00 - £20,000.00',
          type: 'Higher Apprenticeship',
          region: 'North East',
          location: 'Hilton Road, Newton Aycliffe, DL5 6EN',
          university: 'Zenith People Limited',
          qualification: 'Level 4 (Higher National Certificate)',
          requirements: 'GCSEs (or equivalent) in English and Maths (Grade 4 or above)',
          date: '05 Aug 2024',
          level: 'Level 4',
          deadline: '29 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000263214'
        },
        {
          id: 49,
          title: 'Business Analyst Apprentice',
          company: 'Link Scheme Ltd',
          salary: '£26,000.00',
          type: 'Higher Apprenticeship',
          region: 'Yorkshire and The Humber',
          location: 'Otley Road, Harrogate, HG3 1UF',
          university: 'QA Limited',
          qualification: 'Level 4 (Higher National Certificate)',
          requirements: 'GCSEs (or equivalent) including Maths & English (Grade 4/C or above)',
          date: '29 July 2024',
          level: 'Level 4',
          deadline: '19 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000259723'
        },
        {
          id: 50,
          title: 'Business Analyst Apprentice',
          company: 'Lichfield District Council',
          salary: '£23,150.00 - £23,500.00',
          type: 'Higher Apprenticeship',
          region: 'West Midlands',
          location: 'Frog Lane, Lichfield, WS13 6YY',
          university: 'Estio Training Limited',
          qualification: 'Level 4 (Higher National Certificate)',
          requirements: 'GCSEs (or equivalent) including Maths & English (Grade 4/C or above); A Level or equivalent (Grade A*-C)',
          date: '05 Aug 2024',
          level: 'Level 4',
          deadline: '29 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000258460'
        },
        {
          id: 51,
          title: 'Market Research Apprentice',
          company: 'Yonder Consulting Limited',
          salary: '£25,642.50',
          type: 'Higher Apprenticeship',
          region: 'London',
          location: 'Part 3rd Floor, Northburgh House, EC1V 0AT',
          university: 'Swarm Apprenticeships C.I.C',
          qualification: 'Level 4 (Higher National Certificate) in Market Research',
          requirements: 'Minimum of three A-Level subjects (Grade C/4 or above)',
          date: '02 Sep 2024',
          level: 'Level 4',
          deadline: '19 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000259611'
        },
        {
          id: 52,
          title: 'Procurement Apprentice',
          company: 'North East Procurement Organisation',
          salary: '£24,294.00 (Band 2 SCP 7-10, salary range £24,294 - £25,545)',
          type: 'Higher Apprenticeship',
          region: 'North East',
          location: 'Northern Design Centre, Abbots Hill, Baltic Business Quarter, NE8 3DF',
          university: 'Darlington College',
          qualification: 'Level 4 (Higher National Certificate) in Commercial Procurement and Supply (includes CIPS Level 4 Diploma)',
          requirements: 'A Level or equivalent (120 UCAS Points)',
          date: '09 Sep 2024',
          level: 'Level 4',
          deadline: '14 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000259113'
        },
        {
          id: 53,
          title: 'Apprentice Software Engineer',
          company: 'London and Quadrant Housing Trust',
          salary: '£20,821.00',
          type: 'Advanced Apprenticeship',
          region: 'London',
          location: 'Stratford, London or Trafford, Greater Manchester, E15 4PH',
          university: 'QA Limited',
          qualification: 'Level 3 (A level) Software Development Technician Apprenticeship',
          requirements: 'GCSE or equivalent 7 GCSEs including Maths & English (Grade A-C/4-9)',
          startDate: '01 Sep 2024',
          level: 'Level 3',
          applicationDeadline: '22 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000260251'
        },
        {
          id: 54,
          title: 'Commercial Data Analyst Apprentice',
          company: 'Valda Energy Limited',
          salary: '£22,000.00',
          type: 'Advanced Apprenticeship',
          region: 'Office based in OX26 6HR',
          location: 'UNIT 11, TALISMAN BUSINESS CENTRE, TALISMAN ROAD, OX26 6HR',
          university: 'Digital Native (UK) Limited',
          qualification: 'Level 3 (A level) Data Technician Apprenticeship',
          requirements: 'GCSE or equivalent 5 GCSEs including Maths and English (Grade A*-C/9-4) Essential; A Level or equivalent Maths, Science, Computer Science or similar (Grade A - C) Desired',
          startDate: '16 Sep 2024',
          level: 'Level 3',
          applicationDeadline: '16 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000262305'
        },
        {
          id: 55,
          title: 'IT Apprentice',
          company: 'BigHand Limited',
          salary: '£20,000.00',
          type: 'Advanced Apprenticeship',
          region: 'London',
          location: '27 Union Street, London, SE1 1SD',
          university: 'QA Limited',
          qualification: 'Level 3 (A level) Information Communications Technician Apprenticeship',
          requirements: 'GCSE or equivalent 3 of any subject (Grade 4+ (A*-C)) Essential; GCSE or equivalent Maths & English (Grade 3+ (D or above)) Essential',
          startDate: '19 Aug 2024',
          level: 'Level 3',
          applicationDeadline: '08 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000264236'
        },
        {
          id: 56,
          title: 'Engineering Apprenticeship',
          company: 'HRUC (Harrow, Richmond & Uxbridge Colleges)',
          salary: '£18,000.00',
          type: 'Advanced Apprenticeship',
          region: 'London',
          location: 'Russell Finex Ltd, Browells Lane, Feltham, TW13 7EW',
          university: 'South Thames Colleges Group',
          qualification: 'Level 3 (A level) Engineering Technician Apprenticeship',
          requirements: 'GCSE or equivalent Maths (Grade 4) Essential; GCSE or equivalent English (Grade 4) Essential; GCSE or equivalent Science (Grade 4) Desired; BTEC or equivalent Engineering (Grade Merit) Essential',
          startDate: '09 Sep 2024',
          applicationDeadline: '30 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000262667',
          level: 'Level 3'
        },
        {
          id: 57,
          title: 'Finance/Accountant Apprenticeship',
          company: 'Morson Group Limited',
          salary: '£18,000.00',
          type: 'Advanced Apprenticeship',
          region: 'North West England',
          location: 'Adamson House, Centenary Way, Eccles, M50 1RD',
          university: 'Salford City College',
          qualification: 'Assistant Accountant Level 3 (A level)',
          requirements: 'GCSE or equivalent Maths (Grade 5) Essential; GCSE or equivalent English (Grade 5) Essential',
          startDate: '02 Sep 2024',
          applicationDeadline: '23 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000264052',
          level: 'Level 3'
        },
        {
          id: 58,
          title: 'Finance Apprentice',
          company: 'Greenergy International Limited',
          salary: '£18,500.00',
          type: 'Advanced Apprenticeship',
          region: 'North West England',
          location: 'Towers Business Park, Manchester, M20 2LY',
          university: 'The Apprentice Academy Limited',
          qualification: 'Assistant Accountant Level 3 (A level)',
          requirements: 'GCSE or equivalent English (Grade C/4) Essential; GCSE or equivalent Maths (Grade C/4) Essential; A Level or equivalent Accounting (Grade A-C) Essential',
          startDate: '01 Sep 2024',
          applicationDeadline: '30 Aug 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/apply/1000263197',
          level: 'Level 3'
        },
        {
          id: 59,
          title: 'Business Admin Apprentice',
          company: 'Oxfordshire County Council',
          salary: '£22,366.00',
          type: 'Advanced Apprenticeship',
          region: 'South East England',
          location: 'The Oxford Register Office, 1 Tidmarsh Lane, Oxford, OX1 1NS',
          university: 'Abingdon and Witney College',
          qualification: 'Business Administrator Level 3 (A level)',
          requirements: 'GCSE or equivalent 5 GCSEs of any subject, including Maths and English (Grade A-C / Grade 4-9) Essential',
          startDate: '02 Sep 2024',
          applicationDeadline: '14 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000259625',
          level: 'Level 3'
        },
        {
          id: 60,
          title: 'Business Management - Apprentice',
          company: 'City of London Corporation',
          salary: '£24,470.00',
          type: 'Advanced Apprenticeship',
          region: 'London (City of London)',
          location: 'Guildhall, Gresham Street, EC2P 2EJ',
          university: 'Common Council of the City of London',
          qualification: 'Business Administrator Level 3 (A level)',
          requirements: 'GCSE or equivalent English (Grade C / 4) Essential; GCSE or equivalent Maths (Grade C / 4) Essential',
          startDate: '16 Aug 2024',
          applicationDeadline: '18 July 2024',
          applyLink: 'https://www.findapprenticeship.service.gov.uk/apprenticeship/redirecttoexternalwebsite/1000262153',
          level: 'Level 3'
        },                
               
        // Add more jobs as needed
      ];

      // Filter jobs based on selected filters
      const filteredJobs = availableJobs.filter(job =>
        (title === '' || job.title === title) &&
        (level === '' || job.level === level) &&
        (region === '' || job.region === region|| region === 'All')
      );

      setJobs(filteredJobs);
      setShowJobs(true);
      setIsLoading(false); // Set loading state to false when search completes
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className="p-4 shadow-md rounded-md">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 py-3 pb-5 md:px-8">
        <div className='text-left'>
          <label className="block text-white font-semibold py-1 md:text-lg text-sm pb-2">Select Type</label>
          <select 
            value={title} 
            onChange={handleTitleChange} 
            className="w-full mt-1 p-2 border border-[#A04FC8] rounded-md"
          >
            <option className='md:text-lg text-sm' value="" disabled>Select Type</option>
            <option value="Apprentice Data Analyst & IT Solutions">Apprentice Data Analyst & IT Solutions</option>
            <option value="Data Scientist Degree Apprentice">Data Scientist Degree Apprentice</option>
            <option value="Digital Solutions Apprentice">Digital Solutions Apprentice</option>
            <option value="Application Analyst Apprentice">Application Analyst Apprentice</option>
            <option value="Digital Transformation Apprentice">Digital Transformation Apprentice</option>
            <option value="Building Services Design Engineer Apprenticeship">Building Services Design Engineer Apprenticeship</option>
            <option value="Civil Engineer Apprentice">Civil Engineer Apprentice</option>
            <option value="Engineering Apprentice">Engineering Apprentice</option>
            <option value="Building Services Design Engineer">Building Services Design Engineer</option>
            <option value="Engineering Apprentice">Engineering Apprentice</option>
            <option value="Civil Engineering Apprenticeship">Civil Engineering Apprenticeship</option>
            <option value="Civil Engineer">Civil Engineer</option>
            <option value="Quantity Surveyor Degree Apprenticeship">Quantity Surveyor Degree Apprenticeship</option>
            <option value="Apprentice Commercial Specialist (Quantity Surveyor)">Apprentice Commercial Specialist (Quantity Surveyor)</option>
            <option value="Apprentice Quantity Surveyor">Apprentice Quantity Surveyor</option>
            <option value="Geospatial Mapping Apprentice">Geospatial Mapping Apprentice</option>
            <option value="Laboratory Scientist Degree Apprenticeship">Laboratory Scientist Degree Apprenticeship</option>
            <option value="Environmental Health Officer Apprenticeship in Regulatory Services">Environmental Health Officer Apprenticeship in Regulatory Services</option>
            <option value="Apprentice Assistant Bacteriologist">Apprentice Assistant Bacteriologist</option>
            <option value="Zenopa Business Degree Apprenticeship">Zenopa Business Degree Apprenticeship</option>
            <option value="Digital Marketing Degree Apprentice">Digital Marketing Degree Apprentice</option>
            <option value="Digital Transformation Apprentice">Digital Transformation Apprentice</option>
            <option value="Major Accounts Sales Apprenticeship V3, BSc (Hons) B2B Sales">Major Accounts Sales Apprenticeship V3, BSc (Hons) B2B Sales</option>
            <option value="Audit Associate Graduate Apprenticeship (Corporate)">Audit Associate Graduate Apprenticeship (Corporate)</option>
            <option value="Assistant Management Accountant Apprentice (Amwins Global Risk)">Assistant Management Accountant Apprentice (Amwins Global Risk)</option>
            <option value="ACCA Semi Senior Accountant Apprentice">'ACCA Semi Senior Accountant Apprentice</option>
            <option value="ACCA Accountant Apprentice">ACCA Accountant Apprentice</option>
            <option value="Apprentice Chartered Accountant">Apprentice Chartered Accountant</option>
            <option value="Apprentice Data Analyst">Apprentice Data Analyst</option>
            <option value="Software Development Apprentice">Software Development Apprentice</option>
            <option value="Network Engineer Apprentice">Network Engineer Apprentice</option>
            <option value="Data Protection & Information Governance Apprentice">Data Protection & Information Governance Apprentice</option>
            <option value="Design, Construction and Management HNC/HND Apprentice">Design, Construction and Management HNC/HND Apprentice</option>
            <option value="Construction Quantity Surveying Technician Apprentice">Construction Quantity Surveying Technician Apprentice</option>
            <option value="Construction Quantity Surveying Technician Apprentice">Construction Quantity Surveying Technician Apprentice</option>
            <option value="Laboratory Scientist Apprentice">Laboratory Scientist Apprentice</option>
            <option value="Business Analyst Apprentice">Business Analyst Apprentice</option>
            <option value="Business Growth Apprentice">Business Growth Apprentice</option>
            <option value="Business Analyst Apprentice">Business Analyst Apprentice</option>
            <option value="Business Analyst Apprentice">Business Analyst Apprentice</option>
            <option value="Market Research Apprentice">Market Research Apprentice</option>
            <option value="Procurement Apprentice">Procurement Apprentice</option>
            <option value="Business Analyst Apprentice">Business Analyst Apprentice</option>
            <option value="Apprentice Software Engineer">Apprentice Software Engineer</option>
            <option value="Commercial Data Analyst Apprentice">Commercial Data Analyst Apprentice</option>
            <option value="IT Apprentice">IT Apprentice</option>
            <option value="Finance/Accountant Apprenticeship">Finance/Accountant Apprenticeship</option>
            <option value="Finance Apprentice">Finance Apprentice</option>
            <option value="Business Admin Apprentice">Business Admin Apprentice</option>
            <option value="Business Management - Apprentice">Business Management - Apprentice</option>


          </select>
        </div>
        <div className='text-left'>
          <label className="block text-white font-semibold py-1 md:text-lg text-sm pb-2">Select Level</label>
          <select 
            value={level} 
            onChange={handleLevelChange} 
            className="w-full mt-1 p-2 border border-[#A04FC8] rounded-md"
          >
            <option value="" disabled>Select Level</option>
            <option value="Level 1">Level 1</option>
            <option value="Level 2">Level 2</option>
            <option value="Level 3">Level 3</option>
            <option value="Level 4 & 5">Level 4 & 5 (Higher)</option>
            <option value="Level 6 & 7">Level 6 & 7 (Degree/Masters)</option>
          </select>
        </div>
        <div className='text-left'>
          <label className="block text-white font-semibold py-1 md:text-lg text-sm pb-2">Location</label>
          <select 
            value={region} 
            onChange={handleRegionChange} 
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
        <div className="mt-1">
          <h2 className="md:text-xl font-semibold text-white py-5">Available Jobs:</h2>
          {jobs.length > 0 ? (
            <div className="md:mt-10 items-center grid grid-cols-1 gap-5 justify-between mx-auto">
              {jobs.map(job => (
                <div key={job.id} className="bg-white p-4 border border-[#A04FC8] rounded-md text-left md:py-12 py-5">
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
                        <span className='ml-2 font-normal'>{job.title}</span></p>
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
                  <a href={job.applyLink}>
                    <span className="md:w-44 md:mt-10 mt-6 text-center flex bg-gradient-to-l from-[#1790E8] to-[#A04FC8] items-center shadow-xl rounded-r-lg md:px-8 px-20 md:py-4 py-2 text-white text-sm font-semibold mr-4">
                      Apply Now
                    </span>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-red-500">No jobs found matching the selected filters.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default JobSearchBar;
