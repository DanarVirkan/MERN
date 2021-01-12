import { event } from "jquery";
import { Button, Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const state = [
  { variant: "primary", text: "Beli" },
  { variant: "warning", text: "Edit" },
];
function TModal(props) {
  let total = 0;
  const setTotal = (jumlah) => {
    total = props.harga * jumlah;
  };
  return (
    <>
      <Modal show={props.showing} onHide={props.close}>
        <ModalHeader closeButton>
          <h5 className="modal-title">{props.title}</h5>
        </ModalHeader>
        <ModalBody className="d-flex flex-column">
          <input
            type="number"
            className="form-control col-5 my-4 mx-auto"
            onChange={setTotal(1)}
            min="1"
            max="9"
            value="1" // DEPENDS ON EDIT OR NOT
            required
          />
          <h4>Total : {total}</h4>
        </ModalBody>
        <Button
          variant={state[props.state].variant}
          size="lg"
          style={{
            borderRadius: 0,
            borderBottomLeftRadius: 2 + "px",
            borderBottomRightRadius: 2 + "px",
          }}
        >
          {state[props.state].text}
        </Button>
      </Modal>
    </>
  );
}
export default TModal;
