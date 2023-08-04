import { useState,useEffect } from "react"
import styles from "./BlockItems.module.css"

function Blockitems({data}){
    const [ships,setShips] = useState(null)
    useEffect(()=>{    
        console.log(data.results)
        const resultsData =data.results
        const shipNames = resultsData?resultsData.map((dataResults)=><div className = {styles.shipsContainer}><h3>{dataResults.name}</h3></div>): "Loading....."
        setShips(shipNames)


},[data.results])


    return(
        <>
            {ships}
        </>
        
        
    )

}

export default Blockitems