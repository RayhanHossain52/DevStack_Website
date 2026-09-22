import { RxCross2 } from "react-icons/rx";
import type { CardType } from "../../Type";

interface SelectedTechProps {
    tech: CardType;
    handleRemove: (id: string) => void;
}

const SelectedTech = ({ tech, handleRemove }: SelectedTechProps) => {
    return (
        <div className="border border-gray-200 rounded-lg p-3 shadow-sm m-2">
            <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-8 h-8"
                    />

                    <div>
                        <h3 className="font-semibold">
                            {tech.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {tech.category}
                        </p>
                    </div>
                </div>

                <button onClick={()=>handleRemove(tech.id)} className="cursor-pointer"><RxCross2 /></button>

            </div>
        </div>
    );
};

export default SelectedTech;

