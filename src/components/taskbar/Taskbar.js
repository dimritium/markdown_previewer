import React from 'react';
import './Taskbar.css';

class Taskbar extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    // handleclick() {
    //     console.log(this.props.maximize);
    // }

    render() {
        return (
            <div id="taskbar">
                <span className="icon">
                    <i className="fa fa-free-code-camp" />
                </span>
                <span className="title">{this.props.title}</span>
                <span id="maximizer" onClick={this.props.maximize}>X</span>
            </div>
        );
    }
}

export default Taskbar;