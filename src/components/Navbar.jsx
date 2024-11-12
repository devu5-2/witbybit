import { useState } from "react";
import { GiCartwheel } from "react-icons/gi";
import Category from "./Category";
import Displaycat from "./Displaycat"
import {useNavigate} from "react-router-dom";
export const Navbar = () => {
  const [showModel, setshowModel] = useState(false);
  const [categories, setCategories] = useState([]);

  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
    setshowModel(false);  // Close the modal after adding
  };
  const navigate= useNavigate();
  return (
    <aside>
      <div className="container">
        <div className="grid-navbar">
          <div className="logo">
            <GiCartwheel style={{ color: 'yellow', fontSize: '30px' }} />
            <h3>
              LEMON <br />
              INC.
            </h3>
          </div>
          <hr className="horizontal-hr" />
          <div className="item">
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Stores</a>
                </li>
                <li>
                  <a href="/" className="activey">Products</a>
                </li>
                <li>
                  <a href="#" >Catalogue</a>
                </li>
                <li>
                  <a href="#">Promotions</a>
                </li>
                <li>
                  <a href="#">Reports</a>
                </li>
                <li>
                  <a href="#">Docs</a>
                </li>
                <li>
                  <a href="#" target="_blank">Settings</a>
                </li>
              </ul>
            </nav>
          </div>
          <hr className="horizontal-hr2" />
          <div className="user">
            <p>Andy Samberg</p>
            <p style={{ color: 'grey' }}>andy.samberg@gmail.com</p>
          </div>
        </div>
        <hr style={{ width: '1px', height: '1319px', margin: '0px 0px 0px 310px' }} />
        {/* HERO  */}
        <div className="outernavi">
        <div className="navi">
            <div><h1>Products</h1></div>
            <div className="btn">
            <button onClick={()=>setshowModel(true)}>Add Category</button>
            {showModel && <Category onClose={()=>setshowModel(false)} addCategory={addCategory}/>}

            <button onClick={()=>navigate("/addproduct")}>Add Product</button>
            </div>
            
        </div>
        
        <Displaycat categories={categories}/>
        
        </div>
        

      </div>
    </aside>
  );
};
