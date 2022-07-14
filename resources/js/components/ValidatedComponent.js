import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, {Component} from 'react';
import {getValidationErrors} from '../lib/helpers';

class ValidatedComponent extends Component {
  /**
   *
   * @param prevProps
   * @param prevState
   * @param snapshot
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.errors) {
      const keys = Object.keys(this.props.errors);

      if (keys.length > 0) {
        Array.from(
          document.getElementsByTagName("form")
        ).forEach(form => {
          const all = form.querySelectorAll(".js-validated-component");
          if (all.length > 0) {
            all[0].scrollIntoView({behavior: "smooth", block: "center"});
            all[0].focus();
          }
        });
      }
    }
  }

  /**
   *
   * @returns {*}
   */
  render() {
    const errors = getValidationErrors(this.props.errors, this.props.name);

    const childClassName = errors
      ? classNames(this.props.activeClassName, "js-validated-component")
      : this.props.inactiveClassName;

    const child = this.props.renderComponent(
      classNames(this.props.className, childClassName)
    );

    return (
      <>
        {child}
        {errors && (
          <p className={classNames(
            "error text-xs italic", this.props.errorClassName
          )}>
            {errors}
          </p>
        )}
      </>
    );
  }
}

ValidatedComponent.propTypes = {
  errors: PropTypes.object,
  name: PropTypes.string.isRequired,
  renderComponent: PropTypes.func.isRequired,
  activeClassName: PropTypes.string,
  inactiveClassName: PropTypes.string
};

ValidatedComponent.defaultProps = {
  activeClassName: 'border-accent-light',
  inactiveClassName: ''
};

export default ValidatedComponent;
