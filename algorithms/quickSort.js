function quickSort(arr){
    if(arr.length <= 1)
        return arr

    let lowNumbers = []
    let highNumbers = []
    let pivot = Number(arr[0])

    for(var i = 1; i < arr.length; i++){
        var current = Number(arr[i])
        if(current <= pivot)
            lowNumbers.push(current)
        else
            highNumbers.push(current)
    }
    return quickSort(lowNumbers).concat([pivot],quickSort(highNumbers))
}
