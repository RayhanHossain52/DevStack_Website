import type { CardType } from "../../Type";
import SelectedTech from "./SelectedTech";

interface SelectedCardProps {
    selectedCards: CardType[];
    handleRemove: (id: string) => void;
    handleRemoveALL: () => void;
}

const SelectedCard = ({ selectedCards, handleRemove, handleRemoveALL }: SelectedCardProps) => {
    console.log(selectedCards);
    return (
        <div className="card bg-base-100 w-96 shadow-sm ">
            <div className="card-body">
                <h2 className="font-bold text-2xl">Your Stack</h2>

                {selectedCards.length === 0 ? (
                    <p className="text-gray-500">No technologies selected yet.</p>
                ) : (
                    <>
                        <div>
                            <p className="text-gray-500">{selectedCards.length} Technology Selected</p>
                        </div>
                        <div>
                            {selectedCards.map((tech) => (
                                <p key={tech.id}><SelectedTech handleRemove={handleRemove} tech={tech} /></p>
                            ))}
                        </div>
                    </>
                )}
                {selectedCards.length === 0 ? (
                    <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center mt-4">
                        <p className="text-gray-500 font-medium">
                            Your stack is empty
                        </p>
                    </div>
                ) : (
                    <button onClick={handleRemoveALL} className="btn btn-outline hover:bg-red-100 border-red-600 text-red-600 rounded-xl">Remove All</button>

                )}
            </div>
        </div>
    );
};

export default SelectedCard;