import React from 'react'
import { Link } from 'react-scroll'
export default function Navbar() {
  return (
    <div className='text-white p-4'>
      <nav className='container mx-auto flex flex-row px-4 bg-[#FFFFFF] text-black justify-between items-center'>
        <div className='text-xl font-bold text-[#0F38A1]'>El-<span className='text-Orange-600'>Taref</span></div>
        <ul className='flex text-md space-x-4'>
          <li>   <Link
        to="Home"
        smooth={true}
        duration={500}
        className="cursor-pointer text-black hover:text-orange-500"
      >Home</Link></li>
          <li>   <Link
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer text-black hover:text-orange-500"
      >About</Link> </li>
          <li>   <Link
        to="Services"
        smooth={true}
        duration={500}
        className="cursor-pointer text-black hover:text-orange-500"
      >Services</Link></li>
          <li>   <Link
        to="Contact"
        smooth={true}
        duration={500}
        className="cursor-pointer text-black hover:text-orange-500"
      >Contact </Link> </li>
        </ul>
        <div className='flex items-center space-x-4'>
            <h1 className='text-2xl font-bold text-[#0F38A1]'><a href='https://www.facebook.com/nibra.technology.ltd' target='_blank'   >More</a></h1>
            <button className='bg-[#00B7C3] text-white  rounded  px-4 py-2 rounded hover:bg-Orange-700'><a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dnibra.eltarf.dz%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExSnV4RWxkeGp4YVRqTEtrTQEe2hedlmf50WInahq39ji6sY28HUl0j5KaUKIzAJZIQmeuQqhE5ucxkb9ODdE_aem_SdOeS3CSedOuQYdbcsbtHA&h=AT3DtdSxfsL5UeJIVpGEtLChELT-dqWNBSuZE74XzpVhND0-S02nfTQ5Wjr7-hXw1Wei9Lme_DuLnz2NYBIDwDcptRg4Mzq5xE84OJdcXznzwYmaQ0-04Ndi2Xa1Du4vCTN0DNYgvba9T8o6Hg&__tn__=-UK-R&c[0]=AT0gCWmxe8zvcNwpGR09IUhDauKbeTySDsFaZSwo6J4oodZn1ic_5owYekQnBh0JMCDA7qOHxR48LJPqvVR7M3NjvV-ei6ss3nPWzeGYRnzugoWP2EiEkYfSzDQbBJV3yos_b4SqFxgJpkMpBm4yknEQa_XlUpeIQj0CW49g2djipFnN-q11MSnVb2aK96zhXjgw4l15PoIS9oqv6-j4_jv3h5SgniKfcEWRliqpG6DPa-8Fi2q6WQ'
            target='_blank'
            ></a>Download</button>
            
        </div>
      </nav>
 

    </div>
  )
}
