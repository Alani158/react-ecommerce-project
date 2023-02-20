import img2 from "./images/cancel.jpg"


const Sidebar = ({sidebar,openSidebar}) => {
    if(sidebar){
        console.log("hello")
    }if(sidebar!=true){
        console.log("no bitches")
    }
    return ( 
        <div className={sidebar?"trans ": "Open"}>
    
        <div className=" w-52 tt colora fixed flex justify-center ">
        <ul className="inline justify-start mt-11">     
        <div> <img className="ml-24 mb-11 w-10 cursor-pointer" onClick={openSidebar} src={img2} alt="d"/></div> 
        <li className="pb-5 cursor-pointer font-bold text-lg text-white hover:text-orange-400">Home</li>
        <li className="pb-5 cursor-pointer font-bold text-lg text-white  hover:text-orange-400">Contact</li>
        <li className="pb-5 cursor-pointer font-bold text-lg text-white hover:text-orange-400">products</li>
        <li className="pb-5 cursor-pointer font-bold text-lg text-white hover:text-orange-400">About</li>
        </ul>
        
                </div>
</div>

     );
}
 
export default Sidebar;