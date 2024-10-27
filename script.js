document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username  = document.getElementById('userName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Store data in localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('userName', username);
    localStorage.setItem('email', email);
    localStorage.setItem('address', address);

    // Redirect to success.html
    window.location.href = 'success.html';
});



// function alertSomething(){

//     let fname = document.getElementById('firstName').value
//     const nameone = document.getElementById('nameOne')
//     nameone.innerHTML = fname

//     let lname = document.getElementById('lastName').value
//     const nametwo = document.getElementById('nameTwo')
//     nametwo.innerHTML = lname 

//     let email = document.getElementById('email').value
//     const dot = document.getElementById('userEmail')
//     dot.innerHTML = email

//     let userage = document.getElementById('age').value
//     const agge = document.getElementById('userAge')
//     agge.innerHTML = userage

//     let dept = document.getElementById('track').value
//     const tracks = document.getElementById('userTrack')
//     nameone.innerHTML = dept
// }

//     console.log('alertSomething ')
// }   
// function signUp(){
//     const firstName = document.getElementById('fname').value;
//     const lastName = document.getElementById('lname').value;
//     const email = document.getElementById('email').value;
//     const age = document.getElementById('age').value;
//     const userTrack = document.getElementById('track').value;
    
    
//     console.log(firstName)
//     console.log(lastName)
//     console.log(email)
//     console.log(age)
//     console.log(userTrack)

//     alert(`This is my name: ${firstName} ${lastName}`)

// }

// const studentRecords = [
// {
//     "firstName" : "John",
//     "lastName" : "doe",
//     "id" : "OOF-13",
//     "age" : "25"

// },
// {
//     "firstName" : "Jane",
//     "lastName" : "Doe",
//     "id" : "OOF-14",
//     "age" : "20"

// },
// {
//     "firstName" : "Sam", 
//     "lastName" : "Doe",
//     "id" : "OOF-15",
//     "age" : "14"
// }
// ]  



// console.log(studentRecords)
// map method
// studentRecords.map( (eachStudent) =>{
//    const displayElement = document.getElementById("displayStudentRecords");
//    displayElement.innerHTML += `
//    <p>Firstname: ${eachStudent.firstName}</p>
//    <p>Lastname: ${eachStudent.lastName}</p>
//    `
// console.log(eachStudent)
// }) 

// const filteredStudents = studentRecords.filter((eachStudent) =>{
//     return(eachStudent.age ===20)
//     console.log('Filtered Students', filteredStudents)
// })


// async function makingRequest(){

//     const displayData = document.getElementById("displayUserData");
//     console.log(displayData)

//     const fetchedData = await fetch('https://jsonplaceholder.typicode.com/users')
//        const parsedData = await fetchedData.json()
//        localStorage.setItem('userData',JSON.stringify(parsedData) )
    //    console.log(parsedData) 
    // parsedData.forEach((userData) => {
    //     displayData.innerHTML += `<p>
    //     Name: ${userData.name}
    //     </P>`
    // })

//     try{
 
//     } catch(err){
//      console.log('error', err)
//     }

// }


// fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((data) =>console.log(data))

// makingRequest()

// function fetchData() {
//     const displayData = document.getElementById('secondPageDisplay');
//     const userData = JSON.parse(localStorage.getItem('userData'))
//     console.log('Second Page Data', userData)
//     userData.forEach((data) => {
//         displayData.innerHTML += `
//         <div class="user" > 
//         <p>Name: ${data.name}</P>
//        <p>Email: ${data.email} </p>
//         </div>
//         `
//     })
//         const removeItem =()=>{
//             localStorage.removeItem('userData')
//             window.location.reload()
//         }
// }


// const inputField = document.getElementById('myInput');
// const displayImage = document.getElementById('displayImage');

// inputField.addEventListener( 'change',function(event){
//     const file = event.target.files [0]
//     console.log(file)

//     const reader = new FileReader()
//     reader.onload = function(event){
//         displayImage.src  = event.target.result;
//     };

//     reader.readDataURL(file);
// })



// function displayAvatar(event){
//     console.log(event)
// }
