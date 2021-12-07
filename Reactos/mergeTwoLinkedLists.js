//Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, respectively. The function should merge the lists in place (i.e., it shouldn't create a brand new list) and return the head of the merged list; the merged list should be in sorted order.

// Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to null if it's the tail of the list.

function mergeTwoLinkedLists(head1, head2) {
  let p1 = head1;
  let p2 = head2;
  while (p1.value || p2.value) {
    if (p1.value >= p2.value) {
      let tempHead = p1;
      p1 = p2;
      p1.next = tempHead;
      p2 = p2.next;
    } else {
      p1 = p1.next;
    }
  }
  return head1;
}

class LinkedList {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

function createList(nums) {
  let head = new LinkedList(nums[0]);
  let origHead = head;
  for (let i = 1; i < nums.length; i++) {
    head.next = new LinkedList(nums[i]);
    head = head.next;
  }
  return origHead;
}

let headone = createList([2, 4, 6, 8]);
let headtwo = createList([1, 3, 5, 7]);

mergeTwoLinkedLists(headone, headtwo);
