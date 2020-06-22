import React, { Component } from 'react';

class SearchBar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <article class="quick-booking">
                    <h2>Book Now</h2>
                    <div>
                        <select name="sepcialization" id="spec">
                            <option value="blah">speciality</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                        </select>
                        <select name="district" id="district">
                            <option value="blah">district</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                        </select>

                        <select name="area" id="area">
                            <option value="blah">area</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                            <option value="blah">Blah</option>
                        </select>
                        <button><i class="fas fa-search"></i></button>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}
 
export default SearchBar;