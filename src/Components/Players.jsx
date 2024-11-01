import { useEffect, useState } from "react";
import SelectedPlayer from "./SelectedPlayer";
import Player from "./player";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Players = ({coinAmount, coinMinus,removePlayerMoneyAdd}) => {
    const [view,setView] = useState("available");
    const [players, setPlayers] = useState([]);
    const [selectedPlayers,setSelectedPlayers] = useState([]);
    useEffect(()=>{
        fetch("playes.json")
        .then(res => res.json())
        .then(data => setPlayers(data));
    },[]);
    console.log(players);
    
    const addSelectedPlayer = (player) => {
        console.log(selectedPlayers.length, selectedPlayers.includes(player), coinAmount, player.biddingPrice)
        if (
          selectedPlayers.length < 6 &&
          !selectedPlayers.includes(player) &&
          coinAmount >= player.biddingPrice
        ) {
          setSelectedPlayers([...selectedPlayers, player]);
          coinMinus(parseFloat(player.biddingPrice));
          toast.success(`Congrats !! ${player.name} is now in your squad!`);
        } else {
          if (coinAmount < player.biddingPrice) {
            toast.error(
              "Not enough money to buy this player.Claim some Free Credit!",
              "error"
            );
          } else if (selectedPlayers.includes(player)) {
            toast.error(`Player (${player.name}) is already added!`);
          } else {
            toast.error("6 players added already! You can't add more players!");
          }
        }
      };
    const removePlayer = (player) =>{
        setSelectedPlayers(selectedPlayers.filter((p)=>p.playerId != player.playerId));
        removePlayerMoneyAdd(parseFloat(player.biddingPrice),player);
    };

    const Available = ({players,addSelectedPlayer}) =>{
        return(
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
            {players.map((player) => (
                <Player key={player.playerId}
                    player={player}
                    addSelectedPlayer={addSelectedPlayer}
                ></Player>
              ))}
            </div>
        );
    };

    const Selected = ({selectedPlayers, removePlayer, setView}) =>{
        return(
            <div>
                {
                    selectedPlayers.map((player)=>(
                        <SelectedPlayer key={player.playerId} player={player} removePlayer={removePlayer}/>
                    ))
                }
                <button onClick={()=>setView("available")} className="px-4 py-2 text-lg font-bold bg-[#E7FE29] rounded-lg mb-3">
                    Add More Players
                </button>
            </div>
        );
    };
    return (
        <div className="container mx-auto mb-10 pb-60">
            <div className="flex justify-between items-center mb-5">
                <div>
                <h1 className="font-bold text-xl lg:text-3xl">
                    {view === "available" ? "Available" : `Selected(${selectedPlayers.length}/6)`}
                </h1>
                </div>
                <div className="flex">
                    <button onClick={() => setView("available")} className={`${ view === "available"? "bg-gradient-to-r from-sky-300 to bg-yellow-300" : "bg-gray-200" } px-3 sm:px-5 p-2 sm:p-3 rounded-l-lg text font-bold`}>
                        Available
                    </button>
                    <button onClick={() => setView("selected")} className={`${ view === "selected"? "bg-gradient-to-r from-sky-300 to bg-yellow-300": "bg-gray-200" } px-3 sm:px-5 p-2 sm:p-3 rounded-r-lg font-bold`}>
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
             </div>
            <div>
                {view === "available" ? ( <Available players={players} addSelectedPlayer={addSelectedPlayer} />) : ( <Selected selectedPlayers={selectedPlayers} removePlayer={removePlayer} setView={setView}/>)}
            </div>
        </div>
    )
};

export default Players;