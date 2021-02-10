import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Button } from "react-bootstrap";
import React from "react";
import { connect } from "react-redux";
import { toggleShow } from "../../redux/modalRedux";
import { currency, MODAL_EDIT } from "../../constant";

library.add(faPencilAlt);
class CheckoutItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <tr>
          <td className="text-center align-middle">
            <Button variant="warning" onClick={() => this.props.show()}>
              <FontAwesomeIcon icon="pencil-alt" />
            </Button>
          </td>
          <td className="align-middle">{this.props.data.nama}</td>
          <td className="align-middle">{currency(this.props.data.harga)}</td>
          <td className="text-center align-middle">{this.props.data.qty}</td>
        </tr>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    show: () => dispatch(toggleShow(ownProps.data, MODAL_EDIT, ownProps.index)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
