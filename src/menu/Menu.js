import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { MODAL_LOADING } from "../constant";
import { toggleHide, toggleShow } from "../redux/modalRedux";
import MenuCard from "./MenuCard";
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.props.show();
    axios
      .get("https://my-json-server.typicode.com/DanarVirkan/MERN/menu")
      .then((res) => {
        this.setState({ data: res.data });
        this.props.hide();
      });
  }

  render() {
    return (
      <div className="row row-cols-xl-5 row-cols-md-4 row-cols-2 my-2">
        {this.state.data.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    show: () => dispatch(toggleShow(null, MODAL_LOADING, null)),
    hide: () => dispatch(toggleHide()),
  };
};

export default connect(null, mapDispatchToProps)(Menu);
