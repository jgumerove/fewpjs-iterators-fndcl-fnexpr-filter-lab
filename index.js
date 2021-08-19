// Code your solution here

const findMatching = (array, name) => {
    return array.filter(x => x.toLowerCase().includes(name.toLowerCase()))

    }

const fuzzyMatch = (array, name) => {
    return array.filter(x => x[0].toLowerCase().includes(name[0].toLowerCase()))
}

const matchName = (array, string) => {
    return array.filter(x => x.name === string)
}

