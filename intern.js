function intern(arr) {
    let result = [];
    let duplicateResult = [];
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i].split("").sort().join(""));
    }
    for (let i = 0; i < arr2.length; i++) {
        let found = false;
        for (let j = i + 1; j < arr2.length; j++) {
            if (arr2[i] === arr2[j]) {
                result.push([arr[i], arr[j]]);
                duplicateResult.push(arr[j]);
                found = true;
                break;
            }
        }
        if (found === false && duplicateResult.includes(arr[i]) === false) {
            result.push([arr[i]]);
        }
    }
    return result;
}
console.log(intern(["idea", "idae", "bsnl", "nsbl", "grasim", "bata"]));
console.log(intern(["data", "data"]));
