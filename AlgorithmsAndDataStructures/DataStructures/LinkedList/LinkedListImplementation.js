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

    //Add a new node at the end of the linked list with the value provided
    // Time complexity: O(1)
    // Space complexity: O(1)
    append(value) {
        this.tail.next = {
            value: value,
            next: null
        }

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
            next: this.head
        }
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
                next: leader.next
            };
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
        if(leader.next.next !== null) {
            leader.next = leader.next.next;
        }
        else {
            leader.next = null;
            this.tail = leader;
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
            if(index == i+1) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    }

    // Reverse the linked list - step by step
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    reverse(){
        if(!this.head.next) {
            return this.head;
        }
        
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;        
    }

     // Reverse the linked list - using existing Linked list functionality
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    reverseUsingExisitngFunc() {

        let currentNode = this.head;
        let newLinkedList = null;
        while(currentNode!==null) {
            if(newLinkedList === null) {
                newLinkedList = new LinkedList(currentNode.value);
            }
            else {
                newLinkedList.prepend(currentNode.value);
            }
            currentNode = currentNode.next;
        }

        return newLinkedList;

    }



}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(15);
myLinkedList.prepend(2);
myLinkedList.insert(2,99);
console.log(myLinkedList.printList());
myLinkedList.remove(3);
console.log(myLinkedList.printList());
myLinkedList.remove(3);
console.log(myLinkedList.printList());
console.log(myLinkedList);
console.log('Head is ->', myLinkedList.head);
console.log('Tail is ->', myLinkedList.tail);

console.log('Reversing the linked list:');
console.log(myLinkedList.reverse().printList());
console.log('Reversing the linked list using existing linked list functionality:');
const revLinkedList = myLinkedList.reverseUsingExisitngFunc();
console.log(revLinkedList.printList());
