export class Queue<T> {
    private array: T[] = []; 
    
    add(data: T): void {
       this.array.push(data); 
    }

    getQueue(): T[]{
        return this.array; 
    }

    remove(): T | undefined {
        if(this.isEmpty()) return  undefined; 

        return this.array.shift(); 
    }

    peek(): T | undefined{
        if(this.isEmpty()) return undefined; 
        
        return this.array[0]; 
    }

    isEmpty(): boolean {
        return this.array.length === 0; 
    }
}
