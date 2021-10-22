let Plant = require("./src/platOfTree/plant")
var prompt = require('prompt-promise');


let forest = [new Plant(
    "oak",
    [1, 1]
),
    new Plant(
        "oak",
        [2, 2]
    )

];
let typeOfWood = [
    "apple",
    "berch",
    "oak"
];

async function newTree() {
    let tree = await prompt("PRINT what type of wood do you wanе (" + typeOfWood + "): ")
    let row = await prompt(`PRINT what row you wanе (1-3): `)
    let position = await prompt('PRINT what position you wanе (1-3): ')
    if (forest.find((tree) => tree.getPlantingTree()[0] == row-1 && tree.getPlantingTree()[1] == position-1) == undefined) {
        forest.push(new Plant(tree, [row - 1, position - 1]))
    } else console.log("!!! place is taken other Tree !!! ")
    await printForest(forest)
    let repit = await prompt("plant new tree y/n:")
    if("y"==repit ){
      await newTree()
    }
    await prompt.finish()
}


async function printForest(woods) {
    let arr = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]
    await forest.forEach(element => {
        let poz = element.getPlantingTree()
        let tree = element.getTreeType()
        let type = '*'
        switch (tree) {
            case "apple":
                type = "♧"
                break
            case "berch":
                type = "℘"
                break
            case "oak":
                type = "♣"
                break
        }
        arr[poz[0]][poz[1]] = type
    })
    for (let i = 0; i < 3; i++) {

        console.log(`+---+---+---+
| ` + arr[i][0] + ` | ` + arr[i][1] + ` | ` + arr[i][2] + ` |`
        )
    }
    console.log("+---+---+---+")
    return arr

}

(async () => {
    await printForest(forest)
    await newTree()
})();





