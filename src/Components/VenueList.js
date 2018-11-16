import React from 'react';

const VenueList = ({ item }) => {
    return (
        <div>
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
                                                <p className="company-state"><i className="fa fa-map-marker"></i> {item.venue.location.address}, {item.venue.location.city}, {item.venue.state}, {item.venue.location.country}</p>
                                                <p className="open-icon"><i className="fa fa-briefcase"></i>{item.venue.postalCode}</p>
                                                <p className="varify"><i className="fa fa-check"></i>{item.venue.verified}</p>
                                                {/* <p className="rating-company">4.9</p> */}
                                            </div>
                                            <div className="company-list-btn">
                                                <a href="/" className="jobguru-btn">More Details</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
             </section>
        </div>
    );
};

export default VenueList;