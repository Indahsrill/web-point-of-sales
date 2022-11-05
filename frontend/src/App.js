import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/login';
import Register from './Register/register';
import Saldo from './Saldo/saldo';
import Cashier from './Cashier/cashier';
import Penjualan from './Penjualan/Penjualan';
import Logout from './Logout/logout';
import Dashboard from './pages/dashboard';
import Produk from './pages/produk';
import TambahKat from './pages/tambahkat';
import Kategori from './pages/kategori';
import Laporan from './pages/laporan';
import Tambahpro from './pages/tambahpro';
import Ownerlap from './pages/ownerlap';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/saldo" element={<Saldo/>} />
        <Route path="/cashier" element={<Cashier/>} />
        <Route path="/penjualan" element={<Penjualan/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/produk" element={<Produk/>} />
        <Route path="/tambah-kat" element={<TambahKat/>} />
        <Route path="/kategori" element={<Kategori/>} />
        <Route path="/laporan" element={<Laporan/>} />
        <Route path="/tambahpro" element={<Tambahpro/>} />
        <Route path="/ownerlap" element={<Ownerlap/>} />

       
      </Routes>
    </BrowserRouter>
  );
}