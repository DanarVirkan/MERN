import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Button } from "react-bootstrap";
import TModal from "../modal/TModal";
import { useState } from "react";

library.add(faPencilAlt);
function CheckoutItem(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const item = props.data;
  return (
    <>
      <TModal showing={show} close={handleClose} content={item} type="edit" />
      <tr>
        <td className="text-center">
          <Button variant="warning" onClick={handleShow}>
            <FontAwesomeIcon icon="pencil-alt" />
          </Button>
        </td>
        <td>{item.nama}</td>
        <td className="money">{item.harga}</td>
        <td className="text-center">{item.qty}</td>
      </tr>
    </>
  );
}

export default CheckoutItem;
