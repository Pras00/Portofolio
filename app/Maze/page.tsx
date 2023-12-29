/* eslint-disable jsx-a11y/alt-text */
import Maze1 from '../../public/MazeRunner2.png'
import Maze2 from '../../public/MazeRunner3.png'
import {AiFillGithub} from 'react-icons/ai'
import {FaLink} from 'react-icons/fa'
import Image from "next/legacy/image"
import Link from 'next/link'

const Maze = () => {
  return (
    <>
      <div className='bg-slate-700'>
        <div className="flex justify-end p-4 mr-10">
          <Link href="/">
            <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold px-4 py-2 mt-5 rounded-full duration-200 hover:scale-105 focus:outline-none">Back to Home</button>
          </Link>
        </div>
        <div className="container mx-auto p-8">
          <div className="max-w-4xl mx-auto bg-slate-200 py-10 px-14 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-4 text-center text-slate-800">Maze Runner</h2>
            <div className='flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap items-center justify-center'>
              <div className="basis-5/12 shadow-xl rounded-xl">
                <Image src={Maze1} width={1920} height={1080} alt="Pras" className="mt-10 rounded-xl" />
              </div>
              <div className="basis-5/12 shadow-xl rounded-xl">
                <Image src={Maze2} width={1920} height={1080} alt="Pras" className="mt-10 rounded-xl" />
              </div>
            </div>
            <p className="text-gray-700 mb-4 text-justify">
            Maze Runner merupakan permainan yang menarik yang dikembangkan menggunakan teknologi OpenGL Python. Permainan ini menawarkan pengalaman petualangan yang menegangkan di dalam labirin. Tujuan dari permainan ini adalah untuk menghindari rintangan, seperti bola laser dan monster, yang dapat menyebabkan pemain kalah jika karakter menabraknya. Pemain dapat menjelajahi labirin dengan menggerakkan karakter menggunakan keyboard, menciptakan interaktivitas yang memikat. <br />
            Keberhasilan dalam mengambil diamond di dalam labirin menjadi kunci kemenangan dalam permainan ini. Konsep permainan Maze Runner menciptakan tantangan yang menarik bagi pemain, memacu keterampilan navigasi dan ketepatan gerakan. jika karakter menabrak rintangan makan akan Game Over yang memberikan tingkat kesulitan dan ketegangan yang membuat permainan semakin menarik.
            </p>
            <div className="flex items-center gap-5">
              <a href='https://github.com/Pras00/Maze_runner.git' target='blank' className="text-lg text-gray-800 mr-2 font-bold flex items-center justify-center gap-1 cursor-pointer hover:text-gray-600">
                GitHub
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maze;