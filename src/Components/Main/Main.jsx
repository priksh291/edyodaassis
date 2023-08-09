import React from 'react'
import '../Main/Main.css'
import Payment from '../Payment/Payment'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'

const Main = () => {
  return (
    <div className='body'>
      <div className='details'>
        <div>
          <span style={{display:'flex'}}>Access curated courses worth <div>₹18,500</div><span>&nbsp;</span>  at just<span>&nbsp;</span> <div className='price'>₹ 99</div><span>&nbsp;</span> per year!</span>
          <ul>
            <li><img src= {image1} alt='/'/><div>100+</div><span>&nbsp;</span> Job relevant courses</li>
            <li><img src= {image2} alt='/'/><div>20,000+</div><span>&nbsp;</span> Hours of content</li>
            <li><div className='live'><img src= {image3} alt='/'/><div>live</div></div><div>Exclusive</div><span>&nbsp;</span> webinar access</li>
            <li><img src= {image4} alt='/'/>Scholarship worth <span>&nbsp;</span><div>₹94,500</div></li>
            <li><img src= {image5} alt='/'/><div>Ad Free</div><span>&nbsp;</span> learning experience</li>
          </ul>
        </div>
      </div>
      <Payment/>
    </div>
  )
}

export default Main
