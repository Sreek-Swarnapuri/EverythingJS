class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {

    constructor(){
        this.array = [];
    }

    peek() {
        return this.array[this.array.length-1];
    }

    push(value) {
        this.array.push(value);

    }

    pop() {
        this.array.pop();
        return this;
    }

    isEmpty() {
        if(this.array.length === 0) {
            return true;
        }
        return false;
    }


}


const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();
myStack.pop();
console.log(myStack.isEmpty());