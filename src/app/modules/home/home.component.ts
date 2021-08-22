import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  public isMenuCollapsed = true;
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {}

  onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.isMenuCollapsed = true;
  }
}
