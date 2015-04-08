/**
 * Created by nexusstar on 08.04.15.
 */

function greeter(person: string){
    return "Hello, "  + person;
}

var user = 'User Name';


document.addEventListener('DOMContentLoaded', function(){
    document.body.innerHTML = greeter(user);
});
