class DoublyLinkedList {

    //Initializing the class with one value when the a new object is created.
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };

        this.tail = this.head;
        this.length = 1;
    }

    //Add a new node at the end of the linked list with the value provided
    // Time complexity: O(1)
    // Space complexity: O(1)
    append(value) {
        this.tail.next = {
            value: value,
            next: null,
            prev: this.tail
        };

        this.tail = this.tail.next;
        this.length++;
        return this;
    }

    //Add a new node at the start of the linked list with the value provided
    // Time complexity: O(1)
    // Space complexity: O(1)
    prepend(value) {
        this.head = {
            value: value,
            next: this.head,
            prev: null
        }

        this.head.next.prev = this.head;

        this.length++;
        return this;
    }

    //Return the array with all the values in the linked list node for printing them onto the console
    // Time complexity: O(n)
    // Space complexity: O(n)
    printList() {
        const ar = [];
        let currentNode = this.head;
        while(currentNode!==null) {
            ar.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return ar;
    }

    //Inssert a node from the given index in the linked list
    // Time complexity: O(n)
    // Space complexity: O(1)
    insert(index,value) {
        if(index === 0) {
            this.prepend(value);
        }
        else if(index === this.length - 1) {
            this.append(value);
        }
        else if(index <= (this.length - 1) ) {
            const leader = this.traverseToIndex(index);
            const newNode = {
                value: value,
                next: leader.next,
                prev: leader

            };

            leader.next.prev = newNode;
            leader.next = newNode;

            this.length++;
        }
        else{
            console.log('yes');
            return this.append(value);
        }
        return this.printList();

        
    }

    //Remove a node from the given index in the linked list
    // Time complexity: O(n)
    // Space complexity: O(1)
    remove(index) {
        const leader = this.traverseToIndex(index);
        if ( index === 0) {
            const nodeToBeRemoved = this.head;
            this.head = nodeToBeRemoved.next;
            this.head.prev = null;
            nodeToBeRemoved.next = null;
        } else if (index === this.length-1 ) {
            leader.next.prev = null;
            leader.next = null;
            this.tail = leader;
        } else {
            const nodeToBeRemoved = leader.next;
            leader.next.next.prev = leader;
            leader.next = leader.next.next;
            nodeToBeRemoved.next = null;
            nodeToBeRemoved.prev = null;
        }
        
        this.length--;
        return this.printList();

    }


    // Traverse to the node which points to the node that is in the index provided
    // Time complexity: O(n)
    // Space complexity: O(1)
    traverseToIndex(index) {
        let currentNode = this.head;
        for(let i = 0; i < this.length; i++) {
            if(index === i+1) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    }


}

const myLinkedList = new DoublyLinkedList(10);    // 10
myLinkedList.append(20);                    // 10 20
myLinkedList.append(15);                    // 10 20 15
myLinkedList.prepend(2);                    //  2 10 20 15
myLinkedList.insert(2,99);                  //  2 10 99 20 15
console.log(myLinkedList.printList());
myLinkedList.remove(3);                     //  2 10 99 15 
console.log(myLinkedList.printList());
myLinkedList.remove(3);                     //  2 10 99
console.log(myLinkedList.printList());
myLinkedList.remove(0);                     // 10 99
console.log(myLinkedList.printList());
console.log(myLinkedList);
console.log(myLinkedList.head);
console.log(myLinkedList.tail);
