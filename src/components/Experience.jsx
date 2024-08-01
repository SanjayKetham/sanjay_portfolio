import React from 'react';
import Java from '../images/java.svg';
import ReactJS from '../images/reactjs.svg';
import Javascript from '../images/javascript.svg';
import Mongodb from '../images/mongodb.svg';
import Nodejs from '../images/nodejs.svg';
import Redux from '../images/redux.svg';
import Mysql from '../images/mysql.svg';
import Git from '../images/git.svg';
import Python from '../images/python.svg';


const Experience = () => {
  return (
    <div id='experience-section' className='bg-darkblue-900 py-20 overflow-visible'>
      <h2 className='text-3xl font-bold text-center text-white mb-10'>Techinal Skills</h2>
      <div className='flex flex-wrap justify-center items-center'>
        <Java className='w-20 h-20 m-4' />
        <ReactJS className='w-20 h-20 m-4' />
        <Javascript className='w-20 h-20 m-4' />
        <Mongodb className='w-20 h-20 m-4' />
        <Nodejs className='w-20 h-20 m-4' />
        <Redux className='w-20 h-20 m-4' />
        <Mysql className='w-20 h-20 m-4 mysql-color' />
        <Git className='w-20 h-20 m-4' />
        <Python className='w-20 h-20 m-4' />
      </div>
    </div>
  );
};

export default Experience;