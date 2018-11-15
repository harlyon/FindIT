import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';

class Body extends Component {


  state = {
        venues: []
    }

    handleSubmit(query) {
      this.getVenues(query);
    }

      componentDidMount() {
        this.getVenues('pubs');
      }

      locationSearch = (callback) => {
        navigator.geolocation.getCurrentPosition(res => {
        callback({ latlong: res.coords.latitude+","+res.coords.longitude });
        });

    };

      getVenues= (query) => {

        let setVenueState = this.setState.bind(this);

          const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';

          this.locationSearch(function (latlong) {

          const params = {
          client_id: "YQEAJZPPQB3HKQ0C5OOAB42JWCQ2IEINJVIASJORJCUB2MCQ",
          client_secret: "F2RLZSK01PMRV21PZKU2GRLMT44G1CQVRQEGTV53ONF4FFFS",
          limit: 10,
          query: query,
          v: '20181114',
          ll: latlong
        };
       axios(venuesEndpoint + new URLSearchParams(params), {
          method: 'GET'
        }).then(res => {
          setVenueState({venues: res.response.groups[0].items});
        });

      });

      }


    render() {
        return (
            <div>
                 <header>
          <div className="hero">
           <br /><br /><br />
            <h1>Graph Section</h1>
          </div>
        </header>
        <section className="content">
           <Search onSubmit={(value)=>this.handleSubmit(value)}  />
            <br />
          {/* <h3>Search Results Section</h3> */}
          {
            this.state.venues && this.state.venues.map((item) => {
              return (
                <section className="jobguru-job-tab-area section_70">
                <div className="row-fluid">
                <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-companies" role="tabpanel" aria-labelledby="pills-companies-tab">
                               <div className="top-company-tab">
                                  <ul>
                                     <li>
                                        <div className="top-company-list">
                                           <div className="company-list-details">
                                              <h3><a href="/">{item.venue.name}</a></h3>
                                              <p className="company-state"><i className="fa fa-map-marker"></i> Chicago, Michigan</p>
                                              <p className="open-icon"><i className="fa fa-briefcase"></i>32 open position</p>
                                              <p className="varify"><i className="fa fa-check"></i>Verified</p>
                                              <p className="rating-company">4.9</p>
                                           </div>
                                           <div className="company-list-btn">
                                              <a href="/" className="jobguru-btn">view profile</a>
                                           </div>
                                        </div>
                                     </li>
                                     </ul>
                                     </div></div></div>
                      </div>
                      </section>
              )
            })
          }


        </section>
            </div>
        );
    }
}

export default Body;