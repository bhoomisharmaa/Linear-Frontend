import { useEffect, useState } from "react";
import "./loading-page.css";

export default function LoadingPage() {
  const [randomIndex, setRandomIndex] = useState(0);
  const catArray = [
    "/catzz/cat1.jpeg",
    "/catzz/cat6.jpeg",
    "/catzz/cat7.jpeg",
    "/catzz/cat8.jpeg",
    "/catzz/cat9.jpeg",
    "/catzz/cat10.jpeg",
    "/catzz/cat11.jpeg",
    "/catzz/cat13.jpeg",
  ];
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      setRandomIndex(Math.floor(Math.random() * catArray.length));
    }, 700); // 700 milliseconds = 0.5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {});
  return (
    <div className="div-not-found flex-col gap-8">
      <img src={catArray[randomIndex]} className="h-48 w-48" />
      <div className="flex flex-col justify-center align-center ">
        <p className="text-4xl">Loadingggg......</p>
      </div>
    </div>
  );
}
