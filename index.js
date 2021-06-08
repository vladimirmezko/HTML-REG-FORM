let text = document.getElementById("text")
let firstName = document.getElementById("firstName");
let select_type = document.getElementById("select_type");
let email = document.getElementById("email");
let Mobile = document.getElementById("Mobile");
let GENDER = document.getElementById("GENDER");
let lastName = document.getElementById("lastName");
let password = document.getElementById("password");
let notify = document.getElementById("notify");
let role = document.getElementById("role");


let bt = document.getElementById("text1");

bt.addEventListener("click", function() {
   
text.innerText += `
First Name: ${firstname.value}
Last Name: ${lastname.value}
 ${select_type.options[select_type.selectedIndex].text} 
 ${select_type1.options[select_type1.selectedIndex].text}
 ${select_type2.options[select_type2.selectedIndex].text}
Email: ${email.value}
Mobile: ${mobile.value}
Gender: ${GENDER.value}

Address: ${ADDRESS.value}
City: ${CITY.value}
PIN: ${PIN.value}
State: ${STATE.value}
Country: ${COUNTRY.value}
checkbox ${check1.value}
checkbox ${check2.value}
checkbox ${check3.value}
checkbox ${check4.value}
checkbox ${check5.value}
`
});

function getRadioName() {
    for (let i = 0; i < radio.length; i++) {
    if(radio[i].checked) {
    return radio[i].value;
    }
    }
    }

