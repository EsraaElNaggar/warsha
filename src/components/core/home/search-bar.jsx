import React, { Component } from 'react';

import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

import { getCenterServices } from './../../../_utils/cars-data-service';
import { getCities, getAreas } from './../../../_utils/locations-data-service';

class SearchBar extends Component {
    state = {
        searchData: {
            speciality: "",
            city: "",
            area: ""
        },
        searchResult: [],
        specialities: [],
        cities: [],
        areas: [],
    }; 

    // get specialities and cities
    componentDidMount(){
        
        // get all services
        let specialities = getCenterServices(); 
        specialities = specialities.map((item,index)=>{
            return (
                <option key={item.label} value={item.value}>{item.value}</option>
            )
        });

        //get all cities
        let cities = getCities();
        cities = cities.map((item, index)=>{
            return (
                <option key={item.lable} value={item.value}>{item.value}</option>
            )
        });

        this.setState({specialities, cities})
    }
    
    // inputs value handler
    handleChange = ({ target }) => {
        const searchData = { ...this.state.searchData };
        searchData[target.id] = target.value;
        this.setState({ searchData });

        // get all areas of a chosen city
        if (target.id === "city") {
            let areas = getAreas(target.value);

            areas = areas.map((item, index)=>{
                return (
                    <option key={item} value={item}>{item}</option>
                )
            });
            
            this.setState({areas});
        }
    };

    // search backend
    search = ({speciality, city, area}) => {
        // console.log(process.env.REACT_APP_BACKEND_URL);

        if ((speciality && city && area) || (speciality && !city && area)) {
            axios.get(`http://localhost:3000/centers/?services=${speciality}&q=${area}`)
            .then(res=>{
                console.log(res);
                this.props.history.replace("/searchresult");
            }).catch(err=>{
                toast("Connectio Error", {type:"error"});
            });
        }
        else if (speciality && city && !area){
            axios.get(`http://localhost:3000/centers/?services=${speciality}&q=${city}`)
            .then(res=>{
                this.props.history.replace("/searchresult")
            }).catch(err=>{
                toast("Connectio Error", {type:"error"});
            });
        }
        else if (!(speciality && city) && area){
            axios.get(`http://localhost:3000/centers/?q=${area}`)
            .then(res=>{
                this.props.history.replace("/searchresult")
            }).catch(err=>{
                toast("Connectio Error", {type:"error"});
            });
        }
        else if (speciality && !(city && area)){
            axios.get(`http://localhost:3000/centers/?services=${speciality}`)
            .then(res=>{
                this.props.history.replace("/searchresult")
            }).catch(err=>{
                toast("Connectio Error", {type:"error"});
            });
        }
        else if (!(speciality && area) && city){
            axios.get(`http://localhost:3000/centers/?q=${city}`)
            .then(res=>{
                
            }).catch(err=>{
                toast("Connection Error", {type:"error"});
            });
        }
        else{
            axios.get("http://localhost:3000/centers")
            .then(res=>{
                this.props.handleSearch(res.data);
            }).catch(err=>{
                toast("Connection Error", {type:"error"});
            });
        }
       
    };

    // form submit handler
    handleSubmit = e =>{
        e.preventDefault(); 

        const {
            speciality, 
            city, 
            area
        } = this.state.searchData;

        console.log(speciality, city, area);


        // call backend
        this.search({speciality, city, area});
    };

    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <article className="quick-booking">
                    <h2>Book Now</h2>
                    <form onSubmit={this.handleSubmit} className="search-form">
                        <select 
                            name="speciality" 
                            id="speciality"
                            onChange={this.handleChange}
                        >
                            <option>speciality</option>
                            {
                                this.state.specialities
                            }
                        </select>
                        <select 
                            name="city" 
                            id="city"
                            onChange={this.handleChange}
                        >
                            <option>city</option>
                            {
                                this.state.cities
                            }
                        </select>

                        <select 
                            name="area" 
                            id="area"
                            onChange={this.handleChange}
                        >
                            <option>area</option>
                            {
                                this.state.areas
                            }
                        </select>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </article>
            </React.Fragment>
        );
    }
}

export default SearchBar;
