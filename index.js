function submitData(name, email){
    const formData = {
        name: name,
        email: email
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            // Get the _id_ from object and append to the DOM
            const id = object['id'];
            // ..and append to the DOM
            // document.querySelector(whatelement).whateverYouNeedToDo
            document.querySelector('#output').innerHTML = id;
        })
        .catch(function (error) {
            document.querySelector('#output').innerHTML = error.message  
        })

        
}

