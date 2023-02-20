import "./App.css";
import img1 from "./images/footer.jpg"
import Sidebar from "./sidebar"
import img3 from "./images/search.png"
import { useState } from "react";
import Toolbar from "./toolbar";

 
const Navbar = () => {
  const [sidebar,setsidebar]  = useState(true);
  const Togglesidebar=()=>{
    setsidebar((prevStatE)=>!prevStatE)
  }
    return ( 
      <> <div className="japan " >
        <div className="flex justify-center">
       <img   className="w-28 h-10 mt-8 " src={img1} alt="d"/>
       </div>
         
    <Sidebar sidebar={sidebar} openSidebar={Togglesidebar}/> 
       <div className=" mt-5 flex justify-center m-auto">
       
   <Toolbar openSidebar={Togglesidebar}/>
       <select className="text-center colora border-solid rounded-md basis-1/12" id="All-category">
        <option>All category</option>
        <option> action</option>
        <option> Another action</option>
        <option>ssomething action</option>
       </select>
  <form className="flex flex-row">
  <input className="pk" placeholder="search this blog" type="text" />
  <img className="bg-orange-400 w-10" src={img3} alt="fjjf"/>
</form>
       </div>
       <h2 className="large mt-24 text-white">GET START
YOUR FAVOURITE SHOPING</h2>
<br/>
<button O className="colora px-8 py-4 text-white text-lg font-bold hover:bg-orange-400 rounded-md">Buy now</button>

       </div>
       </>
    );
}

 
export default Navbar;