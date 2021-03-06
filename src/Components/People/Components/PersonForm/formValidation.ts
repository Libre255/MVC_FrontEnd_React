import { IPeople } from "../../Ipeople";

export const formValidation = (values:IPeople) =>{
    let errors:IErrorsForm = {}
    
    if(!values.name){
        errors.name = "Please insert name";
    }
    if(!values.phoneNumber){
        errors.phoneNumber = "Please insert phone number";
    }
    if(!values.city){
        errors.city = "Please select city";
    }
    if(values.languages.length === 0){
        errors.languages = "Pleaser select a language";
    }
    console.log(errors)
    if(!errors){
        return undefined;
    }else return errors;
}

export interface IErrorsForm {
    name?:string;
    phoneNumber?:string;
    city?:string;
    languages?:string;
};

export type IErrorPropertie = string | undefined; 