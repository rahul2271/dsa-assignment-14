// Node class represents a node in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Function to perform left-shift on the linked list
  function leftShiftLinkedList(head, k) {
    if (head === null || k === 0) {
      return head;
    }
  
    let length = 0;
    let current = head;
  
    // Find the length of the linked list
    while (current !== null) {
      length++;
      current = current.next;
    }
  
    // Adjust the value of k if it exceeds the length of the list
    k = k % length;
  
    // No need to perform left-shift if k is zero
    if (k === 0) {
      return head;
    }
  
    let fast = head;
    let slow = head;
  
    // Move the fast pointer k positions ahead
    for (let i = 0; i < k; i++) {
      fast = fast.next;
    }
  
    // Find the kth node from the end and the node before it
    while (fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
    }
  
    // Perform the left-shift operation
    const newHead = slow.next;
    slow.next = null;
    fast.next = head;
  
    return newHead;
  }
  