
import img2 from "./images/dress.png"
import img1 from "./images/tshirt.jpeg"
import img3 from "./images/women.png"

const Home = () => {



    return ( 
        <>
<div className="w-auto m-auto">
     <div>
        <h1 className="large">Man & Woman Fashion</h1>
     </div>
     <br/><br/>
     <div className="  flex justify-center w-auto">
     <div className="nne ml-3.5"> 

     <div className="w-80 bg-white shadow-2xl cursor-pointer htransition ease-in-out delay-200  hover:-translate-y-1 hover:scale-110  duration-300">

   <h1 className="font-bold text-lg pt-5 ">Man T-Shirt</h1><br/>
  <p className="text-orange-400 font-semibold text-base">Price <b className="text-black"> $ 30</b></p>
  <img className="m-auto"src={img1} alt="hdhd" />
  <div className="flex justify-between mt-5">
<button className="font-bold text-lg text-orange-400 hover:text-black ml-5 mb-5">Buy now</button>
<button className="font-bold text-lg hover:text-orange-400 mr-10 mb-5">see more</button>
</div>
</div>

<div className="w-80 bg-white shadow-2xl cursor-pointer htransition ease-in-out delay-200  hover:-translate-y-1 hover:scale-110  duration-300">
<h1 className="font-bold text-lg pt-5">Man Shirt</h1><br/>
<p className="text-orange-400 mb-5 font-semibold text-base" >Price <b className="text-black"> $ 30</b></p>
<img className="m-auto "src={img2} alt="hdhd" />
<div className="flex justify-between mt-2">
<button className="font-bold text-lg  text-orange-400 hover:text-black ml-5 mb-5">Buy now</button>
<button className="font-bold text-lg hover:text-orange-400 mr-10 mb-5">see more</button>
</div>

</div>

<div className="w-80 bg-white shadow-2xl cursor-pointer transition ease-in-out delay-200  hover:-translate-y-1 hover:scale-110  duration-300">
<h1 className="font-bold text-lg pt-5">women Skirt</h1><br/>
<p className="text-orange-400 mb-5 font-semibold text-base">Price <b className="text-black "> $ 30</b></p>
<img className="m-auto"src={img3} alt="hdhd" />
<div className="flex justify-between mt-4">
<button className="font-bold text-lg  text-orange-400 hover:text-black ml-5 mb-5">Buy now</button>
<button className="font-bold text-lg hover:text-orange-400 mr-10 mb-5">see more</button>
</div>
</div>

 </div>  
     </div>
</div>

        </>
     );
}
 
export default Home;