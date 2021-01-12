import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./CheckoutItem";
import CheckoutItem from "./CheckoutItem";
import { Button } from "react-bootstrap";

library.add(faCheckCircle);
function Checkout(props) {
  let total = 0;
  props.item.map((i) => (total += i.qty * i.harga));
  return (
    <div
      className="card border-warning position-sticky mt-2"
      style={{ height: 90 + "vh", top: 60 }}
    >
      <div className="card-header bg-warning">
        <h5 className="m-0">List Pembelian</h5>
      </div>
      <div className="card-body d-flex flex-column">
        <table className="table">
          <thead className="bg-dark text-white">
            <tr>
              <td>Edit</td>
              <td>Item</td>
              <td>Harga</td>
              <td>Qty</td>
              <td>Jumlah</td>
            </tr>
          </thead>
          <tbody>
            {props.item.map((i) => (
              <CheckoutItem key={i.id} data={i} />
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-between mt-auto">
          <div>
            <p className="mb-0">Total</p>
            <h3 className="m-0">Rp. {total}</h3>
          </div>
          <Button variant="success">
            <FontAwesomeIcon icon="check-circle" className="mr-2"/>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
