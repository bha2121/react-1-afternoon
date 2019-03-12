import React, { Component } from 'react'



class FilterObject extends Component {
    constructor(){
        super()
        
        this.state= {
            unFilteredArray: [{
                name: 'swag',
                age: 15,
                Skincolor: "clear"
            },
            {
                name: 'buster',
                age: 7,
                worth: 0
            },
            {
            name: 'brown trout',
            age: 69,
            hobby: "swimming",
            SkinColor: "brown"
            }
        ],
           
            userInput: '',
            filteredArray: []
        }   
    }
    



    handleChange(value) {
        this.setState({
            userInput: value
        })
    }






    handleClick(x){
        let newArr = []
        for (let i=0; i<this.state.unFilteredArray.length; i++){
           if(this.state.unFilteredArray[i].hasOwnProperty(x)) {
                newArr.push(this.state.unFilteredArray[i])
            }
        }
        console.log(newArr)
        this.setState({
            filteredArray: newArr
        })
    }
    
    
    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }  </span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} ></input>
                <button className="confirmationButton" onClick={() => this.handleClick(this.state.userInput)} >Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject