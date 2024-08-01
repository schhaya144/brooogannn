import React, { useState } from 'react';
import SummaryApi from '../../../common/Index';
import UploadImage from "../../../helper/UploadImage";
import { toast } from 'react-toastify';

const UploadAboutImage = ({ fetchData }) => {
  const [data, setData] = useState({
    aboutImg: ""
  });


  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await UploadImage(file);

    setData((preve) => {
      return {
        ...preve,
        aboutImg: uploadImageCloudinary.url,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const response = await fetch(SummaryApi.updateAboutDetails.url, {
      method: SummaryApi.updateAboutDetails.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (responseData.success) {
      toast.success(responseData?.message);
      fetchData();
    } else {
      toast.error(responseData?.message);
    }
    console.log("responseData",responseData)
  };

  return (
    <div className="admin-about">
      <h2>Update About Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadAboutImage;
