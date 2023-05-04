// Code your solution in this file!
const hq = 42 
function distanceFromHqInBlocks(start){
if (start > hq){
    return start - hq 
}
if (start < hq){
    return hq - start
}
if (start === hq){
    return hq 
}
}

function distanceFromHqInFeet(start){
    return distanceFromHqInBlocks(start) * 264
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return (start - destination) * 264
    }
    if (start < destination){
        return (destination - start) * 264 
    }
    if (start === destination){
        return 0
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0
    } 
    else if (distance > 400 && distance <=2000){
        return (distance - 400) * .02 
    }
    else if (distance > 2000 && distance < 2500){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
    

    
}
