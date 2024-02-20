import './Nav.css'
import { FiHeart } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";
const Nav = () => {
  return (
    <Nav>
      <div>
<input type="text"
className="search-input"
placeholder="Enter your search shoes"
/>
</div>
<div className="profile-container">
  <a href="google.com">
<FiHeart className="nav-icons"/>
  </a>
  <a href='google.com'>
    <CiShoppingCart className='nav-icons' /> 
  </a>
  <a href='google.com'>
    <AiOutlineUserAdd className='nav-icons'/>
  </a>
</div>
    </Nav>
  )
}

export default Nav