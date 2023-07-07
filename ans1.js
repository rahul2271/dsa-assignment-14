// Node class represents a node in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Function to detect and remove the loop from the linked list
  function removeLoop(head) {
    // Check if the linked list is empty or has only one node
    if (head === null || head.next === null) {
      return;
    }
  
    let slow = head;
    let fast = head;
  
    // Move slow pointer by one step and fast pointer by two steps
    slow = slow.next;
    fast = fast.next.next;
  
    // Find the meeting point of the slow and fast pointers
    while (fast && fast.next && slow !== fast) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // If loop exists, move the slow pointer to the head and
    // move both slow and fast pointers one step at a time
    if (slow === fast) {
      slow = head;
      while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
      }
  
      // Unlink the last node to remove the loop
      fast.next = null;
    }
  }
  