import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-accordion',
  imports: [],
  templateUrl: './faq-accordion.html',
  styleUrl: './faq-accordion.scss',
})
export class FaqAccordion {
  private static readonly _FAQS = [
    {
      question: 'What is Angular?',
      answer: 'Angular is a platform for building mobile and desktop web applications.',
    },
    {
      question: 'What is a component in Angular?',
      answer:
        'A component controls a patch of the screen called a view. Components are the main building block of Angular applications.',
    },
    {
      question: 'What are Angular directives?',
      answer:
        'Directives are instructions in the DOM. Angular directives allow you to attach behavior to elements in the DOM.',
    },
  ];
}
