import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.css']
})
export class PopupModalComponent implements OnInit, AfterViewInit {
  modal;
  // Get the button that opens the modal
  btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
  span = document.getElementsByClassName('close')[0];
  constructor(private myElement: ElementRef) {
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.modal = this.myElement.nativeElement.querySelector('div');
  }

  // When the user clicks on the button, open the modal
  onclickOpen() {
    console.log('modall: ', this.modal);
    this.modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
  onclickClose = function() {
  this.modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
  onclickOutside(event) {
  if (event.target === this.modal) {
    // this.modal.style.display = 'none';
  }
}
}
