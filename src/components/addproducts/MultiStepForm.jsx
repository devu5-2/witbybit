import React, { useState } from 'react';
import './MultiStepForm.css'; // Assuming this file contains the CSS
import { useNavigate } from "react-router-dom";
import { RiImageAddFill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { RiDeleteBin5Fill } from "react-icons/ri";
const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const navigate = useNavigate();

  {/* Step 2: Variants */ }
  const [data, setData] = useState([{ fname: "", lname: "" }]);

  const handleClick = () => {
      setData([...data, { fname: "", lname: "" }]);
  };

  const handleChange = (e, i) => {
      const { name, value } = e.target;
      const updatedData = [...data];
      updatedData[i][name] = value;
      setData(updatedData);
  };

  const handleDelete = (i) => {
      const updatedData = data.filter((_, index) => index !== i);
      setData(updatedData);
  };
  {/* Step 2: Variants */ }

  return (
    <div className="containerform">
      {/* Step 1: Description */}
      <form className={`form ${step === 1 ? 'active' : ''}`} id="form1">
        <h3 className='h3form'>Description</h3>
        <p className='titleinfo'>Product Name *</p>
        <input className='forminp' type="text" placeholder="Product Name" required />
        <p className='titleinfo'>Category *</p>
        <input className='forminp' type="text" placeholder="Category" required />
        <p className='titleinfo'>Brand *</p>
        <input className='forminp' type="text" placeholder="Brand" required />
        <label for="file-upload" class="custom-file-upload">
          <RiImageAddFill style={{ color: 'white', background: '#23c1d6', borderRadius: '5px', fontSize: '20px' }} />Upload Image
        </label>
        <input id="file-upload" type="file" />
        <div className="btn-box">
          <button className='formbtn' type="button" onClick={() => navigate("/")}>Cancel</button>
          <button className='formbtn' type="button" onClick={nextStep}>Next</button>
        </div>

      </form>

      {/* Step 2: Variants */}
      <form className={`form ${step === 2 ? 'active' : ''}`} id="form2">
        <h3 className='h3form'>Variants</h3>
        <div className='formtitle2'>
        <p>Options *</p>
        <p>Values *</p>
        </div>
        
        {data.map((val, i) => (
                <div className="inpfield" key={i}>
                    <input
                        name="fname"
                        className='inputtext'
                        value={val.fname}
                        onChange={(e) => handleChange(e, i)}
                    />
                    <input
                        name="lname"
                        className='inputtext'
                        value={val.lname}
                        onChange={(e) => handleChange(e, i)}
                    />
                    <button className='delete2f' onClick={() => handleDelete(i)}><RiDeleteBin5Fill style={{ border: "None", background: "transparent", color:"red" }} /></button>
                </div>
            ))}
            
        <div>
          <button type="button" class="custom-file-upload" style={{ border: "None", backgroundColor: "#fff" }} onClick={handleClick}><GoPlus />
            Add Option</button>
            
        </div>
        {/* <input className='forminp' type="text" placeholder="Medium" />
        <input className='forminp' type="text" placeholder="GitHub" />
        <input className='forminp' type="text" placeholder="LinkedIn" /> */}
        <div className="btn-box">
          <button className='formbtn' type="button" onClick={prevStep}>Back</button>
          <button className='formbtn' type="button" onClick={nextStep}>Next</button>
        </div>
      </form>

      {/* Step 3: Combinations */}
      <form className={`form ${step === 3 ? 'active' : ''}`} id="form2">
        <h3 className='h3form'>Combinations</h3>
        <input className='forminp' type="text" placeholder="Medium" />
        <input className='forminp' type="text" placeholder="GitHub" />
        <input className='forminp' type="text" placeholder="LinkedIn" />
        <div className="btn-box">
          <button className='formbtn' type="button" onClick={prevStep}>Back</button>
          <button className='formbtn' type="button" onClick={nextStep}>Next</button>
        </div>
      </form>

      {/* Step4 : price information */}
      <form className={`form ${step === 4 ? 'active' : ''}`} id="form3">
        <h3 className='h3form'>Price Info</h3>
        <p>Price *</p>
        <input className='forminp' type="number" placeholder="Product Price" />
        <p>Discount</p>
        <input className='forminp' type="number" placeholder="Discount on the product" />
        
        <div className="btn-box">
          <button className='formbtn' type="button" onClick={prevStep}>Back</button>
          <button className='formbtn' type="submit" onClick={() => navigate("/")}>Submit</button>
        </div>
      </form>

      {/* Step Indicator */}
      <div className="step-row">
        <div id="progress" style={{ width: `${step * 85}px` }}></div>
        <div className="step-col"><small>Descriptions</small></div>
        <div className="step-col"><small>Varients</small></div>
        <div className="step-col"><small>Combinations</small></div>
        <div className="step-col"><small>Price info</small></div>

      </div>
    </div>
  );
};

export default MultiStepForm;
