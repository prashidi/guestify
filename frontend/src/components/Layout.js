import React from 'react'
import Hoc from '../hoc/hoc'


class CustomLayout extends React.Component {
    render() {
        return (
            <Hoc>
                <header>
                    <div className="navbar">
                        <ul className="nav">
                            <li className="item"><a href="/">Home</a></li>
                            <li className="item"><a href="/" className="contact">Add Guest</a></li>
                        </ul>
                        <div className="logo">
                        </div>
                    </div>
                </header>
                <div>
                    {this.props.children}
                </div>
            </Hoc>
        );
    }
}

export default CustomLayout