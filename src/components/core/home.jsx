import React from 'react'

export default function Home(props) {

    let {sepciality,district,area} = props; 
    sepciality = sepciality.map((index,item)=>{
        return (
            <option key={item} value={item}>{item}</option>
        )
    })
    district = district.map((index,item)=>{
        return (
            <option key={item} value={item}>{item}</option>
        )
    })
    area = area.map((index,item)=>{
        return (
            <option key={item} value={item}>{item}</option>
        )
    })
    return (
        <>
            <section class="banner">
                <article class="Talal-banner-shape"></article>
                <article class="Talal-banner-introduction">
                    <div><span>Find</span> the best mechanics in Egypt
            </div> <i class="fas fa-angle-down Talal-angle-down"></i>
                </article>
                <article class="Talal-banner-image"></article>
            </section>
            <section class="full-height-container credits">
                <section class="why-us">
                    <section>
                        <img src="/HomeImages/Search.svg" alt=""/>
                        <h3>Search</h3>
                        <p>Search for Mechanics, plumbers ... etc. in your area</p>
                    </section>
                    <section>
                        <img src="/HomeImages/Mechanic.svg" alt=""/>
                        <h3>Compare</h3>
                        <p>Compare between mulitple choices and choose what suits you</p>
                    </section>
                    <section>
                        <img src="/HomeImages/Book.svg" alt=""/>
                        <h3>Book</h3>
                        <p>Book your appointment, with no need to wait</p>
                    </section>
                </section>
                <article class="quick-booking">
                    <h2>Book Now</h2>
                    <div>
                        <select name="sepcialization" id="spec">
                            <option>sepciality</option>
                            {
                                sepciality
                            }
                        </select>
                        <select name="district" id="district">
                            <option>district</option>
                            {
                                district
                            }
                        </select>

                        <select name="area" id="area">
                            <option>area</option>
                           {
                               area
                           }
                        </select>
                        <button><i class="fas fa-search"></i></button>
                    </div>
                </article>
            </section>
        </>
    )
}
