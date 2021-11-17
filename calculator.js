
module.exports = class Calculator{
    constructor(){
            
    }
    add(val1,val2){
        return val1+val2
    }
    subtract(val1,val2){
        return val1-val2
    }
    multiply(val1,val2){
        return val1*val2
    }
    divide(val1,val2){
        return val1/val2
    }
    calculateIter(list,op){
        let k = list[0]
        let result = 0
        for(let i=1;i<list.length;i++){
            if (op==='+'){
            k+=list[i]
            }
            if (op==='-'){
                k-=list[i]
                }
            if (op==='*'){
                k*=list[i]
                }
            if (op==='/'){
                k/=list[i]
                }  
        }
        return k
    }
    addList(List){
        // this.List = List
        let outputArray = []
        List.forEach(e => {
            var sum = this.calculateIter(e,'+')
            let sumArray = e.push(sum)
            outputArray.push(e)
            
        });
        return outputArray
    }
    subtractList(List){
        // this.List = List
        let outputArray = []
        List.forEach(e => {
            var sum = this.calculateIter(e,'-')
            let sumArray = e.push(sum)
            outputArray.push(e)
            
        });
        return outputArray
    }
    multiplyList(List){
        // this.List = List
        let outputArray = []
        List.forEach(e => {
            var sum = this.calculateIter(e,'*')
            let sumArray = e.push(sum)
            outputArray.push(e)
            
        });
        return outputArray
    }
    divideList(List){
        // this.List = List
        let outputArray = []
        List.forEach(e => {
            var sum = this.calculateIter(e,'/')
            let sumArray = e.push(sum)
            outputArray.push(e)
            
        });
        return outputArray
    }
}
