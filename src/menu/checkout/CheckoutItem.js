import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Button } from "react-bootstrap";
import TModal from "../modal/TModal";
import React from "react";

library.add(faPencilAlt);
class CheckoutItem extends React.Component {
  constructor(props) {
    super(props);
    this.modalElement = React.createRef();
    this.item = props.data;
  }

  modalShow = () => {
    this.modalElement.current.handleShowing();
  };

  render() {
    return (
      <>
        <TModal ref={this.modalElement} content={this.item} type="edit" />
        <tr>
          <td className="text-center">
            <Button variant="warning" onClick={this.modalShow}>
              <FontAwesomeIcon icon="pencil-alt" />
            </Button>
          </td>
          <td>{this.item.nama}</td>
          <td className="money">{this.item.harga}</td>
          <td className="text-center">{this.item.qty}</td>
        </tr>
      </>
    );
  }
}

export default CheckoutItem;
