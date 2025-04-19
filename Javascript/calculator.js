function submitfile(){
    date = document.getElementById("date").value
    a = new Date(date).getFullYear()

    var age = new Date('2025-4-15').getFullYear()
    console.log(age-a)

    // age === age - dob
    return false
}
