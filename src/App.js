import React, { useState, useEffect } from "react";

const App = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  //   const [status, setStatus] = useState([]);

  const [link, setLink] = useState(null);
  // const [link, setLink] = useState([]);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.watchPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          setLink(
            `https://www.google.com/maps/embed/v1/place?key=AIzaSyAQCY4YwtRmH9fFo77HXc4YA-4jANEsMGE&q=${lat},${lng}`
          );
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  // useEffect(() => {
  //   if (!navigator.geolocation) {
  //     setStatus("Geolocation is not supported by your browser");
  //   } else {
  //     setStatus("Locating...");
  //     //   navigator.geolocation.getCurrentPosition(
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
  // }, []);

  // show iframe only if lat and lng are available
  let showMap =
    lat && lng ? (
      <div>
        <h4>Here's your location</h4>
        <iframe
          width="800"
          height="470"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAQCY4YwtRmH9fFo77HXc4YA-4jANEsMGE&q=${lat},${lng}`}
        ></iframe>
      </div>
    ) : null;

  return (
    <div className="App">
      <button onClick={getLocation}>START</button>
      {/* <button>START</button> */}
      <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
      <br></br>

      {/* <iframe
        width="800"
        height="470"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        // src="https://maps.google.com/maps?q=16.3080284,80.4397923&hl=eng&z=14&amp;output=embed"
        // src={`https://maps.google.com/maps?q=${lat},${lng}&hl=eng&z=14&amp;output=embed`}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAQCY4YwtRmH9fFo77HXc4YA-4jANEsMGE&q=${lat},${lng}`}
      ></iframe> */}
      {showMap}
    </div>
  );
};

export default App;
