import { RxCross2 } from "react-icons/rx";
import type { CardType } from "../../Type";

interface SelectedTechProps {
    tech: CardType;
    handleRemove: (id: string) => void;
}

const SelectedTech = ({ tech, handleRemove }: SelectedTechProps) => {
    return (
        <div className="border border-gray-200 rounded-lg p-3 shadow-sm">
            <div className="flex items-center justify-between gap-3">

                <div className="flex items-center gap-3 min-w-0">
                    <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-8 h-8 shrink-0"
                    />

                    <div className="min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base truncate">
                            {tech.name}
                        </h3>

                        <p className="text-xs sm:text-sm text-gray-500">
                            {tech.category}
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => handleRemove(tech.id)}
                    className="cursor-pointer shrink-0 text-lg"
                >
                    <RxCross2 />
                </button>

            </div>
        </div>
    );
};

export default SelectedTech;
