class NodoArbol {
    constructor(value, left, right) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
export default class ArbolBinario {
    constructor() {
      this.root = null;
    }
   
    insert(value) {
      const newNode = new NodoArbol(value, null, null);
      if (!this.root) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        let isFound = false;
        while (!isFound) {
          if (value === currentNode.value) {
            isFound = true;
            return;
          }
          if (value !== currentNode.value) {
            if (value < currentNode.value) {
              if (!currentNode.left) {
                currentNode.left = newNode;
                isFound = true;
                return;
              } else {
                currentNode = currentNode.left;
              }
            }
            if (value > currentNode.value) {
              if (!currentNode.right) {
                currentNode.right = newNode;
                isFound = true;
                return;
              } else {
                currentNode = currentNode.right;
              }
            }
          }
        }
      }
    }

    searchRecursive(node, value) {
      if (node === null) { // El nodo {1} es nulo
          return false;
      } else if (value === node.value) { // {2} encontrar nodo
          return true;
      } else if (value < node.value) { // {3} Buscar desde el nodo izquierdo
          return this.searchRecursive(node.left, value);
      } else { // {4} Buscar desde el nodo a la derecha
          return this.searchRecursive(node.right, value);
      }
    }
  }