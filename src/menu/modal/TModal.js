import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import React from "react";
import ModalButton from "./ModalButton";
import { actionBuy, actionEdit, actionDelete } from "../../redux/checkoutRedux";
import { setQty, toggleHide } from "../../redux/modalRedux";
import { connect } from "react-redux";
import spinner from "../../spinner.svg";
import {
  currency,
  MODAL_BUY,
  MODAL_EDIT,
  MODAL_CHECKOUT,
  BODY_INPUT,
  BODY_MESSAGE,
  BODY_LOADING,
  BUTTON_BUY,
  BUTTON_EDIT,
  BUTTON_DELETE,
  BUTTON_OK,
  BUTTON_CANCEL,
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
            body: BODY_INPUT,
            button: [
              {
                type: BUTTON_BUY,
                action: this.buy,
              },
            ],
          };
          break;
        case MODAL_EDIT:
          this.modalType = {
            head: true,
            body: BODY_INPUT,
            button: [
              {
                type: BUTTON_EDIT,
                action: this.edit,
              },
              {
                type: BUTTON_DELETE,
                action: this.delete,
              },
            ],
          };
          break;
        case MODAL_CHECKOUT:
          this.modalType = {
            head: false,
            body: BODY_MESSAGE,
            button: [
              {
                type: BUTTON_OK,
                action: this.handleShowing,
              },
              {
                type: BUTTON_CANCEL,
                action: this.handleShowing,
              },
            ],
          };
          break;
        case BODY_LOADING:
          this.modalType = {
            head: true,
            body: BODY_LOADING,
            button: [],
          };
          break;
        default:
          this.modalType = {
            head: true,
            body: BODY_LOADING,
            button: [],
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
    this.props.buy({
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

  delete = () => {
    this.handleShowing();
    this.props.delete(this.props.index);
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

  loading() {
    return <img src={spinner} className="w-75 mx-auto my-4" />;
  }

  bodySwitch() {
    switch (this.modalType.body) {
      case BODY_INPUT:
        return this.input();
      case BODY_MESSAGE:
        return this.message();
      case BODY_LOADING:
        return this.loading();
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
        size={this.modalType.body == BODY_LOADING && "sm"}
        centered={this.modalType.body == BODY_LOADING && true}
      >
        {this.modalType.body != BODY_LOADING && (
          <ModalHeader
            closeButton
            className={this.setShow(this.modalType.head)}
          >
            <h5 className="modal-title">{this.props.content.nama}</h5>
          </ModalHeader>
        )}
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
    buy: (item) => dispatch(actionBuy(item)),
    delete: (index) => dispatch(actionDelete(index)),
    edit: (index, value) => dispatch(actionEdit(index, value)),
    setQty: (value) => dispatch(setQty(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TModal);
