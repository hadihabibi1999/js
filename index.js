
let promise = new Promise((resolve,reject)=>{
  let a = 1+3;
  if (a == 2){
    resolve('done')
  }else{
    reject('failed')
  }
});

promise.then(alert);
promise.then(message=>alert(`it's `+ message));
promise.catch(message=>alert(`it's `+ message));