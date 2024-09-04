'use client'
import React, { useEffect, useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput, { getCountryCallingCode, parsePhoneNumber } from 'react-phone-number-input';
import countryNames from 'react-phone-number-input/locale/en'
import Image from 'next/image';
import { SparklesCore } from '../ui/sparkles';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    budget: '',
    ready: '',
    name: '',
    phone: '',
    email: '',
    how: '',
    country: countryNames['AE'],
    countryFlagCode: 'AE',
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handlePhoneChange = (phone) => {
  console.log('Phone changed:', phone); // Log the full phone number
  setFormData({
    ...formData,
    phone,
  });
};

useEffect(() => {
  if (formData.phone && formData.phone.length > 5) { // Adjust condition as needed
    try {
      console.log('Parsing phone number:', formData.phone);
      const parsedNumber = parsePhoneNumber(formData.phone);

      if (parsedNumber) {
        console.log('Parsed number:', parsedNumber);
        const country = parsedNumber.country;
        setFormData((prevData) => ({
          ...prevData,
          country: countryNames[country] || '',
          countryFlagCode: country || '',
        }));
      } else {
        console.log('Phone number could not be parsed.');
      }
    } catch (error) {
      console.error('Error parsing phone number:', error);
    }
  } else {
    console.log('Incomplete phone number, skipping parsing.');
  }
}, [formData.phone]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const response = await fetch('/api/users/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error && errorData.error.includes('E11000')) {
          setFormStatus('emailUsed');
        } else {
          throw new Error('An unknown error occurred.');
        }
      } else {
        const newUser = await response.json();
        setFormStatus('submitted');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
      setFormStatus('error');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const renderMessage = () => {
    if (formStatus === 'submitted') {
      return  <div onClick={()=> setFormStatus(null)} className='z-50 w-full h-full bg-black bg-opacity-50 fixed top-0 right-0 flex items-center justify-center'>
      <Image
        src='/Popup.jpg'
        alt="logo"
        width={1000}
        height={1000}
        className='w-full h-auto max-w-screen-sm md:max-w-full md:w-auto md:h-auto'
      />
    </div>;
    }
    if (formStatus === 'emailUsed') {
      return <div className='text-2xl text-red-700 text-center'> השתמשת במייל הזה בעבר</div>;
    }
    if (formStatus === 'error') {
      return <div className='text-2xl text-red-700 text-center'>  הבקשה נכשלה, תנסה עוד פעם!</div>;
    }
    return null;
  };

  useEffect(()=>{
    if(formStatus === 'submitted'){
      setTimeout(()=>{
        setFormStatus(null);
        setFormData({
          name: '',
          phone: '',
          email: '',
          how: '',
          country: '',
          countryFlagCode: '',
        })
      },6000)
    }
   },[formStatus]);

   console.log(formStatus);
  return (
    
    <div className={` 'text-black' `}>
      <div className="inset-x-0 h-20 bg-gradient-to-b pointer-events-none select-none from-[#131313] to-white z-40" ></div>
      <div
      className="h-[5rem] w-full bg-white flex flex-col items-center justify-start overflow-hidden rounded-md">
      <h1
        className="md:text-4xl text-3xl lg:text-4xl font-bold text-center text-black relative z-20">
        צור קשר
      </h1>
      <div className="w-[40rem] h-10 relative">
        {/* Gradients */}
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#131313" />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-[15vh] bg-white [mask-image:radial-gradient(200px_100px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
      <form onSubmit={handleSubmit} className="container mx-auto py-8 px-4 lg:px-0">
        <div className={`grid lg:grid-cols-1 'gap-4' justify-items-center items-end`}>
          <div className={`grid lg:grid-cols-2 'gap-1 lg:gap-4 w-full max-w-screen-lg`}>
            {/* <div className="mb-3 text-right">
              <label htmlFor="budget" className='text-black' >ما هي ميزانية الاستثمار؟ <span className="required text-danger">*</span></label>
              <select name="budget" id="budget" required value={formData.budget} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-900 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2 bg-gray-200">
                <option value="">اختر</option>
                <option value="I don't have money">ليس لدي المال</option>
                <option value="30 thousand dollars">30 ألف دولار</option>
                <option value="50 thousand dollars">50 ألف دولار</option>
                <option value="100 thousand dollars">100 ألف دولار</option>
                <option value="200 thousand dollars">200 ألف دولار</option>
                <option value="500 thousand dollars">500 ألف دولار</option>
                <option value="1 million dollars">مليون دولار</option>
                <option value="More than 1 million dollars">اكثر من مليون دولار</option>
              </select>
            </div> */}
            {/* <div className="mb-3 text-right">
              <label htmlFor="ready" className='text-black'>هل انت جاهز لحجز العقار؟<span className="required text-danger">*</span></label>
              <select name="ready" id="ready" required value={formData.ready} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2 bg-gray-200">
                <option value="">اختر</option>
                <option value="Yes">نعم</option>
                <option value="No">لا</option>
              </select>
            </div> */}
          </div>
          <div className={`grid lg:grid-cols-2 gap-4 w-full max-w-screen-lg`}>
            <div className="mb-3 text-right">
              <label htmlFor="name" className='text-black'> שם מלא <span className="required text-danger">*</span></label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2 bg-gray-200" />
            </div>
            <div className="mb-3 text-right" dir="ltr">
              <label htmlFor="phone" className='text-black'><span className="required text-danger">*</span>  מספר טלפון </label>
              {/* <input type="number" name="phone" required value={formData.phone} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2 bg-gray-200" /> */}
              <PhoneInput
               
                className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2 bg-gray-200"
                placeholder="Enter phone number"
                international
                countryCallingCodeEditable={false}
                defaultCountry="IL"
                value={formData.phone}
                name="phone"
                onChange={handlePhoneChange}
              />
      
            </div>
          </div>
          <div className={`grid lg:grid-cols-2 gap-4 w-full max-w-screen-lg`}>
            <div className="mb-3 text-right">
              <label htmlFor="email" className='text-black'> אימייל <span className="required text-danger">*</span></label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2 bg-gray-200" />
            </div>
            <div className="mb-3 text-right">
              <label htmlFor="how" className='text-black'>איך שמעת עלינו?<span className="required text-danger">*</span></label>
              <select name="how" id="how" required value={formData.how} onChange={handleChange} className="form-control mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2 bg-gray-200">
                {/* <option value="">תבחר</option> */}
                <option value="Instagram">אינסטגרם</option>
                <option value="Tik Tok">טיקטוק</option>
                <option value="Facebook">פייסבוק</option>
                <option value="Through a Friend">חבר</option>
              </select>
            </div>
          </div>

          {/* Render the submission status message */}
          {renderMessage()}
       
          {formStatus !== 'submitted' && (
            <div className="w-full max-w-screen-lg text-left">
              <button type="submit" 
            className="w-full mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#dbb454,45%,white,55%,#dbb454)] bg-[length:200%_100%] px-6 font-medium text-[#303030] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" disabled={isLoading}>
{isLoading ? ' שולח...' : 'שלח'}
              </button>
            </div>
          )}
        </div>
        
      </form>
    </div>
  );
}
