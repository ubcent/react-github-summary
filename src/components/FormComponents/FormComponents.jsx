import './FormComponents.css';

import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import Input from './Input';

class FormComponents extends PureComponent {
    static propTypes = {
        active: PropTypes.string.isRequired,
        formError: PropTypes.bool.isRequired,
        errorForm: PropTypes.func.isRequired,
        lineChange: PropTypes.func.isRequired,
    };
    render() {
        const { active, formError, errorForm } = this.props;
        return (
            <div className="summary-fon" onClick={this.handleClickHoverInput}>
                <div className="summary-block">
                    <div className="summary-wrap">
                        <p className="summary__text-main">Enter GitHub username</p>
                        <Input
                            active={active}
                            formError={formError}
                            errorForm={errorForm}
                        />
                    </div>
                </div>
            </div>
        );
    }
    handleClickHoverInput = (e) => {
        const { lineChange } = this.props;
        if (e.target.name === 'username') {
            lineChange('active');
        } else if (e.target.name !== 'username') {
            lineChange('');
        }
    };
}
export default FormComponents;
