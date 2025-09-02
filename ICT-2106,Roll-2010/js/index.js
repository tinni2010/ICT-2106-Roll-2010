function validatePassword(password){

if(pass.length<8){
    return "invalid pass";
}
    const up=/[A-Z]/;
    const low=/[a-z]/;
    const digit=/[0-9]/;
    const special_character=/[!,@,#,$,%]/;
if (up.test(password) && digit.test(password)&& special_character.test(password))
    {
return "valid password";
}
else {
    return "invalid password";
}
console.log(validatePassword(abcr5-l));
}