function enigma(a:number[], b:string[]) {
    let err:string = 'Различное количество ключей и значений';
    let c = new Map<number,string>();
    if (a.length == b.length ) {
        let i:number = 0
        while ( i < a.length) {
            c.set(a[i],b[i])
            i = i + 1
        }
        console.log(c)
        return c
    }
    console.log(err)
    return(err)
}

let keys1:number[] = [1,2,3,4,5,6];
let values1:string[] = ['a', 'b', 'c', 'p', 'o', 'i']

enigma(keys1,values1)
