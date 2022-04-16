function coupleEntry(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count += 1;
            }
        }
    }
    return count;
}
console.log(coupleEntry([1, 2, 3, 1, 2]));
console.log(coupleEntry([1, 2, 3]));
console.log(coupleEntry([1, 2, 1, 2, 1]));
