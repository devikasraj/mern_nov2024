import { useState } from "react";





const MyForm=()=> {

  const [myCar, setMyCar] = useState("Fiat");

  const handleChange = (event) => {

   setMyCar(event.target.value)

  }

  return (

   <form>

    <select value={myCar} onChange={handleChange}>

     <option value="Ford">Ford</option>

     <option value="Volvo">Volvo</option>

     <option value="Fiat">Fiat</option>

    </select>

   </form>

  )

 }

 export default MyForm;





