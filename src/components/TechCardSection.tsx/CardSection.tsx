import { use } from "react";
import type { CardType } from "../../Type";
import CardList from "./CardList";



interface CardProps {
    CardPromise: Promise<CardType[]>
}
const CardSection = ({ CardPromise}: CardProps) => {
    const technologys = use(CardPromise);
    console.log(technologys, "All Json data from CardSection.tsx");
    return (
            <div className="container mx-auto my-10 flex flex-col">
                <div className="flex flex-col gap-3">
                    <h2 className="text-5xl font-bold">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
                    <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>
                </div>
                <div className="mt-6">
                    <CardList technology={technologys}/>
                </div>
            </div>
    );
};

export default CardSection;