import MenuCard from "./MenuCard";
function Menu(props) {
  return (
    <div className="row row-cols-xl-5 row-cols-md-4 row-cols-2 my-2">
      {props.menu.map(item => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Menu;
