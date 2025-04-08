const userInputFlavors = prompt(
    "Enter a list of comma-separated froyo flavors"
);
const flavors =[ "chocolate", "strawberry", "vanilla"]

const newObj = flavors.reduce((flavorObj, flavor, idx)=>{
    flavorObj[flavor] = idx;
    return flavorObj
   } , {})

 console.log(newObj)