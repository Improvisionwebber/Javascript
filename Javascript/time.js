//  var x = new Date()
//  console.log(x)
//  var y = new Date(0)
//  console.log(y)
//  var aDayAfter = new Date(24*60*60*1000)
//  console.log(aDayAfter)
//  var aDayBefore = new Date(-24*60*60*1000)
//  console.log(aDayBefore)
//  var sevendaysafter = new Date(168*60*60*1000)
//  console.log(sevendaysafter)
//  var todaysdate = new Date('2025-4-17')
//  console.log(todaysdate)
//  var methodone = new Date(2025,0,3,0,0,0,0)
//  console.log(methodone)

function submitfile(){
    r = 
    name = document.getElementById('jname').value 
    console.log(name)
    DOB = document.getElementById('dob').value
    g = new Date(DOB).getFullYear()
    console.log(g)
    return false   
}

//#Getting a Year
var thisyear = new Date('2025-4-18')
console.log(thisyear.getFullYear())

 54  
// Getting a day
var birthday = new Date('April-18-2025-13:54')
console.log(birthday.getDay())

// Get hours
var emmyhrs = new Date ('2025-4-18-13:57')
console.log(emmyhrs.getHours())

// Get Mins
var emmymins = new Date ('2025-4-18-13:57:20') 
console.log(emmymins.getMinutes())

// Get Seconds
var emmysecs = new Date ('2025-4-18-13:57:20')
console.log(emmysecs.getSeconds())

