import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AppServeService {

  constructor() { }

  public mcqData = [
    {
      question: '1. Your best friend is crying after a fight with someone, what do you do?',
      image: 'assets/stageOne.svg',
      answerOption: [
        { id: 1, answer: 'a', name: "Say it's alright" },
        { id: 2, answer: 'b', name: 'Confront the person' },
        { id: 3, answer: 'c', name: 'Be there and listen to him/her' },
        { id: 4, answer: 'd', name: 'Not sure what to do' }
      ]
    },
    {
      question: '2. Which word best describes yourself?',
      image: 'assets/stageTwo.svg',
      answerOption: [
        { id: 5, answer: 'a5', name: 'Dreamer' },
        { id: 6, answer: 'b6', name: 'Passionate' },
        { id: 7, answer: 'c7', name: 'Indecisive' },
        { id: 8, answer: 'd8', name: 'Peacemaker'}
      ]
    },
    {
      question: '3. You are preparing to leave the house to meet your date for a movie. It starts raining heavily, do you:',
      image: 'assets/stageThree.svg',
      answerOption: [
        { id: 9, answer: 'a9', name: 'Call him/her to cancel the movie date' },
        { id: 10, answer: 'b10', name: 'Leave your date alone' },
        { id: 11, answer: 'c11', name: 'Suggest to watch at a later timing' },
        { id: 12, answer: 'd12', name: 'Go ahead with the plan'}
      ]
    },
    {
      question: '4. The weather is getting hot and you are thirsty. Which drink will you buy?',
      image: 'assets/app.svg',
      answerOption: [
        { id: 13, answer: 'a13', name: 'Mineral water' },
        { id: 14, answer: 'b14', name: 'Soft drink' },
        { id: 15, answer: 'c15', name: 'Bubble tea' },
        { id: 16, answer: 'd16', name: 'Coffee/Tea'}
      ]
    },
    {
      question: '5. You are feeling extremely stressed due to work piling up. What would you do?',
      image: 'assets/shapes.svg',
      answerOption: [
        { id: 17, answer: 'a17', name: 'Cry in anxiety' },
        { id: 18, answer: 'b18', name: 'Continue to procrastinate' },
        { id: 19, answer: 'c19', name: 'What is stress?' },
        { id: 20, answer: 'd20', name: 'Continue working at your own pace'}
      ]
    }
  ]

  public mythFact = [
    {
      id: 1,
      qn: 'Water is good for health',
      options: [{ id: 1, ans: 'Myth' }, { id: 2, ans: 'Fact' }]
    },

    {
      id: 2,
      qn: 'Chia seeds are bad for health',
      options: [{ id: 1, ans: 'Myth', isCorrect: true}, { id: 2, ans: 'Fact', isCorrect: false}]
    }
  ]

  getMythFact() {
    return this.mythFact
  }

  public foodRecipe = [
    { image: 'assets/babi.jpg', id: 1, name: 'Pork Trotter in Black Rice Vinegar', 
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Nourishing dish that provides several health benefits.',
      des: 'A pig\'s trotter, is the culinary term used to refer to the foot of a pig. The cuts are used in various dishes around the world, and experienced a resurgence in the late 2000s.', 
      ingredients: [{ a: '500g pork trotter', b: '1 litre sweet vinegar', c: '500ml black rice vinegar', d: 'Hard-boiled eggs', e: '10 large pieces of old ginger' }],
      recipe: [{ Step: 'Wash ginger and dry it for a day.', img: 'assets/steps/1.svg' }, 
               { Step: 'Peel the ginger and slice it into bite-size pieces', img: 'assets/steps/2.svg' },
               { Step: 'Stir fry ginger on high heat (no need to add oil).', img: 'assets/steps/3.svg' },
               { Step: 'Using a large clay pot, pour sweet vinegar and bring it to boil on high heat.', img: 'assets/steps/4.svg' },
               { Step: 'Next, add the stir fried ginger.', img: 'assets/steps/5.svg' },
               { Step: 'Let it simmer for about 1 hour so that the ginger is cooked.', img: 'assets/steps/6.svg' },
               { Step: 'Turn off heat and cover with lid to keep it warm.', img: 'assets/steps/7.svg' },
               { Step: 'Blanch pork trotters quickly.', img: 'assets/steps/8.svg' },
               { Step: 'Add pork trotters to sweet vinegar and then black rice vinegar for seasoning.', img: 'assets/steps/9.svg' },
               { Step: 'Add in as many eggs as you want.', img: 'assets/steps/10.svg' },
               { Step: 'Cover lid and let it simmer for about 30 minutes until cooked.', img: 'assets/steps/11.svg' }]
    },
    
    { image: 'assets/chicken.jpg', id: 2, name: 'Steamed Chicken with Spices',
      information: [{ title: 'Calories', figure: 3000 }, { title: 'Prep Time', figure: '30m' }, { title: 'Cook Time', figure: '165m' }],
      briefDes: 'Healthy steamed chicken.',
      des: 'Many ways to cook chicken and one is to enjoy it steamed and let it cooked in its own juices. It\'s also healthier than cooking it in oil! Here is a steamed chicken dish that can be prepared without hassle.',
      ingredients: [{ a: '1 chicken whole leg', b: '2 tomatoes (sliced into 1-centimetre strips)', c: '1 onion (sliced into thin strips)', d: '1 red chili (remove the seeds)', e: '2 cloves of garlic', f: '1-inch piece of ginger root', g: '2 tablespoon of oyster sauce', h: '½ teaspoon of thick soy sauce', i: '1 tablespoon of hot water', j: '1 tablespoon of chopped scallions', k: 'Tin foil (enough to cover the chicken)' }],
      recipe: [{ Step: 'Pound the red chili, garlic, and ginger root together until they form a paste.', img: 'assets/steps/1.svg'}, 
               { Step: 'Transfer the paste into a bowl and add oyster sauce, soy sauce, and hot water to form a marinade for the chicken.', img: 'assets/steps/2.svg' }, 
               { Step: 'Coat the chicken with the marinade and wrap it in the tin foil.', img: 'assets/steps/3.svg' },
               { Step: 'Then, place the tin foil-wrapped chicken in a heat-proof plate.', img: 'assets/steps/4.svg' },
               { Step: 'Leave the chicken in the fridge to soak in the flavor from the marinade for at least 60 minutes.', img: 'assets/steps/5.svg' },
               { Step: 'Once chicken has been in marinade for a while, place the plate with the chicken in the steamer.', img: 'assets/steps/6.svg' },
               { Step: 'Steam for 15 minutes, then add the tomato slices in with the chicken in the tin foil.', img: 'assets/steps/7.svg' },
               { Step: 'Steam for another 15 minutes or until chicken is cooked.', img: 'assets/steps/8.svg' },
               { Step: 'Serve and enjoy!', img: 'assets/steps/9.svg'}]
    },

    { image: 'assets/babi.jpg', id: 3, name: 'Tomato', website: 'Instagram', link: 'https://instagram.com',
      ingredients: [ 'A', 'B' ],
      recipe: [{ Step: 'step1', img: 'assets/steps/1.svg'}, {Step: 'step2', img: 'assets/steps/2.svg'}, {Step: 'step3', img: 'assets/steps/3.svg'} ]
    }
  ]

  getRecipeArr() {
    return this.foodRecipe;
  }

  getIndividual(makanIndividual) {
    return this.foodRecipe.find(e => e.id === makanIndividual)
  }

  public arrQuote = [
  'Have I not commanded you? Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go.',
  'But seek first the kingdom of God and His righteousness, and all these things shall be added to you.',
  'But those who wait on the Lord shall renew their strength.',
  'For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.',
  'And whatever you do, do it heartily, as to the Lord and not to men.' ,
  'I can do all things through Christ who strengthens me.',
  'Put on the whole armor of God, that you may be able to stand against the wiles of the devil.',
  'Rest in the Lord, and wait patiently for Him. Do not fret because of him who prospers in his way, Because of the man who brings wicked schemes to pass.'
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
