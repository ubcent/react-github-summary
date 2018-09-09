import './Input.css';

import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

class Input extends PureComponent {
    static propTypes = {};
    static defaultProps = {};
    render() {
        const { active } = this.props;
        const className = classNames('textinput__box', {
            'textinput__box-active': active === 'active',
        });
        return (
            <div className="summary-form">
                <span className="textinput">
                    <input type="text" className="textinput__input" name="profile-git" />
                    <span className={className} />
                </span>
            </div>
        );
    }
}
export default Input;
