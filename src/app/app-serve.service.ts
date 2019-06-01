import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AppServeService {

  constructor() { }

  public mcqData = [
    {
      question: 'Your best friend is crying after a fight with someone, what do you do?',
      image: 'assets/decide.svg',
      answerOption: [
        { id: 1, answer: 'a', name: "Say it's alright" },
        { id: 2, answer: 'b', name: 'Confront the person' },
        { id: 3, answer: 'c', name: 'Be there and listen to him/her' },
        { id: 4, answer: 'd', name: 'Not sure what to do' }
      ]
    },
    {
      question: 'Which word best describes yourself?',
      image: 'assets/read.svg',
      answerOption: [
        { id: 5, answer: 'a5', name: 'Dreamer' },
        { id: 6, answer: 'b6', name: 'Passionate' },
        { id: 7, answer: 'c7', name: 'Indecisive' },
        { id: 8, answer: 'd8', name: 'Peacemaker'}
      ]
    },
    {
      question: 'You are preparing to leave the house to meet your date for a movie. It starts raining heavily, do you:',
      image: 'assets/app.svg',
      answerOption: [
        { id: 9, answer: 'a9', name: 'Call him/her to cancel the movie date' },
        { id: 10, answer: 'b10', name: 'Leave your date alone' },
        { id: 11, answer: 'c11', name: 'Suggest to watch at a later timing' },
        { id: 12, answer: 'd12', name: 'Go ahead with the plan'}
      ]
    },
    {
      question: 'The weather is getting hot and you are thirsty. Which drink will you buy?',
      image: 'assets/app.svg',
      answerOption: [
        { id: 13, answer: 'a13', name: 'Mineral water' },
        { id: 14, answer: 'b14', name: 'Soft drink' },
        { id: 15, answer: 'c15', name: 'Bubble tea' },
        { id: 16, answer: 'd16', name: 'Coffee/Tea'}
      ]
    },
    {
      question: 'You are feeling extremely stressed due to work piling up. What would you do?',
      image: 'assets/app.svg',
      answerOption: [
        { id: 17, answer: 'a17', name: 'Cry in anxiety' },
        { id: 18, answer: 'b18', name: 'Continue to procrastinate' },
        { id: 19, answer: 'c19', name: 'What is stress?' },
        { id: 20, answer: 'd20', name: 'Continue working at your own pace'}
      ]
    }
  ]

  public arrQuote = [
  'Have I not commanded you? Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go.',
  'But seek first the kingdom of God and His righteousness, and all these things shall be added to you.',
  'But those who wait on the Lord shall renew their strength.',
  'For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.',
  'And whatever you do, do it heartily, as to the Lord and not to men.' ,
  'I can do all things through Christ who strengthens me.',
  'Put on the whole armor of God, that you may be able to stand against the wiles of the devil.'
  ]

  public randomChosen = [];

  returnChosen() {
    return this.randomChosen;
  }

  getArrQuote() {
    var random = this.arrQuote[Math.floor(Math.random() * this.arrQuote.length)]

    // var d = new Date();
    // var t = d.getHours(); // Current Hour
    // if (t == 20) {
    //   var random = this.arrQuote[Math.floor(Math.random() * this.arrQuote.length)]
    // }

    this.randomChosen.push(random);
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      // var d = new Date();
      // var x = d.toDateString();
      // document.getElementById('verse').innerHTML = x;
    }, 2000)
    
  }

  getQuizArr() {
    return this.mcqData;
  }
  
  submittedAns = [];

  getSelected(options) {
    // console.log(options.name + ' selected');
    if (options.name == 'Confront the person') {
      this.submittedAns.push(options);
    }
    //this.submittedAns.push(options);
  }

  submitBtn() {
    Swal.fire({
      type: 'success',
      title: 'Done!',
      text: 'Your answers have been submitted',
    })
    console.log(this.submittedAns);
  }
  
}
