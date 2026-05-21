// import React from 'react'
import ArrowIcon from '@iconify-react/maki/arrow';
export const Hero = () => {
  return (
     <section className="w-screen h-screen flex flex-col justify-between px-12 pt-12 bg-black text-white">
      <div className="w-full">
        <p className="merriweather-sans">Quiet creator, <span className="lobster-regular">bringing ideas to life</span>,<br/> through motion, detail and softness</p>
      </div>
      <div className="w-full">
        <p className="font-bold text-[270px] text-center">Sagar <span className="lobster-regular">Sailada.</span></p>
        <hr />
        <div className='text-xl flex justify-between py-6'>
            <div className='flex items-center gap-1'>
                <ArrowIcon height="1em" />
                <p className='font-medium'>V3.0</p>
            </div>
            <div className='flex font-medium gap-3'>
                <a target='_blank' href='/'>BEHANCE</a>
                <span>/</span>
                <a target='_blank' href='https://www.linkedin.com/in/sai-sagar-a1a96a256/'>LINKEDIN</a>
                <span>/</span>
                <a target='_blank' href='https://github.com/SaisagarYT'>GITHUB</a>
            </div>
            <div className='flex gap-4'>
                <p>WORK</p>
                <p>INFO</p>
                <p>CONTACT</p>
            </div>
        </div>
      </div>
    </section>
  )
}
