 class person {
     constructor(name,age,gender){
         this.name=name;
         this.age=age;
         this.gender=gender;
     }
     getName(){
         console.log(this.name);
     }
     getAge(){
         console.log(this.age);
     }
     getGender(){
         console.log(this.gender);
     }
 }
 var qq=new person("Joyce",28,"Female");
 qq.getName();
 qq.getAge();
 qq.getGender();