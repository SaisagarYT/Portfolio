import ArrowIcon from '@iconify-react/maki/arrow';
// import Spline from '@splinetool/react-spline';
import SplitText from 'gsap/src/SplitText';
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { RotatableButton } from '../components/reusable/RotatableButton';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroVideo from '../assets/videos/14520076_1920_1080_24fps.mp4';
import PlusIcon from '@iconify-react/uiw/plus';

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
    const videoControl = useRef(null);
    const mySummeryPage = useRef(null);
    // const nextRotate = useRef(null);

    const initialLoadingScreen1 = useRef(null);
    const initialLoadingScreen2 = useRef(null);
    const splashTitle = useRef(null);
    const splashTitleLeft = useRef(null);
    const splashTitleRight = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(SplitText);
        let titleSplit = SplitText.create(
            splashTitle.current,{
                type:"words, chars"
            }
        )
        const splashScreen = gsap.timeline();

        splashScreen
        .from(titleSplit.chars,
            {
                y:100,
                autoAlpha:0,
                stagger:0.09,
            }
        )
        .fromTo(initialLoadingScreen1.current,
            {
                top:0,
                right:0,
                z:70
            },
            {
                yPercent:-100,
                duration:1.2,
                z:70
            }
        )
        .fromTo(initialLoadingScreen2.current,
            {
                z:80,
            },
            {
                yPercent:-100,
                duration:1.2,
                z:70
            },
            "-=1"
        )

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
        [leftText.current, rightText.current],
        {
            y: 500,
            duration:5
        },
        {
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.15,
            zIndex:10,
        },
        "+=0.1"
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
        .fromTo(splashTitle.current,
            {

            },
            {

            }
        )
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
                duration: 2.3,
                zIndex:10
            }
        )
        .to(bottomSection.current,{
            opacity:0,
            zIndex:0
        })
        .fromTo(
            leftText.current,
            {
                x: 0,
            },
            {
                x: -840,
                ease: "none",
                duration: 5.35,
                zIndex:10
            },
            0.35
        )
        .fromTo(
            rightText.current,
            {
                x: 0,
            },
            {
                x: 940,
                ease: "none",
                duration: 5.35,
                zIndex:10
            },
            0.35
        )
        .fromTo(centerImageCard.current,
            {
                width:0,
                height:0,
                left:"46%"
            },
            {
                width:"100vw",
                height:"100vh",
                borderRadius:"0px",
                left:"50%",
                zIndex:20,
                duration:5,
            }
            ,"-=3.3"
        )
        .fromTo(
            ".plus-icon",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                stagger: 0.08,
            },
            "-=0.3"
        )
        .fromTo(mySummeryPage.current,
            {
                opacity:0,
            },
            {
                opacity:1,
            },
            "-=0.4"
        )
        .fromTo(mySummeryPage.current,
            {
                yPercent:0,
            },
            {
                yPercent:-600,
                ease:'power3.inOut',
                duration:10,
            }
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
                zIndex:10
            },
            0
        )
    return () => {
        splitTimeline.scrollTrigger?.kill();
        splitTimeline.kill();
    };

    
    }, []);

    
  return(
    <section className="hero-container merriweather-sans overflow-hidden w-full h-screen flex flex-col justify-between px-12 pt-12 max-sm:px-6 max-sm:pt-6 bg-black text-white relative">
        {/* Initial loading screen-1 */}
        <div ref={initialLoadingScreen1} className='w-screen absolute flex justify-center items-center bg-black right-0 z-60 top-0 h-screen'>
            <h1 ref={splashTitle} className='text-9xl text-white'><span ref={splashTitleLeft} className=''>Sagar</span> <span ref={splashTitleRight} className=''>Sailad</span></h1>
        </div>
        {/* Initial loading screen-2 */}
        <div ref={initialLoadingScreen2} className='w-screen h-screen absolute bg-red-600 top-0 right-0'>

        </div>
        <div ref={centerImageCard} className='rounded-2xl bg-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30'>
            <div className='w-full h-full flex flex-col relative'>
                <video ref={videoControl} className='w-full h-full relative object-cover' autoPlay muted loop playsInline src={heroVideo}>
                </video>
                <PlusIcon className='plus-icon size-11 z-10 absolute top-10 left-10' height="1em" />
                <PlusIcon className='plus-icon size-11 z-10 absolute left-10 bottom-10' height="1em" />
                <PlusIcon className='plus-icon size-11 z-10 absolute right-10 bottom-10' height="1em" />
                <PlusIcon className='plus-icon size-11 z-10 absolute right-10 top-10' height="1em" />
                <div ref={mySummeryPage} className=' w-screen h-screen  bg-amber-200'>
                    <div className='w-screen h-screen justify-end flex bg-black'>
                        <div className='flex w-full shadow-2xl absolute h-full gap-28 items-start p-20 flex-col '>
                            <h1 className='text-6xl w-2/3'>As a <span className='lobster-regular'>creative developer,</span> I craft tailor-made web experiences, blending technical precision and <span className='lobster-regular'>emotion</span>.</h1>
                            <div className='w-full flex items-center pl-60'>
                             <p className='text-3xl w-2/6'>My name is Luke. A passionate creator and computer science student in Vannes, I build memorable digital experiences, always seeking the symbiosis between art and information.</p>
                            </div>
                        </div>
                        <div className='w-2/5 rounded-l-[350px] bg-red-400'>

                        </div>
                    </div>
                    <div className='w-screen h-screen bg-green-200'>

                    </div>
                    <div className='w-screen h-[300vh] bg-purple-200'>

                    </div>
                    <div className='w-screen h-screen bg-orange-200'>

                    </div>
                </div>
            </div>
        </div>
        <div ref={scrollContainer} className='absolute inset-0 z-40 overflow-y-scroll overflow-x-hidden opacity-0 bg-transparent'>
            <div ref={scrollerBox} className='h-[1000vh] w-full'>
            </div>
        </div>
        {/* <Spline className='absolute top-0 left-0 ' scene='https://prod.spline.design/nkqqLV4dhpjT0yRr/scene.splinecode'/> */}
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
        <div ref={bottomSection} className='relative text-xl flex justify-between max-sm:text-sm py-6 max-sm:p-0 max-sm:pt-6 max-sm:items-start max-sm:flex-wrap'>
            <div className='flex items-start gap-1 max-sm:hidden'>
                <ArrowIcon height="1em" />
                <p className='font-medium'>V3.0</p>
            </div>
            <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-3 font-medium z-50 max-sm:static max-sm:translate-x-0 max-sm:translate-y-0 max-sm:w-full items-start max-sm:justify-center'>
                <a target='_blank' href='/'><RotatableButton cursor={cursorRef} title={"BEHANCE"}/></a>
                <span>/</span>
                <a target='_blank' href='https://www.linkedin.com/in/sai-sagar-a1a96a256/'><RotatableButton cursor={cursorRef} title={"LINKEDIN"}/></a>
                <span>/</span>
                <a target='_blank' href='https://github.com/SaisagarYT'><RotatableButton cursor={cursorRef} title={"GITHUB"}/></a>
            </div>
            <div className='flex gap-4 max-sm:w-full max-sm:justify-center z-50'>
                <RotatableButton cursor={cursorRef} title={"INFO"}/>
                <RotatableButton cursor={cursorRef} title={"WORK"}/>
                <RotatableButton cursor={cursorRef} title={"CONTACT"}/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
