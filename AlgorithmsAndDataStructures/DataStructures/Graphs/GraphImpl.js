//Edge list
const graph1 = [[0,2],[2,3],[2,1],[1,3]]

//Adjacent List
const graph2 = [[2],[2,3],[0,1,3],[1,2]]

//Adjacent Matrix 
const graph3 = [
    [0,0,1,0],
    [0,1,1,0],
    [1,1,0,1],
    [0,1,1,0]
]

const graph4 = {
    0: [0,0,1,0],
    1: [0,1,1,0],
    3: [1,1,0,1],
    4: [0,1,1,0]
}

// undirected unweighted graph using an Adjacent list
class graph {

    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node]=[]
        this.numberOfNodes++;
    }

    addEdge(node1, node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

}

const myGraph = new graph();

myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
console.log(myGraph);

myGraph.addEdge(0,2);
myGraph.addEdge(1,2);
myGraph.addEdge(2,4);
console.log(myGraph);