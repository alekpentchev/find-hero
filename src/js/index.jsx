require("babel-polyfill")

import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './search-bar.component'
import SearchResults from './search-results.component'
import CountryItem from './countryItem.component'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           searchPhrase: '',
           countriesEndpoint: 'https://raw.githubusercontent.com/mledoze/countries/master/countries.json',
           countriesAll: [],
           searchedCountries: [],
           clickedCountry: {},
        }
        this.getSearchVal = this.getSearchVal.bind(this)
        this.retrieveCountriesList = this.retrieveCountriesList.bind(this)
        this.filterCountries = this.filterCountries.bind(this)
        this.getClickedCountry = this.getClickedCountry.bind(this)

        this.retrieveCountriesList(this.state.countriesEndpoint)
    }
    
    getSearchVal(newPhrase) {
        this.setState({
            searchPhrase: newPhrase,
            searchedCountries: this.filterCountries(this.state.countriesAll, newPhrase.toLowerCase())
        })
        if(newPhrase.length==0) {
            this.setState({ searchedCountries: [] })
        }
    }

    getClickedCountry(clickedCountry) {
        this.setState({ clickedCountry: clickedCountry  })
    }
    

    async retrieveCountriesList(endpoint) {
        let countriesArray = await fetch(endpoint).then(blob => blob.json())
        this.setState({countriesAll: [...countriesArray]})
    }
    
    filterCountries(countriesArr, phrase) {
        let newCountries
            newCountries = countriesArr.filter( country => {
                return country.name.common.toLowerCase().includes(phrase) || country.capital[0].toLowerCase().includes(phrase)
            })
        return newCountries
    }

    render() {
        return (
            <div className="col-md-12">
                <h2>Search for a country</h2>
                <div className="row">
                    <div className="col-md-6 search-area">
                        <hr/>
                        <div className="col-md-12">
                            <SearchBar sendSearchVal={this.getSearchVal} />
                        </div>
                        <hr/>
                        <div className="col-md-12">
                            <SearchResults countries={this.state.searchedCountries} sendClickedCountry={this.getClickedCountry} />
                        </div>
                    </div>
                    <div className="col-md-6 searched-item">
                        <CountryItem selectedCountry={this.state.clickedCountry} />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')       
)