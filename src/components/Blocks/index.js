import Blockitems from "../BlockItems";
import styles from "./Blocks.module.css"

function Blocks({data}){
    return (
    <div className={styles.blockContainer}>
        <Blockitems data ={data}/>
    </div>)
}

export default Blocks