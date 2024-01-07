const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
/*function myAccumulator(anArray){
    for(let i=anArray[0];i<anArray.length;i++)
    return anArray++;
}*/
// Code your solution here
const batteryBatches2=batteryBatches.reduce(function(accumulator,element){
  return element +  accumulator 
},0)