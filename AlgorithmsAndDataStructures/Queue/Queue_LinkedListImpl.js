class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {

    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        if(this.length != 0) {
            return this.first.value;
        }
        return null;
    }

    push(value) {
        const newNode = new Node(value);

        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;

        return this;
        
    }

    pop() {
        if(this.length===0) {
            console.log('Nothing to pop. :)');
        }
        else {
            if(this.first === this.last) {
                this.first = null;
                this.last = null;
            }
            const holdingPointer = this.top;
            this.top = holdingPointer.next;
            holdingPointer.next = null;
            this.length--;
        }
    }

    isEmpty() {
        if(this.length === 0) {
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
console.log(myStack.top);
console.log(myStack.bottom);
myStack.pop();
console.log(myStack);
console.log(myStack.top);
console.log(myStack.bottom);
myStack.pop();
myStack.pop();
console.log(myStack.bottom);
console.log(myStack.isEmpty());