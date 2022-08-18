function reverseLinkedList(head) {
    let current = head;
    let next = null;
    let previous = null;
    while(current && current.next) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}