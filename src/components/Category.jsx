import React, { useState } from 'react'
import Displaycat from './Displaycat';
// start
const Category = ({onClose, addCategory}) => {
    const [categoryName, setCategoryName] = useState(''); // For holding the current category name
  // const [categories, setCategories] = useState([]);     // For holding the list of categories

  // Handle form submission to add a new category
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload
    if (categoryName.trim() !== '') {
      addCategory(categoryName);  // Add new category to the array
      setCategoryName('');  // Clear input after adding
      // onClose();
    }
  };
  return (
    <div className='catbox'>
        <div className='whitebox'>
            <h2>Add Category </h2>
            {/* <p></p> */}
            <form onSubmit={handleSubmit }>
            <label htmlFor="categoryInput">Category Name *</label>
                <input className='catinpt' value={categoryName} type="text" onChange={(e) => setCategoryName(e.target.value)} id="categoryInput" placeholder="Enter Your Category" required/>
                <div className='btncnf'>
                <button onClick={onClose} className='cancelbtn'>Cancel</button>
                <button className='savebtn' type="submit">Save</button>
                </div>


            </form>
      {/* Card Display
      <div className="category-cards">
          {categories.map((category, index) => (
            <div key={index} className="category-card" style={styles.card}>
              <h1>{category}</h1>
              {console.log(category)}
              
            </div>
          ))}
        </div> */}
        </div>
        </div>
  )
}
const styles = {
    card: {
      border: '1px solid #ddd',
      padding: '20px',
      margin: '10px 0',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }
  };
export default Category