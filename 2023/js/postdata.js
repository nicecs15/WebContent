// Example POST method implementation:
async function postData(url, data) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


async function postApi() {
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value

    if (fname && lname && email && phone) {
        postData('http://192.168.63.5:8080/ecm/rs/contact/submit', {
                fname: fname,
                lname: lname,
                email: email,
                phone: phone,
                message: document.getElementById('comment').value
            })
            .then((data) => {
                console.log(data); // JSON data parsed by `data.json()` call
                alert("ส่งข้อความสำเร็จ")
                clearsContact()
            }).catch();
    } else {
        alert('โปรดกรอกข้อมูลให้ครบ');
    }

}

function clearsContact() {
    document.getElementById('fname').value = ""
    document.getElementById('lname').value = ""
    document.getElementById('email').value = ""
    document.getElementById('phone').value = ""
    document.getElementById('comment').value = ""
}