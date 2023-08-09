import React, { useState } from 'react'
import '../../Components/Payment/Payment.css'
import radio from '../../assets/radio.svg'
import select from '../../assets/select.svg'
import offer from '../../assets/offer.svg'
import Payments from '../../assets/Payments.png'
import unselect from '../../assets/unselect.png'

const Payment = () => {
    const[click,Setclick] = React.useState('subsbox3');
    const[finalPrice, setFinalPrice] = useState(149);
    const[discount,setDiscount] = useState(18401);
    const toggle = (boxname, price, discounts)=>{
        Setclick(boxname)
        setFinalPrice(price)
        setDiscount(discounts)
    }
  return (
    <div>
      <div className='paymentbox'>
        <div>
            <div className='signcribe'>
                <ul>
                    <div><span>1</span>
                    <li>Signup</li></div>
                    <div><span>2</span>
                    <li>Subscribe</li></div>
                </ul>
            </div>
        </div>
        <div className='subsplan'>
            <span>Select your subscription plan</span>
            <div className='subsbox'>
                <img src={radio}/>
                <div className='statustag'>Offer expired</div>
                <div className='subsdesc'>

                    <div>
                    <span>12 Months subscription</span>
                    </div>
                    <div className='total'>
                    <span>Total <span>&nbsp;</span> <span>₹99</span></span>
                    <span>&nbsp;</span>
                    <span className='pricemonth'>₹8 /mo</span>
                    </div>
                </div>
 
            </div>
            <div className={click === 'subsbox3'?'subsbox2':'subsbox3'} onClick={()=>toggle('subsbox3', 179,'18,321')}>
                <img src={click === 'subsbox3' ? select:unselect}/>
                <div className='statustag'>Recommended</div>
                <div className='subsdesc2'>

                    <div>
                    <span>12 Months subscription</span>
                    </div>
                    <div className='total'>
                    <span>Total <span>&nbsp;</span> <span>₹179</span></span>
                    <span>&nbsp;</span>
                    <span className='pricemonth'>₹15 /mo</span>
                    </div>
                </div>
 
            </div>
            <div className={click === 'subsbox2'? 'subsbox2':'subsbox3'} onClick= {()=> toggle('subsbox2',149,'18,351')}>
                <img src={click === 'subsbox2' ? select:unselect}/>

                <div className='subsdesc2'>

                    <div>
                    <span>6 Months subscription</span>
                    </div>
                    <div className='total'>
                    <span>Total <span>&nbsp;</span> <span>₹149</span></span>
                    <span>&nbsp;</span>
                    <span className='pricemonth'>₹25 /mo</span>
                    </div>
                </div>
 
            </div>
            <div className={click === 'subsbox4'? 'subsbox2':'subsbox3'} onClick={() => toggle('subsbox4',99,'18,401')}>
                <img src={click === 'subsbox4' ? select: unselect}/>

                <div className='subsdesc2'>

                    <div>
                    <span>3 Months subscription</span>
                    </div>
                    <div className='total'>
                    <span>Total <span>&nbsp;</span> <span>₹99</span></span>
                    <span>&nbsp;</span>
                    <span className='pricemonth'>₹33 /mo</span>
                    </div>
                </div>
 
            </div>
            <div className='subsfeediv'>
                <div>
                    <div className='subsfee'>
                        <span>Subscription Fee</span>
                        <span>₹18,500</span>
                    </div>
                    <div className='offer'>
                        <div style={{display:'flex', flexDirection:"column"}}>
                        <span>Limited time Offer</span>
                        <span><img src={offer}/><div>offer valid till 25th March 2023</div></span>
                        </div>
                        <span>-₹{discount}</span>
                    </div>
                    <div className='subsfee'>
                        <span style={{display:'flex'}} id='finaltotal'><div>Total</div>(Incl. of 18% GST)</span>
                        <span id='finalprice'>₹{finalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='buttons'>
            <button className='cancelbtn'>CANCEL</button>
            <button className='proceedbtn'>PROCEED TO PAY</button>
        </div>
        <div className='paymentimg'>
            <img src={Payments}  alt='/'/>
        </div>
      </div>
    </div>
  )
}

export default Payment
