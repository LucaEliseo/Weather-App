import React from "react";

import {

  MDBBtn
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const Header = () => {
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place);
  const meteoData = useSelector((state) => state.meteoData);
  const lat = useSelector((state) => state.lat);
  const lon = useSelector((state) => state.lon);
  console.log("selector", place);

  const api = "a58608a54647062d097718fd7013334b";
  const baseLinkFetch = `http://api.openweathermap.org/geo/1.0/direct?limit=1&appid=${api}&q=`;

  const locationFetcher = async () => {
    try {
      const resource = await fetch(baseLinkFetch + place);
      console.log(resource);
      if (resource.ok) {
        const data = await resource.json();
        dispatch({ type: "ADD_LAT", payload: data[0].lat });
        dispatch({ type: "ADD_LON", payload: data[0].lon });
        console.log("data", data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resultFetch = async () => {
    try {
      const resource2 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a9466d5a6fc0162c8f3e9dbc128e05d9&units=metric`
      );
      if (resource2.ok) {
        const data2 = await resource2.json();
        console.log("data2", data2);
        dispatch({ type: "WEATHER", payload: data2 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    locationFetcher();
    resultFetch();
  }, [place]);

  return (
    <>
      {meteoData && (
        <header>
        <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>WeatherLine</h1>
              <h4 className='mb-3'>Weather forecasts, nowcasts and history in a fast and elegant way</h4>
              <MDBBtn tag="a" outline size="lg text-light">
               {place}
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
      )}
    </>
  );
};

export default Header;
