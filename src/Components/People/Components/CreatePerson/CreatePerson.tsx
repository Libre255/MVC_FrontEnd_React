import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { CleanPersonFormInputs } from '../../Ipeople';
import { formValidation } from '../PersonForm/formValidation';
import PersonFormModal from '../PersonFormModal/PersonFormModal';

const CreatePerson :React.FC = () => {
    const [show, setshow] = useState<boolean>(false);
    const formik = useFormik({
        initialValues:CleanPersonFormInputs,
        onSubmit: values => {
            
          alert(JSON.stringify(values, null, 2));
            // setshow(false)
            //const {data} = await axios.post('https://localhost:7293/ReactMVCPeopleList/AddPerson',NewPeopleData); 
        },
        validate:formValidation
    }) 

    const handleClose = ()=>{
        setshow(false);
        formik.setValues(CleanPersonFormInputs)
    };

    return(
    <div>
        <Button variant='primary' onClick={()=>setshow(true)}>Create person</Button>
        <PersonFormModal title='Create a person' Person={formik.values} formikActions={formik}
                         modalAction={{show:show, handleClose:handleClose}} 
                         modalButtons={[{name:"Create person", type:'success'}]} />
    </div>
    )
}

export default CreatePerson 