import React from 'react'
import SectionTitle from '../components/SectionTitle';
import featuredImg from "../assets/home/featured.jpg";
import "./Featured.css";
import { Link } from 'react-router-dom';


const Featured = () => {
  return (
    <div className='featured-item bg-fixed text-white pt-8 my-20 '>


<SectionTitle title="Featured item" subtitle="Check it out" />
<div className='md:flex justify-center items-center bg-slate-600/60 z-10  pb-20  pt-12 px-36' >
   <div  >

    <img src={featuredImg} alt="" />

   </div>
     <div className='md:ml-10'>
            
      <p> Aug 20, 2028   </p>
      <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus cupiditate ratione voluptatibus facilis consequuntur voluptate labore? Iusto laudantium odit praesentium laborum accusantium aliquam molestiae a obcaecati ad provident quo quibusdam fugit quidem nemo tenetur asperiores, vel quae sapiente dolorem dolore.      </p>

      <Link to="/order"    >
      <button className="btn btn-outline border-0  border-b-4 mt-2" > Order now      </button>
       </Link>

     </div>

</div>


    </div>
  )
}

export default Featured;