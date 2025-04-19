// var name=prompt('Enter your name: ')
// console.log(name)
// // Switch structure
// // switch(){
// //     case:
// //         output
// //         break
// //     case:
// //         output
// //         break
// //     case:
// //         output
// //         break
// // }
// switch(1){
//     case 1: 
//         console.log('one');
//         break
        
//     case 2: 
//         console.log('two');
//         break
//     case 3: 
//         console.log('three');
//         break
//     default:
//         console.log('Not Working')
//         break
// }

// switch(name){
//     case 'Emmy':
//         console.log('Welcome Mr.CEO EMMY')
//         break
//     case 'Real Madrid':
//         console.log('We made upto $6,2,000,000 in the last couple of months')
//         break
//     case 'John':
//         console.log('John, Able Secretary Welcome')
//         break
//     default:
//         console.log('You dont work here')
//         break
// }
var name=prompt('Enter your name: ')
function submitfile(){
    
    username = document.getElementById("username")
    password = document.getElementById("password")
    date = document.getElementById("date")
    showmessage = document.getElementById("emmy")
    
    var user1 = "emmy001"
    var pass1 = "Emzy0411"
    var date1 = (2025 - 18)

    if(username.value===user1 && password.value===pass1 && date.value===date1){
        alert("LOG IN SUCCESSFUL")
    }else{
        alert("Error Logging In")
    }
    // Calculate age
    

    switch(true){
        case username.value===user1 && password.value===pass1 && date.value===date1:
            showmessage.style.color='green'
            showmessage.style.fontSize ='10pxs'
            showmessage.innerHTML="LOG IN SUCCESSFUL"
            break
        case username.value!==user1 && password.value===pass1 && date.value===date1:
            showmessage.innerHTML="Username is Incorrect"
            break
        case username.value===user1 && password.value!==pass1 && date.value===date1:
            showmessage.innerHTML="Password is incorrect"
            break
        case username.value!==user1 && password.value!==pass1 && date.value===date1:
            showmessage.innerHTML="BOTH CREDENTIALS ARE WRONG"
        default:
            console.log("This page is not for you bruh")
            break
    }
    return false
}

// add date of birth to the form and the system will calculate if the person is upto 18