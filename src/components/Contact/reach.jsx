import email from '../../assets/About/email.png'
import call from '../../assets/About/call.png'
import location from '../../assets/About/location.png'

function Reach() {
    return (
        <div className="reach-us">
            <h3>Reach to us</h3>
            <p>We are Pakistan's leading insurance marketplace helping individuals and businesses find the best insurance plan.</p>
            <div className="form-details">
                <img className='background' src={location}/>
                <div>
                    <h3>Office Address</h3>
                    <p>R-613, Block 15, Dastagir, FB Area, Karachi - Pakistan</p>
                </div>
            </div>
            <div className="form-details">
                <img className='background' src={email}/>
                <div>
                    <h3>Email Us</h3>
                    <p>info@theoneclickdigital.com</p>
                </div>
            </div>
            <div className="form-details">
                <img className='background' src={call}/>
                <div>
                    <h3>Phone Call</h3>
                    <p>+92 319 599 5775</p>
                </div>
            </div>
        </div>
    )
}
export default Reach