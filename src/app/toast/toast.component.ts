import { Component,OnInit } from '@angular/core';
import {ToastService} from '../toast.service'
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  constructor(public toastService: ToastService) { }

  ngOnInit(): void {
  }
}
