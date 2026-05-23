import ArrowIcon from '@iconify-react/maki/arrow';
import Spline from '@splinetool/react-spline';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { RotatableButton } from '../components/reusable/RotatableButton';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



export const Hero = ({cursorRef}) => {
    const leftText = useRef(null);
    const rightText = useRef(null);
    const titleWrap = useRef(null);
    const smallLine1 = useRef(null);
    const smallLine2 = useRef(null);
    const currentRotate = useRef(null);
    const scrollContainer = useRef(null);
    const scrollerBox = useRef(null);
    const centerImageCard = useRef(null);
    const bottomSection = useRef(null);
    // const nextRotate = useRef(null);
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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

    const splitTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: scrollerBox.current,
            scroller: scrollContainer.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    });

    splitTimeline
        .fromTo(
            titleWrap.current,
            {
                top: "68%",
                opacity: 1,
            },
            {
                top: "50%",
                opacity: 1,
                ease: "none",
                duration: 0.3,
            }
        )
        .to(bottomSection.current,{
            opacity:0
        })
        .fromTo(
            leftText.current,
            {
                x: 0,
            },
            {
                x: -240,
                ease: "none",
                duration: 0.35,
            },
            0.35
        )
        .fromTo(
            rightText.current,
            {
                x: 0,
            },
            {
                x: 240,
                ease: "none",
                duration: 0.35,
            },
            0.35
        )
        .fromTo(
            currentRotate.current,
            {
                yPercent: 0,
                rotateX: 0,
                opacity: 1,
                ease: "power3.inOut",
            },
            {
                y: 0,
                yPercent: -120,
                rotateX: -45,
                opacity: 0,
                stagger: 0.2,
                ease: "power3.inOut",
            },
            0
        )
        .fromTo(centerImageCard.current,
            {
                width:0,
                height:0,
            },
            {
                width:"400px",
                height:"200px",
                left:"47%",
            }
        )

    return () => {
        splitTimeline.scrollTrigger?.kill();
        splitTimeline.kill();
    };

    
    }, []);

    
  return(
    <section className="hero-container overflow-hidden w-full h-screen flex flex-col justify-between px-12 pt-12 max-sm:px-6 max-sm:pt-6 bg-black text-white relative">
        <div ref={centerImageCard} className=' rounded-2xl bg-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30'>

        </div>
        <div ref={scrollContainer} className='absolute inset-0 z-20 overflow-y-scroll overflow-x-hidden opacity-0 bg-transparent'>
                <div ref={scrollerBox} className='h-[1000vh] w-full'>
                </div>
        </div>
        <Spline className='absolute top-0 left-0 ' scene='https://prod.spline.design/nkqqLV4dhpjT0yRr/scene.splinecode'/>
        <div className="w-full max-sm:pt-6 max-sm:pl-6">
        <p ref={currentRotate} className="merriweather-sans"> <span  ref={smallLine1}>Quiet creator, <span className="lobster-regular">bringing ideas to life</span></span>,<br/> <span ref={smallLine2}>through motion, detail and softness</span> </p>
        {/*<p ref={nextRotate} className="merriweather-sans"> <span  ref={smallLine1}>Quiet creator, <span className="lobster-regular">bringing ideas to life</span></span>,<br/> <span ref={smallLine2}>through motion, detail and softness</span> </p>*/}
        </div>
            <div ref={titleWrap} className="absolute left-1/2 top-[68%] z-10 w-max -translate-x-1/2 -translate-y-1/2 max-sm:top-[62%]">
                <p className="font-bold text-[270px] max-sm:text-5xl text-center overflow-hidden leading-none whitespace-nowrap">
            <span 
                className="inline-block merriweather-sans pb-8"
                ref={leftText}
                >
                Sagar
                </span>
                {/* <div className=''>

                </div> */}
                <span
                ref={rightText}
                className="lobster-regular inline-block"
                >
                Sailada<span className='text-[#ff0000]'>.</span>
            </span>
        </p>
        </div>
        <div className="w-full">
        <hr />
        <div ref={bottomSection} className='text-xl flex justify-between max-sm:text-sm py-6 max-sm:p-0 max-sm:pt-6 max-sm:items-start  max-sm:flex-wrap'>
            <div className='flex items-start gap-1 max-sm:hidden'>
                <ArrowIcon height="1em" />
                <p className='font-medium'>V3.0</p>
            </div>
            <div className='flex font-medium  gap-3 w-full max-sm:justify-center z-20'>
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
