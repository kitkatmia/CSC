function myPromises() {
    new Promise ((resolve, reject) => {
        let obj = {
            str: 'my string'
        }
    
    resolve(obj)})
}

console.log(myPromises())