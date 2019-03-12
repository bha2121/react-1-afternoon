import React, { Component } from 'react'



class Palindrome extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

handleOnChange(value){
    this.setState({
        userInput: value
    })
}

handleOnClick(userInputValue){
    var forwards = userInputValue;
    var backwards = userInputValue;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if ( forwards === backwards ) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
}



    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={(e)=> this.handleOnChange(e.target.value)} ></input>
                <button className="confirmationButton" onClick={()=> this.handleOnClick(this.state.userInput)}>Check</button>
                <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
            </div>
        )
    }
}


export default Palindrome