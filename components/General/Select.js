import React from 'react';
import {Field} from 'formik';
import css from "@emotion/css";
import { COLORS } from "../../constants";

function Select(props) {
    const {label, name, options, onchange, ...rest} = props;
    return (
        <div className='form-control'>
             <label
              htmlFor={name}
              css={css`
                font-size: 14px;
                display: block;
                color: ${COLORS.BLACK};
                .errorBorder {
                  border-color: ${COLORS.RED};
                }
              `}
                ><b> {label}</b>
             </label>

             <Field as='select'
                name={name}
                onChange={onchange}
                css={css`
                  display: block;
                  width: 20%;
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
                `}
                {... rest}
              >
                  <option value='' >Select your Option</option>
               {
                   
                   options.map(option =>{
                       return(
                         <option key={option.value} value={option.value}>
                             {option.key}
                        </option>

                       )
                   })
               }
              </Field>




        </div>
    )
}

export default Select
