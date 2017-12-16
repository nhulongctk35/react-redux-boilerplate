import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const buttonProps = {
  /**
   * Value: button | a | input
   * @param {tag}
   */
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),

  /**
   * Button will active when clicked.
   * However, you can still force with .active
   * @param {active}
   */
  active: PropTypes.bool,

  /**
   * Value: primary | secondary | success | info | warning | danger
   * @param {color}
   *
   */
  color: PropTypes.string,
  disabled: PropTypes.bool,

  /**
   * Value: lg | sm
   * @param {size}
   */
  size: PropTypes.string,
  class: PropTypes.string,
  block: PropTypes.bool,
  outline: PropTypes.bool,

  /**
   * Value: button | submit | reset | undefined
   * @param {type}
   */
  type: PropTypes.string,
  onClick: PropTypes.func,
}

const Button = (props) => {
  const handleOnClick = (event) => {
    if (props.disabled) {
      event.preventDefault();
      return;
    }

    props.onClick(event);
  }

  let {
    tag: Tag,
    active,
    block,
    disabled,
    outline,
    color,
    size,
    type,
    ...attributes,
  } = props;

  const btnClasses = classNames(
    "btn",
    `btn${outline ? '-outline' : ''}-${color}`,
    block ? "btn-block" : false,
    size ? `btn-${size}` : false,
    { active }
  );

  if (attributes.href) {
    Tag = 'a';
  }

  const btnType = Tag === 'button' && attributes.onClick
    ? type
    : undefined;

  return (
    <Tag
      type={btnType}
      className={btnClasses}
      onClick={handleOnClick}
      disabled={disabled}
      {...attributes}
    />
  )
}

Button.propTypes = buttonProps;
Button.defaultProps = {
  tag: 'button',
  color: 'secondary',
  type: 'button',
  onClick: () => { },
}

export default Button;
