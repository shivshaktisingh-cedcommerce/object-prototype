


function employee(event){
    event.preventDefault();

    const emp = { person: null, type: null  , isAvailable: null  , method:function() {
        document.getElementById("result1").innerHTML = this.person
        document.getElementById("result2").innerHTML = this.type
        document.getElementById("result3").innerHTML = this.isAvailable
    }}
 
    const EMPLOYEE = Object.create(emp);

    //  console.log(EMPLOYEE);
  
    EMPLOYEE.person= event.target.select1.value;
    EMPLOYEE.type=event.target.select2.value
    if(event.target.select3.value==="true"){
        EMPLOYEE.isAvailable="Accepting Orders"
    }
    else {
        EMPLOYEE.isAvailable=" Not Accepting Orders"
    }
    
    EMPLOYEE.method();
    var arrkey= Object.keys(EMPLOYEE)
    document.getElementById("key1").innerHTML= "KEY 1 : " + arrkey[0];
    document.getElementById("key2").innerHTML= "KEY 2 : " + arrkey[1];
    document.getElementById("key3").innerHTML= "KEY 3 : " + arrkey[2];
    document.getElementById("key_length_id").innerHTML= "KEY Length : " + arrkey.length;

    var arrvalue = Object.values(EMPLOYEE)
    document.getElementById("value1").innerHTML= "VALUE 1 : " + arrvalue[0];
    document.getElementById("value2").innerHTML= "VALUE 2 : " + arrvalue[1];
    document.getElementById("value3").innerHTML= "VALUE 3 : " + arrvalue[2];
    var txt="<h2>Question : 4 </h2><ul>";
     for (const [key, value] of Object.entries(EMPLOYEE)) {
        txt += "<li>" +`${key}  : ${value}` +"</li>";
      }
    txt+="</ul>";
    document.getElementById("print_keyvalues_id").innerHTML= txt;
    const food={
        a:1, b:2, c:3
    }
    const FOODITEMS = Object.create(null, );
      FOODITEMS.a = 5;
     console.log(FOODITEMS)
  
    var arrmerge =Object.assign(FOODITEMS , EMPLOYEE)
     console.log(arrmerge)
    var txt1="<h2>Question : 5 </h2><ul>";
    for (const [key, value] of Object.entries(arrmerge)) {
        txt1 += "<li>" +`${key}  : ${value}` +"</li>";
      }
      txt1+="</ul>";
       

    // console.log(txt1)
    document.getElementById("newobject_id").innerHTML= txt1;
    Object.freeze(EMPLOYEE)
    EMPLOYEE.person = "Shiv";
    document.getElementById("updation1").innerHTML = EMPLOYEE.person
    document.getElementById("updation2").innerHTML = EMPLOYEE.type
    document.getElementById("updation3").innerHTML = EMPLOYEE.isAvailable
    
}

