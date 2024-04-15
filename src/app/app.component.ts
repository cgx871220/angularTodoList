import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngTodo';


  inputText = ''
  dataList: {
    checked: boolean,
    context: string
  }[] = []

  addData(value: string) {
    if (value === '') {
      return
    }
    this.dataList.push({
      checked: false,
      context: value
    })
    this.inputText = ''
  }



  checkAll() {
    this.dataList.forEach((item) => {
      item.checked = true
    })
  }


  deleteFn() {
    this.dataList = this.dataList.filter(item =>!item.checked)

  }
}
