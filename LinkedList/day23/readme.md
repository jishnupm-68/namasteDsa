# day 23
-> Linear data structure
-> Nodes are linked together by a reference field

    -> Two types of linked List
        -> Singly Linked List
        -> Doubly Linked List

Node
    Single node
    ---------------
    | data | Next |
    ---------------


    Doubly linked list

    ----------------------
    | Prev | Data | Next |
    ----------------------  

    Comparison LinkedList and Array


|Linked List                                        | Arrays
|    Head part                        Tail part     | 
|    ------------    ------------    ------------   |   -------------
|    | 1 | Next |--->| 2 | next |--->| 3 | null |   |   | 1 | 2 | 3 |
|    ------------    ------------    ------------   |   -------------
|       > Linear                                    |   > Linear
|       > Non-contigeous                            |   > Contegous
|       > Dynamic Size                              |   > fixed size
|       > Node => (Vallue+ pointer)                 |   > value alone
|       > Fetching is difficult O(n)                |   > easy to fetch
|       > Easy to insert/ delete                    |   > Difficult to insert/delete
|       > Extra memory                              |   > Memory Efficient


# Use case
Access element using index => Array
Insert/delete at head/tail frequently => Linked list
Memory efficient storage for static size => Array
Avoding resizing overhead or unknown size upfront => Linked List
Do lots of traversal/manipulation => Linked List
