import React from "react";
import GoogleMapReact from 'google-map-react';
// import Marker from "google-maps-react-markers"
import MyMarker from "./MyMaker";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
        // return distance between the marker and mouse pointer
        return Math.sqrt(
            (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y) * 2
        );
    }
};
const points = [
    { id: 1, title: "Round Pond", lat: 14.72888204728614, lng: -0.184 },
    { id: 2, title: "The Long Water", lat: 14.72888204728614, lng: -17.456697654845087 },
    { id: 3, title: "The Serpentine", lat: 14.72888204728614, lng: -17.456697654845087 }
];
function MapComp() {


    const zoom = 16;
    return (
        // Important! Always set the container height explicitly
        <div className="mx-12 px-8 gap-2 rounded-2xl" style={{ height: '90vh', width: '100%' }} >
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{ lat: 14.72888204728614, lng: -17.456697654845087 }}
                defaultZoom={zoom}
                distanceToMouse={distanceToMouse}

            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                />
                {points.map(({ lat, lng, id, title }) => {
                    return (
                        <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
                    );
                })}

            </GoogleMapReact>
        </div>
    )
}
export default MapComp;