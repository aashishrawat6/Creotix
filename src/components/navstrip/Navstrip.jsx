import './Navstrip.css'
import fb from '/Facebook.svg';
import ig from '/Instagraam.svg';
import linkedin from '/Linkedin.svg';
import pinterest from '/pinterest.svg';
import tw from '/twitter.svg';
import mail from '/Mail.svg';
import phone from '/Phone.svg';
const Navstrip = () => {
  return (
    <div id='navstrip'>
        <div className="section">
            <div className="strip">
                <div className="left-side">
                    <a href="mailto:info@creotix.in" target='_blank'><img src={mail} alt="mail"  className='aImages'/>info@creotix.in</a>
                    <a ><img src={phone} alt="phone"  className='aImages'/>+91 7042094710, 9599266013</a>
                </div>
                <div className="right-side">
                    <span>
                        Follow Us
                    </span>
                    <a href="" target='_blank'><img src={fb} alt="Facebook" className='aImages'/></a>
                    <a href="" target='_blank'><img src={ig} alt="Instagram" className='aImages'/></a>
                    <a href="" target='_blank'><img src={linkedin} alt="LinkedIn" className='aImages'/></a>
                    <a href="" target='_blank'><img src={tw} alt="Twitter" className='aImages'/></a>
                    <a href="" target='_blank'><img src={pinterest} alt="Pinterest" className='aImages'/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navstrip