import React from 'react';
import {Field} from 'formik';
import css from "@emotion/css";
import { COLORS } from "../../constants";

function Textarea(props) {
    const {label, name, onChange, ...rest} = props;
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
        <Field 
         name={name}
         id={name}
         onChange={onChange}
         as='textarea'
         css={css`
         display: block;
         width: 80%;
         height: 70px;
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
       {... rest}
        ></Field>   
       
   </div>
)
}


export default Textarea
