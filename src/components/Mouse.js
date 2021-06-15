import React,{useEffect} from 'react'

const Mouse = () => {

    useEffect(() => {
      const  handleCursor = (e) => {

        const cursor =  document.querySelector('.cursor');

        cursor.style.top = e.pageY +  "px";
        cursor.style.left = e.pageX +"px"

      };
     window.addEventListener('mousemove', handleCursor);

     const handleHover = () => {
        const cursor =  document.querySelector('.cursor');
         cursor.classList.add('hovered');
     }
     const handleLeave = () => {
        const cursor =  document.querySelector('.cursor');
        cursor.style.transition = ".3s ease-out";
        cursor.classList.remove('hovered');
     }

     document.querySelectorAll('.hover').forEach((link) => {
        link.addEventListener('mouseover', handleHover);
        link.addEventListener('mouseleave', handleLeave);
     })
       
    }, [])

    return (
      <span className="cursor"></span>
    )
}

export default Mouse
