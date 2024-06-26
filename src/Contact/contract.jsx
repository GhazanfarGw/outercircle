import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact () {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState ('');
  const [number, setNumber] = useState ('');
  const [subject, setSubject] = useState ('');
  const [message, setMessage] = useState ('');

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
        name: name,
        surname: surname,
        email: email,
        number: number,
        subject: subject,
        message: message,
    };
    emailjs.send(
      'service_t0mmzxm',
      'template_vyr4tbf',
      templateParams,
      'a5SikSpJjSDiomd52'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setLoading(false);
      });
  };

  return (
    <>
    <div id='contactus'>
        <div className='max-w-screen-2xl mx-auto justify-center'>
            <div className='md:grid md:grid-cols-2 md:gap-10 md:px-10 px-5 pt-24 pb-10 md:py-32 mx-auto items-center'>
                <div className='max-w-lg hidden md:block lg:block'>
                    <img src='./Main-Circle.png' alt='logo'/>
                </div>
                <div className='text-white md:pt-10'>
                    <div className='py-10'>
                        <h1 className='md:text-5xl text-3xl text-white'>
                            Contact Us
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        { !success && 
                        <div className='mx-auto'>
                            <div className='md:grid md:grid-cols-2 gap-8'>
                                <input
                                    className='bg-transparent border-b-2 text-white border-[#fff] py-2 w-full px-4 mx-auto'
                                    placeholder='Full Name'
                                    type="name"
                                    id="name"
                                    value={name}
                                    required
                                    onChange={(event) => setName(event.target.value)}
                                />
                                <input
                                    className='bg-transparent border-b-2 text-white border-[#fff] py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                                    placeholder='Surname'
                                    type="surname"
                                    id="surname"
                                    value={surname}
                                    required
                                    onChange={(event) => setSurname(event.target.value)}
                                />
                                <input
                                    className='bg-transparent border-b-2 text-white border-[#fff] py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                                    placeholder='Email Address'
                                    type="email"
                                    id="email"
                                    value={email}
                                    required
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <input
                                    className='bg-transparent border-b-2 text-white border-[#fff] py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                                    placeholder='Phone Number'
                                    type="number"
                                    id="number"
                                    value={number}
                                    required
                                    onChange={(event) => setNumber(event.target.value)}
                                />
                            </div>
                            <input
                                className='bg-transparent border-b-2 text-white border-[#fff] py-2 w-full px-4 mx-auto mt-8'
                                placeholder='Subject'
                                type="subject"
                                id="subject"
                                value={subject}
                                required
                                onChange={(event) => setSubject(event.target.value)}
                            />
                            <textarea
                                className='bg-transparent border-b-2 text-white border-[#fff] pb-52 py-5 w-full px-4 mx-auto mt-8 overflow-y-hidden'
                                placeholder='Message'
                                type="message"
                                id="message"
                                value={message}
                                required
                                onChange={(event) => setMessage(event.target.value)}
                            />
                            <div className='items-center'>
                                <button className='bg-[#1790E8] px-10 tracking-wider py-2 md:mt-10 mt-5 text-white' type="submit">
                                    {loading ? 'Loading...' : 'Submit'}
                                </button>
                            </div>
                        </div>}
                        {success && <p className='justify-center mx-auto text-center pt-10 font-semibold text-[#fff]'>Email sent successfully!</p>}
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    </>
  );  
}

export default Contact;