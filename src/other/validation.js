
export const emailValidation = (email) => {
    var mail = email.toLowerCase();
    if(mail.includes("@gmail.com"))
    {
        if(mail.includes(' '))
        {
        return false;
        }
    return true;
    }
}

export const passwordValidation = (pwd,cpwd) => {
    if(pwd===cpwd)
    {
        return true;
    }
}

export const contactValidation = (phonenumber) => {
    const ph = phonenumber;
    const len = ph.length;
    var num = null;
    if(num = parseInt(phonenumber))
    {
        if(len===10 && (ph.charAt(0)===9 || ph.charAt(0)===8 || ph.charAt(0)===7 || ph.charAt(0)===6))
        {
            return true;
        } 
        return false
    }
    return false;
}