import { IoPersonSharp } from "react-icons/io5";
import { TiFlag } from "react-icons/ti";

const player = ({player,addSelectedPlayer}) => {
    const {name,country,image,role,battingBowlingType,biddingPrice} = player;
    return (
        <div className="p-4 space-y-3 border-2 border-gray-500 rounded-2xl border-opacity-50">
            <div>
                <img src={image} alt={`Image of ${name}`} className="w-[300px] h-[300px] object-cover rounded-full mx-auto" />
            </div>            
            <div className="flex gap-3 items-center text-3xl font-semibold">
                <span>
                    <IoPersonSharp/>
                </span>
                <span>{name}</span>
            </div>
            <hr />
            <div className="flex justify-between font-medium text-lg">
                <div className="flex gap-3 items-center text-[#575656]">
                    <span className="text-[#131313]">
                        <TiFlag/>
                    </span>
                    <span className="font-normal">{country}</span>
                </div>
                <div className="px-3 py-2 bg-gray-300 shadow-md rounded-lg">
                    {role}
                </div>
            </div>
            <div className="font-bold space-y-2 text-lg">
                <div className="flex justify-between">
                    <h1>{battingBowlingType}</h1>
                </div>
                <div className="flex justify-between">
                    <h1>Price: </h1>
                    <h3>${biddingPrice}</h3>
                </div>
            </div>
            <div className="flex justify-between">
                <button onClick={()=>addSelectedPlayer(player)} 
                className="font-semibold text-lg shadow-lg border-2 border-gray-400 w-full p-2 hover:bg-transparent">Choose Player</button>
            </div>
        </div>
    );
};

export default player;