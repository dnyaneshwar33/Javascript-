const MyArr=[67,87,87,65,71];
MyArr.push(12)//add element at last
console.log(MyArr);
MyArr.pop(11)//removes last element
console.log(MyArr);
MyArr.unshift(12);//add ele at first pos
MyArr.shift();//remove the first ele
console.log(MyArr);
MyArr.toString();
console.log(typeof(MyArr));

//slice-last range ele not included
const nArr1 = MyArr.slice(1,3);
console.log(MyArr);
console.log(nArr1);
//splice-inludes range ele//manupulate org array
const nArr2 = MyArr.splice(1,3);
console.log(MyArr);
console.log(nArr2);
