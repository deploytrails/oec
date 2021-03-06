import React from 'react'
import InputText from './InputText';
import Select from './Select';
import Textarea from './Textarea';


function FormikControl(props) {
    const {control, ...rest} = props;
    switch(control)
    {
        case 'input':
            return <InputText {...rest}/>
        case 'textarea':
            return <Textarea {...rest}/>
        case 'select':
            return <Select {...rest}/>
        case 'radio':
        case 'checkbox':
        case 'date':
        default: return null
    }
}

export default FormikControl
