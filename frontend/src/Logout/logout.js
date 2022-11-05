import { Link } from "react-router-dom"
export default function logout(){
    return (
    
        <div className='min-h-screen bg-gradient-to-r from-white to-[#e0d0c1] w-screen flex justify-center items-center'>
        <div className='w-80 h-96 bg-white rounded-lg shadow-lg'>
            <p className="text-center text-2xl font-bold mt-4 mb-10">Input Saldo</p>
            <div className="p-3 "> 
                <div className="form-control mb-3 w-full ">
                        <input type="text" placeholder="Shift ke" className=" input bg-base-100 input-bordered w-full" />
                </div>
                <div className="form-control mb-3 w-full ">

                        <input type="date" placeholder="dd-mm-yy" className=" input bg-base-100 input-bordered w-full" />
                </div>

                <div className="form-control mt-3 w-full ">
                        <input type="text" placeholder="Masukan Saldo Akhir" className=" input bg-base-100 input-bordered w-full" />
                </div>
                <div className="flex justify-center mt-6">
                    <button className="btn w-full">Saldo</button>
                </div>
                <Link to={'/register'}> 
                    <small> Sign Up</small>
                </Link>
            </div>
        </div>
        </div>
    )
}