import ItemListContainer from "../components/Catalogo/ItemListContainer";

function Catalogo(categoryId) {
  return (
    <div className="section">
        <ItemListContainer categoryId = {categoryId}/>
    </div>
  );
}

export default Catalogo;
