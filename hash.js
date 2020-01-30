// function hash(key, arrayLen) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96 // alphabetic position of char
//         total = (total + value) % arrayLen; // % keeps it within arrayLen
//     }
//     return total
// }
//better hash below with prime
class HashTable {
    constructor(size) {
        this.keyMap = new Array(size);
    }

    hashFunc(key) {
        let total = 0;
        let weirdPrime = 31; // hash functions take advantage of prime #s to reduce collisions
        for (let i = 0; i < Math.min (key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * weirdPrime + value) % this.keyMap.length;
        }
        return total
    }

    set(key, value){
        let temp = this.hashFunc(key)
        let a = [key,value]
        if (this.keyMap[temp] == undefined){
            this.keyMap[temp] = [a]
        }
        else{
            let trigger = false
            for(let i=0; i < this.keyMap[temp].length; i++){
                if(this.keyMap[temp][i][0] == key){
                    trigger = true
                    this.keyMap[temp][i][1] = value
                }
            }
            if(trigger == false){
                this.keyMap[temp].push(a)
            }
            
        }
        
    }

    get(key){
        let index = this.hashFunc(key)
        for(let i=0; i < this.keyMap[index].length; i++){
            if(this.keyMap[index][i][0] == key){
                return this.keyMap[index][i][1]
            }
        }
        return "does not exsits"
    }

    values(){
        let values = []
        for(let i =0; i<this.keyMap.length;i++){
            if(this.keyMap[i] != undefined){
                for(let j = 0;j<this.keyMap[i].length;j++){
                    values.push(this.keyMap[i][j][1])
                    
                }
            }
        }
        return values
    }

    keys(){
        let keys = []
        for(let i =0; i<this.keyMap.length;i++){
            if(this.keyMap[i] != undefined){
                for(let j = 0;j<this.keyMap[i].length;j++){
                    keys.push(this.keyMap[i][j][0])
                    
                }
            }
        }
        return keys
    }

    all(){
        return this.keyMap
    }
}

let a = new HashTable(10)
a.set("a", '1')
a.set("b", '2')
a.set("c", '3')
a.set("d", '4')
a.set("f", '6')
a.set("g", '7')
a.set("h", '8')
a.set("i", '9')
a.set("j", '10')
a.set("k", '11')
a.set("k", '12')
console.log(a.get("a"))
console.log(a.all())
console.log(a.keys())
console.log(a.values())



