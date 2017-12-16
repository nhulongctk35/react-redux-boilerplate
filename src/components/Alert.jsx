import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const alertProps = {
  /**
   * Values: primary | secondary | success | danger
   * | warning | info | light | dark
   * @param {color}
   */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'light',
    'dark'
  ]),
  /**
   * Enable close alert
   * @param {dismissable}
   */
  dismissable: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  show: PropTypes.bool,
};

class Alert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: props.show,
    };
  }

  handleClose = () => {
    this.setState(() => ({
      show: !this.state.show
    }));
  }

  renderDismissButton = () => {
    const { dismissable } = this.props;

    const dismissButton = (
      <button type="button" className="close" onClick={this.handleClose}>
        <span aria-hidden="true">&times;</span>
      </button>
    );

    return dismissable
      ? dismissButton
      : <span />
  }

  render() {
    const { color, dismissable, className } = this.props;

    const alertClasses = classNames(
      'alert',
      `alert-${color}`,
      { 'dismissible': dismissable },
      className,
    );

    const alertView = (
      <div className={alertClasses} role="alert">
        {this.props.label}
        {this.renderDismissButton()}
      </div>
    );

    return this.state.show
      ? alertView
      : <span />
  }
};

Alert.propTypes = alertProps;
Alert.defaultProps = {
  color: 'primary',
  dismissable: false,
  className: undefined,
  show: true,
};

export default Alert;
