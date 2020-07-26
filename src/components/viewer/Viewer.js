import React from 'react';
import './Viewer.css';
import Taskbar from '../taskbar/Taskbar';

class Viewer extends React.Component {
    marked = require('marked');

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        let textToRender = this.marked(this.props.parentState.textToRender);

        return (
            <div className="viewer">
                <Taskbar title="Preview"></Taskbar>
                <div id="rendered-textarea" dangerouslySetInnerHTML={{ __html: textToRender }}>
                </div>
            </div>
        )
    }
}

export default Viewer;