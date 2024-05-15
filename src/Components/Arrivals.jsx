
import { useContext } from 'react';
import Arrivalsitems from './Arrivalsitems'
import axios from 'axios';
import { apidata } from './Context';

const Arrivals = () => {

  let data = useContext(apidata)
  return (
    <section>
        <div className="container mx-auto">
            <h3 className="font-sans font-bold text-[36px] text-[#262626] pb-[30px]">New Arrivals</h3>
            <div className="">
                <div className="flex justify-between flex-wrap">
                  {data.map((items)=>(
                     <Arrivalsitems items={items}/>
                  ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Arrivals