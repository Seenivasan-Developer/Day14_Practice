function label_create(ele_name,attr_name_1,attr_value_2,content){
    var ele = document.createElement(ele_name);
    ele.setAttribute(attr_name_1,attr_value_2);
    ele.innerHTML = content;
    return ele;
}

function break_create(){
var br = document.createElement("br");
return br;
}

function input_create(ele_name,attr_name_1,attr_value_1,id_val_1){
    var input = document.createElement(ele_name);
     input.setAttribute(attr_name_1,attr_value_1);
     input.id = id_val_1;
     return input;

}
var labelfname = label_create("label","for","firstname","First Name");
var break_1 = break_create();
var inputfname = input_create("input","type","text","firstname");
var break_2 = break_create();
var labelmname = label_create("label","for","middlename","Middle Name");
var break_3 = break_create();
var inputmname = input_create("input","type","text","middlename");
var break_4 = break_create();
var labellname = label_create("label","for","lastname","Last Name");
var break_5 = break_create();
var inputlname = input_create("input","type","text","lastname");
var break_6 = break_create();
var labelemail = label_create("label","for","email","Email");
var break_7 = break_create();
var inputemail = input_create("input","type","email","email");
var break_8 = break_create();
var labelpwd = label_create("label","for","password","Password");
var break_9 = break_create();
var inputpwd = input_create("input","type","password","password");
var break_10 = break_create();
var labelphno = label_create("label","for","phonenumber","Phone Number");
var break_11 = break_create();
var inputphno = input_create("input","type","number","phonenumber");
var break_12 = break_create();
document.body.append(labelfname,break_1,inputfname,break_2,labelmname,break_3,inputmname,break_4,labellname,break_5,inputlname,break_6,labelemail,break_7,inputemail,break_8,
    labelpwd,break_9,inputpwd,break_10,labelphno,break_11,inputphno,break_12);
