import './Input.css';

import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

class Input extends PureComponent {
    static propTypes = {
        active: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
        };
    }

    render() {
        const { active, formError } = this.props;
        const { username } = this.state;

        const className = classNames('textinput__box', {
            active: active === 'active',
        });

        return (
            <div className="summary-form">
                <span className="textinput">
                    <input
                        type="text"
                        className="textinput__input"
                        name="username"
                        value={username}
                        onChange={this.handleUsername}
                        onKeyDown={this.handleDownEnterUsername}
                    />
                    <span className={className}>
                        {formError ? 'от 2 до 30 символов' : null}
                    </span>
                </span>
            </div>
        );
    }
    handleUsername = (e) => {
        const { errorForm } = this.props;
        errorForm(false);
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleDownEnterUsername = (e) => {
        const { errorForm } = this.props;
        const { username } = this.state;

        if (e.keyCode !== 13) {
            return;
        }
        if (!/^([^\s]){2,30}$/.test(username)) {
            errorForm(true);
        }
        this.setState({
            username: '',
        });
    };
}
export default Input;
