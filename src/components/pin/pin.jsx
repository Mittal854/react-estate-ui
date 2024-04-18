import { Marker, Popup } from 'react-leaflet';
import './pin.css';

function Pin({item}){
    return(
        <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    )
}

export default Pin;