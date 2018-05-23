import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database=firebase.database();

  export {firebase,database as default};

  // //call when data is changed
  // database.ref('expenses').on('child_changed',(data)=>{
  //   console.log(data.key,data.val());
  // });

  // // call when data is removed
  // database.ref('expenses').on('child_removed',(data)=>{
  //   console.log(data.key,data.val());
  // });

  // // call when data is added newly and existing one
  // database.ref('expenses').on('child_added',(data)=>{
  //   console.log(data.key,data.val());
  // });

//   database.ref('expenses')
//           .once('value')
//           .then((data)=>{
//             const expenses=[];
//             data.forEach((expense)=>{
//                 expenses.push({
//                     id:expense.key,
//                     ...expense.val()
//                 });
//             });
//             console.log(expenses);
//           });

// subscribe 
// database.ref('expenses')
//         .on('value',(data)=>{
//             const expenses=[];
//             data.forEach((expense)=>{
//                 expenses.push({
//                     id:expense.key,
//                     ...expense.val()
//                 });
//             });
//             console.log(expenses)
//         });

//   const expenses={
//       description:'Coffee',
//       note:'CCD Coffee paid by me',
//       amount:200,
//       createdAt:1000
//   }
//   database.ref('expenses').push({
//     description:'phone bill',
//     note:'',
//     amount:2000,
//     createdAt:1900050
//   });
//   database.ref('expenses').push({
//     description:'Food',
//     note:'',
//     amount:500,
//     createdAt:190025000
//   });

//   database.ref('notes/-LD8M43S-rERyGuPOAor').update({
//       title:'My Goals'
//   })

//   database.ref('notes').push({
//       title:'Game Types',
//       body:'CS,Call Of Duty,NFS'
//   })

//   database.ref().on('value',(data)=>{
//     console.log(data.val());
//   });

//   setTimeout(() => {
//     database.ref('age').set(30);
//   },5000);

//   database.ref('job')
//         .once('value')
//         .then((data)=>{
//             console.log(data.val());
//         }).catch((e)=>{
//             console.log('error',e);
//         })
            

//   database.ref().set({
//       name:'Gaurav Kumar',
//       age:28,
//       stressLevel:6,
//       job:{
//           title:'Software Devloper',
//           company:'Google'
//       },
//       location:{
//           city:'Banglore',
//           country:'IND'
//       }
//   }).then(()=>{
//     console.log('Data is saved!');
//   }).catch((e)=>{
//     console.log('failed',e);
//   })

// database.ref('isAdult')
//     .remove()
//     .then(()=>{
//         console.log('Data removed successfully');
//     }).catch((e)=>{
//         console.log('error removing data');
//     })

//database.ref('age').set(null);

// database.ref().update({
//     job:'Manager',
//     'location/city':'noida'
// })

// database.ref().update({
//     stressLevel:9,
//     'job/company':'Amazon',
//     'location/city':'Hyderabad'
// }).then(()=>{
//     console.log('updated secced');
// }).catch((e)=>{
//     console.log('error while updating');
// })



