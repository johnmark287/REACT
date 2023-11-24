const range = (count, start = 1, step = 1) => {
    let arr = [];
    for (let i = 0, num = start; i < count; i++, num += step) arr.push(num)
    return arr;
}

export default range;
