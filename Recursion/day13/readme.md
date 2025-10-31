# day 13
-> Theory about recursion

eg:
function fun(i) {
    if (i < 1) return ;
    console.log(i);
    fun(--i)
}
fun(10);