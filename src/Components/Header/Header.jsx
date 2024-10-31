import logo from '../../assets/images/logo.png'
import PropTypes from 'prop-types';
const Header = ({ coins, prices }) => {
    return (
        <div className='sticky top-0 z-40 backdrop-blur-3xl'>
            <div className='w-11/12 mx-auto sm:flex md:justify-between items-center py-5 '>
                <img src={logo} alt="" />
                <div className='flex items-center gap-2 py-2 sm:gap-10 text-gray-500'>
                    <a href="#">Home</a>
                    <a href="#">Fixture</a>
                    <a href="#">Teams</a>
                    <a href="#">Schedules</a>
                    <p className='text-black font-medium border-2 p-1 rounded-md'>{coins - prices} Coin <i className="fa-brands fa-bitcoin text-yellow-500"></i></p>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    coins: PropTypes.number.isRequired,
    prices: PropTypes.number.isRequired
};

export default Header;