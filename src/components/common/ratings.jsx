import React, { Component } from "react";

class Ratings extends Component {

    state = {
        ratingValue: 0,
        filledStars: [],
        reminder: 0,
        halfStars: [],
        emptyStars: [],
        totalStars: 0,
        showFull: [],
        showHalf: [],
        showEmpty: []
    }

    componentDidMount(){
        let ratingValue = Number(this.props.ratingValue);
        this.setState({ratingValue});

        let filled = Math.floor(ratingValue/1);

        const reminder = ratingValue%1;
        this.setState({reminder});

        if (reminder > 0.7) {
            filled+=1;
        }

        else if (reminder > 0.4 && reminder < 0.8) {
            this.setState({halfStars: [1]});
        }

        let filledStars = [];
        for (let index = 0; index < filled; index++) {
            filledStars.push(index);
        }
        this.setState({filledStars});
        // console.log(this.state.filledStars);


        const totalStars = filled + this.state.halfStars.length;
        this.setState({totalStars});
        // console.log(totalStars);


        const empty = 5 - totalStars;
        let emptyStarsArr = [];
        for (let index = 0; index < empty; index++) {
            emptyStarsArr.push(index);
        }
        this.setState({emptyStars: emptyStarsArr});
        // console.log(this.state.emptyStars);


        this.setState({showFull: 
            this.state.filledStars.map(star=>(
                <i className="fas fa-star" />
            ))
        });

        this.setState({showHalf: 
            this.state.halfStars.map(star=>(
                <i class="fas fa-star-half-alt"/>
            ))
        });

        this.setState({showEmpty: 
            this.state.emptyStars.map(star=>(
                <i class="far fa-star"/>
            ))
        });

        // console.log(this.state.filledStars)

    }

    render(){
        return (
            <React.Fragment>
                <span className="ratings">
                   {this.state.showFull}
                   {this.state.showHalf}
                   {this.state.showEmpty}
                </span>
            </React.Fragment>
        );
    }
};

export default Ratings;