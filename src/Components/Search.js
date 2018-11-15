import React, { Component } from 'react';

class Search extends Component {


    state = {
        value: ''
    }

    handleSubmit= (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
      }

    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit} style={{ width: '455px' }}>
                    <div className="form-row">
                        <div className="col-12 col-md-9 mb-2 mb-md-0">
                        <input type="text"
                               value={this.state.value}
                               onChange={e => this.setState({ value: e.target.value })}
                               className="form-control form-control-lg"
                               placeholder="Enter Word..."
                        />
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