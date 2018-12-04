import React, { Component } from 'react';
import 'whatwg-fetch';
import Search from './Search'
import VenueList from './VenueList'
import Map from './Map'
class Venue extends Component {

  constructor() {

    super();

    this.state = {
      venues: []
    };

  }

  handleSubmit(query) {
    this.getVenues(query);
  }

  componentDidMount() {
    this.getVenues('Pubs');
  }

  getLocation(callback) {
    navigator.geolocation.getCurrentPosition(function(location) {
      callback(location.coords.latitude + ',' + location.coords.longitude)
    })
  }

  getVenues(query) {

    let setVenueState = this.setState.bind(this);

    const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';

    this.getLocation(function (latlong) {

      const params = {
        client_id: "YQEAJZPPQB3HKQ0C5OOAB42JWCQ2IEINJVIASJORJCUB2MCQ",
        client_secret: "F2RLZSK01PMRV21PZKU2GRLMT44G1CQVRQEGTV53ONF4FFFS",
        limit: 15,
        query: query,
        v: '20130619',
        ll: latlong
      };

      fetch(venuesEndpoint + new URLSearchParams(params), {
        method: 'GET'
      }).then(response => response.json()).then(response => {
        setVenueState({venues: response.response.groups[0].items,});
        console.log(response)
      });

    });

  }

  render() {
      // console.log(this.state.venues)

    var venueList = this.state.venues.map((item, i) =>
      <VenueList key={i} item={item}/> //Create a new "name attribute"
    );

    return (
      <div>
           <header>
          <div className="hero">
            <Map  />
          </div>
        </header>
        <section className="content sect">
        <Search onSubmit={(value)=>this.handleSubmit(value)}/>
        <br />

          {venueList}

        </section>
      </div>
    );
  }

}

export default Venue;
