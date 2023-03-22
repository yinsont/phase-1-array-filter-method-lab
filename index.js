// Code your solution here
findMatching = (arr, str) => {
    let ans = arr.filter(name => name.toLowerCase() === str.toLowerCase())
    return ans
}

fuzzyMatch = (arr,str) => {
    
    let ans = arr.filter(name => name.slice(0,str.length) === str.slice())

    return ans
}

matchName = (arr, str) => {

    // arr.name === str
    let ans = arr.filter(driver => driver.name === str)
    return ans
}