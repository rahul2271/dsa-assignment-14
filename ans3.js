// Node class represents a node in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.bottom = null;
    }
  }
  
  // Function to merge two sorted linked lists
  function mergeLists(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
  
    let result;
  
    if (list1.data <= list2.data) {
      result = list1;
      result.bottom = mergeLists(list1.bottom, list2);
    } else {
      result = list2;
      result.bottom = mergeLists(list1, list2.bottom);
    }
  
    return result;
  }
  
  // Function to flatten the linked list
  function flattenLinkedList(head) {
    if (head === null || head.next === null) {
      return head;
    }
  
    // Recursively flatten the rest of the list
    head.next = flattenLinkedList(head.next);
  
    // Merge the current list with the flattened list
    head = mergeLists(head, head.next);
  
    return head;
  }
  