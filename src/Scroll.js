import React from 'react';

class Scroll extends React.Component {
    render() {
        return (
            <div style={{overflow:'scroll',height:'500px'}}>
                {this.props.children}
            </div>
        );
    }
}

export default Scroll 