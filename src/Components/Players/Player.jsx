import PropTypes from 'prop-types';
const Player = ({ player, handleChoosePlayer, handlePrice }) => {
    const { biddingPrice, bowlingType, battingType, role, image, country, name } = player
    return (
        <div>
            <div className="border-2 rounded-lg p-6 space-y-4">
                <figure className='h-52'>
                    <img
                        src={image}
                        alt="Player"
                        className="rounded-xl w-full h-full" />
                </figure>
                <h2 className='font-semibold text-xl'><i className="fa-solid fa-user"></i> {name}</h2>
                <div className='flex justify-between items-center text-xs text-gray-500 border-b-2 pb-3'>
                    <p><small><i className="fa-regular fa-flag"></i> {country}</small></p>
                    <p><small>{role}</small></p>
                </div>
                <div className='flex justify-between font-semibold'>
                    <p>{battingType}</p>
                    <p>{bowlingType}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p>Price: $ {biddingPrice}</p>
                    <button onClick={() => (handleChoosePlayer(player), handlePrice(biddingPrice))} className='btn text-xs'>Choose Player</button>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handlePrice: PropTypes.func,
    handleChoosePlayer: PropTypes.func
}

export default Player;