import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  todos = [
  { 
    label: 'Do the shop',
    done: false,
    priority: 2
  } ,
  { 
    label: 'Cut the grass',
    done: false,
    priority: 3
  } ,
  { 
    label: 'Pay the council tax',
    done: false,
    priority: 1
  } ,
  { 
    label: 'Go to the gym',
    done: false,
    priority: 2
  } 
  ];

  addTodo(newTodoLabel){

    var newTodo ={
      label: newTodoLabel,
      priority: 1,
      done: false
      };
      this.todos.push(newTodo); 

    }

    deleteTodo(todo){
      this.todos =this.todos.filter(t=>t.label !== todo.label);

    }


  }
