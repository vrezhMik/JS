function binarySearch(arr, target, start = 0) {

    if (arr.length == 0)
        return "Target not found"

    let mid = Math.floor(arr.length / 2);
    if (target == arr[mid])
        return start + mid
    else if (target > arr[mid])
        return binarySearch(arr.slice(mid + 1), target, start + mid + 1)
    else if (target < arr[mid])
        return binarySearch(arr.slice(0, mid), target, start)
}
