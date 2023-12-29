/* eslint-disable jsx-a11y/alt-text */
import Edunine1 from '../../public/EduNine2.png'
import Edunine2 from '../../public/EduNine3.png'
import {AiFillGithub} from 'react-icons/ai'
import {FaLink} from 'react-icons/fa'
import Image from "next/legacy/image"
import Link from 'next/link'

const EduNine = () => {
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
            <h2 className="text-4xl font-bold mb-4 text-center text-slate-800">EduNine</h2>
            <div className='flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap items-center justify-center'>
              <div className="basis-5/12 shadow-xl rounded-xl">
                <Image src={Edunine1} width={1920} height={1080} alt="Pras" className="mt-10 rounded-xl" />
              </div>
              <div className="basis-5/12 shadow-xl rounded-xl">
                <Image src={Edunine2} width={1920} height={1080} alt="Pras" className="mt-10 rounded-xl" />
              </div>
            </div>
            <p className="text-gray-700 mb-4 text-justify">
              Edunine, sebuah platform pembelajaran daring, menawarkan pengalaman pembelajaran IT yang inovatif dan terjangkau. Dengan fokus pada empat kursus utama, yaitu UI/UX Designer, Front End Developer, Back End Developer, dan Data Analyst, Edunine memberikan akses gratis kepada siswa untuk meningkatkan keterampilan mereka. Antarmuka pengguna yang ramah, materi berkualitas tinggi yang diajarkan oleh para profesional, dan sertifikat kelulusan menjadi daya tarik utama. Fitur login admin memudahkan pengelolaan platform, sementara komunitas belajar online memfasilitasi interaksi siswa. Dengan pembaruan materi reguler, kolaborasi industri, dan kampanye digital, Edunine menciptakan lingkungan pembelajaran yang dinamis dan relevan. Program referensi dan insentif untuk siswa yang merujuk teman mereka menambah daya tarik, memperkuat visi Edunine sebagai tempat pembelajaran IT yang holistik dan terdepan.
            </p>
            <div className="flex items-center gap-5">
              <a href='https://github.com/Pras00/FE-EduNine' target='blank' className="text-lg text-gray-800 mr-2 font-bold flex items-center justify-center gap-1 cursor-pointer hover:text-gray-600">
                GitHub
                <AiFillGithub />
              </a>
              <a href='https://pras00.github.io/FE-EduNine/' target='blank' className="text-lg text-gray-800 mr-2 font-bold flex items-center justify-center gap-1 cursor-pointer hover:text-gray-600">
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

export default EduNine;