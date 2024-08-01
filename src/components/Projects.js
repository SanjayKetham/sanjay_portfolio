import React, { useState } from 'react';
import flipkart from '../images/flipkart.png';
import sliceofspice from '../images/sliceofspice.png';
import resort from '../images/resort.png';
import { IoLogoGithub } from 'react-icons/io5';

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(null);

  const handleToggle = (project) => {
    setIsExpanded(isExpanded === project ? null : project);
  };

  return (
    <div id='project-section' className='bg-darkblue-900  py-20'>
      <h1 className='text-3xl font-bold text-center text-white mt-10'>PROJECTS</h1>

      {/* Project 1 */}
      <div className='mt-16'>
        <p className='text-cyan-300 text-3xl ml-8'>PROJECT 1</p>
        <p className='font-semibold text-2xl ml-8 text-white mt-6'>Flipkart Clone</p>
        <div className='flex flex-col md:flex-row items-center justify-center mt-10'>
          <div className='flex-1 px-10 text-center md:text-left'>
            <p className={`mt-4 text-lg text-white ${isExpanded === 'project1' ? '' : 'line-clamp-5'}`}>
              This project is a comprehensive clone of Flipkart's e-commerce platform, meticulously crafted using React.js and Tailwind CSS. It demonstrates a modern, responsive design tailored to enhance user experience across various devices. Key features include real-time product filtering, seamless user authentication and management through Firebase, and a dynamic shopping cart system. The project exemplifies industry best practices in web development and offers a robust foundation for scalable and maintainable code.
            </p>
            <button
              onClick={() => handleToggle('project1')}
              className='text-cyan-500 mt-2 inline-block'
            >
              {isExpanded === 'project1' ? 'Read Less' : 'Read More'}
            </button>
            <div className='mt-4'>
              <a
                href='https://github.com/SanjayKetham/flipkart_clone'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-800 text-white px-4 py-2 rounded mr-2 inline-flex items-center'
              >
                <IoLogoGithub className='mr-2' /> GitHub
              </a>
              <a
                href='https://sanjayketham.github.io/flipkart_clone/'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded ml-2 inline-block'
              >
                Demo
              </a>
            </div>
          </div>
          <div className='flex-shrink-0 mt-10 md:mt-0 md:ml-10'>
            <img src={flipkart} alt='Flipkart Clone' className='border-4 mr-5 border-cyan-400 rounded-md' style={{ width: '600px', height: 'auto' }} />
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className='mt-20'>
        <p className='text-cyan-300 text-3xl ml-8'>PROJECT 2</p>
        <p className='font-semibold text-2xl ml-8 text-white mt-6'>Slice of Spice</p>
        <div className='flex flex-col md:flex-row items-center justify-center mt-10'>
          <div className='flex-shrink-0 mb-10 md:mb-0 md:mr-10'>
            <img src={sliceofspice} alt='Slice of Spice' className='border-4 ml-5 border-cyan-400 rounded-md' style={{ width: '600px', height: 'auto' }} />
          </div>
          <div className='flex-1 px-10 text-center md:text-left'>
            <p className={`mt-4 text-lg text-white ${isExpanded === 'project2' ? '' : 'line-clamp-5'}`}>
              This project is a unique culinary experience platform named "Slice of Spice." Crafted using modern web technologies, it provides users with recipes, cooking tips, and interactive features. The design focuses on creating an engaging and easy-to-navigate interface, allowing users to explore a variety of dishes and share their culinary experiences. Key features include recipe search, user-generated content, and a dynamic blog section.
            </p>
            <button
              onClick={() => handleToggle('project2')}
              className='text-cyan-500 mt-2 inline-block'
            >
              {isExpanded === 'project2' ? 'Read Less' : 'Read More'}
            </button>
            <div className='mt-4'>
              <a
                href='https://github.com/SanjayKetham/sliceofspice'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-800 text-white px-4 py-2 rounded mr-2 inline-flex items-center'
              >
                <IoLogoGithub className='mr-2' /> GitHub
              </a>
              <a
                href='https://sanjayketham.github.io/slice-of-spice/'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded ml-2 inline-block'
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className='mt-20'>
        <p className='text-cyan-300 text-3xl ml-8'>PROJECT 3</p>
        <p className='font-semibold text-2xl ml-8 text-white mt-6'>Resort Booking System</p>
        <div className='flex flex-col md:flex-row items-center justify-center mt-10'>
          <div className='flex-1 px-10 text-center md:text-left'>
            <p className={`mt-4 text-lg text-white ${isExpanded === 'project3' ? '' : 'line-clamp-5'}`}>
              This project is a Resort Booking System designed to streamline the booking process for users and administrators. It features a user-friendly interface where users can search for available resorts, check availability, and make bookings. Admins can manage reservations, update resort information, and track booking statistics. Developed with a focus on scalability and maintainability, this system showcases advanced features such as real-time availability updates and comprehensive reporting.
            </p>
            <button
              onClick={() => handleToggle('project3')}
              className='text-cyan-500 mt-2 inline-block'
            >
              {isExpanded === 'project3' ? 'Read Less' : 'Read More'}
            </button>
            <div className='mt-4'>
              <a
                href='https://github.com/SanjayKetham/Luxe-Vista-Resort'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-800 text-white px-4 py-2 rounded mr-2 inline-flex items-center'
              >
                <IoLogoGithub className='mr-2' /> GitHub
              </a>
              <a
                href='https://sanjayketham.github.io/Luxe-Vista-Resort'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded ml-2 inline-block'
              >
                Demo
              </a>
            </div>
          </div>
          <div className='flex-shrink-0 mt-10 md:mt-0 md:ml-10'>
            <img src={resort} alt='Resort Booking System' className='border-4 border-cyan-400 rounded-md mr-5' style={{ width: '600px', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
