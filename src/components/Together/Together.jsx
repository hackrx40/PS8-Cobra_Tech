

import './Together.css';
import hand from '../../assets/hand.png';
const Together = () => {
 
    return (
        <div className="mainBox flex items-center">
            <div className="textBox w-1/3">
                <h2>Together we  Thrive</h2>
                <p>We believe in the power of partnerships to achieve greater success together. Let's embark on this exciting journey of partnership and unlock new possibilities for shared success.</p>
            <button
              type="submit"
              className="inline-flex w-full rounded-full justify-center content-center bg-[#f89c30] px-6 pt-[0.5rem] pb-[0.5rem] font-poppins font-semibold  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-[#DF8E2F]"
              data-te-ripple-init
              data-te-ripple-color="light"
              id="calBtn"
            >
              Become a partner
            </button>
            </div>
        <img src={hand} alt="" />
        </div>
    );
}
                 
export default Together;