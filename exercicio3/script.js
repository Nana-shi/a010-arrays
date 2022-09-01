/*Exercicio 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
*/

//Arrays Originais
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

//Arrays Copias
const arrayNumCopia = arrayNum.slice()
const arrayStringsCopia = arrayStrings.slice()
const arrayMistuCopia = arrayMistu.slice()

arrayNumCopia.push(50)
console.log("Array Numeros:", arrayNum,"\nArray Numeros Copia:", arrayNumCopia)

arrayStringsCopia.pop()
console.log("Array String:", arrayStrings, "\nArray Strings Copia:", arrayStringsCopia)

arrayMistuCopia.splice(1,1)
console.log("Array Misturado:", arrayMistu, "\nArray Misturado Copia:", arrayMistuCopia)

/*Fim da Atividade*/