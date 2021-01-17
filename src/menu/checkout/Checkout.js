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
import { useState } from "react";

library.add(faCheckCircle, faCashRegister);
function Checkout(props) {
  let total = 0;
  props.item.map((i) => (total += i.qty * i.harga));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <TModal
        showing={show}
        content={total}
        close={handleClose}
        type="checkout"
      />
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
              {props.item.map((i) => (
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
                <h3 className="m-0 money">{total}</h3>
              </div>
            </div>
            <div className="d-flex">
              <Button
                variant="success"
                className="mt-auto"
                onClick={handleShow}
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

export default Checkout;
