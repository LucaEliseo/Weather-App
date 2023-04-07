import { Card, Row, Col } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ManyDays = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.manyDays);
  const lat = useSelector((state) => state.lat);
  const lon = useSelector((state) => state.lon);

  const api = "a58608a54647062d097718fd7013334b";

  const MeteoFetch = async () => {
    try {
      const resource2 = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?appid=${api}&lat=${lat}&lon=${lon}&units=metric`
      );
      if (resource2.ok) {
        const data2 = await resource2.json();
        dispatch({ type: "METEO", payload: data2 });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    MeteoFetch();
  }, [lat, lon]);

  //   const resultFetcher = asyns

  return (
    <>
      <section className="vh-80 mb-5 mt-5 p-4" style={{ backgroundColor: "white" }}>
        <MDBContainer className="h-80">
          <MDBRow className="justify-content-center align-items-center h-80">
            {weather &&
              weather?.list &&
              weather.list
                .filter((_, i) => i % 6=== 0)
                .map((e, i) => (
                  < MDBCol className="mb-4" md="4" lg="3" xl="3" key={`alfa${i}`}>
                    <MDBCard style={{ color: "#4B515D", borderRadius: "40px" }}>
                      <MDBCardBody className="p-4">
                        <Card.Img
                          variant="top"
                          src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}
                          style={{ width: "100px" }}
                        />
                        <div className="d-flex flex-column text-center mt-3 mb-3">
                          <MDBTypography
                            tag="h6"
                            className="display-7 mt-2 font-weight-bold"
                            style={{ color: "#1C2331" }}
                          >
                            {e.main.temp}  &#176;C
                          </MDBTypography>
                          <span className="small" style={{ color: "#868B94" }}>
                            {e.weather[0].description}
                          </span>
                        </div>

                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                            <div>
                              <MDBIcon
                                fas
                                icon="wind fa-fw"
                                style={{ color: "#868B94" }}
                              />{" "}
                              <span className="ms-1"> {`Wind: ${e.wind.deg}/${e.wind.gust}/${e.wind.speed}`}</span>
                            </div>

                          </div>

                        </div>


                      </MDBCardBody>


                    </MDBCard>
                  </MDBCol>
                ))}

          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default ManyDays;
