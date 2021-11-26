export const isSuperSet = (superSet, subSet) => {
    let isSuperSetFlag = true

    subSet.forEach(item => {
        if(!superSet.has(item)) {
            isSuperSetFlag = false;
            return;
        }   
    })
    
    return isSuperSetFlag;
}

export const intersection = (setA, setB) => {
    let interResult = new Set()

    setB.forEach(item => {
        if(setA.has(item))
            interResult.add(item)
    })

    return interResult
}

export const union = (setA, setB) => {
    let unionResult = new Set(setA)

    setB.forEach(item => unionResult.add(item))

    return unionResult
}

export const difference = (setA, setB) => {
    let diffResult = new Set(setA)

    setB.forEach(item => {
        diffResult.delete(item)
    })

    return diffResult
}

export const multiplyPrice = (formattedPrice, multiplier) => {
    return "$" + parseFloat(formattedPrice.slice(1)) * multiplier
}