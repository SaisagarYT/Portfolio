import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const RotatableButton = ({title,cursor}) => {
    const currentText = useRef(null);
    const nextText = useRef(null);
    const buttonViewRef = useRef(null);
    useEffect(() =>{
        gsap.fromTo(
            currentText.current,
            {
                yPercent:0,
                // translateY:0,
                opacity:1,
                
            },
            {
                yPercent:-100,
                // transform:"10px",
                opacity:0,
                delay:0.5,
            }
        )
        gsap.fromTo(
            nextText.current,
            {
                yPercent:0,
                opacity:0,
            },
            {
                yPercent:-100,
                opacity:1,
                delay:0.5,
            }
        )
    },[])

    const handleButtonMouseEnter = () =>{
        gsap.to(currentText.current,{
            yPercent:0,
            duration:0.4,
            opacity:1,
            ease:"power3.out"
        })
        gsap.to(nextText.current,{
            yPercent:100,
            duration:0.4,
            opacity:1,
            ease:"power3.out"
        })

        gsap.to(cursor.current,{
            borderRadius:0,
            scale:1.5
        })
    }

    const handleButtonMouseLeave = () =>{
        gsap.to(currentText.current,{
            yPercent:-100,
            duration:0.4,
            opacity:0,
            ease:"power3.out"
        })
        gsap.to(nextText.current,{
            yPercent:-100,
            duration:0.4,
            opacity:1,
            ease:"power3.out"
        })
        gsap.to(cursor.current,{
            borderRadius:"100%",
            scale:1,
            borderStyle:"dotted"
        })
    }

    const handleButtonAimation = () =>{
        gsap.to(buttonViewRef.current,{
            color:"green",
            background:'blue'
        })
    }
  return (
    <button onMouseLeave={() => {handleButtonMouseLeave()}} onMouseEnter={() => {handleButtonMouseEnter(); console.log("hello");}} className='cursor-pointer z-20 hover:text-(--secondary-text) button-container px-2 justify-center overflow-hidden flex flex-col'>
        <span onClick={() => {
            handleButtonAimation(); console.log("hello")
        }} ref={buttonViewRef} ref={currentText} className=''>{title}</span>
        <span ref={nextText} className='opacity-0'>{title}</span>
    </button>
  )
}

export default RotatableButton