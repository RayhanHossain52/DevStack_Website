import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import { Suspense} from "react";
import type { CardType } from "./Type";
import CardSection from "./components/TechCardSection.tsx/CardSection";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";


const fetchCard = async (): Promise<CardType[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

const cardPromise = fetchCard();
console.log(cardPromise, "Promie From App.tsx");


function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<div className=" flex font-semibold text-2xl justify-center">Loading......</div>}>
        <CardSection CardPromise={cardPromise}/>
      </Suspense>
      <Footer/>
    </>
  )
}

export default App;
