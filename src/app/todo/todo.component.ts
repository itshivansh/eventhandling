import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  // todoList contains all todos
  todoList: Todo[]=[];
  public clr:boolean;
  public status:string = "Undone"; 
  constructor() { }

  ngOnInit() {
  }
  // write logic to the onAddTodo method is to add a new todo to list
  // get maximum id in list and assign maximum id plus one while adding a todo
  onAddTodo(todoText: any) {
    if(todoText.length>0&&todoText !==''){
      this.clr=false;
      let max = this.todoList.length;
      var todoarr={
        todoId:max+1,
        text:todoText,
        isCompleted:false
      }
      this.todoList.push(todoarr);
      console.log(this.todoList)
    }
  }

  // write logic to the onClearTodos method to delete the all todos in the todoList
  onClearTodos() {
    this.clr=true;
    this.todoList=[];
  }

  // write logic to method onCompletingTask, to mark todo as as completed or not
  onCompletingTodo(todo: Todo) {
    if(todo.isCompleted){
      todo.isCompleted=false;
    }
    else{
      todo.isCompleted=true;
    }
  }

  // write logic to method onDeletingTask, to delete the todo
  onDeletingTodo(todoId) {
     this.todoList=this.todoList.filter(t=>t.todoId !==todoId)
    //this.todoList=this.todoList.filter(todoList=>todoList.todoId !==todoList.todoId)
  }
}
