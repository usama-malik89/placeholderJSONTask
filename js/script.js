var colors = [
    "card text-white bg-primary mb-3",
    "card text-white bg-secondary mb-3",
    "card text-white bg-success mb-3",
    "card text-white bg-danger mb-3",
    "card text-white bg-warning mb-3",
    "card text-white bg-info mb-3",
    "card bg-light mb-3",
    "card text-white bg-dark mb-3"
  ];

  var prevRandom = 1;

function random(){
    let rand = Math.floor(Math.random()*colors.length);

    if(rand == prevRandom){
        return random();
    }
    else{
        prevRandom = rand;
        return colors[rand];
    }
}

function getData() {
    fetch('http://jsonplaceholder.typicode.com/comments')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(function (data) {
                    createPara(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function createPara(data){
    for (let i =0; i<data.length;i++) {
    let CardDiv = document.createElement("div"); 
    CardDiv.className = random();

    let headerDiv = document.createElement("div");
    headerDiv.className = "card-header";
    headerDiv.innerText = `${data[i].id}`;

    let bodyDiv = document.createElement("div");
    bodyDiv.className = "card-body";

    let title = document.createElement("h5");
    title.className = "card-title";
    title.innerText = `By ${data[i].email}`;

    let text = document.createElement("p");
    text.className = "card-text";
    text.innerText = `${data[i].body}`;


    CardDiv.appendChild(headerDiv);
    bodyDiv.appendChild(title);
    bodyDiv.appendChild(text);
    CardDiv.appendChild(bodyDiv);
    
    
  let myDiv = document.getElementById("mainContainer");
    myDiv.appendChild(CardDiv);
    }
}

getData();