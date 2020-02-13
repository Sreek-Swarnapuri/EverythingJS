class LinkedList {

    //Initializing the class with one value when the a new object is created.
    constructor(value) {
        this.head = {
            value: value,
            next: null
        } 

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        this.tail.next = {
            value: value,
            next: null
        }

        this.tail = this.tail.next;
        this.length = this.length + 1;
    }

    prepend(value) {
        this.head = {
            value: value,
            next: this.head
        }
    }

}

const myLinkedList = new LinkedList(10);

myLinkedList.append(20);
myLinkedList.append(15);
myLinkedList.prepend(2);

console.log(myLinkedList);
console.log(myLinkedList.head);
console.log(myLinkedList.tail);