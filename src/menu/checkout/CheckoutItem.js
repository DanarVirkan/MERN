import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Button } from "react-bootstrap";
import TModal from "../TModal";
import { useState } from "react";

library.add(faPencilAlt);
function CheckoutItem(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <TModal showing={show} close={handleClose} title={props.data.nama} harga={props.data.harga} state="1" />
      <tr>
        <td>
          <Button variant="warning" onClick={handleShow}>
            <FontAwesomeIcon icon="pencil-alt" />
          </Button>
        </td>
        <td>{props.data.nama}</td>
        <td>{props.data.harga}</td>
        <td>{props.data.qty}</td>
        <td>{props.data.harga * props.data.qty}</td>
      </tr>
    </>
  );
}

export default CheckoutItem;
