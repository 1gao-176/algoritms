var reverseList = function(head) {
    let p1=null;
    let p2=head;
    while(p2){
        let temp=p2.next;
        p2.next=p1
        p1=p2
        p2=temp;
    }
    return p1
};
const obj2={val:2,next:null}
const obj={val:1,next:obj2}
reverseList(obj)
console.log(1);