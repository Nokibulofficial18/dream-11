export const getStoredEmail = () =>{
    const storedEmail = localStorage.getItem("email");
    return storedEmail ? JSON.parse(storedEmail):[];
}
export const addToLocalStorage= (email) =>{
    const storedEmail = getStoredEmail();
    if(storedEmail.includes(email)){
        return;
    }
    storedEmail.push(email);
    
    localStorage.setItem("email",JSON.stringify(storedEmail));
}