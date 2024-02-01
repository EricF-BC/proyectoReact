import { BsFillCartCheckFill } from "react-icons/bs";
import {useState} from "react";

const CartWidget = ({}) => {

const [count, setCount] = useState(3);
  return (
    <div>
      <div className="navbar-item ">
        <div className="buttons">
          <span style={{ position: "absolute", top: "0", right: "0", fontSize: "1.2em", color: "white" }}>
            {count}
          </span>
          <BsFillCartCheckFill  size="2em" color="white" />
        </div>
      </div>
    </div>
  );
};
export default CartWidget;
