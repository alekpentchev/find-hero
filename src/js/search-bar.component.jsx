import React from 'react'
import ReactDOM from 'react-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.getInputVal = this.getInputVal.bind(this)

    }

    getInputVal(event) {
        let targetVal = event.target.value
        this.props.sendSearchVal(targetVal)
    }

    render() {
        return (
            <div>
                <h5>Type what you're looking for - capital or country</h5>
                <input onChange={ (e) => this.getInputVal(e)} type="text" />
            </div>
        )
    }
}

export default SearchBar