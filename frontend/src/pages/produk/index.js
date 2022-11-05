import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Produk() {
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
        <h1 className='mt-10 p-5 '>Home</h1>

        <div className="dropdown ">
            <label tabIndex={0} className="btn m-1 ">
                Kelola Penjualan
            </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
                <li><Link to={'/dashboard'}>Jenis Produk</Link></li>
                <li><Link to={'/kategori'}>Kategori Produk</Link></li>
                <li><Link to={'/pro    duk'}>Produk</Link></li>
                </ul>
        </div>

        <div className="dropdown ">
            <label tabIndex={0} className="btn m-1">
                Laporan
            </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
                <li><Link to={'/laporan'}>Laporan Produk</Link></li>
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

            <h1>Manager</h1>
          </div>
        </div>
        {/* End Navbar */}
        <div className=' bg-white text-black m-4 p-2'>
            <h1>Produk</h1>
        </div>
        <button className='m-4 bg-red-500 text-white p-2 rounded-lg'>Tambah</button>
        <div className="overflow-x-auto p-4">
        <table className="table w-full">
        
            
            <thead>
            <tr className='h-8'>
                <th>kode</th>
                <th>Nama Produk</th>
                <th>Kategori</th>
                <th>Harga Jual</th>
                <th>Stok</th>
                <th>Total Jual</th>
                <th>Aksi</th>
            </tr>
            </thead>
            <tbody>
        
            
            <tr className='h-8'>
                <td>Produk01</td>
                <td>Creamy manggo</td>
                <td>Dessert</td>
                <td>17.000</td>
                <td>20</td>
                <td>15</td>
                <td>
                <Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                </Link>

                </td>
            </tr>
            <tr className='h-8'>
                <td>Produk02</td>
                <td>Americano Coffe</td>
                <td>Minuman</td>
                <td>9000</td>
                <td>15</td>
                <td>13</td>
                <td>
                <Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                </Link>

                </td>
            </tr>
            <tr className='h-8'>
                <td>Produk03</td>
                <td>Creamy manggo</td>
                <td>Dessert</td>
                <td>17.000</td>
                <td>20</td>
                <td>15</td>
                <td>
                <Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                </Link>

                </td>
            </tr>
           
            </tbody>
        </table>
        </div>
        <div className='flex absolute bottom-10 right-10'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
            <Link to = {'/dashboard'}>Back</Link>

        </div>
      </div>
    </div>
  );
}