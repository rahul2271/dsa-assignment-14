// Node class represents a node in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.random = null;
    }
  }
  
  // Function to copy the special linked list
  function copyRandomList(head) {
    if (head === null) {
      return null;
    }
  
    // Step 1: Create new nodes and set the values
    let current = head;
    while (current !== null) {
      const newNode = new Node(current.data);
      newNode.next = current.next;
      current.next = newNode;
      current = newNode.next;
    }
  
    // Step 2: Create mapping between original nodes and new nodes
    current = head;
    while (current !== null) {
      current.next.random = current.random ? current.random.next : null;
      current = current.next.next;
    }
  
    // Step 3: Restore the original list and extract the copied list
    current = head;
    const newHead = current.next;
    while (current !== null) {
      const temp = current.next;
      current.next = temp.next;
      temp.next = temp.next !== null ? temp.next.next : null;
      current = current.next;
    }
  
    return newHead;
  }
  