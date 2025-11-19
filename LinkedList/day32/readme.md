# day 32


Leetcode problem no: 160, intersection of two linked list

solution 1: select one element from 1st list and check for the existance in 2nd list
=> time complexity: O(mn), space complexity : O(1)

solution 2:
> put all elements of 2nd list to a set
> Search for element from 1st list to the set
 

### Note: The node is adding to the list, not the value

public class Solution {
    public ListNode GetIntersectionNode(ListNode headA, ListNode headB) {
        HashSet<ListNode> data = new HashSet<ListNode>();
        while(headB !=  null){
            data.Add(headB);
            headB = headB.next;
        }
        while(headA != null){
            if(data.Contains(headA)) return headA;
            headA = headA.next;
        }
        return null;
    }
}