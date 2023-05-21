import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
       <div className="social_link">
        <ul className='link'>
          <li className='footer-link'>
            <a href="https://www.facebook.com/bahadurmiashihab/" target='_block'>
               <FaFacebookF className='footer-icons'/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/bahadurmiashihab/" target='_block'>
               <FaLinkedinIn className='footer-icons'/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/bahadurmiashihab/" target='_block'>
               <FaTwitter className='footer-icons'/>
            </a>
          </li>
        </ul>
       </div>
    </footer>
  )
}

export default Footer