import { useEffect, useState } from "react";
import "./not-found.css";

export default function NotFoundPage() {
  const [randomIndex, setRandomIndex] = useState(0);
  const catArray = [
    "/catzz/cat2.jpeg",
    "/catzz/cat4.jpeg",
    "/catzz/cat12.jpeg",
    "/catzz/cat13.jpeg",
    "/catzz/cat14.jpeg",
    "/catzz/cat15.jpeg",
    "/catzz/cat16.jpeg",
    "/catzz/cat6.jpeg",
    "/catzz/cat10.jpeg",
  ];
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * catArray.length));
  }, []);
  return (
    <div className="div-not-found gap-4">
      <img src={catArray[randomIndex]} className="h-48 w-48" />
      <div className="flex flex-col justify-center align-center ">
        <p className="text-4xl">404</p>
        <p>Oops! page not found</p>
      </div>
    </div>
  );
}
