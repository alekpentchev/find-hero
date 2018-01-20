import React, {Fragment} from 'react';
import ReactDOM from 'react-dom'

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.mapCountries = this.mapCountries.bind(this)
        this.countryClicked = this.countryClicked.bind(this)
    }
    
    mapCountries() {
        if(this.props.countries.length) {
            return this.props.countries.map( country => {

                return <div onClick={(e) => this.countryClicked(country,e)} key={country.ccn3}> 
                    <button className="btn btn-light">
                    <h4>{country.name.common}</h4>
                    <span>Capital: {country.capital}</span>
                    </button></div>
           })
        }
        else {
            return <p>Nothing to display yet...</p>
        }
    }

    countryClicked(country) {
        this.props.sendClickedCountry(country)
    }

    render() {
        return (
            <Fragment>
                {this.mapCountries()}
            </Fragment>
        )
    }
}

export default SearchResults