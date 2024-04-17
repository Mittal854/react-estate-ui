import { listData } from "../../Library/dummyData";
import "./listPage.css";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";

function ListPage() {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
       MAP
      </div>
    </div>
  );
}

export default ListPage;
