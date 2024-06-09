import Link from "next/link";
import React, {useState} from "react";
import { loginUser } from "../api/functionapi";
import {useRouter} from "next/router";

const Login = () => {
  const [data, setData] = useState({
    email : "",
    password : ""
})

const router = useRouter()


const handleOnChange = (e) => {
    const {name, value} = e.target

    setData((preve)=>{
        return{
            ...preve,
            [name] : value
        }

    })
}

const handleSubmit =async(e) => {
    e.preventDefault()
    data.usernameOrEmail= data.email
    console.log(data)
    
    const success = await loginUser(data);
    if (success) {console.log(success)
      alert("Dang nhap thanh cong")
      localStorage.setItem('userData', JSON.stringify(success))
      router.push("/homepages/homepage1")
      
    } else alert("Dang nhap that bai")

}

console.log("data login", data)


  
  return (
    <div className="flex items-center justify-center h-screen px-5 lg:px-0">
    <div className="flex justify-center flex-1 max-w-screen-xl bg-white border shadow sm:rounded-lg">
      <div className="flex-1 hidden text-center bg-rose-300 md:flex">
        <div
          className="w-full m-12 bg-center bg-no-repeat bg-contain xl:m-16"
          style={{
            backgroundImage: `url(https://www.shutterstock.com/image-photo/three-cosmetic-product-mockups-on-600nw-1970466164.jpg)`,
          }}
        ></div>
      </div>
      <div className="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
        <div className="flex flex-col items-center ">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-blue-900 xl:text-4xl">
            Log In
            </h1>
            
          </div>
          <div className="flex-1 w-full mt-8">
            <div className="flex flex-col max-w-xs gap-4 mx-auto">
              
              <input
                onChange={handleOnChange}
                name='email'
                value={data.email}
                className="w-full px-5 py-3 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                placeholder="Enter your email"
              />
              
              <input 
                onChange={handleOnChange}
                name='password'
                value={data.password}
                className="w-full px-5 py-3 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                type="password"
                placeholder="Password"
              />
              <button onClick={handleSubmit} className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-blue-900 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none">
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">Login</span>
              </button>
                    <button class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                        <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                        <span className="flex items-center">Login with Google</span>
                    </button>
              <p className="mt-6 text-xs text-center text-gray-600">
                Already have an account?{" "}
                <a href={process.env.PUBLIC_URL + "/register"}>
                  <span className="font-semibold text-blue-900">Sign Up</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Login;
