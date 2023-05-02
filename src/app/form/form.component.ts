import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  forms:FormGroup;
  options:string='';
  allcourses=[
    {
      id:1,
      title:'HTML5,CSS3,JS'
    },
    {
      id:1,
      title:'Angular 8'
    },
    {
      id:1,
      title:'Express JS'
    },
    {
      id:1,
      title:'SASS'
    },
    {
      id:1,
      title:'React JS'
    },
    {
      id:1,
      title:'Node JS'
    },
    {
      id:1,
      title:'ES5,ES6,ES7...'
    },
    {
      id:1,
      title:'Vue JS'
    },
    {
      id:1,
      title:'Mongo DB'
    },
    {
      id:1,
      title:'Bootstrap 4'
    },
    {
      id:1,
      title:'TypeScript'
    }
  ]

  constructor(public fb:FormBuilder) {
    this.forms=this.fb.group({
      assname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(30),Validators.pattern("[a-zA-Z \s]+")]],
      assid:['',[Validators.required,Validators.pattern("[0-9\s]+"),Validators.minLength(6)]],
      prjctid:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9\s]+"),Validators.minLength(12),Validators.maxLength(12)]],
      locat:['',[Validators.required]],
      locatsel:['',Validators.required],
      courses: this.fb.array([]),
      profile:['',Validators.required],
      comment:['',Validators.required]
    })
   }
get assname(){
  return this.forms.controls['assname'];
}
get assid(){
  return this.forms.controls['assid'];
}
get prjctid(){
  return this.forms.controls['prjctid'];
}
get locat(){
  return this.forms.controls['locat'];
}
get locatsel(){
  return this.forms.controls['locatsel'];
}
get courses(){
  return this.forms.get('courses') as FormArray
}
get profile(){
  return this.forms.controls['profile'];
}
get comment(){
  return this.forms.controls['comment'];
}
addCoursesToForm(){
  this.allcourses.map((c)=>{
    this.courses.push(this.fb.control(false))
  })
}
  ngOnInit(): void {
    this.addCoursesToForm();
    this.forms.controls['courses'].setValidators((x)=>{
      var k = x.value.filter((a: any)=>a)
      console.log(k)
      if(k.length<5){
        return {counterror:k.length}
      }
      return null   
    })
  }
  savedet(){
    console.log(this.forms);
  }
  resetForm(){
    this.forms.reset();
  }
}
