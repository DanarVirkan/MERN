import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./CheckoutItem";
import CheckoutItem from "./CheckoutItem";
import { Button } from "react-bootstrap";
import React from "react";
import { connect } from "react-redux";
import { toggleShow } from "../../redux/modalRedux";
import { currency, MODAL_CHECKOUT } from "../../constant";

library.add(faCheckCircle, faCashRegister);
class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.total = 0;
    this.props.item.map((i) => {
      this.total += i.qty * i.harga;
    });
    return (
      <>
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
                {this.props.item.map((i, index) => (
                  <CheckoutItem key={i.id} data={i} index={index} />
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
                  <h3 className="m-0">{currency(this.total)}</h3>
                </div>
              </div>
              <div className="d-flex">
                <Button
                  variant="success"
                  className="mt-auto"
                  onClick={() =>
                    this.props.show({
                      id: 1,
                      nama: "",
                      harga: this.total,
                    })
                  }
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

const mapStateToProps = (state) => {
  return {
    item: state.checkout.item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    show: (item) => dispatch(toggleShow(item, MODAL_CHECKOUT)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
