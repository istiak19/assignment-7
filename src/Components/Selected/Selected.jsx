import PropTypes from 'prop-types'
import Select from './Select';

const Selected = ({ choosePlayers, handleRemove,handleAddMore }) => {
    // console.log(coins)
    return (
        <div className='mb-10'>
            <h2 className='font-bold text-2xl mb-5'>
                Selected Player ({choosePlayers.length}/6)
            </h2>
            {
                choosePlayers.map(player => <Select key={player.playerId} player={player} handleRemove={handleRemove}></Select>)
            }
            <button onClick={()=>handleAddMore(true)} className='btn btn-color'>Add More Players</button>
        </div>
    );
};

Selected.propTypes = {
    choosePlayers: PropTypes.array.isRequired,
    handleRemove: PropTypes.func,
    handleAddMore:PropTypes.func
};

export default Selected;
