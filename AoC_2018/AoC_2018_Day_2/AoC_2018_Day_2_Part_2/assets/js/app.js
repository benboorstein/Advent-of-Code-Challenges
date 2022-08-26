// Before trying AoC 2018 Day 2 Part 2, try to do with two EXACTLY MATCHING strings, just for practice:


// // THE SHORT WAY (using filter())
// const boxIDsArr = [
//   'abcde',
//   'fghij', ///// match
//   'klmno',
//   'pqrst',
//   'fghij', ///// match
//   'axcye',
//   'wvxyz'
// ]

// let getMatch = boxIDsArr.filter((str, index) => boxIDsArr.indexOf(str) != index)
// // Step by step:
// // ... => boxIDsArr.indexOf(str) != index)
// // For 'abcde': ... => 0 != 0 -> false
// // For 'fghij': ... => 1 != 1 -> false
// // For 'klmno': ... => 2 != 2 -> false
// // For 'pqrst': ... => 3 != 3 -> false
// // For 'fghij': ... => 1 != 4 -> true // 'boxIDsArr.indexOf(str)' evaluates to 1 because 1 is the index of the FIRST OCCURRENCE of the string 'fghij'. Is this why this works? Yes.
// // For 'axcye': ... => 5 != 5 -> false
// // For 'wvxyz': ... => 6 != 6 -> false

// console.log(getMatch) // [ 'fghij' ]


// // THE MEDIUM WAY (using forEach())
// const boxIDsArr = [
//   'abcde',
//   'fghij', ///// match
//   'klmno',
//   'pqrst',
//   'fghij', ///// match
//   'axcye',
//   'wvxyz'
// ]

// function findMatch(inputArr) {
//   let arrWithMatch = []
//   inputArr.forEach((str, index) => {
//     if (inputArr.indexOf(str) != index) {
//       arrWithMatch.push(str)
//     }
//   })
//   return arrWithMatch
// }
// console.log(findMatch(boxIDsArr)) // [ 'fghij' ]


// // THE LONG WAY (using 'for' loop)
// const boxIDsArr = [
//   'abcde',
//   'fghij', ///// match
//   'klmno',
//   'pqrst',
//   'fghij', ///// match
//   'axcye',
//   'wvxyz'
// ]

// function findMatch(inputArr) {
//   let arrWithMatch = []
//   for (let i = 0; i < inputArr.length; i++) {
//     if (inputArr.indexOf(inputArr[i]) != i) {
//       arrWithMatch.push(inputArr[i])
//     }
//   }
//   return arrWithMatch
// }
// console.log(findMatch(boxIDsArr)) // [ 'fghij' ]


//-------------------------------------------------
//-------------------------------------------------


// The actual AoC challenge:


// // How to take the example puzzle input provided by AoC (exactly as it is presented there) and convert it into the array of strings needed for the challenge.
// // Note that what's stored in 'examplePuzzleInput' just below is a direct translation, so to speak, to JS of what is provided in the AoC challenge. I.e....
// /*
//     ...this on the AoC page...
//         abcde
//         fghij
//         klmno
//         pqrst
//         fguij
//         axcye
//         wvxyz
//     ...is this in JavaScript...
//         'abcde\nfghij\nklmno\npqrst\nfguij\naxcye\nwvxyz' // one long string broken up by the 'new line' character
// */
// const examplePuzzleInput = 'abcde\nfghij\nklmno\npqrst\nfguij\naxcye\nwvxyz'
// const boxIDsArr = examplePuzzleInput.split('\n') // ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz']


// // The EXAMPLE puzzle input provided by AoC (but skipping the steps described above)
// const boxIDsArr = [
//     'abcde',
//     'fghij', // correct box, partnered with box at index 4
//     'klmno',
//     'pqrst',
//     'fguij', // correct box, partnered with box at index 1
//     'axcye',
//     'wvxyz'
// ]


// The ACTUAL puzzle input provided by AoC (but skipping the steps described above)
const boxIDsArr = [
    'cvfueihajytpmrdkgsxfqplbxn',
    'cbzueihajytnmrdkgtxfqplbwn',
    'cvzucihajytomrdkgstfqplqwn',
    'cvzueilajytomrdkgsxfqwnbwn',
    'cvzueihajytomrdkgsgwqphbwn',
    'wuzuerhajytomrdkgsxfqplbwn',
    'cyzueifajybomrdkgsxfqplbwn',
    'cvzueihajxtomrdkgpxfqplmwn',
    'ivzfevhajytomrdkgsxfqplbwn',
    'cvzueihajytomrdlgsxfqphbbn',
    'uvzueihajjtomrdkgsxfqpobwn',
    'cvzupihajytomrdkgsxfqplpwe',
    'cvzueihajyvomrdkgsxfqplbrl',
    'cczueihajytomrdkgsnfqpxbwn',
    'cvzueigajytdmrdkgsxyqplbwn',
    'cvzujihljytomrdkgsxuqplbwn',
    'cvzueisajytomrddgsxkqplbwn',
    'cvzneihajytomrdkgsgaqplbwn',
    'cvzueihajytomrdkgsinmplbwn',
    'cveueihajyromrdkgsxfqplown',
    'cypueihajytotrdkgzxfqplbwn',
    'cvzuoihajytomvdqgsxfqplbwn',
    'cvzuekhejytwmrdkgsxfqplbwn',
    'cvzseihajytomrdkgsxfqgmbwn',
    'cvfuhihajytomrdkgsxfqplbwi',
    'cvzueihujxtomrdkgsufqplbwn',
    'cvzueihdjytomrdogsxfqplbwh',
    'cvzueihdjyfohrdkgsxfqplbwn',
    'cvtudihajytolrdkgsxfqplbwn',
    'cvzueihajytymrdkgshzqplbwn',
    'cvzuebhajytomxdkgsxfqplbwt',
    'cvzulihajyxomrdkgsbfqplbwn',
    'cvzueihajywomrdkgsxfqplbts',
    'cvzueihajytouodkdsxfqplbwn',
    'cvzueihajytomgdkgqxfqklbwn',
    'cvzubihajytomvdkgsxfqplmwn',
    'cvhueihajyyocrdkgsxfqplbwn',
    'zvzueihajytourdkgsxflplbwn',
    'cvzbeihajytomadkgsxfoplbwn',
    'cvzueihajytomrdkgnxfqplbsl',
    'cvfueihajftkmrdkgsxfqplbwn',
    'cvzuexhajytomryugsxfqplbwn',
    'cvzueihajytomsckgsxfqalbwn',
    'cvzuexhajytomrdkbsxfqpluwn',
    'cvzueihajytbmrtkgsxwqplbwn',
    'cvzueihajytomrdigsxfqqlbsn',
    'cvzweihajytomydkgsxfmplbwn',
    'bvzteihajytimrdkgsxfqplbwn',
    'cvzueihajytpmrdkgsxfcpbbwn',
    'cvzueigsjltomrdkgsxfqplbwn',
    'cvzueihajytomrikgsxfopldwn',
    'cvzueihajstomrdkgsxfqplgon',
    'cvzueimajytomrnkxsxfqplbwn',
    'cvzleihagatomrdkgsxfqplbwn',
    'cvbueihajotomrdkgsxfqjlbwn',
    'cvzueihajytomrdkgsxfqppnvn',
    'hvzueihajytomrdkghxfkplbwn',
    'cvzueigajytxmrdkgsxfqplbjn',
    'cvzueihaaxtokrdkgsxfqplbwn',
    'cvzueihajyeomrdkgujfqplbwn',
    'cvzueiwajpoomrdkgsxfqplbwn',
    'cvzieidtjytomrdkgsxfqplbwn',
    'cvzueihalytomrakbsxfqplbwn',
    'wtzueihajytomrdkgsxfqplbwq',
    'cvzuelhaiytomrdkgsxfqplcwn',
    'cvzueihajytomrdkgsxfqslswd',
    'cvzueihajytomrykgssfqplbon',
    'cvzueihfjytovrdegsxfqplbwn',
    'cvzueihajytomldqgsxfqplbwy',
    'cvzleihjjytomrtkgsxfqplbwn',
    'cvzueihaldtomrdtgsxfqplbwn',
    'cvzueihajytzmrdkgsxfeplqwn',
    'cvzueihrjytomddkgsxfqpgbwn',
    'cyzulihajytokrdkgsxfqplbwn',
    'cvsueihajytoordfgsxfqplbwn',
    'fvzueyhajytomrdkgaxfqplbwn',
    'cczueihajytobrdkgsefqplbwn',
    'cvzueihajytomcdrgscfqplbwn',
    'cvzuexhajyvomrdkgssfqplbwn',
    'cvzsmihajyiomrdkgsxfqplbwn',
    'cvzzeihajttomrdkgsxzqplbwn',
    'cvzseihajytomrdkgsxfqpebvn',
    'cvzueihajgthmrdkgsbfqplbwn',
    'ruzueihajytomrdkgsxfqphbwn',
    'cvzueihajytofrdkgsnfrplbwn',
    'cvzuetdajytojrdkgsxfqplbwn',
    'fvzueihajytomrdkghxfqpobwn',
    'cvzueihsjytomrdkgsxfqglbxn',
    'cvzueihajytowrdkgsxfqpsbun',
    'cvzteihaiytomrdkfsxfqplbwn',
    'cvzueihajytkmrdkrsxfqplvwn',
    'cvzueihajyoomrdkasxfqjlbwn',
    'lvzurihajytkmrdkgsxfqplbwn',
    'cvzueihajyyomrdagsxfqelbwn',
    'cvfueihajytomrdkgsxfqplbbx',
    'cvwueihajytommdkgkxfqplbwn',
    'cvzucicajytomrdkgsxcqplbwn',
    'dvzueihahytgmrdkgsxfqplbwn',
    'cvzuechajytomrdkgsxfqelwwn',
    'cvzuekhajytomrdkgsxknplbwn',
    'cvtueihajytomphkgsxfqplbwn',
    'cvzueihabytnzrdkgsxfqplbwn',
    'cvzusihajytomrdkgfxfqplban',
    'cvfueihajytomcdfgsxfqplbwn',
    'mvzueihapytomrdkgsxfdplbwn',
    'cvzueihajytomhdkgsxmqppbwn',
    'jvsueihajytomrdkgsxfqplbln',
    'cvzujihajybomrdkgsxtqplbwn',
    'cvzuekhawytomrdkgsxfqplbwc',
    'svzueihanytomrdogsxfqplbwn',
    'cvzujihajytodrdkgslfqplbwn',
    'cvgdeihajytorrdkgsxfqplbwn',
    'cvzbeihajytoprdkgsxfqplbyn',
    'cvzueihkyytomjdkgsxfqplbwn',
    'cvzuelhojytomrdkgsxfqjlbwn',
    'evzueihajytimrdkgsxfqpsbwn',
    'cvzueihajydomrdkjsxfqplbjn',
    'ovzteihajytosrdkgsxfqplbwn',
    'cvzueihajyaomrdzgsxfqplbgn',
    'cvzuewhajmtomrdkgsufqplbwn',
    'cvzueihajqtomhukgsxfqplbwn',
    'cvzueihajytomzqkgsxfqplbwk',
    'cazuewhakytomrdkgsxfqplbwn',
    'clzueihatytomrdkgzxfqplbwn',
    'dvzueihajytomqdkgsxfqpnbwn',
    'cvzueidajdtomrdkgsxtqplbwn',
    'cvzueihabytowrdkgsxoqplbwn',
    'cvzujihwjytomrdkgsxeqplbwn',
    'cvtuedhajytomrdkgsxfqplbbn',
    'cvzueihajcgomrdkgsxfqplswn',
    'cvzuephajyiomrdngsxfqplbwn',
    'cvzueihajythmqdkgsxfqplbwf',
    'cvzueitajytomrdkgsxfepvbwn',
    'cvzueihajytomydkgsxfqplvwb',
    'dvzueshajytomrddgsxfqplbwn',
    'cvzueihajytomrdkgvxfqpwben',
    'cvzueihajytomrdkgvxfpplwwn',
    'cvzuefhajftomrdkgsxfqrlbwn',
    'cvzueihajytpmrvkgsxfqplbcn',
    'cvzueihajytohrdkgsxfqxnbwn',
    'cvzueihajytomrdposxfqulbwn',
    'cozueihajytomrpkgsxfqrlbwn',
    'cvzuuihaxytomrdkgsxfqplbtn',
    'cvzueihajytomrbzgsxyqplbwn',
    'cveueihajyxoqrdkgsxfqplbwn',
    'cvzueihajytomrkkgsxfqptbrn',
    'cvzuezhajatomrdkssxfqplbwn',
    'cpzueihajytomrdkgsxfhplbwo',
    'lviueihajytomrekgsxfqplbwn',
    'cvzueihwjytomrdkusxfyplbwn',
    'cvzgeihajytomwdkgsxfrplbwn',
    'cvzsejhzjytomrdkgsxfqplbwn',
    'cvzuuihajytomrdkgsxfqdlbwz',
    'cvzjeihajytomrdugsxftplbwn',
    'cvzueihaxytomrrkgsxfmplbwn',
    'cvzueihajgtomrdhgsxfqplwwn',
    'cvzulihajytomedkgsxfqplewn',
    'cvzueivajytomrdkmsxfqplbwc',
    'cvzuervajytomrdkgsxfwplbwn',
    'cvzuemhcjytomrdkgslfqplbwn',
    'cvzyerhauytomrdkgsxfqplbwn',
    'cvzueihaoytomrdkgsyfqplewn',
    'cvzueihanytomrdkgsafkplbwn',
    'cvzueihajvtomrdugsxfqpcbwn',
    'chzueihajytamrdxgsxfqplbwn',
    'cvzueihalytomrdsgsxfqplbln',
    'cvzueihajytoyaykgsxfqplbwn',
    'tlzueihajyeomrdkgsxfqplbwn',
    'cvpueihajytbmrdkgsxfxplbwn',
    'cvzueihajytomjdkgsxuqplkwn',
    'cvzueihajygomrdkgkxfqplbwg',
    'cvzueihajhtomrdkgbxsqplbwn',
    'cvzurihajytomrdkgsafqplbwx',
    'cdzuezhajytomrdkgsxrqplbwn',
    'cvbueihajytotrwkgsxfqplbwn',
    'cwzkeihajytomrdkgsxfqplbwh',
    'cvzheihajytolrikgsxfqplbwn',
    'cozuevhajytomrdkgkxfqplbwn',
    'chzueihajytomrjkgsxfqulbwn',
    'cvzueihkjyromrdkgsxvqplbwn',
    'cvzveihajytomrdkgsxpqplnwn',
    'cvzueihajytoirdkgsxfqihbwn',
    'cvoueihajytomrdkgsxfqpdawn',
    'pvzueihajytomrdkgnxfqplbfn',
    'cvzueihakytomxdkgssfqplbwn',
    'cvzueivajytomrdbgsxaqplbwn',
    'cvzueihajytokrdkgszrqplbwn',
    'cvzuevhajytomrdkgsxgqplbwi',
    'cvzueihajylomrdkgsxflplbpn',
    'hvzueihajytomvdkgsxfqplgwn',
    'cvzleihajytymrrkgsxfqplbwn',
    'crzueieajytomrdkgsxfqplbon',
    'cszueihajytomrdlgqxfqplbwn',
    'cvzueihacytomrdkgsxfjblbwn',
    'cvzreihajytomrdkgsxfqplzun',
    'cvzurihajytomrdkgsxiqplawn',
    'uvzueihajyhovrdkgsxfqplbwn',
    'cvzueihajyqodrdkgssfqplbwn',
    'cvzwiihrjytomrdkgsxfqplbwn',
    'cqzueihajytomrdkgjxfqplban',
    'cvmueihajytoordkgsxfqplbyn',
    'cypueihajytomrdkgzxfqplbwn',
    'cvzueihajykomrdkgsmfqplbtn',
    'cvzueidajytimrdkgsxfqpdbwn',
    'cvzheihajytomrdkgsxfqpfewn',
    'dvzueihajytumrdzgsxfqplbwn',
    'cvzueixajytomrdkgsvfqplgwn',
    'cvzuevhzjyzomrdkgsxfqplbwn',
    'cvyeeihajytomrdkgsxnqplbwn',
    'cvzueihajytomrdkggtpqplbwn',
    'cvzceiyajytomrdkgexfqplbwn',
    'cvzuelhajyyomrdkzsxfqplbwn',
    'cvzhzihajygomrdkgsxfqplbwn',
    'cvzueihwjytomrdkgsgfqplbrn',
    'cvzsevhajytomrdkgqxfqplbwn',
    'cvzueiuajytomrdkgsxfppebwn',
    'nvzueihajytemrdkgsxwqplbwn',
    'cvzueihajytocgdkgsxfqvlbwn',
    'cczusihajytomrdkgsxfqplbpn',
    'cmzueihajytomrdkbsxwqplbwn',
    'cvzumfdajytomrdkgsxfqplbwn',
    'cvzueihcjytomrdkgsxfqplbkl',
    'cvzueihajytomawknsxfqplbwn',
    'kvzueihijytomrdkgsxdqplbwn',
    'cdzutihajytomrdkgsxfkplbwn',
    'cvzufihadylomrdkgsxfqplbwn',
    'cvzueihajytomrgkxsxfqphbwn',
    'cvzuewhajyzomrdkgsxfqelbwn',
    'cvzueihajytomrdkgqxfqelbwc',
    'cvzueshajyoomrdkgsxfqflbwn',
    'cvzueihajyromrekgixfqplbwn',
    'chzugihajytomrdkgsxfqplawn',
    'cvzueihajytomrdkgsxfhpmbwy',
    'cvzueihacytodxdkgsxfqplbwn',
    'cvzurihajytourdkgsdfqplbwn',
    'cvzzeihmjytomrddgsxfqplbwn',
    'cvzucyhajygomrdkgsxfqplbwn',
    'ckzueihzjytomrdkgsxwqplbwn',
    'cvlueihajmtozrdkgsxfqplbwn',
    'cvzkeihajytomrdkgsxfqclbwc',
    'cvzueihajytomrdkgsxgdplbwa',
    'cvzueihyjytoxrdkgcxfqplbwn',
    'cvzueizavytomfdkgsxfqplbwn',
    'cvzueihajwtosrdkgsxfqllbwn',
    'cvzueihajytomrdaksxfqpllwn',
    'cvzuuihojytombdkgsxfqplbwn',
    'cvzuiibajytpmrdkgsxfqplbwn',
    'cvzueihajyuomydkgsxfqplzwn',
    'cvzueihajytimrmkgsxfqplfwn',
    'cvzueihajytomrdkgzxfqpljwo'
]


// AoC: "What letters are common between the two correct box IDs? (...this is found by removing the differing character from either ID...)"

function findTheTwoBoxIDs(input) {
    // for each string in the input array
    for (let i = 0; i < input.length; i++) {
        console.log(input[i])

        // for each subsequent string in the input array
        for (let j = i + 1; j < input.length; j++) {
            console.log(input[j])

            // split the 'control' string into an array of letters
            let boxIdLettersArr = input[i].split('')
            // split the 'comparison' string into an array of letters
            let nextBoxIdLettersArr = input[j].split('')
            // initialize a way to track the number of mismatched letters
            let mismatchedLetters = 0

            // for each letter in the 'control' string
            for (let k = 0; k < boxIdLettersArr.length; k++) {
                // if the letter in the same position in the comparison is *different*
                if (boxIdLettersArr[k] !== nextBoxIdLettersArr[k]) {
                    // update tracker to account for the number of mismatches found
                    mismatchedLetters++
                }
            }
            
            console.log(mismatchedLetters)
            
            // if the number of mismatches is exactly 1
            if (mismatchedLetters === 1) {
                // we've found the two box IDs that are identical except for one letter in the same position
                console.log(boxIdLettersArr) // ['c', 'y', 'p', 'u', 'e', 'i', 'h', 'a', 'j', 'y', 't', 'o', 't', 'r', 'd', 'k', 'g', 'z', 'x', 'f', 'q', 'p', 'l', 'b', 'w', 'n']
                console.log(nextBoxIdLettersArr) // ['c', 'y', 'p', 'u', 'e', 'i', 'h', 'a', 'j', 'y', 't', 'o', 'm', 'r', 'd', 'k', 'g', 'z', 'x', 'f', 'q', 'p', 'l', 'b', 'w', 'n']

                return findSharedLetters(boxIdLettersArr, nextBoxIdLettersArr)
            }
        }
    }
}

console.log(findTheTwoBoxIDs(boxIDsArr)) // cypueihajytordkgzxfqplbwn // fgij for the example puzzle input

function findSharedLetters(IdLettersArr, nextIdLettersArr) {
    let sharedLettersArr = []

    for (let i = 0; i < IdLettersArr.length; i++) {
        if (IdLettersArr[i] === nextIdLettersArr[i]) {
            sharedLettersArr.push(IdLettersArr[i])
        }
    }

    const sharedLettersStr = sharedLettersArr.join('')
    return sharedLettersStr
    
    // another way to accomplish what all the code in this function accomplishes: return IdLettersArr.filter((letter, index) => letter === nextIdLettersArr[index]).join('')
}