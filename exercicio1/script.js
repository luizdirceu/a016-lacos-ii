const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

if (array.length === 5) {
    for (let contador1 = 0; contador1 < array.length; contador1++) {
        let gols = ` jogador ${contador1 + 1}: `
        for (let contador2 = 0; contador2 < array[contador1].length; contador2++) {
            gols += `${array[contador1][contador2]} `
        }
console.log (gols)
    }

}

