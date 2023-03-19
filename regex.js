function validationRegex(){
    var reg = RegExp('^[0-9]{6}$');

    var flag = reg.test(88888);
    if(flag){
        console.log("it is true");
    }else{
        throw{
            name: "Regex Error",
            message: "My Error message"
        }
    }
}