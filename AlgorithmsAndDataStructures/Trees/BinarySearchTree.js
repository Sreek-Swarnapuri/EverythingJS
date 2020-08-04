class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // My implementation
    /*
    insert(value) {
        const newNode = new Node(value);

        //If there are no nodes in the tree, add it to the root
        if(this.root === null) {
            this.root = newNode;
        }
        else {
            let rootValue = this.root.value;
            currentNode = this.root;
            let branch;

            if(value<rootValue) {
                branch = this.root.left;
            } else {
                branch = this.root.right;
            }

            while(branch!==null) {
                currentNode = branch;
                if(value<currentNode.value) {
                    branch = currentNode.left;
                } else {
                    branch = currentNode.right;
                }   
            }

            branch = newNode;
        }
        
    }
    */

    insert(value) {
        const newNode = new Node(value);

        //If there are no nodes in the tree, add it to the root
        if(this.root === null) {
            this.root = newNode;
        }
        else {
            let currentNode = this.root;
            while(true) {
                if(value <currentNode.value) {
                    //left branch
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    //right branch
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }



    lookup(value){
        // Check if the root exists or not
        if(!this.root) {
            return false;
        }

        let currentNode = this.root;
        while(currentNode!=null) {
            if(value <currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode
            } 
        }

        return false;

    }

    remove(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      let parentNode = null;
      while(currentNode){
        if(value < currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          //We have a match, get to work!
          
          //Option 1: No right child: 
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              
              //if parent > current value, make current left child a child of parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
              
              //if parent < current value, make left child a right child of parent
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }
          
          //Option 2: Right child which doesnt have a left child
          } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if(parentNode === null) {
              this.root = currentNode.right;
            } else {
              
              //if parent > current, make right child of the left the parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
              
              //if parent < current, make right child a right child of the parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }
          
          //Option 3: Right child that has a left child
          } else {
  
            //find the Right child's left most child
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while(leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }
            
            //leftmost's Parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;
  
            if(parentNode === null) {
              this.root = leftmost;
            } else {
              if(currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
        return true;
        }
      }
    }
    
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(4));
// console.log(JSON.stringify(traverse(tree.root)));

// function traverse(node) {
//     const tree = { value: node.value };
//     tree.left = node.left === null ? null : traverse(node.left);
//     tree.right = node.right === null ? null : traverse(node.right);
//     return tree;
// }