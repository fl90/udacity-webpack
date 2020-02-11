function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

function getTemp(event){

    console.log("dies ist ein test");
    event.preventDefault()

    let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
    let apiKey = '4cd64f1b7cc1a1a130ee7dda260b1789';

    let name = document.getElementById("name");
    let list = document.getElementById("results");
    console.log(name.value);

    retrieveData(baseURL + name.value + '&APPID=' + apiKey)
    .then(function(data){

        list.innerHTML = data.main.temp + ' K';
        // postData('http:localhost:3000/add', {
        //     temperature : calcTemp(data.main.temp) + ' °C', 
        //     date: newDate, 
        //     user_response: userResponse.value})
        //     .then(function(receivedData){
        //         updateUI(receivedData)
        //     })
    });
}

/* Function to GET Web API Data*/
const retrieveData = async(url='') => {
    const request = await fetch(url);
    try{
        // transform retrieved data into json
        const allData = await request.json();
        return allData;
    }
    catch(error){
        console.log("error: " + error);
    }
};



export { handleSubmit, getTemp }
