import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { lineChange, errorForm } from 'actions/formPage';
import FormComponents from 'components/FormComponents';

class FormContainers extends PureComponent {
    static propTypes = {
        active: PropTypes.string.isRequired,
        formError: PropTypes.bool.isRequired,
        lineChange: PropTypes.func.isRequired,
        errorForm: PropTypes.func.isRequired,
    };

    render() {
        const { active, formError, lineChange, errorForm } = this.props;
        return (
            <React.StrictMode>
                <FormComponents
                    active={active}
                    formError={formError}
                    lineChange={lineChange}
                    errorForm={errorForm}
                />
            </React.StrictMode>
        );
    }
}
export default connect(
    (state, props) => ({
        ...props,
        active: state.formPage.active,
        formError: state.formPage.formError,
    }),
    (dispatch, props) => ({
        ...props,
        lineChange: (str) => dispatch(lineChange(str)),
        errorForm: (bool) => dispatch(errorForm(bool)),
    }),
)(FormContainers);
