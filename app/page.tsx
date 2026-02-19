import Image from "next/image";
import Slider from "./components/Slider";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <>
    <Slider/>
    <Features/>
    <Newsletter/>    
    </>
  );
}
