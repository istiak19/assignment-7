import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import './card.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoFooter from '../../assets/images/logo-footer.png'
import Player from "./Player";
import Selected from "../Selected/Selected";

const Players = ({ handleButton, isActive, handlePrice, handleAddMore }) => {
    // Choose Player Button handle
    const [choosePlayers, setChoosePlayer] = useState([])
    const handleChoosePlayer = (choose) => {
        const isExist = choosePlayers.find(player => player.playerId == choose.playerId)
        if (choosePlayers.length >= 6) {
            toast.warning('Player already selected the maximum of 6 players!')
            return;
        }

        else if (isExist) {
            toast.warning('This player has already been selected!')
        }
        else {
            const newPlayer = [...choosePlayers, choose]
            setChoosePlayer(newPlayer)
            toast.success(`${choose.name} has been successfully added to your selection!`);
            return;
        }
    }

    // Handle remove button
    const handleRemove = (id) => {
        const updatePlayer = choosePlayers.filter(p => p.playerId !== id)
        setChoosePlayer(updatePlayer)
    }

    const [selectedPlayers, setSelectedPlayers] = useState([])
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setSelectedPlayers(data))
    }, [])
    return (
        <div>
            <div className="relative">
                <div>
                    <div className="flex justify-end items-center mb-4 w-11/12 mx-auto">
                        <div className="flex flex-row gap-3">
                            <button onClick={() => handleButton(true)} className={isActive ? 'btn btn-color' : 'btn'}>Available</button>
                            <button onClick={() => handleButton(false)} className={isActive ? 'btn' : 'btn-color btn'}>Selected {(choosePlayers.length)}</button>
                        </div>
                    </div>
                    <div>
                        {/* Player Show and Selected player show */}
                        {isActive ? <div className="w-11/12 mx-auto">
                            <h2 className="font-bold text-2xl mb-5">Available Players</h2>
                            <div className="grid grid-cols-3 gap-6 mb-64">
                                {
                                    selectedPlayers.map(player => <Player
                                        key={player.playerId}
                                        player={player}
                                        handlePrice={handlePrice}
                                        handleChoosePlayer={handleChoosePlayer}
                                    ></Player>)
                                }
                            </div>
                            <div className="border-2 p-5 rounded-xl backdrop-blur-lg absolute right-60 top-[2050px]">
                                <div className="text-center card px-80 py-20 space-y-4">
                                    <h2 className="font-bold text-3xl">Subscribe to our Newsletter</h2>
                                    <p className="font-medium text-gray-200">Get the latest updates and news right in your inbox!</p>
                                    <div>
                                        <input type="email" name="" id="" className="border-2 py-3 pl-7 pr-24 rounded-lg mr-2" placeholder="Enter your email" />
                                        <button className="btn bg-gradient-to-r from-yellow-100 to-yellow-400">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                            <footer className="bg-[#06091A]">
                                <div className="flex justify-center pt-64 pb-10">
                                    <img src={logoFooter} alt="" />
                                </div>
                                <div className="footer flex justify-between p-10 border-b-2">
                                    <nav className="text-white">
                                        <h6 className="footer-title">About Us</h6>
                                        <a className="link link-hover leading-8">We are a passionate team <br />dedicated to providing the best <br /> services to our customers.</a>
                                    </nav>
                                    <nav className="text-white">
                                        <h6 className="footer-title text-white">Quick Links</h6>
                                        <a className="link link-hover">Home</a>
                                        <a className="link link-hover">Services</a>
                                        <a className="link link-hover">About</a>
                                        <a className="link link-hover">Contact</a>
                                    </nav>
                                    <form className="text-white">
                                        <h6 className="footer-title">Subscribe</h6>
                                        <fieldset className="form-control w-80">
                                            <label className="label">
                                                <span className="label-text text-white">Subscribe to our newsletter for the latest updates.</span>
                                            </label>
                                            <div className="join">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your email"
                                                    className="input input-bordered join-item" />
                                                <button className="btn bg-gradient-to-r from-yellow-100 to-yellow-400 join-item">Subscribe</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                                <p className="text-center pt-5 text-white">@2024 Your Company All Rights Reserved.</p>
                            </footer>
                        </div> : <div>
                            {/* Selected Section */}
                            <div className="w-11/12 mx-auto">
                                <Selected choosePlayers={choosePlayers} handleRemove={handleRemove} handleAddMore={handleAddMore}></Selected>
                            </div>
                            <div className="border-2 p-5 rounded-xl backdrop-blur-lg absolute right-60">
                                <div className="text-center card px-80 py-20 space-y-4">
                                    <h2 className="font-bold text-3xl">Subscribe to our Newsletter</h2>
                                    <p className="font-medium text-gray-600">Get the latest updates and news right in your inbox!</p>
                                    <div>
                                        <input type="email" name="" id="" className="border-2 py-3 pl-7 pr-24 rounded-lg mr-2" placeholder="Enter your email" />
                                        <button className="btn bg-gradient-to-r from-yellow-100 to-yellow-400">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                            <footer className="bg-[#06091A] mt-60">
                                <div className="flex justify-center pt-64 pb-10">
                                    <img src={logoFooter} alt="" />
                                </div>
                                <div className="footer flex justify-between p-10 border-b-2">
                                    <nav className="text-white">
                                        <h6 className="footer-title">About Us</h6>
                                        <a className="link link-hover leading-8">We are a passionate team <br />dedicated to providing the best <br /> services to our customers.</a>
                                    </nav>
                                    <nav className="text-white">
                                        <h6 className="footer-title text-white">Quick Links</h6>
                                        <a className="link link-hover">Home</a>
                                        <a className="link link-hover">Services</a>
                                        <a className="link link-hover">About</a>
                                        <a className="link link-hover">Contact</a>
                                    </nav>
                                    <form className="text-white">
                                        <h6 className="footer-title">Subscribe</h6>
                                        <fieldset className="form-control w-80">
                                            <label className="label">
                                                <span className="label-text text-white">Subscribe to our newsletter for the latest updates.</span>
                                            </label>
                                            <div className="join">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your email"
                                                    className="input input-bordered join-item" />
                                                <button className="btn bg-gradient-to-r from-yellow-100 to-yellow-400 join-item">Subscribe</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                                <p className="text-center pt-5 text-white">@2024 Your Company All Rights Reserved.</p>
                            </footer>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

Players.propTypes = {
    handleButton: PropTypes.func,
    handlePrice: PropTypes.func,
    handleAddMore: PropTypes.func,
    isActive: PropTypes.bool.isRequired
}

export default Players;