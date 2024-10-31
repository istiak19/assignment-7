import PropTypes from 'prop-types';

const Select = ({ player,handleRemove }) => {
    const { role, image, name, biddingPrice } = player
    return (
        <div className='flex justify-between items-center gap-5 mb-5 shadow-lg bg-slate-200 p-6  rounded-lg'>
            <div className='flex items-center gap-5'>
                <div>
                    <img className='w-20 h-20 rounded-lg' src={image} alt="" />
                </div>
                <div className='space-y-2'>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <p className='text-gray-500'>{role}</p>
                    <p className='text-gray-500'>Price: $ {biddingPrice}</p>
                </div>
            </div>
            <div>
                <button onClick={()=>handleRemove(player.playerId)}><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
    );
};

Select.propTypes = {
    player: PropTypes.object.isRequired,
    handleRemove:PropTypes.func
};

export default Select;