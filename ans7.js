// Node class represents a node in the linked list
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to find the next greater node for each node in the linked list
  function nextGreaterNodes(head) {
    const values = [];
    let current = head;
  
    // Store the values of the linked list in an array
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
  
    const result = new Array(values.length).fill(0);
    const stack = [];
  
    // Traverse the values array in reverse order
    for (let i = values.length - 1; i >= 0; i--) {
      while (stack.length > 0 && values[i] >= stack[stack.length - 1]) {
        stack.pop();
      }
  
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1];
      }
  
      stack.push(values[i]);
    }
  
    return result;
  }
  