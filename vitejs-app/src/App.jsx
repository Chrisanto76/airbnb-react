import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Category from "../components/Category";

function App() {
  return (
    <>
      <Navbar />
        <Category />
      <div className="container">
        <Card
          img="./src/assets/sologne.webp"
          name="Pruniers-en-Sologne"
          rate="4.0"
          style="Professionnel"
          date="Aout / Juillet."
          price="123$"
        />
        <Card
          img="./src/assets/st-gatien.webp"
          name="Saint-Gatien_des-bois"
          rate="3.8"
          style="Professionnel"
          date="Juillet 2023."
          price="140$"
        />
         <Card
          img="./src/assets/vitry.webp"
          name="Vitry-sur-Seine"
          rate="4.2"
          style="Particulier"
          date="aout 2023."
          price="500$"
        />
        
        
      </div>
      
    </>
  );
}

export default App;
