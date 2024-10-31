import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Players from "./Components/Players/Players";

function App() {
  // Coins handle
  const [coins, setCoins] = useState(0);
  const handleCoins = (coin) => {
    const updatedCoin = coins + coin;
    setCoins(updatedCoin);
    toast.success(`${coin} has been successfully added.`);
  };

  // Toggle Button handle
  const [isActive, setIsActive] = useState(true);
  const handleButton = (status) => {
    setIsActive(status);
  };

  // Handle add more button player
  const handleAddMore = (add) => {
    setIsActive(add)
  }


  // Price and coins handle
  const [prices, setPrices] = useState(0);
  const handlePrice = (price) => {
    if (prices + price <= coins) {
      setPrices(prices + price);
    } else {
      toast.warning("Insufficient coins. Please add more coins!");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      {/* Navbar section */}
      <Header coins={coins} prices={prices}></Header>
      {/* Banner Section */}
      <Banner handleCoins={handleCoins}></Banner>
      {/* Players section */}
      <Players handleButton={handleButton} handlePrice={handlePrice} isActive={isActive} handleAddMore={handleAddMore}></Players>
    </>
  );
}

export default App;
