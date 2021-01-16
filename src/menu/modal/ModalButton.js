import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faShoppingCart,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faPencilAlt, faShoppingCart, faTrashAlt, faCheck, faTimes);

const buttonType = ["buy", "edit", "delete", "ok", "cancel"];
const button = [
  { variant: "primary", text: "Buy", icon: "shopping-cart", prefix: "fas" },
  { variant: "warning", text: "Edit", icon: "pencil-alt", prefix: "fas" },
  { variant: "danger", text: "Delete", icon: "trash-alt", prefix: "far" },
  { variant: "success", text: "OK", icon: "check", prefix: "fas" },
  { variant: "danger", text: "Cancel", icon: "times", prefix: "fas" },
];

class ModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.indexButton = buttonType.indexOf(props.type);
    this.position = props.position;
    this.radius = 4;
  }

  render() {
    return (
      <div className="w-100">
        <Button
          variant={button[this.indexButton].variant}
          block="true"
          size="lg"
          style={{
            borderRadius: 0,
            borderBottomLeftRadius: this.position == 0 ? this.radius : 0 + "px",
            borderBottomRightRadius:
              this.position == 0 ? 0 : this.radius + "px",
          }}
        >
          <FontAwesomeIcon
            icon={[
              button[this.indexButton].prefix,
              button[this.indexButton].icon,
            ]}
            className="mr-2"
          />
          {button[this.indexButton].text}
        </Button>
      </div>
    );
  }
}

export default ModalButton;
