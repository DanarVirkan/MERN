import logo from "./logo.svg";
import Menu from "./menu/Menu";
import Checkout from "./menu/checkout/Checkout";
import list from "./menu/MenuJSON";
import listItem from "./menu/checkout/DataDummy";

function App() {
  return (
    <div>
      <nav className="navbar bg-dark navbar-dark">
        <img src={logo} style={{ width: 50 + "px" }} />
        <a className="navbar-brand" href="#">
          Tajuzza Cafe
        </a>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <h3 className="text-center my-3">Minuman</h3>
            <Menu menu={list} />
            <h3 className="text-center my-3">Minuman</h3>
            <Menu menu={list} />
          </div>
          <div className="col-lg-4 col-md-12">
            <Checkout item={listItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
