/*Exercicio 2

Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
*/

const arrayNum = [89, 69, 35, 74]
const arrayStrings = ["Pão", "Batata", "Biscoito", "Bolacha"]
const arrayMistu = [69, "Tubarão", true]

console.log("Array Numeros:", arrayNum)
console.log("Array Strings:", arrayStrings)
console.log("Array Misturado:", arrayMistu)

console.log("Array Numeros tamanho:", arrayNum.length)
console.log("Array Strings tamanho:", arrayStrings.length)
console.log("Array Misturado tamanho:", arrayMistu.length)

console.log("Conteudos 1,2 e 3 dos respectivos Arrays:", arrayNum[0], arrayStrings[1], arrayMistu[2])

console.log("Array Numeros contem \"69\":", arrayNum.includes(69), "\nArray Misturado contem \"Feijoada\":", arrayMistu.includes("Feijoada"))

/*Fim da segunda atividade*/
