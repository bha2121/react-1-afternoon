import React, { Component } from 'react'


class EvenAndOdd extends Component {
    constructor (){
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''

        }
    }

    handleChange(x) {
        console.log(x)
        this.setState({
            userInput: x
        })
        console.log(this.state.userInput)
    }

    handleOnClick(){
        let odds = []
        let evens = []
        let newArr = this.state.userInput.split(",")
        newArr.forEach((el,i,arr)=>{
            arr[i] = parseInt(el, 10)
        })
        console.log(newArr)

        newArr.filter((el) =>{
            if(el %2 ===0 ){
               evens.push(el)
                }else{
                odds.push(el)
            }
            return newArr
        })

        this.setState({
            evenArray: evens,
            oddArray: odds
        })


    }




    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.handleOnClick(this.state.userInput)}>Split</button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}


export default EvenAndOdd