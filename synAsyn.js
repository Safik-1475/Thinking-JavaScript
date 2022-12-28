// Synchronous examples 
const processOrder = ()=>{
    console.log(`Hello Synchronous`);
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
};
// processOrder();
// console.log(`Order is processing....`);


// Asynchronous examples 
setTimeout(()=>{
    // console.log(`Asynchronous is running now`);
},3000);
// console.log(`Frontend Engineer`);

const processingOrder = ()=>{
    console.log(`Processing order for customer...`);
    setTimeout(()=>{
        // console.log(`Order is processed now`);
    },1000);
    // console.log(`Congratulations your order is processed by Safik`);
};
// processingOrder();


const takeOrder = (customer,callback) =>{
    console.log(`Order has taken for ${customer}`);
    callback(customer);
};

const processingCustomerOrder = (customer,callback)=>{
    console.log(`Processing ${customer} please wait!`);
    setTimeout(()=>{
        console.log(`order completed `);
        console.log(`Order completed for ${customer}`);
        callback(customer)
    },1000);
};

const completeOrder = customer =>{
    console.log(`Completed order for ${customer}`);
};

// takeOrder(`Customer 1`,(customer)=>{
//     processingCustomerOrder(customer,(customer)=>{
//         completeOrder(customer);
//     });
// });


// CREATING PROMISE 

const hasMeeting = true;
const meeting = new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails = {
            name : 'Technical Meeting',
            location : 'Google Meeting',
            time : '10:00 PM',
        };
        resolve(meetingDetails);
    }else{
        // reject(new Error(`Meeting already scheduled`));
    }
});
const addToCalendar = (meetingDetails)=>{
    const calendar = `${meetingDetails.name} has been scheduled ${meetingDetails.location} at ${meetingDetails.time} `;
    return Promise.resolve(calendar);
}
// console.log(addToCalendar);
// meeting
//     .then(addToCalendar)
//     .then(res=>{
//         console.log(res);
//     })
//     .catch(err=>{
//         console.log(err.message);
//     });


// CONVERT ASYN AWAIT 

async function myMeeting (){
    try{
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    }catch{
        console.log(`Something has wrong`);
    }
};

// myMeeting();


// ANOTHER EXAMPLES 

// synchronous example

function mySynchro (){
    let i = 1;
    while(i<10){
        console.log(i);
        i++;
    }
    console.log('Hello Synchronous');
};
// mySynchro();

const numb = [2,3,12,40,30];
const newNumb = [];
for (let i = 0; i < numb.length; i++) {
    // newNumb.push()
    newNumb.push(numb[i] * 2);
};
// console.log(newNumb);



// Asynchronous example 
const takeCustomerOrder = (customer,callback)=>{
    console.log(`${customer} has confirm a order please wait... sir`);
    callback(customer);
};

const customerOrderProcessing = (customer,callback)=>{
    setTimeout(()=>{
        console.log(`${customer} Your order has completed` );
    },2000);
    callback(customer);
};

const customerOrderCompleted = (customer)=>{
    console.log(`${customer} for order completed`);
};

// takeCustomerOrder('Safikur Rahman', (customer)=>{
//     customerOrderProcessing(customer,(customer)=>{
//         customerOrderCompleted(customer);
//     })
// });

const hasZoomMeeting = false;
const zoomMeeting = new Promise((resolve,reject)=>{
    if(!hasZoomMeeting){
        const zoomMeeting = {
            name : 'Google Zoom Meeting ',
            topic : 'Technical Idea',
            time : '10:00 PM',
        };
        resolve(zoomMeeting);
    }else {
        reject(new Error(`Meeting already scheduled`));
    }
});

// zoomMeeting
//     .then(res=>{
//         console.log(res);
//     })
//     .catch(err=>{
//         console.log(err);
//     })