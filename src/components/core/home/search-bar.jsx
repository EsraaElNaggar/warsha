import React, { Component } from 'react';

class SearchBar extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <article className="quick-booking">
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
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default SearchBar;



// let {speciality, district, area} = props; 
//     speciality = speciality.map((index,item)=>{
//         return (
//             <option key={item} value={item}>{item}</option>
//         )
//     })
//     district = district.map((index,item)=>{
//         return (
//             <option key={item} value={item}>{item}</option>
//         )
//     })
//     area = area.map((index,item)=>{
//         return (
//             <option key={item} value={item}>{item}</option>
//         )
//     })

//         return ( 
//             <React.Fragment>
//                 <article class="quick-booking">
//                     <h2>Book Now</h2>
//                     <div>
//                         <select name="sepcialization" id="spec">
//                             <option>speciality</option>
//                             {
//                                 speciality
//                             }
//                         </select>
//                         <select name="district" id="district">
//                             <option>district</option>
//                             {
//                                 district
//                             }
//                         </select>

//                         <select name="area" id="area">
//                             <option>area</option>
//                            {
//                                area
//                            }
//                         </select>
//                         <button><i class="fas fa-search"></i></button>
//                     </div>
//                 </article>
//             </React.Fragment>
//         );