import light from '../assets/image/light.svg'
import dark from '../assets/image/dark.svg'
import { ThemeContext } from "../App";
import { useContext } from "react";
const Content = () =>{
    const{theme} = useContext(ThemeContext)
    return(
       <main className={theme ===  "dark"?"dark":"light"}>
            <div >
                <h1>Thiraphat Wongwanicha</h1>
                <p>DarkMode</p>
            </div>
            <img src={theme ===  "dark"?dark:light} alt='Logo'/>
       </main>

    )
}
export default Content