import Card from "./components/Card";
import "./globals.css"

export default function Home() {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center mx-auto">
      <div className="w-[800px] h-[500px]">
        <Card />
      </div>
    </div>
  );
}
