import React, { Component } from 'react'

class FilterString extends Component {
    constructor(){
        super()
        this.state ={
            unFilteredArray: ['Raphael', 'Buster', 'Bill', 'Renard', 'Buck', 'Bud', 'Rupert'],
            userInput: '',
            filteredArray: []
        }

    }

    handleOnChange(value){
        this.setState({
            userInput: value
        })
    }


    handleOnClick(x){
        let newArray = []
        let names = this.state.unFilteredArray
        for (let i = 0; i < names.length; i++){
            if (names[i].includes(x) ){
                newArray.push(names[i]);   
            }
        }
        this.setState({
            filteredArray: newArray
        })

    }



    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText">Names: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={(e) => this.handleOnChange(e.target.value)} ></input>
                <button  className="confirmationButton" onClick={() => this.handleOnClick(this.state.userInput)} >Filter</button>
                <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) }  </span>
                
            </div>
        )
    }
}

export default FilterString