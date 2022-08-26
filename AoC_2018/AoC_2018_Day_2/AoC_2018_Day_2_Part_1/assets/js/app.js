// // How to take the example puzzle input provided by AoC (exactly as it is presented there) and convert it into the array of strings needed for the challenge.
// // Note that what's stored in 'examplePuzzleInput' just below is a direct translation, so to speak, to JS of what is provided in the AoC challenge. I.e....
// /*
//     ...this on the AoC page...
//         abcdef
//         bababc
//         abbcde
//         abcccd
//         aabcdd
//         abcdee
//         ababab
//     ...is this in JavaScript...
//         'abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab' // one long string broken up by the 'new line' character
// */
// const examplePuzzleInput = 'abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab'
// const boxIDsArr = examplePuzzleInput.split('\n') // ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab']


// // The EXAMPLE puzzle input provided by AoC (but skipping the steps described above)
// const boxIDsArr = [
//     'abcdef',
//     'bababc',
//     'abbcde',
//     'abcccd',
//     'aabcdd',
//     'abcdee',
//     'ababab'
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


// pseudocode:
    // find the number of box IDs that have exactly 2 of any letter
    // find the number of box IDs that have exactly 3 of any letter
    // then do this to get the checksum: num of doubles * num of triples

function getMatches(input) {
    let matches = {
        twice: 0,
        thrice: 0
    }
    input.forEach(boxIdStr => {
        let counts = {}
        boxIdStr.split('').forEach(letter => {
            // Question: Why exactly does the below line work?
            // Answer: We could have done 'counts.hasOwnProperty(letter) === true' or just 'counts.hasOwnProperty(letter)'. 'counts[letter]' is a shorthand for that. And the reason it works is because if it returns 'undefined', it's returning something that's 'falsy', and if it returns a value, that's 'truthy'.
            if (counts[letter]) {
                counts[letter]++
            } else {
                counts[letter] = 1
            }
            // another way to accomplish what the above 'if...else' statement accomplishes: counts[letter] = (counts[letter] || 0) + 1
        })
        // console.log(counts) // just a learning line
        if (Object.values(counts).includes(2)) {
            matches.twice++ 
        }
        if (Object.values(counts).includes(3)) {
            matches.thrice++
        }
    })

    return matches.twice * matches.thrice // = the checksum
}

console.log(getMatches(boxIDsArr)) // 5166 // 12 is correct for the example puzzle input and 5166 is correct for the actual puzzle input