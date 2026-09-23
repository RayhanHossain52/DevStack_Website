import { useState } from "react";
import type { CardType } from "../../Type";
import Card from "./Card";
import SelectedCard from "./SelectedCard";
import { toast } from "react-toastify";

interface CardListProps {
    technology: CardType[]
}

const CardList = ({ technology }: CardListProps) => {

    // For Add Item in Stack
    const [selectedCards, setSelectedCards] = useState<CardType[]>([]);

    const handleSelectedCards = (tech: CardType): void => {
        const newSelectedCards = [...selectedCards, tech];
        setSelectedCards(newSelectedCards);

        toast.success(`${tech.name} added to your Stack`);
    }

    // For Remove Item From Stack
    const handleRemove = (id: string): void => {
        const remainingCards = selectedCards.filter((card) => card.id !== id);
        setSelectedCards(remainingCards);
    }

    // For Remove ALL Item From Stack
    const handleRemoveALL = () => {
        setSelectedCards([]);
        toast.error(`Removed All Items`);
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-8">

            {/* Technology Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    technology.map((tech: CardType) => {
                        return (
                            <Card
                                key={tech.id}
                                tech={tech}
                                handleSelectedCards={handleSelectedCards}
                                isAdded={selectedCards.some(
                                    (card) => card.id === tech.id
                                )}
                            />
                        )
                    })
                }
            </div>

            {/* Selected Stack */}
            <div className="lg:col-span-1">
                <SelectedCard
                    handleRemoveALL={handleRemoveALL}
                    selectedCards={selectedCards}
                    handleRemove={handleRemove}
                />
            </div>

        </div>
    )
}

export default CardList;