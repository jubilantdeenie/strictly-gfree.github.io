import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'
import { Debounce } from 'react-throttle'
import * as MapDataAPI from '../MapDataAPI.js'
import Location from './location.js'
import KeyboardEventHandler from 'react-keyboard-event-handler'

class SeachPlaces extends Component {
    static propTypes = {
        onUserDidSearch: Proptypes.func.isRequired,
        onhandleLocationsSelected: PropTypes.func.isRequired
    }

    state = {
        query: '',
        locationsSearchResult: []
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })
    }

    clearQuery = () => {
        this.state({
            query: ''
        })
    }

    searchLocations = (query) => {
        let filteredLocations
        let locations = this.props.locations
        let locationsHasItems = false
        let result = {}

        handleTextChange = (query, event) => {
            this.updateQuery(query)
            let result = this.searchLocations(query)
            this.props.onUserDidSearch(result.filteredLocations, query)
            this.setState({locationsSearchResult: result.filteredLocations})
        }

    }

    render() {
        let { locations, onUserDidSearch, onhandleLocationSelected, onItemClick, color}
        let { query, locationsSearchResult} = this.state
        let result = this.searchLocations(query)
        let locationsHasItems = result.locationsHasItems
        let filteredLocations = result.filteredLocations
        
        let handleKeyPress = (event, location, index) =>
            onhandleLocationsSelected(event, location, index)
        }
        let onItemClickHandler = (event, locations, index) => {
            onItemClick(event, location, index)
        }
        let viewIndex = 0
        if(menuHidden) {
            viewIndex = -1
        }
        return (
           <div>
               <div className = "filter.container"
                    tabIndex = {viewIndex}
                    aria-hidden = {menuHidden}
                    <Debounce time = "1000" "onChange" tabIndex {viewIndex}
                        aria-hidden = {menuHidden}
                      <input id = "search-filter-text" type="text"
                      role = "textbox"

                      aria label = "Enter place Name to Filter"
                      placeholder = "Enter location Name"
                      onChange = {(event) => this.handleTextChange(event.target)}
                    </Debounce>
                    <span className = "search-filter"><i className= "fa fa-filter" aria-hidden = "true"></i> Filter</span>
           </div> 
          { (locationsHasItems) && (
              <ul className="locations-list"
                  aria-hidden = {menuHidden}
                  tabIndex = {viewIndex}
                  role = "menu"
                  aria label = "List of neighborhood places"
                  {filteredLocations.map((items, index) => {
                      (<Location key = {index}
                            role = "menu-time"
                            menuHidden = {menuHidden}
                            viewIndex = {viewIndex}
                            location = {item}
                            index = {index}
                            onClick = {onItemClickHandler}
                            onKeyPress = {handleKeyPress}>
                            </Location>)
                  )}
                </ul>
          )
        }
        </div> 
        )
    }
}