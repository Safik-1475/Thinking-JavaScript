const getButton = document.getElementById('get-btn');
const sendButton = document.getElementById('send-btn');
// console.log(getButton,sendButton);

// const getData = ()=>{
//     const xhr = new XMLHttpRequest();
//     // console.log(xmr);
//     xhr.open('GET','https://jsonplaceholder.typicode.com/users');
//     xhr.send();

//     xhr.onload = function(){
//         const result = xhr.response;
//         const data = JSON.parse(result);
//         console.log(data);
//     }
// };

// const sendData = ()=>{
    
// }

const sendRequest = (method,url,data)=>{
    const promise = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-type','application/json');
        xhr.send(data);
        xhr.onload = ()=>{
            resolve(xhr.response);
        };

        xhr.onerror = ()=>{
            reject('Something was wrong!')
        }
    });
    return promise;
};

const getData = ()=>{
    sendRequest('GET','https://jsonplaceholder.typicode.com/users')
    .then((responseData)=>{
        // console.log(responseData);
        const data = responseData;
        console.log(data);
    });
};

const sendData = ()=>{
    sendRequest('POST','https://jsonplaceholder.typicode.com/posts',JSON.stringify({
        name : 'Safikur Rahman',
        age : 21,
        profession : 'Frontend Engineer',
    })).then(responseData=>{
        console.log(responseData);
    })
    .catch(error=>{
        console.log(error);
    })
}

getButton.addEventListener('click',getData);
sendButton.addEventListener('click',sendData)