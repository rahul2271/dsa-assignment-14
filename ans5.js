// Node class represents a node in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Function to group the nodes by odd and even indices
  function oddEvenList(head) {
    if (head === null || head.next === null) {
      return head;
    }
  
    let odd = head;
    let even = head.next;
    let evenHead = even;
  
    while (even !== null && even.next !== null) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
    }
  
    odd.next = evenHead;
  
    return head;
  }
  