import React from 'react' 


class Bomb extends React.Component{
    constructor(props){
        super()
        this.state={
            secondsLeft: props.initialCount
        }
    }

    timer = () => {
        if(this.state.secondsLeft === 0){
            return <p>Boom!</p>
        }
        else{
            return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }
    }

    render(){
        return(
            <div>
                {this.timer()}
            </div>
        )
    }
}

export default Bomb