import React from 'react'
import ReactDOM from 'react-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchVal: ''
        }
        this.getInputVal = this.getInputVal.bind(this)

    }

    getInputVal(event) {
        let targetVal = event.target.value
        this.setState({searchVal: targetVal})
        this.props.sendSearchVal(targetVal)
    }

    render() {
        return (
            <div>
                <h5>Type what you're looking for</h5>
                <input onChange={ (e) => this.getInputVal(e)} type="text" value={this.state.searchVal} />
            </div>
        )
    }
}

export default SearchBar