const file = require('fs');

const student = {"name":"jey","department":"ECE","Section" : "A","age":20} 


const jsonstr = JSON.stringify(student);

console.log('json object to string' , jsonstr); 


const jsonstring = '{"name":"jey","department":"ECE" , "Section" : "A","age":20}'
const jasonobj = JSON.parse(jsonstring);
console.log('json string to object ' , jsonstr);

//object array
const studentarray = [{"name":"jey","department":"ECE" , "Section" : "A","age":20},{"name":"jey1","department":"ECE" , "Section" : "A","age":30} ]
const jsonarraystr = JSON.stringify(studentarray);

console.log('json object array to string' , jsonarraystr);


const students = file.readFileSync('studentt.json');
const jsonsyring = JSON.parse(jsonstr);


//file.writeFileSync('student1.json', jsonStr);
file.appendFileSync('student2.json', jsonstr)

console.log(jsonsyring);

