const readline = require("readline")

module.exports = class CommandLine {
  static ask(question) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    return new Promise(resolve => {
      rl.question(`${question} `, answer => {
        resolve(answer)
        rl.close()
      })
    })
  }

  static print(text) {
    console.log(text)
  }
}

const people = [
    {name:'augus',friends: ['John'],},
    {name:'jose',friends: ['John','mario','carlos'],},
    {name:'marco',friends: ['John','kyle'],},
]

const groupBy = (array, callback) => {

    const newArr = [...array]

    newArr.sort((a, b)=>{
        if(callback(a) < callback(b)) return 1
        else return -1
    })
    
    console.log(newArr)
    console.log(people);

}

groupBy(people, (person) => person.friends.length)