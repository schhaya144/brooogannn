import React, { useEffect, useState } from 'react'
import SummaryApi from '../../common/Index';
import imgAbout from '../../assets/EXTRALARGE.jpg'
import { toast } from 'react-toastify';
const About = () => {
  const [data, setData] = useState([]);

  const fetchAboutData = async () => {
     const fetchContactsDetails = await fetch(SummaryApi.aboutImage.url,{
      method : SummaryApi.aboutImage.method,
      credentials : 'include'
     }) 

     const dataResponse = await fetchContactsDetails.json()
     

     if(dataResponse.success){
      setData(dataResponse.data)
     }

     if(dataResponse.error){
      toast.error(dataResponse.message)
     }

     console.log("fetch about", dataResponse)

  };

  useEffect(() => {
   
    fetchAboutData();
  }, []);

  return (
    <div>
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="col-lg-6  pt-lg-0 pt-5 d-flex align-items-center px-4 ">
           
            <div className="join pt-lg-0 pt-5">
              <h2> About <span className="text-primary">Bro</span>gan B<span className="text-primary">oo</span>ts</h2>
              <p>Brogan Boots was built out of frustration to make trade-offs between – clunky and delicate dress boots that fall apart after a few wears, or boots that were incredibly overpriced? And it is when I decided, there has to be another option</p>
              <p>At Brogan Boots we offer ridiculously high quality footwear that are designed, developed and hand crafted in-house by our efficient and highly skilled artisans, drawing inspiration from the world around us and our amazing customers.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-end py-4">
              <img src={data.image ? data.image : imgAbout} alt="" className="img-club" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
