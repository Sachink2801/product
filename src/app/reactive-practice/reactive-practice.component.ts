import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from, interval, Observable } from 'rxjs';
import { FireBasePost } from '../models/fireBasePost';
import { FirebaseService } from '../service/firebase.service';
import {map,filter, toArray, take, find, takeLast} from 'rxjs/operators';


@Component({
  selector: 'app-reactive-practice',
  templateUrl: './reactive-practice.component.html',
  styleUrls: ['./reactive-practice.component.css']
})


export class ReactivePracticeComponent implements OnInit {
  submitted :boolean=false;
notAllowName=['codemind','technology','sachin'] 
emailNotAllowed=['codemindtechnology@gmail.com']

  genders=[
    {id:1,value:"Male"},
    {id:2,value:"Female"}
  ]

 myReactiveForm:FormGroup 
  
 fireBasePost : FireBasePost

  constructor(private _fb :FormBuilder, private _firebaseservice :FirebaseService) { 
    this.createForm();
  }

  ngOnInit() {

    const data= from(this._firebaseservice.user);

    //simple method 
    data.subscribe(res => {
      console.log('user name ',res.name);
      
    })

    //using RXJS operator 
    data.pipe(
      map(x => x.id)
    ).subscribe(res =>{
      console.log('only user name :',res);
    })

    data.pipe(
      map(x => x.name +' '+ 'kadam ')
    ).subscribe(res => {
      console.log('username :',res);
      
    })

    data.pipe(
      filter(u => u.gender == 'Male'),
       toArray()
    ).subscribe(res => {
      console.log("filter gender :", res);
      
    })

  data.pipe(
    map(x => x.name + " "+"king")
  ).subscribe(res => {
   console.log(" king of kings :", res);
   
  })
 

  //take()
  const source = interval(1000);
  
  source.pipe(
    // take(4)
    find(x => x>5)
    
  ).subscribe(res => {
    console.log("interval hai kay re :",res );
    
  })

  //take last 

  let course =['HTML' , 'CSS', 'JAVASCRIPT' ,'TYPESCRIPT', 'ANGULAR']

  const kgf = from(course)

  kgf.pipe(
    takeLast(3)
  ).subscribe(hey => {
    console.log('takeLast ',hey);
    
  })

  

    


    // setValue()
  //  setTimeout(()=>{
  //   this.myReactiveForm.setValue({
  //    'userDetails':{
  //     "username":"sachin kadam",
  //     'email':'sachinkadam2801@gmail.com',
  //    },
  //    'course':"Angular",
  //    'gender':'Male'
  //   })
  //    },5000)

     //patchValue
    //  setTimeout(()=>{
    //   this.myReactiveForm.patchValue({
    //     'userDetails':{
    //       'username':"sachin kadam",
    //       'email':'sk@gmail.com'
    //     }
    //   })
    //  },5000)
     
      }
      
   
  

 createForm(){
// this.myReactiveForm=new FormGroup({
//   "userDetails":new FormGroup({
//     "username":new FormControl('',[Validators.required,this.NaName.bind(this)]),
//     "email":new FormControl('',[Validators.required,Validators.email],this.NaEmail)
//   }),
//   "course" :new FormControl("Angular",[Validators.required]),
//   "gender" :new FormControl(" "),
//  "skills" :new FormArray([
//   new FormControl(null,Validators.required)
//  ])
// })

this.myReactiveForm=this._fb.group({
  'userDetails' : this._fb.group({
    'username': ['',Validators.required],
    'email' :['',Validators.required]
  }),
  'course' :["Angular",Validators.required],
  'gender' :['Male',Validators.required],
  'skills' : this._fb.array([])
})
}

OnSubmit(){
  this.submitted=true;
  console.log(this.myReactiveForm);
  console.log(this.myReactiveForm.value.userDetails.value);
  
   this.fireBasePost =new FireBasePost()
   this.fireBasePost.username=this.myReactiveForm['controls'].userDetails['controls'].username.value;
   this.fireBasePost.email=this.myReactiveForm['controls'].userDetails['controls'].email.value;
   this.fireBasePost.course=this.myReactiveForm['controls'].course.value;
   this.fireBasePost.gender=this.myReactiveForm['controls'].gender.value;
   this.fireBasePost.skills=this.myReactiveForm['controls'].skills.value;
 // this._firebaseservice.createPostDataReactiveForm()
}

onAddSkills(){
  (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null,Validators.required));
}
removeContact(){
  (<FormArray>this.myReactiveForm.controls['Remove']);
  
  
}

NaName(control:FormControl){
  
 if(this.notAllowName.indexOf(control.value)!==-1)
 {
  return{'notAllowName' :true}
 }
 return null;
}

 NaEmail(control:FormControl): Promise<any> | Observable <any> {
   const myResponse =new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === 'codemindtechnology@gmail.com'){
          resolve({'emailNotAllowed': true})
      }else{
          resolve(null)
      }
     },3000);

   })
   return myResponse;
  }

  

}
