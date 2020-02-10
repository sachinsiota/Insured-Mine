import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeData = [
    {
    title: 'What is InsuredMine?',
    content: 'An Add-on to any Agency Management System that helps Agents with sales,' + 
             'engagement, analytics, and mobility. Insurance Agents/Support Teams utilize' +
             'InsuredMine’s Agency Portal and Mobile App to manage clients & prospects, '+
             'offering an omnichannel presence and last mile connectivity.'
  },
  {
    title: 'TESTIMONIAL',
    content: "What Agents Say It combines phone, text and email connections in one application."+
             'Extremely useful functionality, including customer facing portal '+
             'as well as agency facing portal. I especially like the ability to '+
             "mine those coverages a client enters in their portal which I didn't write."+
             "STANLEY DEAN, Selling Insurance since 1963"
  },
  {
    title: 'Services',
    content: 'Whether your clients/contacts request a change, ask for data or '+
             'document, or anything, don’t let it fall through the cracks. '+
             'Task Manager will help you organize, collaborate and exceed expectations!'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
