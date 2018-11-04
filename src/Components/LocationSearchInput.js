import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
 
export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
    if(this.props.type === "end"){
      this.props.setDestination(address)
    }
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.type === "start" ? this.props.handleStart(latLng) : this.props.handleEnd(latLng))
      .then(this.setState({address}))
      .then(this.props.type === "end" ? this.props.setDestination(address) : null)
      .catch(error => console.error('Error', error));
  };


  render() {
     const searchOptions = {

  types: ['(cities)']
}
 
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input style={{width: '95%', height: '50px', margin: '10px', fontSize: '20px'}}
              {...getInputProps({
                placeholder: this.props.placeholder,
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container" style={{width: '95%', margin: '10px',fontSize: '18px'}}>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}