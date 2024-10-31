import './banner.css'
import bannerPic from '../../assets/images/banner-main.png'
import PropTypes from 'prop-types';

const Banner = ({ handleCoins }) => {
    return (
        <div>
            <div className='flex flex-col items-center my-14 banner w-11/12 mx-auto py-16 rounded-2xl space-y-4'>
                <img className='w-64 h-52' src={bannerPic} alt="" />
                <h2 className='font-bold text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-2xl text-gray-500'>Beyond Boundaries Beyond Limits</p>
                <div className='border-2 border-yellow-400 p-1 rounded-lg'>
                    <button onClick={() => handleCoins(200000)} className='btn bg-[#E7FE29]'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleCoins: PropTypes.number.isRequired
};

export default Banner;