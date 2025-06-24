// import Card from "./components/Card";
// import New from "./components/New";
// import ToggleSwitch from "./components/ToggleSwitch";
import Carousel from "./components/Carosel_1";
import "./globals.css"

export default function Home() {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center mx-auto">
      <div className=" flex justify-center items-center w-screen h-screen">
        {/* <Card /> */}
        {/* <New /> */}
        {/* <ToggleSwitch /> */}
        <Carousel />
      </div>
    </div>
  );
}
