import { useState } from 'react';
import { Link } from 'react-router-dom';
import MyChart from '../../komponens/MyChart';

export default function Ownerlap() {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    !sidebar ? setSidebar(true) : setSidebar(false);
  };
  console.log(sidebar);

  return (
    <div className="min-h-screen w-screen bg-[#e6d6c9] flex">
      <div className={!sidebar ? 'w-2/12 bg-[#334340] text-white relative' : 'hidden'}>
        <div className="flex justify-center mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        <h1 className='text-xl font-bold '>Point Of Sales</h1>
        </div>

        <div className="dropdown mt-10 ml-4">
            <label tabIndex={0} className="btn m-1">
                Laporan
            </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
                <li><Link to={'/ownerlap'}>Laporan Produk</Link></li>
                </ul>
        </div>

        <button className="btn btn-outline absolute bottom-5 left-10 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>

            keluar</button>

      </div>
      <div className={!sidebar ? 'w-10/12' : 'w-screen'}>
        {/* Navbar */}
        <div className="navbar bg-[#b4b0ad] flex justify-between items-center">
          <div className="flex-none">
            <button onClick={handleSidebar} className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <div className="flex-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <h1>Owner</h1>
          </div>
        </div>
        {/* End Navbar */}
        <div className=' bg-white text-black mx-4 my-2 p-2 rounded-lg'>
            <h1>Laporan Penjualan</h1>
        </div> 
        <div className='px-4 scale-75'>
        <MyChart/>
        </div>

        
      </div>
    </div>
  );
}

