import React, { useState, useEffect } from "react";


function App() {
  const [img, setImg] = useState("");
  const [isLoaded, setIsLoaded] = useState("")
  
  
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            setImg(data.message);
            setIsLoaded(true);
        });
    }, []);
    
    if (!isLoaded) return <p>Loading...</p>;
    console.log(img)


  return (
    <div>
       
        <img src={ img } alt="A Random Dog" />
    </div>
  );
}

export default App;
