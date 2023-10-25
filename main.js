

// const m_10 = document.querySelector(".m_10");

// for(let i=0;i<10;i++){
//     document.writeln(i*m_10.value);
// }

var m = prompt("enter un nombre n : ");

console.log(m);

for(let i=1;i<=10;i++){
    document.writeln(`${m} x ${i} = ${+m*i}`);
    document.writeln("<br>");
}
