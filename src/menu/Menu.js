import MenuCard from "./MenuCard";
function Menu(props) {
  return (
    <div className="row row-cols-lg-5 row-cols-md-4 my-2">
      {props.menu.map(item => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Menu;
