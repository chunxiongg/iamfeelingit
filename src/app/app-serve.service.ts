import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AppServeService {

  constructor() { }

  public mcqData = [
    {
      qn_id: 1,
      qn_number: 'Question 1',
      question: 'Your best friend accidentally broke your go-to eyeshadow palette, what will you do?',
      image: 'assets/steps/1.svg',
      answerOption: [
        { id: 1, answer: 'a', name: "Say “It’s okay, I can always get a new one" },
        { id: 2, answer: 'b', name: 'Will be angry but will get over it' },
        { id: 3, answer: 'c', name: 'Argue with your friend and hold a grudge for a long time' },
      ]
    },
    {
      qn_id: 2,
      qn_number: 'Question 2',
      question: 'It’s raining heavily and you realised that you didn’t bring your umbrella. Do you...',
      image: 'assets/steps/2.svg',
      answerOption: [
        { id: 5, answer: 'a5', name: 'Run in the rain' },
        { id: 6, answer: 'b6', name: 'Wait for the rain to get smaller and walk under the rain' },
        { id: 7, answer: 'c7', name: 'Buy an umbrella' }
      ]
    },
    {
      qn_id: 3,
      qn_number: 'Question 3',
      question: 'Knowing that you will be caught for wearing ankle socks, what will you do?',
      image: 'assets/steps/3.svg',
      answerOption: [
        { id: 9, answer: 'a9', name: 'I will just wear ankle socks' },
        { id: 10, answer: 'b10', name: 'Pull the socks up and down again after' },
        { id: 11, answer: 'c11', name: 'I will wear the proper sock length' }
      ]
    },
    {
      qn_id: 4,
      qn_number: 'Question 4',
      question: 'If you have an important job interview the next day and you realized that you do not have a suitable outfit, will you...',
      image: 'assets/steps/4.svg',
      answerOption: [
        { id: 13, answer: 'a13', name: 'Just wear whatever that’s comfortable' },
        { id: 14, answer: 'b14', name: 'Try to mix and match existing clothing to make it formal looking' },
        { id: 15, answer: 'c15', name: 'Rush out of your house to buy a set of formal outfit' }
      ]
    },
    {
      qn_id: 5,
      qn_number: 'Question 5',
      question: 'You see your bus approaching the bus stop across the road and the next bus is coming in 10 mins, but the traffic light is not turning green, do you...',
      image: 'assets/steps/5.svg',
      answerOption: [
        { id: 17, answer: 'a17', name: 'Dash across the road' },
        { id: 18, answer: 'b18', name: 'Start pressing the button vigorously' },
        { id: 19, answer: 'c19', name: 'Wait for the traffic to turn green' },
      ]
    },
    {
      qn_id: 6,
      qn_number: 'Question 6',
      question: 'You have a very bad sore throat but you are craving for something spicy, do you...',
      image: 'assets/steps/6.svg',
      answerOption: [
        { id: 17, answer: 'a17', name: 'Go ahead and order' },
        { id: 18, answer: 'b18', name: 'Order with less spice' },
        { id: 19, answer: 'c19', name: 'Not order' },
      ]
    },
    {
      qn_id: 7,
      qn_number: 'Question 7',
      question: 'Your friends describe you as...',
      image: 'assets/steps/7.svg',
      answerOption: [
        { id: 17, answer: 'a17', name: 'Chill' },
        { id: 18, answer: 'b18', name: 'Indecisive' },
        { id: 19, answer: 'c19', name: 'Careful' },
      ]
    },
    {
      qn_id: 8,
      qn_number: 'Question 8',
      question: 'Your wisdom tooth is growing but you have no time to visit the doctor, do you...',
      image: 'assets/steps/8.svg',
      answerOption: [
        { id: 17, answer: 'a17', name: 'Self-medicate' },
        { id: 18, answer: 'b18', name: 'Wait for a few days to see if the pain persists' },
        { id: 19, answer: 'c19', name: 'Clear my schedule to visit the dentists straight away' },
      ]
    },
    {
      qn_id: 9,
      qn_number: 'Question 9',
      question: 'How do you arrange your closet?',
      image: 'assets/steps/9.svg',
      answerOption: [
        { id: 17, answer: 'a17', name: 'I don’t organise and fold my clothes' },
        { id: 18, answer: 'b18', name: 'I just fold my clothes and place it in the closet randomly' },
        { id: 19, answer: 'c19', name: 'I organise it by colours or style' },
      ]
    },
    {
      qn_id: 10,
      qn_number: 'Question 10',
      question: 'How do you feel if you do not follow all the rules to confinement?',
      image: 'assets/steps/10.svg',
      answerOption: [
        { id: 17, answer: 'a17', name: 'Does it matter?' },
        { id: 18, answer: 'b18', name: 'Umm, I’m not sure.' },
        { id: 19, answer: 'c19', name: 'I think it would be the best to follow it.' },
      ]
    },
 

    {
      final: 'You have completed the quiz!',
      pic: 'assets/read.svg',
      results: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum voluptatem ducimus magni. Quos, rerum?',
      resetBtn: 'Restart',
      home: 'Go Home'
    }
  ]

  public mythFact = [
    {
      id: 1,
      qn_number: 'Myth vs Fact 1',
      img: 'assets/read.svg',
      qn: 'I can drink plain water.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a fact. It is totally fine for you to consume plain water. However, water consumed should be boiled warm or hot in temperature.',
      explaination: 'Consuming confinement meals can by heaty for the body, which explains the importance of water. Fluids ​are also essential for breastfeeding mothers as breast milk is mostly made up of water.',
      tip: 'Consuming red dates tea in moderation can help to boost blood circulation and reduces water retention. Water should not be cold or room temperature when consumed'
    }, // FACT
    {
      id: 2,
      qn_number: 'Myth vs Fact 2',
      img: 'assets/read.svg',
      qn: 'I cannot workout during confinement.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a fact. Mothers should not over exert themselves or engage in strenuous activities.'
    }, // FACT

    {
      id: 3,
      qn_number: 'Myth vs Fact 3',
      img: 'assets/decide.svg',
      qn: 'I cannot bathe and wash my hair for one month.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a myth. It is important to keep yourself hygienic at all times. Personal comfort should be prioritized to reduce the chances of rashes and wound infection, especially at the genital area.'
    }, // MYTH

    {
      id: 4,
      qn_number: 'Myth vs Fact 4',
      img: 'assets/app.svg',
      qn: 'I must avoid all sources of wind, including fans and air conditioners.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a myth. Mothers are encouraged to use the air conditioner instead of the fan as long as they are not directly exposed to the wind or cold air.'
    }, // MYTH

    {
      id: 5,
      qn_number: 'Myth vs Fact 5',
      img: 'assets/app.svg',
      qn: 'I must consume alcohol in my confinement meals.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a myth. Alcohol helps to promote blood circulation but it is NOT a must to consume them.'
    }, // MYTH

    {
      id: 6,
      qn_number: 'Myth vs Fact 6',
      img: 'assets/app.svg',
      qn: 'All my confinement meals should have ginger.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a myth. Ginger is advised to be included but not necessary for all meals.'
    }, // MYTH

    {
      id: 7,
      qn_number: 'Myth vs Fact 7',
      img: 'assets/app.svg',
      qn: 'I must get plenty of bed rest during confinement.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a fact. Having sufficient bed rest enables the body to recuperate and subsequently regain its pre-pregnancy state.'
    }, // FACT

    {
      id: 8,
      qn_number: 'Myth vs Fact 8',
      img: 'assets/app.svg',
      qn: 'I should avoid seafood like shellfish.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a fact. Shellfish such as clams and oysters should not be consumed during confinement.'
    }, // FACT

    {
      final: 'You have completed the myth vs fact!',
      pic: 'assets/read.svg',
      results: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum voluptatem ducimus magni. Quos, rerum?',
      resetBtn: 'Restart',
      home: 'Go Home'
    }
  ]

  getMythFact() {
    return this.mythFact
  }

  public foodRecipe = [
    { 
      cat_id: 1, cat_name: 'Pork', cat_img: 'assets/babi.jpg',
      image: 'assets/babi.jpg', id: 1, name: 'Pork Trotter in Black Rice Vinegar', 
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
    
    { 
      cat_id: 2, cat_name: 'Chicken', cat_img: 'assets/chicken.jpg',
      image: 'assets/chicken.jpg', id: 2, name: 'Steamed Chicken with Spices',
      information: [{ title: 'Calories', figure: 3000 }, { title: 'Prep Time', figure: '30m' }, { title: 'Cook Time', figure: '165m' }],
      briefDes: 'Healthy steamed chicken. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aspernatur.',
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

    { 
      cat_id: 2, cat_name: 'Chicken', cat_img: 'assets/chicken.jpg',
      image: 'assets/herbal.jpg', id: 3, name: 'Emperor Herbal Chicken',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      ingredients: [{ a: '1 whole fresh chicken', b: '½ tbsp dark soya sauce', c: '2 pcs dang gui (当归)', d: '6 pcs dang shen (党参)', e: '3 pcs yu zhu (玉竹)', f: '10 pcs red dates (红枣)', g: '1 tbsp wolfberries (枸杞子)', h: '5 pcs dried scallops', i: '900ml water' }],
      recipe: [{ Step: 'Wash and pat the chicken dry. Rub the chicken entirely with dark soya sauce.', img: 'assets/steps/1.svg'}, 
               { Step: 'Using a sharp skewer, poke the chicken all over with it, in particular the thigh area. (As the thigh area is often the part where the meat tends to take longer to be cook through.)', img: 'assets/steps/2.svg' }, 
               { Step: 'Rinse the herbs and soak them in water briefly.', img: 'assets/steps/3.svg' },
               { Step: 'Add all the ingredients for the herbal broth into the water in a deep wok and allow it to boil.', img: 'assets/steps/4.svg' },
               { Step: 'After the broth has boiled, add the chicken.', img: 'assets/steps/5.svg' },
               { Step: 'Once chicken has been in marinade for a while, place the plate with the chicken in the steamer.', img: 'assets/steps/6.svg' },
               { Step: 'Cover the wok and allow it simmer for a further 40 minutes on medium heat, turning the chicken once halfway through the cooking time.', img: 'assets/steps/7.svg' },
               { Step: 'Add all the rest of the seasoning ingredients into the herbal broth and stir slightly to mix well.', img: 'assets/steps/8.svg' },
               { Step: 'Serve and enjoy!', img: 'assets/steps/9.svg'}]
    },

    {
      cat_id: 3, cat_name: 'Soup', cat_img: 'assets/chickenSoup.png'
    }
  ]

  getRecipeArr() {
    return this.foodRecipe;
  }

  getAllCategory(makanIndividual) {
    return this.foodRecipe.find(e => e.cat_id === makanIndividual)
  }

  // Individual Food Id
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
  
  public lactationData = [
    {
      Card_id: 1,
      Card: 'Card A',
      info: 'Card A info'
    },

    {
      Card_id: 2,
      Card: 'Card B',
      info: 'Card B info'
    },

    {
      Card_id: 3,
      Card: 'Card C',
      info: 'Card C info'
    },

    {
      Card_id: 4,
      Card: 'Card D',
      info: 'Card D info'
    }
  ]

  getLactation() {
    return this.lactationData;
  }
  
}
