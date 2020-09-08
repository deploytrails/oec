import React from "react";
import PropTypes from "prop-types";
import css from "@emotion/css";
import { COLORS } from "../../constants";

const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  disabled,
  error,
  children,
  label,
  ...props
}) => {
  return (
    <React.Fragment>
      <label
        css={css`
          font-size: 14px;
          display: block;
          color: ${COLORS.BLACK};
          .errorBorder {
            border-color: ${COLORS.RED};
          }
        `}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        css={css`
          display: block;
          width: 100%;
          height: 42px;
          padding: 0px 10px;
          margin-bottom: 0px;
          box-sizing: border-box;
          font-family: "Open Sans", sans-serif;
          border: 1px solid ${COLORS.GRAY_DARK};
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          -ms-border-radius: 4px;
          border-radius: 4px;
          font-size: 14px;
          &:focus {
            outline: none;
          }
          ::-webkit-input-placeholder {
            /* Edge */
            color: ${COLORS.BLACK};
          }

          :-ms-input-placeholder {
            /* Internet Explorer */
            color: ${COLORS.BLACK};
          }

          ::placeholder {
            color: ${COLORS.BLACK};
          }
        `}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        className={className}
        //className={error ? "errorBorder" : ""}
        style={error && { border: "solid 1px red" }}
      />
      {/*{error && <p>{error}</p>} */}
    </React.Fragment>
  );
};

FormInput.defaultProps = {
  type: "text",
  className: "",
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
