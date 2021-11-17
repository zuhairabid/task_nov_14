var calculator = require('./calculator.js')

module.exports = class System{
    constructor(){
        this.os = require("os");
        this.calculate = new calculator
    }
    getCpuCount(){
    return this.os.cpus().length
        }
    getTotalMemory(){
        return this.os.totalmem()
    }
    getFreeMemory(){
        return this.os.freemem()
    }
    get_chunked_array(myArray, chunk_size){
        var index = 0;
        var arrayLength = myArray.length;
        var tempArray = [];
        var myChunk = []
        for (index = 0; index < arrayLength; index += chunk_size) {
            myChunk = myArray.slice(index, index+chunk_size);
            // Do something if you want with the group
            tempArray.push(myChunk);
        }
    
        return tempArray;
    }
    chunkedCalculate(list){
        this.list = list
        this.chunkedArray = this.get_chunked_array(this.list , this.getCpuCount())
        return this.calculate.addList(this.chunkedArray)
    }
    
}

