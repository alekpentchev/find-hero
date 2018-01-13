import React from 'react';
import ReactDOM from 'react-dom'

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.mapCountries = this.mapCountries.bind(this)
    }
    
    mapCountries() {
        if(this.props.countries.length) {
            return this.props.countries.map( country => {
                return <div key={country.ccn3}>
                <h4>{country.name.common}</h4>
                <span>Capital: {country.capital}</span>
                </div>
           })
        }
        else {
            return <p>Nothing to display yet...</p>
        }
    }

    render() {
        return (
            <div>
                <div>
                    <strong><div>{this.mapCountries()}</div></strong>
                </div>
            </div>
        )
    }
}

export default SearchResults