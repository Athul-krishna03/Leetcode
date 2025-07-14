var mergeKLists = function(lists) {
    let allValues = [];

    // Extract all values from all lists
    for (let head of lists) {
        let curr = head;
        while (curr !== null) {
            allValues.push(curr.val);
            curr = curr.next;
        }
    }

    // Sort all values
    allValues.sort((a, b) => a - b);

    // Build the result linked list
    let dummy = new ListNode(-1);
    let current = dummy;

    for (let val of allValues) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
};
