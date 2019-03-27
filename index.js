
let promise = new Promise((resolve,reject)=>{
  let a = 1+3;
  if (a == 2){
    resolve('from resolve')
  }else{
    reject('from reject')
  }
});

promise.then(alert);
promise.then(message=>alert(`it's `+ message));
promise.catch(message=>alert(`it's `+ message));