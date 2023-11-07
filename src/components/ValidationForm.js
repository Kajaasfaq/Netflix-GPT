export const ValidationForm = (Email , Password) => {
    const EmailVal =   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email)
    const PasswordVal = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(Password)

    if(!EmailVal) return "Email Id is Not Vaild"
    if(!PasswordVal) return "Password is Not Vaild"
    return null
}

export const ValidationFull =(Fullname) => {
    const FullNameVal = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(Fullname)
    if(!FullNameVal) return "Name is Not Vaild"
    return null
}