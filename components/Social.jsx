import Link from "next/link"

import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from 'react-icons/fa'

const socials = [
  {icon : <FaGithub/>, path: 'https://github.com/ankitjha93'},
  {icon : <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/ankit-jha-93-/'},
  // {icon : <FaGithub/>, path: ''}
  // {icon : <FaGithub/>, path: ''}
]

function Social({containerStyles, iconStyles}) {
  return (
    <div className={containerStyles}>
       {socials.map((item, index) => {
          return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
       })}
    </div>
  )
}

export default Social