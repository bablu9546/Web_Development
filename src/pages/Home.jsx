import "../index.css";
import Nav from "../components/Nav"
import C1 from "../components/C1";
import C2 from "../components/C2";
import C3 from "../components/C3";

function Home (){
  return (
    <div>
       <Nav/>
       <C1/>
       <C2/>
       <C3/>
    </div>
  )
}

export default Home;