
const Hero = () => {
  return (
    <section className="center flex-col pt-52  md:mx-20" >
         <h2 className=" font-main text-[20px] md:text-[34px] lg:text-[52px] mb-2  font-semibold text-black" >Hi, I’m Nanda Kumar M</h2>
         <h1 className="font-main font-bold text-center text-[42px] md:text-[54px] lg:text-[72px] text-black mb " >Full-stack <br className=" sm:hidden" /> web <span className="" >Developer</span></h1>
         <p className="font-second font-semibold text-[#151515] text-center text-[18px] tracking-wide text-xl mt-4 " >Building websites that connect,<br className=" sm:block md:hidden" /> engage, <br className="hidden md:block " />and deliver value</p>
         <div className="flex flex-col sm:flex-row justify-center mt-10 gap-4">

         <button className="font-main font-bold text-black  text-base leading-7 px-6 py-2  rounded-3xl bg-[#ff4a23] text-[18px]" >{`Let's Connect `}</button>
         </div>
    </section>
  )
}

export default Hero