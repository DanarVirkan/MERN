import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./CheckoutItem";
import CheckoutItem from "./CheckoutItem";
import { Button } from "react-bootstrap";
import TModal from "../modal/TModal";
import React from "react";

library.add(faCheckCircle, faCashRegister);
class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.modalElement = React.createRef();
    this.total = 0;
    this.props.item.map((i) => (this.total += i.qty * i.harga));
  }

  modalShow = () => {
    this.modalElement.current.handleShowing();
  };

  render() {
    return (
      <>
        <TModal ref={this.modalElement} content={this.total} type="checkout" />
        <div
          className="card border-warning position-sticky my-2 checkout-height"
          style={{ top: 90 }}
        >
          <div className="card-header bg-warning">
            <h5 className="m-0">List Pembelian</h5>
          </div>
          <div className="card-body d-flex flex-column">
            <table className="table">
              <thead className="bg-dark text-white">
                <tr>
                  <td className="text-center">Edit</td>
                  <td>Item</td>
                  <td>Harga</td>
                  <td className="text-center">Qty</td>
                </tr>
              </thead>
              <tbody>
                {this.props.item.map((i) => (
                  <CheckoutItem key={i.id} data={i} />
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-between mt-auto">
              <div className="d-flex">
                <h2 className="my-auto mr-3">
                  <FontAwesomeIcon icon="cash-register" size="lg" />
                </h2>
                <div>
                  <p className="mb-0">Total</p>
                  <h3 className="m-0 money">{this.total}</h3>
                </div>
              </div>
              <div className="d-flex">
                <Button
                  variant="success"
                  className="mt-auto"
                  onClick={this.modalShow}
                >
                  <FontAwesomeIcon icon="check-circle" className="mr-2" />
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Checkout;
