import React from 'react'
import './Hero.css'
import img1 from '../image/linkedin.png'; 
import img2 from '../image/behance.png'
import img3 from '../image/X.png'
import img4 from '../image/insta.png'
import Creative from './Creative';
const Hero = () => {
  return (
    <>
    <h1 className='head1'>Hello I'm SABTHAGIRI</h1><br></br>
    <span className='type'>A Creative <Creative /></span>
    <img src="https://media.licdn.com/dms/image/v2/D5603AQEzN7ZCCVXraQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723827790552?e=1735776000&v=beta&t=FNXlYaClqJyepEOaY6Ru53hFK_0oBIdbI64tl8jSVXs" style={{width:"510px",height:"510px",position:"absolute",top:"140px",left:"975px",borderRadius:"30px"
    }}></img>
    <p className='hp'>a passionate developer and UI designer with a knack for crafting<br></br> seamless digital experiences. I specialize in bringing innovative<br></br> ideas to life by designing intuitive user interfaces and implementing<br></br> efficient, high-quality solutions on the development side.</p>
    <a href='https://www.linkedin.com/in/sabthagiris/' target='_blank'><img src={img1} width={"130px"} height={"130px"} className='logo1'/></a>
    <a href='https://www.behance.net/sabthagirisabs' target='_blank'><img src={img2} width={"80px"} height={"80px"} className='logo2'/></a>
    <a href='https://twitter.com/SabthagiriS' target='_blank'><img src={img3} width={"70px"} height={"70px"} className='logo3'/></a>
    <a href='https://www.instagram.com/girisabtha?igsh=dWdnemx0dGdidW1u' target='_blank'><img src={img4} width={"150px"} height={"110px"} className='logo4'/></a>
    </>
  )
}

export default Hero