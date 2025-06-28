import { Header } from "./components";
import maplibregl, { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";

const App = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) {
      return;
    }

    const map = new maplibregl.Map({
      container: mapContainer.current, // container id
      style: "https://demotiles.maplibre.org/style.json", // style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: 1, // starting zoom
    });

    return () => map.remove();
  }, []);

  return (
    <div>
      <Header />
      <div className=" w-[20rem] h-[20rem]">
        <div ref={mapContainer} className=" h-full w-full"></div>
      </div>
    </div>
  );
};

export default App;
