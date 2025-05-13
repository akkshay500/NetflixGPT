const CheckValidData = (email, password) => {

    // Regex can be written between two forward slashes. Test method is used to test the string against the regex.
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    //const isFullNameValid = /[a-zA-Z]+\\.?/.test(fullname);
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
    //if(!isFullNameValid) return "Full Name is not valid";
    
    return null;
}

export default CheckValidData;