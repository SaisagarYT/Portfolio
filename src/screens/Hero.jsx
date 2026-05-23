import ArrowIcon from '@iconify-react/maki/arrow';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { RotatableButton } from '../components/reusable/RotatableButton';

export const Hero = ({cursorRef}) => {
    const leftText = useRef(null);
    const rightText = useRef(null);
    const smallLine1 = useRef(null);
    const smallLine2 = useRef(null);
    const currentRotate = useRef(null);
    // const nextRotate = useRef(null);
    useEffect(() => {
    gsap.fromTo(
        [leftText.current, rightText.current],
        {
            y: 500,
        },
        {
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.15,
        }
    );

    // gsap.fromTo(
    //     [smallLine1.current,smallLine2.current],
    //     {
    //         opacity:0
    //     },
    //     {
    //         opacity:1,
    //         ease:"power4.out",
    //         rotateY:90,
    //         yPercent:120,
    //         duration:0.8,
    //         stagger:0.2
    //     }
    // )

    const t1 = gsap.timeline({});
        

    t1.fromTo(
        currentRotate.current,
        {
            y:0,
            yPercent:50,  
            rotateX:45,
            opacity:0,  
            stagger:0.2,
            ease:"power3.inOut"
        },
        {
            yPercent:0,
            rotateX:0,
            opacity:1,
            ease:"power3.inOut"
        }
    );
    }, []);

    
  return(
    <section onScroll={() => console.log("hello")} className="hero-container overflow-hidden w-full h-screen flex flex-col justify-between px-12 pt-12 max-sm:px-6 max-sm:pt-6 bg-black text-white">
    <div className="w-full max-sm:pt-6 max-sm:pl-6">
        <p ref={currentRotate} className="merriweather-sans"> <span  ref={smallLine1}>Quiet creator, <span className="lobster-regular">bringing ideas to life</span></span>,<br/> <span ref={smallLine2}>through motion, detail and softness</span> </p>
        {/*<p ref={nextRotate} className="merriweather-sans"> <span  ref={smallLine1}>Quiet creator, <span className="lobster-regular">bringing ideas to life</span></span>,<br/> <span ref={smallLine2}>through motion, detail and softness</span> </p>*/}
      </div>
      <div className="w-full">
        <p className="font-bold text-[270px] max-sm:text-5xl text-center overflow-hidden leading-none">
            <span 
                className="inline-block"
                ref={leftText}
                >
                Sagar
                </span>
                <span
                ref={rightText}
                className="lobster-regular inline-block"
                >
                Sailada<span className='text-[#ff0000]'>.</span>
            </span>
        </p>
        <hr />
        <div className='text-xl flex justify-between max-sm:text-sm py-6 max-sm:p-0 max-sm:pt-6 max-sm:items-start  max-sm:flex-wrap'>
            <div className='flex items-start gap-1 max-sm:hidden'>
                <ArrowIcon height="1em" />
                <p className='font-medium'>V3.0</p>
            </div>
            <div className='flex font-medium  gap-3 w-full max-sm:justify-center'>
                <a target='_blank' href='/'><RotatableButton cursor={cursorRef} title={"BEHANCE"}/></a>
                <span>/</span>
                <a target='_blank' href='https://www.linkedin.com/in/sai-sagar-a1a96a256/'><RotatableButton cursor={cursorRef} title={"LINKEDIN"}/></a>
                <span>/</span>
                <a target='_blank' href='https://github.com/SaisagarYT'><RotatableButton cursor={cursorRef} title={"GITHUB"}/></a>
            </div>
            <div className='flex gap-4 max-sm:w-full max-sm:justify-center'>
                <RotatableButton cursor={cursorRef} title={"WORK"}/>
                <RotatableButton cursor={cursorRef} title={"INFO"}/>
                <RotatableButton cursor={cursorRef} title={"CONTACT"}/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
