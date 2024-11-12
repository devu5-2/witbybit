// import React from 'react'
import './Displatcat.css'


import React from 'react';

const Displaycat = ({ categories }) => {
  return (
    <div className="category-cards" >
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <div className="column">
          <div key={index} className="category-card" >
            <h1>{category}</h1>
          </div>
          </div>
        ))
      ) : (
        <p>No categories added yet.</p>
      )}
    </div>
  );
};

// const styles = {
//   card: {
//     border: '1px solid #ddd',
//     padding: '20px',
//     margin: '10px 0',
//     textAlign: 'center',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
// };

export default Displaycat;
