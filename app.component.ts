import { Component } from '@angular/core';
import{ FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rform: FormGroup;
  post:any;
  Description: string = '';
  name:string = '';
  titleAlert: string = 'This Field Is Required';
  

  constructor( private fb:FormBuilder){
    this.rform = fb.group({
      'name':[null,Validators.required],
      
      'Description':[null,Validators.compose([
        Validators.required,Validators.minLength(1),Validators.maxLength(3000)]),],
      
      'validate': ''
    });
 }

 addPost(post){
   this.Description = post.Description;
   this.name = post.name;
 }
}
