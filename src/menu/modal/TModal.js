import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import React from "react";
import ModalButton from "./ModalButton";

library.add(faMoneyBillWave);
const modalType = ["buy", "edit", "checkout", "loading"];
const modal = [
  {
    head: true,
    body: "input",
    button: ["buy"],
  },
  {
    head: true,
    body: "input",
    button: ["edit", "delete"],
  },
  {
    head: false,
    body: "message",
    button: ["ok", "cancel"],
  },
  {
    head: false,
    body: "image",
    button: [],
  },
];

class TModal extends React.Component {
  constructor(props) {
    super(props);
    this.indexModal = modalType.indexOf(this.props.type);
    const data = this.props.content;
    const isBeli = this.indexModal == 0 ? true : false;
    const isCheckout = this.index == 2 ? true : false;

    this.state = {
      judul: isCheckout ? null : data.nama,
      harga: isCheckout ? data : data.harga,
      quantity: isBeli ? 1 : data.qty,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  setShow(show) {
    return show ? "d-flex" : "d-none";
  }

  input() {
    return (
      <>
        <input
          type="number"
          className="form-control col-5 my-4 mx-auto"
          onChange={this.handleChange}
          min="1"
          max="9"
          value={this.state.quantity}
          required
        />
        <h4 className="text-center">
          <FontAwesomeIcon icon="money-bill-wave" className="mr-2"/>
          Total : {this.state.quantity * this.state.harga}
        </h4>
      </>
    );
  }

  message() {
    return (
      <>
        <h4 className="mt-5 text-center">Are you sure ?</h4>
        <h5 className="mb-4 text-center">
          <FontAwesomeIcon icon="money-bill-wave" className="mr-2"/>
          Total : {this.props.content}
        </h5>
      </>
    );
  }

  bodySwitch() {
    switch (modal[this.indexModal].body) {
      case "input":
        return this.input();
      case "message":
        return this.message();
    }
  }

  handleChange(event) {
    const value = event.target.value;
    if (value < 1 || value > 9) {
      this.setState({ quantity: this.state.quantity });
    } else {
      this.setState({ quantity: value });
    }
  }

  render() {
    return (
      <Modal show={this.props.showing} onHide={this.props.close}>
        <ModalHeader
          closeButton
          className={this.setShow(modal[this.indexModal].head)}
        >
          <h5 className="modal-title">{this.state.judul}</h5>
        </ModalHeader>
        <ModalBody className="d-flex flex-column">
          {this.bodySwitch()}
        </ModalBody>
        <div className="d-flex">
          {modal[this.indexModal].button.map((i, index) => (
            <ModalButton key={index} position={index} type={i} />
          ))}
        </div>
      </Modal>
    );
  }
}
export default TModal;
