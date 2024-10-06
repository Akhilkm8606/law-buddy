import React from 'react'
import logo from '../../assets/logo.png'
import Header from '../Header/Header'
// import SignUpForm from '../SignUp/SignUp'
function LandingPage() {
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center h-lvh">
     
        <img src={logo} alt="logo" className='w-30 h-auto bottom-5 mb-3 ' />
   
   <div className='flex flex-col items-center  '>
    <h1 className='text-5xl - 3rem  mb-3  font-extrabold - 800' >Welcome to Law Buddy!</h1>
      <p className='text-lg - 1.125rem max-w-[600px] text-center text-zinc-400 mb-2'>Your trusted legal companion, here to assist you with any legal queries. Let’s get started—simply ask away, and we’ll guide you through the complexities of the law!</p>
  

       <button className='bg-chat-gradient rounded-lg px-3 py-1'>
        Chat Now
      </button>
   </div>
           
      {/* <SignUpForm/> */}
    </div>

    </>
  )
}

export default LandingPage