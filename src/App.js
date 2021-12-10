import React, { useState, useEffect } from "react";

const App = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  //   const [status, setStatus] = useState([]);

  // const [link, setLink] = useState(null);
  const [link, setLink] = useState([]);

  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     setStatus("Geolocation is not supported by your browser");
  //   } else {
  //     setStatus("Locating...");
  //     navigator.geolocation.watchPosition(
  //       (position) => {
  //         setStatus(null);
  //         setLat(position.coords.latitude);
  //         setLng(position.coords.longitude);
  //         setLink("http://www.google.com/maps/place/" + lat + "," + lng);
  //       },
  //       () => {
  //         setStatus("Unable to retrieve your location");
  //       }
  //     );
  //   }
  // };

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      //   navigator.geolocation.getCurrentPosition(
      navigator.geolocation.watchPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          setLink("http://www.google.com/maps/place/" + lat + "," + lng);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  }, []);

  return (
    <div className="App">
      {/* <button onClick={getLocation}>START</button> */}
      <button>START</button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
      <br></br>
      <iframe
        width="800"
        height="470"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        // src="https://maps.google.com/maps?q=""&hl=es&z=14&amp;output=embed"
        src={link}
      ></iframe>
    </div>
  );
};

export default App;
