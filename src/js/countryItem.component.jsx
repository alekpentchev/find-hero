import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'

class CountryItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clickedCountry : {} 
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ clickedCountry: nextProps.selectedCountry });
    }


    render() {
        if (Object.keys(this.state.clickedCountry) != 0) {
            
            let countryName = this.state.clickedCountry.name
            let countryCapital = this.state.clickedCountry.capital
            let countryRegion = this.state.clickedCountry.region
            let countrySubRegion = this.state.clickedCountry.subregion
            
            return (
                <Fragment>
                    <div>
                        <h4>{ countryName.common }</h4>
                        <p><strong>Capital:</strong> { countryCapital }</p>
                        <p><strong>Region:</strong> { countryRegion }</p>
                        <p><strong>Subregion:</strong> { countrySubRegion }</p>
                    </div>
                </Fragment>

            )

        } else {
           return  <p>Select a country first...</p>
        }
    }
} 

export default CountryItem