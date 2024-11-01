import {  ToastContainer,toast } from "react-toastify";
import { useEffect, useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Players from "./Components/Players";
import { getStoredEmail } from "./Components/js/localstorage.js";
import Subscribe from "./Components/Subscribe.jsx";
import Footer from "./Components/Footer.jsx";


const App = () => {
  const [coinAmount,setCoinAmount] = useState(0)
  const coinAdd = (newCoinAmount) =>{
    setCoinAmount(coinAmount + newCoinAmount)
  }
  const coinMinus = (newCoin) => {
    setCoinAmount(coinAmount - newCoin);
  };
  const removePlayerMoneyAdd = (newCoin,player) =>{
    setCoinAmount(coinAmount + newCoin);
    toast.success(`Player ${player.name} removed from your squad`);
  };

  useEffect(()=>{
    if(getStoredEmail().length !=0){
      toast.success("Welcome back! You have already subscribed that means a lot to uss")
    }
  },[])
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <ToastContainer/>
        <Header coinAmount={coinAmount}></Header>
        <Banner coinAdd={coinAdd}/>
        <Players
          coinMinus={coinMinus}
          coinAmount={coinAmount}
          removePlayerMoneyAdd={removePlayerMoneyAdd}/>
      </div>
        <div>
          <Subscribe/>
          <Footer/>
        </div>
    </div>
    

  );
};

export default App;