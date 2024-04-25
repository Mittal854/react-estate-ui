import "./singlePage.css";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/map";
import { singlePostData, userData } from "../../Library/dummyData"

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;


// import React from "react";
// import Slider from "../../components/slider/Slider";
// import Map from "../../components/map/map";
// import { listData, singlePostData, userData } from "../../Library/dummyData";

// function SinglePage({ match }) {
//   const propertyId = parseInt(match.params.id); // Assuming you're using React Router and the property ID is passed as a URL parameter

//   // Find the property with the matching ID from singlePostData
//   const property = singlePostData.find((item) => item.id === propertyId);

//   // Find the user data for the property
//   const user = userData.find((item) => item.id === propertyId);

//   if (!property || !user) {
//     // Handle scenario where property or user data is not found
//     return <div>Data not found</div>;
//   }

//   return (
//     <div className="singlePage">
//       <div className="details">
//         <div className="wrapper">
//           <Slider images={property.images} />
//           <div className="info">
//             <div className="top">
//               <div className="post">
//                 <h1>{property.title}</h1>
//                 <div className="address">
//                   <img src="/pin.png" alt="" />
//                   <span>{property.address}</span>
//                 </div>
//                 <div className="price">$ {property.price}</div>
//               </div>
//               <div className="user">
//                 <img src={user.img} alt="" />
//                 <span>{user.name}</span>
//               </div>
//             </div>
//             <div className="bottom">{property.description}</div>
//           </div>
//         </div>
//       </div>
//       <div className="features">
//         <div className="wrapper">
//           <p className="title">General</p>
//           <div className="listVertical">
//             <div className="feature">
//               <img src="/utility.png" alt="" />
//               <div className="featureText">
//                 <span>Utilities</span>
//                 <p>Renter is responsible</p>
//               </div>
//             </div>
//             <div className="feature">
//               <img src="/pet.png" alt="" />
//               <div className="featureText">
//                 <span>Pet Policy</span>
//                 <p>Pets Allowed</p>
//               </div>
//             </div>
//             <div className="feature">
//               <img src="/fee.png" alt="" />
//               <div className="featureText">
//                 <span>Property Fees</span>
//                 <p>Must have 3x the rent in total household income</p>
//               </div>
//             </div>
//           </div>
//           <p className="title">Sizes</p>
//           <div className="sizes">
//             <div className="size">
//               <img src="/size.png" alt="" />
//               <span>80 sqft</span>
//             </div>
//             <div className="size">
//               <img src="/bed.png" alt="" />
//               <span>2 beds</span>
//             </div>
//             <div className="size">
//               <img src="/bath.png" alt="" />
//               <span>1 bathroom</span>
//             </div>
//           </div>
//           <p className="title">Nearby Places</p>
//           <div className="listHorizontal">
//             <div className="feature">
//               <img src="/school.png" alt="" />
//               <div className="featureText">
//                 <span>School</span>
//                 <p>250m away</p>
//               </div>
//             </div>
//             <div className="feature">
//               <img src="/pet.png" alt="" />
//               <div className="featureText">
//                 <span>Bus Stop</span>
//                 <p>100m away</p>
//               </div>
//             </div>
//             <div className="feature">
//               <img src="/fee.png" alt="" />
//               <div className="featureText">
//                 <span>Restaurant</span>
//                 <p>200m away</p>
//               </div>
//             </div>
//           </div>
//           <p className="title">Location</p>
//           <div className="mapContainer">
//             <Map items={[property]} />
//           </div>
//           <div className="buttons">
//             <button>
//               <img src="/chat.png" alt="" />
//               Send a Message
//             </button>
//             <button>
//               <img src="/save.png" alt="" />
//               Save the Place
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SinglePage;