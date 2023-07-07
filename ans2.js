// Node class represents a node in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Function to add 1 to the linked list number
  function addOne(head) {
    // Reverse the linked list
    let prev = null;
    let curr = head;
    let next = null;
  
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  
    head = prev;
  
    let carry = 1; // Initialize carry to 1 for adding 1
  
    // Traverse the linked list and add 1
    curr = head;
    while (curr !== null) {
      let sum = curr.data + carry;
      carry = Math.floor(sum / 10); // Calculate the carry
      curr.data = sum % 10; // Update the current node value
  
      if (carry === 0) {
        break; // No need to continue if carry is 0
      }
  
      curr = curr.next; // Move to the next node
    }
  
    // Reverse the linked list again to restore the original order
    prev = null;
    curr = head;
    next = null;
  
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  
    head = prev;
  
    // If there is still a carry, add an additional node
    if (carry > 0) {
      const newNode = new Node(carry);
      newNode.next = head;
      head = newNode;
    }
  
    return head;
  }
  