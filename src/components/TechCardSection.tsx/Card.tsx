import { FaStar } from "react-icons/fa";
import type { CardType } from "../../Type";


interface CardProps {
    tech: CardType;
    handleSelectedCards: (tech: CardType) => void;
    isAdded: boolean;
}

const Card = ({ tech, handleSelectedCards, isAdded }: CardProps) => {
    return (
        <div
            className={`card bg-base-100 shadow-sm border-2 ${isAdded ? "border-pink-200 shadow-pink-200" : "border-transparent"
                }`}
        >
            <div className="flex flex-col gap-3 p-8">
                <div className="flex justify-between">
                    <figure>
                        <img src={tech.icon} alt="" className="w-7.5" />
                    </figure>
                    <p className="rounded-full bg-sky-100 text-blue-500 font-semibold px-4 p-1" >{tech.badge}</p>
                </div>
                
                <div className="flex flex-col gap-2 my-2 ">
                    <h3 className="font-bold text-2xl">{tech.name}</h3>
                    <p className="text-gray-500">{tech.description}</p>
                </div>
                
                <div className="flex justify-between my-2 ">
                    <p className="rounded-lg bg-gray-100  px-4 p-1">{tech.category}</p>
                    <p>{tech.difficulty}</p>
                    <span className="flex items-center gap-2"><FaStar className="text-yellow-400" /> <p>{tech.rating}</p></span>

                </div>
    
                <div className={`flex justify-center ${isAdded ? "cursor-not-allowed" : "cursor-pointer"}`}>
                    <button
                        disabled={isAdded}
                        onClick={() => handleSelectedCards(tech)}
                        className={`btn rounded-lg w-full h-12 ${isAdded
                                ? "bg-pink-100 text-pink-600 pointer-events-none"
                                : "btn-neutral"
                            }`}
                    >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;