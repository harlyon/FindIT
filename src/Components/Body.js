import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';

class Body extends Component {

    state = {
        venues: [],
        latlong: ""
    }

      componentDidMount() {
        this.getVenues();
        this.locationSearch();
      }

      locationSearch = () => {
        navigator.geolocation.getCurrentPosition(res => {
            console.log(res.coords.latitude+","+res.coords.longitude);
        this.setState({ latlong: res.coords.latitude+","+res.coords.longitude });
        }, ()=>{
            this.getVenues("restaurants")
        });

    };

      getVenues= () => {
          const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';
          const params = {
          client_id: "YQEAJZPPQB3HKQ0C5OOAB42JWCQ2IEINJVIASJORJCUB2MCQ",
          client_secret: "F2RLZSK01PMRV21PZKU2GRLMT44G1CQVRQEGTV53ONF4FFFS",
          limit: 10,
          v: '20181114',
          ll: '-26.203159,28.0471622'
        };
       axios(venuesEndpoint + new URLSearchParams(params), {
          method: 'GET'
        }).then(res => {
          this.setState({venues: res.data.response.groups[0].items});
          console.log(res.data.response.groups[0].items)
        });
      }


    render() {
        // const venueList = this.state.venues.map(item =>
        //     <li key={item.venue.id}>{item.venue.name}</li>
        // );

        return (
            <div>
                 <header>
          <div className="hero">
           <br /><br /><br />
            <h1>Graph Section</h1>
          </div>
        </header>
        <section className="content">
           <Search />
            <br />
          {/* <h3>Search Results Section</h3> */}

        <section class="jobguru-job-tab-area section_70">
         <div class="row-fluid">
         <div class="tab-content" id="pills-tabContent">
                     <div class="tab-pane fade show active" id="pills-companies" role="tabpanel" aria-labelledby="pills-companies-tab">
                        <div class="top-company-tab">
                           <ul>
                              <li>
                                 <div class="top-company-list">
                                    <div class="company-list-details">
                                       <h3><a href="/">jamulai - consulting & finance Co.</a></h3>
                                       <p class="company-state"><i class="fa fa-map-marker"></i> Chicago, Michigan</p>
                                       <p class="open-icon"><i class="fa fa-briefcase"></i>32 open position</p>
                                       <p class="varify"><i class="fa fa-check"></i>Verified</p>
                                       <p class="rating-company">4.9</p>
                                    </div>
                                    <div class="company-list-btn">
                                       <a href="/" class="jobguru-btn">view profile</a>
                                    </div>
                                 </div>
                              </li>
                              </ul>
                              </div></div></div>
               </div>
               </section>
        </section>
            </div>
        );
    }
}

export default Body;