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
        this.length++;
        return this;
    }

    prepend(value) {
        this.head = {
            value: value,
            next: this.head
        }

        this.length++;

        return this;
    }

    printList() {
        const ar = [];
        let currentNode = this.head;
        while(currentNode!==null) {
            ar.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return ar;
    }

    insert(index,value) {
        if(index === 0) {
            this.prepend(value);
        }
        else if(index === this.length - 1) {
            this.append(value);
        }
        else if(index <= (this.length - 1) ) {
            let currentNode = this.head;
            for(let i=1; i< this.length -2; i++) {
                if(index === i+1) {
                    const newNode = {
                        value: value,
                        next: currentNode.next
                    }
                    currentNode.next = newNode;
                }
                currentNode = currentNode.next;
            }    
        }
        else{
            console.log('yes');
            return this.append(value);
        }
        return this.printList();

        
    }


}

const myLinkedList = new LinkedList(10);

myLinkedList.append(20);
myLinkedList.append(15);
myLinkedList.prepend(2);
myLinkedList.insert(2,99);
console.log(myLinkedList.printList());
console.log(myLinkedList);
console.log(myLinkedList.head);
console.log(myLinkedList.tail);
