/* eslint-disable jsx-a11y/alt-text */
import Pasarpedia1 from '../../public/Pasarpedia2.png'
import Pasarpedia2 from '../../public/Pasarpedia3.png'
import {AiFillGithub} from 'react-icons/ai'
import {FaLink} from 'react-icons/fa'
import Image from "next/legacy/image"
import Link from 'next/link'

const Pasarpedia = () => {
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
            <h2 className="text-4xl font-bold mb-4 text-center text-slate-800">Pasarpedia</h2>
            <div className='flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap items-center justify-center'>
              <div className="basis-5/12 shadow-xl rounded-xl">
                <Image src={Pasarpedia1} width={1920} height={1080} alt="Pras" className="mt-10 rounded-xl" />
              </div>
              <div className="basis-5/12 shadow-xl rounded-xl">
                <Image src={Pasarpedia2} width={1920} height={1080} alt="Pras" className="mt-10 rounded-xl" />
              </div>
            </div>
            <p className="text-gray-700 mb-4 text-justify">
            Pasarpedia merupakan perangkat lunak inovatif yang membawa transaksi jual beli pasar tradisional ke ranah digital melalui platform webapp. Tujuan utamanya adalah menghadirkan digitalisasi pada pasar tradisional dengan menyelaraskan waktu penjualan sesuai dengan jam operasional pasar. Platform ini memberikan kesempatan bagi pedagang dan konsumen lokal untuk terlibat dalam aktivitas jual beli secara online dengan harga yang mencerminkan pasar tradisional.<br/>
            Perangkat lunak ini dikembangkan menggunakan framework Laravel yang berbasis pada bahasa pemrograman PHP. Tampilan webapp Pasarpedia dirancang menggunakan HTML dan CSS, menciptakan antarmuka yang ramah pengguna dan responsif. Desain yang sesuai dengan kebutuhan pasar tradisional dan keberagaman pengguna lokal menjadi prioritas, meningkatkan keterlibatan masyarakat dalam dunia digital. Pasarpedia menjadi platform yang handal dan aman untuk transaksi online di pasar tradisional. Struktur kerangka kerja ini juga memudahkan pengelolaan transaksi, penjadwalan, dan manajemen inventaris.
            </p>
            <div className="flex items-center gap-5">
              <a href='https://github.com/Pras00/Pasarpedia.git' target='blank' className="text-lg text-gray-800 mr-2 font-bold flex items-center justify-center gap-1 cursor-pointer hover:text-gray-600">
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

export default Pasarpedia;