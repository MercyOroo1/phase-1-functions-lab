// Code your solution in this file!
// function distanceFromHqInBlocks (block) {
//     if (block > 42) {
//     let result = block - 42
    
// }else { result = 42 - block }
// return result
// }

function distanceFromHqInBlocks (block) {
    if (block >=42 ) {
        let result = block - 42
        return result
    } else { let result2 = 42 - block
    return result2}
}

function distanceFromHqInFeet (block) {
   let feet =  distanceFromHqInBlocks(block) * 264
return feet
}

function distanceTravelledInFeet (block,dis) {
    if (dis > block) {
        let distance = (dis-block)*264
        return distance
    }else { let distance2 = (block-dis)*264
    return distance2}
}
function calculatesFarePrice (block,dis){
    let feetTotal = distanceTravelledInFeet (block,dis)
    if (feetTotal <=400) {
        let fare = 0
        return fare
    } if (feetTotal<=2000 ){
        let charged = feetTotal-400
   
            let fare1 = charged*0.02
            return fare1 }

        if (feetTotal <=2500) {
            let fare2 = 25
            return fare2} else {
            let message ='cannot travel that far'
              return message

} }