import React, { useState } from 'react';
import './App.css';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import googleIcon from './assets/images/Google_icon_2015.png';
import addIcon from './assets/images/add-1-icon.png';
import deleteIcon from './assets/images/delete1-512.png';




let cancelIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
</svg>

let colapsableICon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
</svg>

let colapseIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
</svg>

let count = 0

function App() {
  const dummyData = [
    {
      name: 'local drinks',
      score: 50,
      pricing: 'www.google.com',
      feature: '2 different features',
      customer_case_studies: '2 customer studies'
    },
    {
      name: 'Google cloude',
      score: 90,
      pricing: 'www.google.com',
      feature: '5 different features',
      customer_case_studies: '70 customer studies'
    },
  ]
  const percentage = 80

  let [viewMore, setViewMore] = useState(false);
  let [viewPricing, setViewPricing] = useState(true);
  let [viewFeature, setViewFeature] = useState(true);
  let [viewCustomerCaseStudy, setViewCustomerCaseStudy] = useState(true);

  let [data, setData] = useState([{
    name: 'local drinks',
    score: 50,
    pricing: 'www.google.com',
    feature: '2 different features',
    customer_case_studies: '2 customer studies',
    id: count
  }])

  const addVendor = () => {
    data = [...data, {
      name: `added vendor${count += 1}`,
      score: 50 + count,
      pricing: 'www.google.com',
      feature: '2 different features',
      customer_case_studies: '2 customer studies',
      id: count
    }]
    setData(data)
  }

  const deleteVendor = (id) => {
    data = data.filter((vendor) => {
      return vendor.id !== id
    })
    // console.log(newData)
    setData(data)
  }

  return (
    <div className="wrapper mx-auto my-5">
      <header className="row my-4">
        <div className="col ">
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              ADD CRITERIA
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item cursor_pointer" onClick={() => { setViewPricing(true) }}>Pricing</a></li>
              <li><a className="dropdown-item cursor_pointer" onClick={() => { setViewFeature(true) }}>Features</a></li>
              <li><a className="dropdown-item cursor_pointer" onClick={() => { setViewCustomerCaseStudy(true) }}>Customer Case</a></li>
            </ul>
          </div>
        </div>
      </header>
      <div className="row no-gutters">
        <div className="col p-0">
          <div className="card w-100">
            <ul className="list-group list-group-flush" id="sideBar">
              <li className="list-group-item">
                <div className="custom_card_header d-flex align-items-center justify-content-center">
                  {
                    data.length === 4 ?
                      <small><b>Note</b>: To add more vendors to compare you need first remove one or more vendors. At a time a maximum 4 vendors is allowed to compare</small>
                      :
                      <div className="w-50 text-center cursor_pointer" onClick={addVendor}>
                        <img src={addIcon} alt="..." className="icon_custom_style mb-2" />
                        <div>
                          <a><small className="text-primary">Add new vendor</small></a>
                        </div>
                      </div>
                  }
                </div>
              </li>
              <li className="list-group-item d-flex align-items-center aside_nav_text" style={{ height: "57px" }}>Overall Score</li>
              <li className="list-group-item aside_nav_text"><span className="space_out_icon">{colapsableICon}</span>Product Description</li>
              <li className="list-group-item cursor_pointer aside_nav_text" onClick={() => { setViewMore(!viewMore) }}><span className="space_out_icon">{viewMore ? colapseIcon : colapsableICon}</span>Funding History</li>
              {
                viewMore ?
                  <>
                    <li className="list-group-item"><small className="custom_sub_nav_text">Founded</small></li>
                    <li className="list-group-item"><small className="custom_sub_nav_text">Key investors</small></li>
                    <li className="list-group-item"><small className="custom_sub_nav_text">Founders</small></li>
                  </>
                  :
                  ""
              }
              {viewPricing && (
                <li className="list-group-item aside_nav_text d-flex justify-content-between">
                  <div>
                    <span className="space_out_icon">{colapsableICon}</span>Pricing
                  </div>
                  <span className="remove_btn" onClick={()=>{setViewPricing(false)}}><img src={deleteIcon} alt="..." className="remove_icon_style cursor_pointer"/></span>
                </li>
              )}
              {viewFeature && (
                <li className="list-group-item aside_nav_text d-flex justify-content-between">
                  <div>
                    <span className="space_out_icon">{colapsableICon}</span>Features
                </div>
                  <span className="remove_btn" onClick={()=>{setViewFeature(false)}}><img src={deleteIcon} alt="..." className="remove_icon_style cursor_pointer"/></span>
                </li>
              )}
              {viewCustomerCaseStudy && (
                <li className="list-group-item aside_nav_text d-flex justify-content-between">
                  <div>
                    <span className="space_out_icon">{colapsableICon}</span>Customer Case Studies
                </div>
                  <span className="remove_btn" onClick={()=>{setViewCustomerCaseStudy(false)}}><img src={deleteIcon} alt="..." className="remove_icon_style cursor_pointer"/></span>
                </li>
              )}
            </ul>
          </div>
        </div>
        {
          data.map((x, i) => (
            <div className="col p-0">
              <div className="card w-100">
                <ul className="list-group list-group-flush" id="content">
                  <li className="list-group-item">
                    <div className="custom_card_header d-flex align-items-center justify-content-center">
                      <div className="w-50 text-center">
                        <img src={googleIcon} alt="..." className="icon_custom_style" />
                        <div>
                          <a><small>{x.name}</small></a>
                        </div>
                      </div>
                      {
                        data.length === 1 ?
                          ""
                          :
                          <span className="cancel_icon" onClick={() => { deleteVendor(x.id) }}>{cancelIcon}</span>
                      }
                    </div>
                  </li>
                  <li className="list-group-item text-center">
                    <CircularProgressbar
                      className="custom_circular_progressbar"
                      value={x.score} text={`${x.score}`}
                      styles={buildStyles({
                        strokeLinecap: 'butt',
                        textSize: '26px',
                        pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7'
                      })} />
                  </li>
                  <li className="list-group-item card_custom_body">Dapibus ac facilisis in</li>
                  <li className="list-group-item card_custom_body">Dapibus ac facilisis in</li>
                  {
                    viewMore ?
                      <>
                        <li className="list-group-item card_custom_body">2001</li>
                        <li className="list-group-item card_custom_body">Sales vendor</li>
                        <li className="list-group-item card_custom_body">well?</li>
                      </>
                      :
                      ""
                  }
                  {viewPricing && (<li className="list-group-item card_custom_body">{x.pricing}</li>)}
                  {viewFeature && (<li className="list-group-item card_custom_body">{x.feature}</li>)}
                  {viewCustomerCaseStudy && (<li className="list-group-item card_custom_body">{x.customer_case_studies}</li>)}
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
