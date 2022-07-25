import {useState} from 'react';
import emailjs from '@emailjs/browser';

const initialFormValues = {
    fullName: "",
    email: "",
    message: "",
    formSubmitted: false,
    success: false
}

export const useFormControls = () => {
    const [values, setValues] = useState(initialFormValues)
    const [errors,setErrors] = useState({})

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
    
        if ("fullName" in fieldValues)
          temp.fullName = fieldValues.fullName ? "" : "This field is required."
    
        if ("email" in fieldValues) {
          temp.email = fieldValues.email ? "" : "This field is required."
          if (fieldValues.email)
            temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
              ? ""
              : "Email is not valid."
        }
    
        if ("message" in fieldValues)
          temp.message =
            fieldValues.message ? "" : "This field is required."
    
        setErrors({
          ...temp
        });
    }
    
    const handleInputValue = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
        validate({ [name]: value})
    }

    /* Note on why it is secure to have the API keys in the following code:
       Excerpt from an email from EmailJS, found on https://reginafurness.medium.com/emailjs-with-create-react-app-1f9c7f615c17

       Indeed, someone could copy your code, but they will only be able to send _your_ templates, with your content, and will not be able to send a custom email with their own content (spam). A better way to think of EmailJS is not as a service that allows to send email, but rather as a service that allows triggering pre-built emails from the client side — similar to the way services like Intercom work.

       That is why we always recommend composing a template with different dynamic variables, and not using the single dynamic variable and passing whole email content through this.

       You can also define a whitelist where you can specify from which domains requests will be processed, requests from other domains will be ignored.
    */
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (formIsValid()) {
            emailjs.sendForm('service_wlx5l2f', 'template_ogzm77e', e.target, '8SeMj4En_MkNJR4jx')
            .then((result) => {
                alert("Message sent!")
            }, (error) => {
                alert("There was a problem sending your message.")
                console.log(error)
            });
        }
      };

    const formIsValid = (fieldValues = values) => {
        const isValid =
          fieldValues.fullName &&
          fieldValues.email &&
          fieldValues.message &&
          Object.values(errors).every((x) => x === "");
    
        return isValid;
    };

    return {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    }

}