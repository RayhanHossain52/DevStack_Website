import type { CardType } from "../../Type";
import SelectedTech from "./SelectedTech";

interface SelectedCardProps {
    selectedCards: CardType[];
    handleRemove: (id: string) => void;
    handleRemoveALL: () => void;
}

const SelectedCard = ({
    selectedCards,
    handleRemove,
    handleRemoveALL
}: SelectedCardProps) => {

    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <div className="card-body p-5 sm:p-6">

                <h2 className="font-bold text-xl sm:text-2xl">
                    Your Stack
                </h2>

                {selectedCards.length === 0 ? (
                    <p className="text-gray-500 text-sm sm:text-base">
                        No technologies selected yet.
                    </p>
                ) : (
                    <>
                        <div>
                            <p className="text-gray-500 text-sm sm:text-base">
                                {selectedCards.length}{" "}
                                {selectedCards.length === 1
                                    ? "Technology"
                                    : "Technologies"}{" "}
                                Selected
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            {selectedCards.map((tech) => (
                                <SelectedTech
                                    key={tech.id}
                                    handleRemove={handleRemove}
                                    tech={tech}
                                />
                            ))}
                        </div>
                    </>
                )}

                {selectedCards.length === 0 ? (
                    <div className="border border-dashed border-gray-300 rounded-lg p-5 sm:p-6 text-center mt-4">
                        <p className="text-gray-500 font-medium">
                            Your stack is empty
                        </p>
                    </div>
                ) : (
                    <button
                        onClick={handleRemoveALL}
                        className="btn btn-outline hover:bg-red-100 border-red-600 text-red-600 rounded-xl w-full"
                    >
                        Remove All
                    </button>
                )}

            </div>
        </div>
    );
};

export default SelectedCard;