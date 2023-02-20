import img1 from "./images/footer.jpg"
const Footer = () => {
    return (  
        <div className="colora w-full">
         <div className="flex justify-center"><img className="pt-20" src={img1} alt="footer"/>
         </div> 
<div>
    <form>
        <input className="w-96 text-white py-5 font-bold text-lg px-5 colora  bd" type="email" placeholder="Enter your e-mail"/>
    </form>
</div>
<div className="w-96 text-white m-auto">
<ul className="flex justify-between">
    <li className=" cursor-pointer font-semibold text-base text-white hover:text-orange-400">Customer Service</li>
    <li className=" cursor-pointer font-semibold text-base text-white hover:text-orange-400">Todays deals </li>
    <li className=" cursor-pointer font-semibold text-base text-white hover:text-orange-400">Home</li>
    <li className=" cursor-pointer font-semibold text-base text-white hover:text-orange-400">Services</li>
</ul>
<p className="font-bold pt-5 text-white">phone number   08062081130</p>
</div>
<footer>© 2023 All Rights Reserved. Design by Free html Templates</footer>
        </div>
    );
}
 
export default Footer;