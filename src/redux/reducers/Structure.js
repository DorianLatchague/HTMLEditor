import { APPEND_NEW_NODE, DELETE_NODE } from '../actionTypes';

let nodeId = 0;

class Node {
    constructor(element, attributes = {}, parent) {
        this.id = nodeId++;
        this.element = element;
        this.children = [];
        this.parent = parent;
        this.attributes = attributes;
    }
}

class Structure {
    constructor() {
        this.allNodes = [this];
        this.id = nodeId++;
        this.children = [];
        this.length = this.allNodes.length;
    }
    appendNewNode = (id, {element, attributes}) => {
        const parent = this.allNodes[id];
        let newNode = new Node(element, attributes, parent);
        this.allNodes.push(newNode);
        parent.children.push(newNode.id);
        return this.duplicate();
    }
    deleteNode = (id) => {
        if (id && id < this.length) {
            const indexRelativeToParent = this.allNodes[id].parent.children.indexOf(id);
            if (indexRelativeToParent !== -1)
                this.allNodes[id].parent.children.splice(indexRelativeToParent,1);
        }
        return this.duplicate();
    }
    duplicate = () => Object.assign({}, this, {
        allNodes: [...this.allNodes],
        children: [...this.children]
    })
}

const initialState = new Structure();

export default function(state = initialState, action) {
    switch(action.type) {
        case APPEND_NEW_NODE:
            let {id, node} = action.payload;
            return state.appendNewNode(id, node);
        case DELETE_NODE: 
            id = action.payload.id
            return state.deleteNode(id);
        default:
            return state;       
    }
}