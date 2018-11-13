import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                 <form>
                    <div className="form-row">
                        <div className="col-12 col-md-9 mb-2 mb-md-0">
                        <input type="email" className="form-control form-control-lg" placeholder="Enter Word..."/>
                        </div>
                        <div className="col-12 col-md-3">
                        <button type="submit" className="btn-w btn-lg btn-primary">Search!</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;