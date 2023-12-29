/* eslint-disable jsx-a11y/alt-text */
import MyLibrary1 from '../../public/MyLibrary2.png'
import MyLibrary2 from '../../public/MyLibrary3.png'
import {AiFillGithub} from 'react-icons/ai'
import {FaLink} from 'react-icons/fa'
import Image from "next/legacy/image"
import Link from 'next/link'

const MyLibrary = () => {
  return (
    <>
      <div className='bg-slate-700'>
        <div className="flex justify-end items-center py-4 px-10 mr-10">
          <Link href="/">
            <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold px-4 py-2 mt-5 rounded-full duration-200 hover:scale-105 focus:outline-none">Back to Home</button>
          </Link>
        </div>
        <div className="container mx-auto p-8">
          <div className="max-w-4xl mx-auto bg-slate-200 py-10 px-14 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-4 text-center text-slate-800">MyLibrary</h2>
            <div className='flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap items-center justify-center'>
              <div className="basis-5/12 shadow-xl rounded-xl">
                <Image src={MyLibrary1} width={1920} height={1080} alt="Pras" className="mt-10 rounded-xl" />
              </div>
              <div className="basis-5/12 shadow-xl rounded-xl">
                <Image src={MyLibrary2} width={1920} height={1080} alt="Pras" className="mt-10 rounded-xl" />
              </div>
            </div>
            <p className="text-gray-700 mb-4 text-justify">
              MyLibrary membawa kemudahan ke dalam pengelolaan buku perpustakaan dengan solusi yang sederhana dan ramah pengguna. Dengan fokus pada tampilan front-end, MyLibrary memberikan akses langsung ke koleksi buku perpustakaan. Tampilan front-end yang dirancang dengan HTML dan menggunakan framework Tailwind CSS memberikan pengalaman yang bersih dan responsif. Desain yang minimalis memudahkan pengguna untuk menjelajahi koleksi buku, mencari judul tertentu, dan melihat informasi terkait buku dengan cepat dan efisien. Keunggulan MyLibrary tidak hanya terletak pada fungsionalitasnya yang sederhana, tetapi juga pada kemampuannya untuk menyediakan pengalaman pengguna yang optimal. Dengan pendekatan yang bersifat user-friendly dan antarmuka yang dirancang secara estetis, MyLibrary menjadi solusi yang efektif untuk pengelolaan buku perpustakaan tanpa kompleksitas teknis yang berlebihan.
            </p>
            <div className="flex items-center gap-5">
              <a href='https://github.com/Pras00/MyLibrary.git' target='blank' className="text-lg text-gray-800 mr-2 font-bold flex items-center justify-center gap-1 cursor-pointer hover:text-gray-600">
                GitHub
                <AiFillGithub />
              </a>
              <a href='https://pras00.github.io/MyLibrary/' target='blank' className="text-lg text-gray-800 mr-2 font-bold flex items-center justify-center gap-1 cursor-pointer hover:text-gray-600">
                Website
                <FaLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyLibrary;