// Node class represents a node in the linked list
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Function to delete consecutive sequences of nodes that sum to 0
  function removeZeroSumSublists(head) {
    // Create a dummy node and set its next pointer
    const dummy = new ListNode(0);
    dummy.next = head;
  
    let slow = dummy;
    let fast = dummy.next;
  
    while (fast !== null) {
      let sum = 0;
  
      // Find the sum of node values from slow to fast
      while (fast !== null) {
        sum += fast.val;
  
        if (sum === 0) {
          slow.next = fast.next;
        }
  
        fast = fast.next;
      }
  
      slow = slow.next;
  
      if (slow !== null) {
        fast = slow.next;
      }
    }
  
    return dummy.next;
  }
  