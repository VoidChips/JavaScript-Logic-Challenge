let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const organize = arr => {
    let copy = arr;
    copy.sort((a, b) => a - b);
    //console.log('In order: ', copy);
    let newArray = [];
    for (item of copy) {
        const index = copy.indexOf(item);
        let sameValArray = [];
        // if there's more than one of the item, make an array of them and push it
        if (item === copy[index+1]) {
            sameValArray = copy.filter(x => x === item);
            newArray.push(sameValArray);
        }
        // if there's only one of the item, push it
        else {
            newArray.push(item);
        }
        // delete the next item while it is equal to the the current item
        while (item === copy[index+1])      {
            copy.shift();
        }
    }

    return newArray;
}

organize(array);