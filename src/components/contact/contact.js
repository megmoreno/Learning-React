import { Button, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { useFormControls } from './contactFormControls';

const useStyles = makeStyles({
    contactForm: {
        marginLeft: "40px",
        marginRight: "40px"
    }
})

function Contact() {

    const styles = useStyles()

    return (
        <div className={styles.contactForm}>
            <h1>Contact me</h1>
            <MessageForm/>
		</div>
    )
}

const inputFieldValues = [
    {
      name: "fullName", //This is the format needed to send the email through emailjs
      label: "Full Name",
      id: "my-name"
    },
    {
      name: "email", //This is the format needed to send the email through emailjs
      label: "Email",
      id: "my-email"
    },
    {
      name: "message", //This is the format needed to send the email through emailjs
      label: "Message",
      id: "my-message",
      multiline: true,
      rows: 10
    }
];

const MessageForm = () => {

    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
      } = useFormControls();

    const hasFieldError = (fieldName) => !!errors[fieldName]

    return (
        <form onSubmit={handleFormSubmit}>
            {inputFieldValues.map((inputFieldValue, index) => {
                return (
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        key={index}
                        label={inputFieldValue.label}
                        onBlur={handleInputValue}
                        onChange={handleInputValue}
                        name={inputFieldValue.name}
                        autoComplete="none"
                        multiline={inputFieldValue.multiline ?? false}
                        minRows={inputFieldValue.rows ?? 1}
                        error={hasFieldError(inputFieldValue.name)}
                        helperText={hasFieldError(inputFieldValue.name) && errors[inputFieldValue.name]}
                    />
                )
            })}
            <Button type="submit" color="secondary" variant="contained" disabled={!formIsValid()}>Submit</Button>
        </form>
    )
}

export default Contact;
