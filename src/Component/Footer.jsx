import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { useDispatch } from "react-redux";


function Footer() {
    const Dispatch = useDispatch();
    return (
      <>
    <MDBFooter className='text-center mt-5 p-4' color='white' bgColor='light'>
      <MDBContainer className='p-4'>
     

       
        <section className='mb-4'>
          <p className='text-black mb-5 mt-3'>
          THE WEATHER IN THE MAIN ITALIAN TOWNS
          </p>
        </section>

 
        <section className='text-center' color='dark'>
          <MDBRow className='d-flex justyfy-content-center'>
            <MDBCol lg='4' md='4' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-black'>Nord</h5>

              <ul className='list-unstyled mb-0 text'>
                <li>
                  <a href='#!' className='text-black text-center'
                    onClick={() => {
                        Dispatch({ type: "PLACE", payload: "Milan" });
                      }}>
                    Milan
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-black'
                    onClick={() => {
                        Dispatch({ type: "PLACE", payload: "Turin" });
                      }}>
                    Turin
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-black'
                    onClick={() => {
                        Dispatch({ type: "PLACE", payload: "Venice" });
                      }}>
                    Venice
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-black'
                    onClick={() => {
                        Dispatch({ type: "PLACE", payload: "Genoa" });
                      }}>
                  Genoa
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg='4' md='4' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-black'>Center</h5>

              <ul className='list-unstyled mb-0 text'>
                <li>
                  <a href='#!' className='text-black text-center'
                 onClick={() => {
                    Dispatch({ type: "PLACE", payload: "Florence" });
                  }}>
                    Florence
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-black'
                    onClick={() => {
                        Dispatch({ type: "PLACE", payload: "Campobasso" });
                      }}>
                   Campobasso
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-black'
                    onClick={() => {
                        Dispatch({ type: "PLACE", payload: "Rome" });
                      }}>
                    Rome
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-black'
                    onClick={() => {
                        Dispatch({ type: "PLACE", payload: "Bologne" });
                      }}>
                  
                   Bologne
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg='4' md='4' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase text-black'>Sud</h5>

              <ul className='list-unstyled mb-0 text'>
                <li>
                  <a href='#!' className='text-black text-center'
                    onClick={() => {
                        Dispatch({ type: "PLACE", payload: "Naples" });
                      }}>
                    Naples
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-black'
                    onClick={() => {
                        Dispatch({ type: "PLACE", payload: "Bari" });
                      }}>
                    Bari
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-black'
                    onClick={() => {
                        Dispatch({ type: "PLACE", payload: "Palermo" });
                      }}>
                    Palermo
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-black'
                    onClick={() => {
                        Dispatch({ type: "PLACE", payload: "Olbia" });
                      }}>
                   Olbia
                  </a>
                </li>
              </ul>
            </MDBCol>
          

          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3 text-black bg-color-ligth' >
        © 2023 Copyright  : 
        <a  className='text-black' href='https://openweathermap.org/api ' > OpenWeatherMap  </a>
      </div>
    </MDBFooter>
      </>
    );
  }
  
  export default Footer;