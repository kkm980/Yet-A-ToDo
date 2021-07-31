var arr=[r={name:"r", id:1,done:"no"}, m={name:"w",id:2,done:"no"},n={name:"m",id:3,done:"no"}];
var em={name:"el",id:4,done:"no"}
arr.push(em);
arr[1].name="blo"
arr.forEach(el=>console.log(el.name))