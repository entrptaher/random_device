function repeatFillArray(arr, arr2){
  if(arr.length < arr2.length){
    arr = arr.concat(arr)
    return repeatFillArray(arr,arr2)
  }else{
    return arr.slice(0, arr2.length)
  }
}
var arr = [1,2,3,4]
var arr2 = [1,2,3,4,5]

console.log(repeatFillArray(arr, arr2))
