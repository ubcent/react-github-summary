import './Form.css';

import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import Intput from './Input';

class Form extends PureComponent {
    constructor() {
        super();
        this.state = {
            active: '',
        };
    }
    static propTypes = {};
    static defaultProps = {};
    render() {
        const { active } = this.state;
        return (
            <div className="summary-fon" onClick={this.handleClickHoverInput}>
                <div className="summary-block">
                    <div className="summary-wrap">
                        <p className="summary__text-main">Enter GitHub username</p>
                        <Intput active={active} />
                    </div>
                </div>
            </div>
        );
    }
    handleClickHoverInput = (e) => {
        if (e.target.name === 'profile-git') {
            this.setState({
                active: 'active',
            });
        } else {
            this.setState({
                active: '',
            });
        }
    };
}
export default Form;
