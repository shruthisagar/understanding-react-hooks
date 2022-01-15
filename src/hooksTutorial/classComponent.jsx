import React from 'react'
class ClassCompoent extends React.Component{
    state = {
        count: 0
    }

    componentDidMount(){
        // should write all functions here

    }
    componentDidUpdate(){
        // all cleanup functions come here 
    }
    render(){
        return(
            <div className='container'>
                <div className='execution'>
                <p>Button Clicked: {this.state.count}</p>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1
                })
            }}>+</button>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count-1
                })
            }}>-</button>
            <button onClick={()=>{
                this.setState({
                    count: 0
                })
            }}>Reset</button>
            </div>
            </div >
        )
    }
}

export default ClassCompoent