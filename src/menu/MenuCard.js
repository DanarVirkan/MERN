import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import { Button } from "react-bootstrap";
import TModal from "./TModal";

library.add(faShoppingCart);
function MenuCard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <TModal showing={show} close={handleClose} title={props.nama} harga={props.harga} state="0"/>
      <div className="col p-1 mb-2">
        <div className="card p-0 border-primary">
          <img
            className="card-img-top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_176f58881ad%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_176f58881ad%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.41666603088379%22%20y%3D%22104.55999994277954%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
          <div className="card-body d-flex flex-column">
            <h4 className="card-title">{props.nama}</h4>
          </div>
          <Button
            variant="primary"
            style={{
              borderRadius: 0,
              borderBottomRightRadius: 2 + "px",
              borderBottomLeftRadius: 2 + "px",
            }}
            onClick={handleShow}
          >
            <FontAwesomeIcon icon="shopping-cart" className="mr-2"/>
            {props.harga}
          </Button>
        </div>
      </div>
    </>
  );
}

export default MenuCard;
