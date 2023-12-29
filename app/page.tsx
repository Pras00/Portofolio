/* eslint-disable jsx-a11y/alt-text */
'use client'
import React, { useState } from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';
import {BsFillSunFill, BsFillMoonStarsFill} from 'react-icons/bs'
import Image from "next/legacy/image"
import Pras from '../public/Pras.png';
import porto1 from "../public/EduNine1.png";
import porto2 from "../public/MyLibrary1.png";
import porto3 from "../public/Paraspedia1.png";
import porto4 from "../public/MazeRunner1.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className={`bg-slate-50 md:text-center dark:bg-slate-900`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <About />
        <Portofolio />
      </main>
    </div>
  );
}

function Navbar({ darkMode, setDarkMode }) {

  return (
    <nav className="py-7 px-20 mb-12 flex justify-between box-border">
      <h1 className="text-3xl font-arial font-bold text-slate-900 dark:text-gray-200">PrasZ</h1>
      <ul className="flex items-center">
        <li>
          {!darkMode ? <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className={`cursor-pointer text-2xl text-slate-900 dark:text-white`} /> : <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className={`cursor-pointer text-2xl text-slate-900 dark:text-white`} /> }
          
        </li>
        <li>
          <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-2xl ml-8" href="mailto:prasetiawahyu22@gmail.com">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}


function About() {
  return(
    <section className="min-h-screen px-10">
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-400 font-bold sm:text-4xl md:text-5xl lg:text-6xl">Prasetia Wahyu Ramadhan</h2>
        <h3 className="text-2xl py-2 text-slate-900 font-medium dark:text-white"> Web Developer and Data Analyst</h3>
        <p className="text-md py-5 leading-6 text-gray-800 dark:text-gray-200">Student at the University of Jember, <br /> who is interested in IT, has a passion for Data Analyst and Web Development.</p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-300">
        <a href="https://github.com/Pras00" target='blank'>
          <AiFillGithub className="cursor-pointer text-gray-500 dark:text-gray dark:hover:text-teal-400 hover:text-teal-400" />
        </a>
        <a href="https://www.linkedin.com/in/prasetia-wahyu-ramadhan-188919220/" target='blank'>
        <AiFillLinkedin className="cursor-pointer text-gray-500 dark:text-gray dark:hover:text-teal-400 hover:text-teal-400" />
        </a>
        <a href="https://www.instagram.com/prasz_w.r/" target="blank">
        <AiFillInstagram className="cursor-pointer text-gray-500 dark:text-gray dark:hover:text-teal-400 hover:text-teal-400" />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 to-slate-900 rounded-full w-80 h-80 my-20 overflow-hidden shadow-2xl">
        <Image src={Pras} alt="Pras" layout="fill" objectFit="cover" className="mt-10" />
      </div>
    </section>
  )
}


function Portofolio() {
  return (
    <>
      <div className='bg-gray-100 dark:bg-slate-700 w-full h-5 mt-5'></div>
      <div className='bg-gray-200 dark:bg-slate-500 w-full h-5'></div>
      <div className='bg-gray-300 dark:bg-slate-400 w-full h-5'></div>
      <section className="bg-gray-300 px-10 py-10">
        <div>
          <h3 className="text-2xl font-bold text-center text-teal-500 mb-2">Portofolio</h3>
          <p className="text-4xl font-bold text-center text-slate-900">Project Terbaru</p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap items-center justify-center">
          <div className="basis-5/12 shadow-xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer rounded-xl">
            <Image src={porto1} width={1920} height={1080} className='rounded-xl' />
          </div>
          <div className="basis-5/12 shadow-xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer rounded-xl">
            <Image src={porto2} width={1920} height={1080} className='rounded-xl' />
          </div>
          <div className="basis-5/12 shadow-xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer rounded-xl">
            <Image src={porto3} width={1920} height={1080} className='rounded-xl' />
          </div>
          <div className="basis-5/12 shadow-xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer rounded-xl">
            <Image src={porto4} width={1920} height={1080} className='rounded-xl' />
          </div>
        </div>
      </section>
    </>
  )
}

