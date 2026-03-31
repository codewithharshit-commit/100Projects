import Map, { Marker } from "react-map-gl/mapbox";
import { useEffect, useState } from "react";
import "./index.css";
import { FlyToInterpolator } from "@deck.gl/core";
// import "mapbox-gl/dist/mapbox-gl.css";

const App = () => {
  const [viewState, setState] = useState({
    latitude: 28.61,
    longitude: 77.23,
    zoom: 15,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setState({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          zoom: 15,
          transitionDuration: 2000,
          transitionInterpolator: new FlyToInterpolator(),
        });
      },
      () => {
        setState({
          latitude: 28.61,
          longitude: 77.23,
          zoom: 15,
        });
      },
    );
  }, []);

  if (!viewState) return <div>Loading map...</div>;
  return (
    <>
      <div className="w-screen h-screen">
        <Map
          {...viewState}
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onMove={(e) => {
            if (e?.viewState) {
              setState(e.viewState);
            }
          }}
        >
          <Marker latitude={viewState.latitude} longitude={viewState.longitude}>
            ❌
          </Marker>
        </Map>
      </div>
    </>
  );
};

export default App;
