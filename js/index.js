var nameIinput=document.querySelector("#nameIinput");
var emailIinput=document.querySelector("#emailIinput");
var passwordIinput=document.querySelector("#passwordIinput");
var emailIinputSignIn=document.querySelector("#emailIinputSignIn");
var passwordIinputSignIn=document.querySelector("#passwordIinputSignIn");
var Home=document.querySelector(".Home");

var clickSignIn=document.querySelector(".clickSignIn");
var clickSignUp=document.querySelector(".clickSignUp");
var signUpSection=document.querySelector(".signUpSection");
var signInSection=document.querySelector(".signInSection");
var signUp=document.querySelectorAll(".signUp");
var empty1=document.querySelector(".empty1");
var empty2=document.querySelector(".empty2");
var empty3=document.querySelector(".empty3");
var empty4=document.querySelector(".empty4");
var emptyIn1=document.querySelector(".emptyIn1");
var emptyIn2=document.querySelector(".emptyIn2");
var emptyIn3=document.querySelector(".emptyIn3");
var emptyIn4=document.querySelector(".emptyIn4");

var logOut=document.querySelector(".logOut");


var arr1=[]

var arr=[];
if(localStorage.getItem("Users")==null){
    arr=[];
}else{
    arr=JSON.parse(localStorage.getItem("Users"));
}


logOut.addEventListener("click",function(e){
    signUpSection.classList.replace("d-none","d-block");
    signInSection.classList.replace("d-block","d-none");
    Home.classList.replace("d-block","d-none");

    empty1.classList.replace("d-block","d-none")
    empty2.classList.replace("d-block","d-none")
    empty3.classList.replace("d-block","d-none")
    empty4.classList.replace("d-block","d-none")
})
clickSignUp.addEventListener("click",function(e){
    signUpSection.classList.replace("d-none","d-block");
    signInSection.classList.replace("d-block","d-none");

})
clickSignIn.addEventListener("click",function(e){
    signUpSection.classList.replace("d-block","d-none");
    signInSection.classList.replace("d-none","d-block");

})


nameIinput.addEventListener("input",function(e){
validation(this)
})
emailIinput.addEventListener("input",function(e){
    validation(this)
    })
    passwordIinput.addEventListener("input",function(e){
        validation(this)
        })



        emailIinputSignIn.addEventListener("input",function(e){
            validation(this)
            })
            passwordIinputSignIn.addEventListener("input",function(e){
                validation(this)
                })



                for(var i=0;i<signUp.length;i++){

                    signUp[0].addEventListener("click",function(e){
                        logUp1()
                    
                    })
                    signUp[1].addEventListener("click",function(e){
                        logUp2()
                    
                    })
                }



function logUp1(){
    
    
    if(emptyInputs1()!==false){

if(validation(nameIinput)==true&&validation(emailIinput)==true&&validation(passwordIinput)==true){
    nameIinput.classList.remove("is-invalid")
    emailIinput.classList.remove("is-invalid")
    passwordIinput.classList.remove("is-invalid")
if(isHere1()!==true){
    var data={
        name:nameIinput.value,
        email:emailIinput.value,
        pasword:passwordIinput.value,
    }
arr.push(data)
console.log(arr);

localStorage.setItem("Users", JSON.stringify(arr))
    empty1.classList.replace("d-block","d-none")
    empty2.classList.replace("d-none","d-block")
    empty3.classList.replace("d-block","d-none")
    empty4.classList.replace("d-block","d-none")
    display()
    clearValuesForSignUp()
// alert("is not here")

}else{
    empty1.classList.replace("d-block","d-none")
    empty2.classList.replace("d-block","d-none")
    empty3.classList.replace("d-none","d-block")
    empty4.classList.replace("d-block","d-none")

    // alert("is  here")
}

}else if(validation(nameIinput)!==true){
    empty1.classList.replace("d-block","d-none")
    empty2.classList.replace("d-block","d-none")
    empty3.classList.replace("d-block","d-none")
    empty4.classList.replace("d-none","d-block")
   nameIinput.classList.add("is-invalid")
}else if(validation(emailIinput)!==true){
    nameIinput.classList.remove("is-invalid")
    empty1.classList.replace("d-block","d-none")
    empty2.classList.replace("d-block","d-none")
    empty3.classList.replace("d-block","d-none")
    empty4.classList.replace("d-none","d-block")
    emailIinput.classList.add("is-invalid")
}else if(validation(passwordIinput)!==true){
    empty1.classList.replace("d-block","d-none")
    empty2.classList.replace("d-block","d-none")
    empty3.classList.replace("d-block","d-none")
    empty4.classList.replace("d-none","d-block")
    emailIinput.classList.remove("is-invalid")
    passwordIinput.classList.add("is-invalid")
}
}else{

    empty1.classList.replace("d-none","d-block")
    empty2.classList.replace("d-block","d-none")
    empty3.classList.replace("d-block","d-none")
    empty4.classList.replace("d-block","d-none")
}



}



function logUp2(){
    
    // console.log(arr1);
    
    if(emptyInputs2()!==false){

if(validation(emailIinputSignIn)==true&&validation(passwordIinputSignIn)==true){
    emailIinputSignIn.classList.remove("is-invalid")
    passwordIinputSignIn.classList.remove("is-invalid")
if(isHere2()==true){

    var data={
        email:emailIinputSignIn.value,
        pasword:passwordIinputSignIn.value,
    }
arr1.push(data)


    emptyIn1.classList.replace("d-block","d-none")
    emptyIn2.classList.replace("d-none","d-none")
    emptyIn3.classList.replace("d-block","d-none")
    emptyIn4.classList.replace("d-block","d-none")
console.log(true);

display2()

}else{

    
    emptyIn1.classList.replace("d-block","d-none")
    emptyIn2.classList.replace("d-block","d-none")
    emptyIn3.classList.replace("d-block","d-none")
    emptyIn4.classList.replace("d-none","d-block")

}


}else if(validation(emailIinputSignIn)!==true){
    emptyIn1.classList.replace("d-block","d-none")
    emptyIn2.classList.replace("d-block","d-none")
    emptyIn3.classList.replace("d-block","d-none")
    emptyIn4.classList.replace("d-none","d-block")
    emailIinputSignIn.classList.add("is-invalid")
}else if(validation(passwordIinputSignIn)!==true){
    emptyIn1.classList.replace("d-block","d-none")
    emptyIn2.classList.replace("d-block","d-none")
    emptyIn3.classList.replace("d-block","d-none")
    emptyIn4.classList.replace("d-none","d-block")
    passwordIinputSignIn.classList.add("is-invalid")
}
}else{

    emptyIn1.classList.replace("d-none","d-block")
    emptyIn2.classList.replace("d-block","d-none")
    emptyIn3.classList.replace("d-block","d-none")
    emptyIn4.classList.replace("d-block","d-none")
  
}


}









function isHere1(){
    for(var i=0;i<arr.length;i++){
        if(arr[i].email==emailIinput.value){
            return true
        }
    }
}
function isHere2(){
    for(var i=0;i<arr.length;i++){
        if(arr[i].email==emailIinputSignIn.value){
            return true
        }
    }
}

function display(){
    Home.classList.replace("d-none","d-block")

   
    document.getElementById("demo").innerHTML = `
    hello  <span class="Name"> ${arr[arr.length-1].name}</span>

    `

    

    signInSection.classList.replace("d-block","d-none")
    signUpSection.classList.replace("d-block","d-none")
}

function display2(){


    for(var i=0;i<arr.length;i++){
        if(arr[i].email==arr1[arr1.length-1].email&&arr[i].pasword==arr1[arr1.length-1].pasword){
            document.getElementById("demo").innerHTML = `
            hello <span class="Name">${arr[i].name}</span>
            `
            // console.log(arr[i].name);
            clearValuesForSignIn()
            Home.classList.replace("d-none","d-block")
            signInSection.classList.replace("d-block","d-none")
            signUpSection.classList.replace("d-block","d-none")
            emailIinputSignIn.classList.remove("is-invalid")
            passwordIinputSignIn.classList.remove("is-invalid") 
        }
 if(arr[i].email!==arr1[arr1.length-1].email){
            passwordIinputSignIn.classList.remove("is-invalid")  
emailIinputSignIn.classList.add("is-invalid")
emptyIn1.classList.replace("d-block","d-none")
emptyIn2.classList.replace("d-block","d-none")
emptyIn3.classList.replace("d-block","d-none")
emptyIn4.classList.replace("d-none","d-block")

        }
         if(arr[i].pasword!==arr1[arr1.length-1].pasword){
            emailIinputSignIn.classList.remove("is-invalid")
            passwordIinputSignIn.classList.add("is-invalid")  
            emptyIn1.classList.replace("d-block","d-none")
            emptyIn2.classList.replace("d-block","d-none")
            emptyIn3.classList.replace("d-block","d-none")
            emptyIn4.classList.replace("d-none","d-block") 
        }
        // else{
        //     passwordIinputSignIn.classList.add("is-invalid")   
        //     emptyIn1.classList.replace("d-block","d-none")
        //     emptyIn2.classList.replace("d-block","d-none")
        //     emptyIn3.classList.replace("d-block","d-none")
        //     emptyIn4.classList.replace("d-none","d-block")
        //     emailIinputSignIn.classList.add("is-invalid")

        // }
    }


}



function validation(element){
    var regex={
        nameIinput:/[a-zA-Z]{3,} ?/,
        emailIinput:/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        passwordIinput:/\w{4,8}/,
        emailIinputSignIn:/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        passwordIinputSignIn:/\w{4,8}/,
    }
  if(regex[element.id].test(element.value)){

return true
    
  }else{


    return false
  }

  
    
}
function emptyInputs1(){
    if(nameIinput.value==""||emailIinput.value==""||passwordIinput.value==""){
        return false;
    }else{
        return true;
    }
}
function emptyInputs2(){
    if(emailIinputSignIn.value==""||passwordIinputSignIn.value==""){
        return false;
    }else{
        return true;
    }
}


function clearValuesForSignUp(){
    nameIinput.value="";
    emailIinput.value="";
    passwordIinput.value="";


}

function clearValuesForSignIn(){
    emailIinputSignIn.value="";
    passwordIinputSignIn.value="";



}