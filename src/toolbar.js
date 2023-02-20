import img2 from "./images/toggle.png"
const Toolbar = ({openSidebar}) => {
    return ( 
        <img className=" w-10 h-10 mr-10 cursor-pointer"  onClick={openSidebar} src={img2} alt="d"/>

     );
}
 
export default Toolbar;