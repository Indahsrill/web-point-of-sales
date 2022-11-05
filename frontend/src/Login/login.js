import { Link } from "react-router-dom"
export default function Login(){
    return (
    
        <div className='min-h-screen bg-gradient-to-r from-white to-[#e0d0c1] w-screen flex justify-center items-center'>
        <div className='w-80 h-96 bg-white rounded-lg shadow-lg'>
            <p className="text-center text-2xl font-bold mt-2 mb-5">Login User</p>
            <div className="p-3 "> 
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                        <input type="text" placeholder="Nama Lengkap" className=" input bg-base-100 input-bordered w-full" />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                        <input type="password" placeholder="Kata Sandi" className=" input bg-base-100 input-bordered w-full" />
                </div>
                <div className="flex justify-center mt-5">
                    <button className="btn w-full">Login</button>
                </div>
                <Link to={'/register'}> 
                    <small> Sign Up</small>
                </Link>
            </div>
        </div>
        </div>
    )
}