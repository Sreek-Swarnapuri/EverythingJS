class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {

    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if(this.length != 0) {
            return this.top.value;
        }
        return null;
    }

    push(value) {
        const newNode = new Node(value);

        if(this.length === 0) {
            this.bottom = newNode;
            this.top = newNode;
        }
        else {
            newNode.next = this.top;
            this.top = newNode;
        }

        this.length++;

        return this;
        
    }

    pop() {
        if(this.length===0) {
            console.log('Nothing to pop. :)');
        }
        else {
            if(this.top === this.bottom) {
                this.bottom = null;
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