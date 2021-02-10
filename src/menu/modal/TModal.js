import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import React from "react";
import ModalButton from "./ModalButton";
import { add, edit, remove } from "../../redux/checkoutRedux";
import { setQty, toggleHide } from "../../redux/modalRedux";
import { connect } from "react-redux";
import {
  currency,
  MODAL_BUY,
  MODAL_EDIT,
  MODAL_CHECKOUT,
} from "../../constant";

library.add(faMoneyBillWave);
class TModal extends React.Component {
  constructor(props) {
    super(props);

    this.modalType = {};
    this.switcher = (modal) => {
      switch (modal) {
        case MODAL_BUY:
          this.modalType = {
            head: true,
            body: "input",
            button: [
              {
                type: "buy",
                action: this.buy,
              },
            ],
          };
          break;
        case MODAL_EDIT:
          this.modalType = {
            head: true,
            body: "input",
            button: [
              {
                type: "edit",
                action: this.edit,
              },
              {
                type: "delete",
                action: this.remove,
              },
            ],
          };
          break;
        case MODAL_CHECKOUT:
          this.modalType = {
            head: false,
            body: "message",
            button: [
              {
                type: "ok",
                action: this.handleShowing,
              },
              {
                type: "cancel",
                action: this.handleShowing,
              },
            ],
          };
          break;
        default:
          this.modalType = {
            head: true,
            body: "input",
            button: [
              {
                type: "buy",
                action: this.buy,
              },
            ],
          };
          break;
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleShowing = () => {
    this.props.hide();
  };

  buy = () => {
    this.handleShowing();
    this.props.add({
      id: this.props.content.id,
      nama: this.props.content.nama,
      harga: this.props.content.harga,
      qty: this.props.content.qty,
    });
  };

  edit = () => {
    this.handleShowing();
    this.props.edit(this.props.index, this.props.content.qty);
  };

  remove = () => {
    this.handleShowing();
    console.log(this.props.index);
    this.props.remove(this.props.index);
  };

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
          value={this.props.content.qty}
          required
        />
        <h4 className="text-center">
          <FontAwesomeIcon icon="money-bill-wave" className="mr-2" />
          Total : {currency(this.props.content.qty * this.props.content.harga)}
        </h4>
      </>
    );
  }

  message() {
    return (
      <>
        <h4 className="mt-5 text-center">Are you sure ?</h4>
        <h5 className="mb-4 text-center">
          <FontAwesomeIcon icon="money-bill-wave" className="mr-2" />
          Total : {currency(this.props.content.harga)}
        </h5>
      </>
    );
  }

  bodySwitch() {
    switch (this.modalType.body) {
      case "input":
        return this.input();
      case "message":
        return this.message();
    }
  }

  handleChange(event) {
    const value = event.target.value;
    if (value === "0") {
      return false;
    }
    if (value > 9) {
      this.props.setQty(this.props.content.qty);
    } else {
      this.props.setQty(value);
    }
  }

  render() {
    this.switcher(this.props.modalType);
    return (
      <Modal
        show={this.props.showing}
        onHide={this.handleShowing}
        backdrop="static"
      >
        <ModalHeader closeButton className={this.setShow(this.modalType.head)}>
          <h5 className="modal-title">{this.props.content.nama}</h5>
        </ModalHeader>
        <ModalBody className="d-flex flex-column">
          {this.bodySwitch()}
        </ModalBody>
        <div className="d-flex">
          {this.modalType.button.map((i, index) => (
            <ModalButton
              key={index}
              position={index}
              type={i.type}
              modalControl={i.action}
              disabled={this.props.content.qty < 1 && true}
            />
          ))}
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showing: state.modal.showing,
    content: state.modal.content,
    modalType: state.modal.modalType,
    index: state.modal.index,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hide: () => dispatch(toggleHide()),
    add: (item) => dispatch(add(item)),
    remove: (index) => dispatch(remove(index)),
    edit: (index, value) => dispatch(edit(index, value)),
    setQty: (value) => dispatch(setQty(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TModal);
