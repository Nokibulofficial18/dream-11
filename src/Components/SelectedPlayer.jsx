import { RiDeleteBin5Line } from "react-icons/ri";

const SelectedPlayer = ({player, removePlayer}) => {
    const {name,role,image} = player;
    return (
        <div className="flex justify-between items-center mb-4 p-4 border-2 border-gray-400 rounded-2xl border-opacity-50">
      <div className="flex items-center gap-5 lg:gap-8">
        <div>
          <img src={image} alt="" className="w-[100px] h-[100px] rounded-full" />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-2xl">{name}</h1>
          <h3 className="text-[#13131399]">{role}</h3>
        </div>
      </div>
      <div className="pr-8">
        <button
          onClick={() => removePlayer(player)}
          className="text-3xl text-red-600"
        >
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
    );
};

export default SelectedPlayer;