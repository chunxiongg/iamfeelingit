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
        { id: 1, answer: 'aa', name: "Say 'It’s okay, I can always get a new one.'" },
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
        { id: 1, answer: 'a5', name: 'Run in the rain' },
        { id: 2, answer: 'b6', name: 'Wait for the rain to get smaller and walk under the rain' },
        { id: 3, answer: 'c7', name: 'Buy an umbrella' }
      ]
    },
    {
      qn_id: 3,
      qn_number: 'Question 3',
      question: 'Knowing that you will be caught for wearing ankle socks, what will you do?',
      image: 'assets/steps/3.svg',
      answerOption: [
        { id: 1, answer: 'a9', name: 'I will just wear ankle socks' },
        { id: 2, answer: 'b10', name: 'Pull the socks up and down again after' },
        { id: 3, answer: 'c11', name: 'I will wear the proper sock length' }
      ]
    },
    {
      qn_id: 4,
      qn_number: 'Question 4',
      question: 'If you have an important job interview the next day and you realized that you do not have a suitable outfit, will you...',
      image: 'assets/steps/4.svg',
      answerOption: [
        { id: 1, answer: 'a13', name: 'Just wear whatever that’s comfortable' },
        { id: 2, answer: 'b14', name: 'Try to mix and match existing clothing to make it formal looking' },
        { id: 3, answer: 'c15', name: 'Rush out of your house to buy a set of formal outfit' }
      ]
    },
    {
      qn_id: 5,
      qn_number: 'Question 5',
      question: 'You see your bus approaching the bus stop across the road and the next bus is coming in 10 mins, but the traffic light is not turning green, do you...',
      image: 'assets/steps/5.svg',
      answerOption: [
        { id: 1, answer: 'a17', name: 'Dash across the road' },
        { id: 2, answer: 'b18', name: 'Start pressing the button vigorously' },
        { id: 3, answer: 'c19', name: 'Wait for the traffic to turn green' },
      ]
    },
    {
      qn_id: 6,
      qn_number: 'Question 6',
      question: 'You have a very bad sore throat but you are craving for something spicy, do you...',
      image: 'assets/steps/6.svg',
      answerOption: [
        { id: 1, answer: 'a17', name: 'Go ahead and order' },
        { id: 2, answer: 'b18', name: 'Order with less spice' },
        { id: 3, answer: 'c19', name: 'Not order' },
      ]
    },
    {
      qn_id: 7,
      qn_number: 'Question 7',
      question: 'Your friends describe you as...',
      image: 'assets/steps/7.svg',
      answerOption: [
        { id: 1, answer: 'a17', name: 'Chill' },
        { id: 2, answer: 'b18', name: 'Indecisive' },
        { id: 3, answer: 'c19', name: 'Careful' },
      ]
    },
    {
      qn_id: 8,
      qn_number: 'Question 8',
      question: 'Your wisdom tooth is growing but you have no time to visit the doctor, do you...',
      image: 'assets/steps/8.svg',
      answerOption: [
        { id: 1, answer: 'a17', name: 'Self-medicate' },
        { id: 2, answer: 'b18', name: 'Wait for a few days to see if the pain persists' },
        { id: 3, answer: 'c19', name: 'Clear my schedule to visit the dentists straight away' },
      ]
    },
    {
      qn_id: 9,
      qn_number: 'Question 9',
      question: 'How do you arrange your closet?',
      image: 'assets/steps/9.svg',
      answerOption: [
        { id: 1, answer: 'a17', name: 'I don’t organise and fold my clothes' },
        { id: 2, answer: 'b18', name: 'I just fold my clothes and place it in the closet randomly' },
        { id: 3, answer: 'c19', name: 'I organise it by colours or style' },
      ]
    },
    {
      qn_id: 10,
      qn_number: 'Question 10',
      question: 'How do you feel if you do not follow all the rules to confinement?',
      image: 'assets/steps/10.svg',
      answerOption: [
        { id: 1, answer: 'a17', name: 'Does it matter?' },
        { id: 2, answer: 'b18', name: 'Umm, I’m not sure.' },
        { id: 3, answer: 'c19', name: 'I think it would be the best to follow it.' },
      ]
    },
 

    {
      final: 'You have completed the quiz!',
      pic: 'assets/complete-task.svg',
      //results: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum voluptatem ducimus magni. Quos, rerum?',
      resetBtn: 'Restart',
      home: 'Go Home'
    }
  ]

  public mythFact = [
    {
      id: 1,
      qn_number: 'Myth vs Fact 1',
      img: 'assets/Practices/drinking-water.svg',
      qn: 'I can drink plain water.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a fact. It is totally fine for you to consume plain water. However, water consumed should be boiled warm or hot in temperature.'
    }, // FACT
    {
      id: 2,
      qn_number: 'Myth vs Fact 2',
      img: 'assets/Practices/workout.svg',
      qn: 'I cannot workout during confinement.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a fact. Mothers should not over exert themselves or engage in strenuous activities.'
    }, // FACT

    {
      id: 3,
      qn_number: 'Myth vs Fact 3',
      img: 'assets/Practices/bathing.svg',
      qn: 'I cannot bathe and wash my hair for one month.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a myth. It is important to keep yourself hygienic at all times. Personal comfort should be prioritized to reduce the chances of rashes and wound infection, especially at the genital area.'
    }, // MYTH

    {
      id: 4,
      qn_number: 'Myth vs Fact 4',
      img: 'assets/Practices/wind.svg',
      qn: 'I must avoid all sources of wind, including fans and air conditioners.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a myth. Mothers are encouraged to use the air conditioner instead of the fan as long as they are not directly exposed to the wind or cold air.'
    }, // MYTH

    {
      id: 5,
      qn_number: 'Myth vs Fact 5',
      img: 'assets/Practices/alcohol.svg',
      qn: 'I must consume alcohol in my confinement meals.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a myth. Alcohol helps to promote blood circulation but it is NOT a must to consume them.'
    }, // MYTH

    {
      id: 6,
      qn_number: 'Myth vs Fact 6',
      img: 'assets/Practices/ginger.svg',
      qn: 'All my confinement meals should have ginger.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a myth. Ginger is advised to be included but not necessary for all meals.'
    }, // MYTH

    {
      id: 7,
      qn_number: 'Myth vs Fact 7',
      img: 'assets/Practices/bed-rest.svg',
      qn: 'I must get plenty of bed rest during confinement.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a fact. Having sufficient bed rest enables the body to recuperate and subsequently regain its pre-pregnancy state.'
    }, // FACT

    {
      id: 8,
      qn_number: 'Myth vs Fact 8',
      img: 'assets/Practices/seafood.svg',
      qn: 'I should avoid seafood like shellfish.',
      optionA: 'Myth',
      optionB: 'Fact',
      revealAnswer: 'It\'s a fact. Shellfish such as clams and oysters should not be consumed during confinement.'
    }, // FACT

    {
      final: 'You have completed the myth vs fact!',
      pic: 'assets/Myth-SVG/complete.svg',
      results: 'Congrats! You have just acquired new knowledges.',
      resetBtn: 'Restart',
      home: 'Go Home'
    }
  ]

  getMythFact() {
    return this.mythFact
  }

  public foodRecipe = [
    { 
      cat_id: 1, cat_name: 'Common', cat_img: 'assets/Food/dang-gui-soup.png',
      image: 'assets/Food/shenghua-soup.png', id: 1, name: 'Sheng Hua Soup 生化汤', 
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Sheng Hua Tang (生化汤) is a Chinese herbal soup formula designed for mothers after childbirth to aid uterus recovery in clearing blood stasis and tissue from the uterus.',
      des: 'Sheng Hua Tang is a popular TCM remedy which confinement nannies usually prepare as part of confinement meal to mothers during her first week of confinement. It improves blood circulation, warming the channels to relieve pain, treating retention of placental fragments within uterus and helping the uterus to contract.', 
      ingredients: [{ a: '4g Pao Jiang (Fried Ginger, 炮姜)', b: '6g Zhi Gan Cao (Roasted Licorice Root, 炙甘草)', c: '10g Dang Gui (Chinese Angelica, 当归)', d: '10g Cao Hong Hua (Carthamus Tinctorius, 草红花)', e: '10g Guang Tao Ren (Semen Persicae, 光桃仁)', f: '10g Chuan Xiong (Lovage Root, 川芎)' }],
      recipe: [{ Step: 'Soak the washed herbs in a bowl of 750ml water for 30min.', img: 'assets/steps/1.svg' }, 
               { Step: 'Bring the herbs and soaked water to a boil until the pot is left with about 200ml. Scoop the soup out and set aside.', img: 'assets/steps/2.svg' },
               { Step: 'Stir fry ginger on high heat (no need to add oil).', img: 'assets/steps/3.svg' },
               { Step: 'Repeat step (1) and step (2) with the same herbs by adding water into the pot. Combine both soups together.', img: 'assets/steps/4.svg' },
               { Step: 'Next, add the stir fried ginger.', img: 'assets/steps/5.svg' },
               { Step: 'You may consume Sheng Hua Soup twice a day (Once in the morning and once in the night).', img: 'assets/steps/6.svg' },
               ]
    }, // Common

    {
      cat_id: 1, cat_name: 'Common', cat_img: 'assets/babi.jpg',
      image: 'assets/Food/dang-gui-soup.png', id: 2, name: 'Dang Gui Nourishing Soup',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Dang Gui Nourishing Soup (当归补血汤), is designed to be consumed during first week of confinement period. Dang Gui Nourishing Soup as your confinement food menu can helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth.',
      des: 'helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth. Dang Gui or Chinese angelica is one of the most well-known Chinese herbs that has a very important place in women’s health and treatment for women’s illnesses. The herb has the ability to strengthen blood, nourish female reproductive organs, regulate menstruation, alleviate period pains and recover from symptoms of low energy or chronic fatigue.',
      ingredients: [{ a: '10g Dang Gui (Chinese Angelica, 当归)', b: '10g Tao Ren (Semen Persicae, 桃仁)', c: '15g Shu Di (Radix Rehmanniae Preparata, 熟地)', d: '10g Chuan Xiong (Lovage Root, 川芎)', e: '10g Hong Zao (Red Dates, 红枣)', f: '10g Hong Hua (Flos Carthami, 红花)', g: '250g Meat of your choice'}],
      recipe: [{ Step: 'Add 1000ml of water in a bowl and soak all the herbs for 30min.', img: 'assets/steps/1.svg' },
               { Step: 'Blanch meat in boiling water for a minute. Remove and set aside. Add the 1000ml of water in a pot, then add meat and bring it to a boil.', img: 'assets/steps/2.svg' },
               { Step: 'Reduce the heat once the soup boils and simmer for 2 hours', img: 'assets/steps/3.svg' },
               { Step: 'Add in seasoning and adjust it to your own preference.', img: 'assets/steps/4.svg' }
              ]
    }, // Common

    {
      cat_id: 1, cat_name: 'Common', cat_img: 'assets/babi.jpg',
      image: 'assets/Food/motherwort-herbal-soup.png', id: 3, name: 'Motherwort Herbal Soup',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Dang Gui Nourishing Soup (当归补血汤), is designed to be consumed during first week of confinement period. Dang Gui Nourishing Soup as your confinement food menu can helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth.',
      des: 'helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth. Dang Gui or Chinese angelica is one of the most well-known Chinese herbs that has a very important place in women’s health and treatment for women’s illnesses. The herb has the ability to strengthen blood, nourish female reproductive organs, regulate menstruation, alleviate period pains and recover from symptoms of low energy or chronic fatigue.',
      ingredients: [{ a: '10g Dang Gui (Chinese Angelica, 当归)', b: '30g Yi Mu Cao (益母草)', c: ' 10g Red Dates (红枣)', d: '10g Ze Lan (泽兰)', e: '250g Meat of your choice', f: 'Salt' }],
      recipe: [{ Step: 'Put all the herbs in a pot after washing it. Pour 2000ml of water into the pot and soak the herbs for about 30 minutes.', img: 'assets/steps/1.svg' },
               { Step: 'Add the lean meat into the pot and bring the soup to a boil.', img: 'assets/steps/2.svg' },
               { Step: 'After boiling, lower the heat and simmer for 2 the soup for another hours.', img: 'assets/steps/3.svg' },
               { Step: 'Add seasoning to your own preference and serve.', img: 'assets/steps/4.svg' }
              ]
    }, // Common
    
    {
      cat_id: 1, cat_name: 'Common', cat_img: 'assets/babi.jpg',
      image: 'assets/Food/chicken-essence.png', id: 4, name: 'Homemade Chicken Essence',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Dang Gui Nourishing Soup (当归补血汤), is designed to be consumed during first week of confinement period. Dang Gui Nourishing Soup as your confinement food menu can helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth.',
      des: 'helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth. Dang Gui or Chinese angelica is one of the most well-known Chinese herbs that has a very important place in women’s health and treatment for women’s illnesses. The herb has the ability to strengthen blood, nourish female reproductive organs, regulate menstruation, alleviate period pains and recover from symptoms of low energy or chronic fatigue.',
      ingredients: [{ a: '1 Chicken, (skin removed and cut into chunks)'}],
      recipe: [{ Step: 'Using a meat hammer, pound the chicken.', img: 'assets/steps/1.svg' },
               { Step: 'In a big bowl, add a smaller bowl in, in an upside down position.', img: 'assets/steps/2.svg' },
               { Step: 'Put in all the pounded chicken on the small bowl.', img: 'assets/steps/3.svg' },
               { Step: 'Using a plate, cover the big porcelain bowl.', img: 'assets/steps/4.svg' },
               { Step: 'Place the bowls and plates into a pot and add water. The water should be filled to half of the bowl.', img: 'assets/steps/5.svg' },
               { Step: 'Use a lid and cover the pot and double boil it for 3 hours.', img: 'assets/steps/6.svg' },
               { Step: 'Gently remove the bowl from pot. Remove the chicken pieces. ', img: 'assets/steps/7.svg' },
               { Step: 'The chicken essence will slowly drip into the small bowl. ', img: 'assets/steps/8.svg' },
               { Step: 'Strain the essence to remove the impurities and serve it while it\'s hot.', img: 'assets/steps/9.svg' }
              ]
    }, // Common

    {
      cat_id: 1, cat_name: 'Common', cat_img: 'assets/babi.jpg',
      image: 'assets/Food/red-wine-fermented-wine-chicken.png', id: 31, name: 'Red Fermented Wine Chicken',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Dang Gui Nourishing Soup (当归补血汤), is designed to be consumed during first week of confinement period. Dang Gui Nourishing Soup as your confinement food menu can helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth.',
      des: 'helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth. Dang Gui or Chinese angelica is one of the most well-known Chinese herbs that has a very important place in women’s health and treatment for women’s illnesses. The herb has the ability to strengthen blood, nourish female reproductive organs, regulate menstruation, alleviate period pains and recover from symptoms of low energy or chronic fatigue.',
      ingredients: [{ a: '1.5kg whole chicken (chopped into smaller sizes)', b: '150g old ginger (thin slices)', c: '4 tbsp Red wine dregs (红糟)', d: '4 tbsp sugar', e: '1 tbsp Sesame oil for frying', f: '3 tbsp light soya sauce', g: '1⁄2 tsp salt', h: '350ml water', i: 'Coriander to garnish' }],
      recipe: [{ Step: 'Add sesame oil into a wok and turn it to high heat. Add the ginger in and fry it till it turns golden brown.', img: 'assets/steps/1.svg' },
               { Step: 'Add chicken into the wok and stir-fry it on high heat.', img: 'assets/steps/2.svg' },
               { Step: 'Add in 2 tbsp of red wine dregs and stir fry until add the chicken is evenly coated.', img: 'assets/steps/3.svg' },
               { Step: 'Add in sugar, light soya sauce and salt. Ensure everything is evenly coated.', img: 'assets/steps/4.svg' },
               { Step: 'Add in the remaining red wine dregs and stir fry till everything is evenly coated.', img: 'assets/steps/5.svg' },
               { Step: 'Add in water and bring it to a boil.', img: 'assets/steps/6.svg' },
               { Step: 'Once it boils, cover with a lid and turn heat to low and simmer for 45 minutes.', img: 'assets/steps/7.svg' },
               { Step: 'You may top the dish with coriander before serving.', img: 'assets/steps/8.svg' } ]
    }, // Common

    {
      cat_id: 1, cat_name: 'Common', cat_img: 'assets/babi.jpg',
      image: 'assets/Food/steamed-cod-fish.png', id: 5, name: 'Steamed Cod Fish',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Dang Gui Nourishing Soup (当归补血汤), is designed to be consumed during first week of confinement period. Dang Gui Nourishing Soup as your confinement food menu can helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth.',
      des: 'helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth. Dang Gui or Chinese angelica is one of the most well-known Chinese herbs that has a very important place in women’s health and treatment for women’s illnesses. The herb has the ability to strengthen blood, nourish female reproductive organs, regulate menstruation, alleviate period pains and recover from symptoms of low energy or chronic fatigue.',
      ingredients: [{ a: '1 Cod Fish Steak (2.5cm thickness)', b: '2 slices Ginger', c: '1 tbs Light Soy Sauce', d: '1 tsp Rock Sugar (or castor sugar)', e: '1 tbs Water', f: '1 tbs Hsao Xing Wine (cooking rice wine)' }],
      recipe: [{ Step: 'Clean the cod fish and use a kitchen towel to pat dry the fish.', img: 'assets/steps/1.svg' },
               { Step: 'Spread the ginger slices in the middle of the plate then put the fish on top of the ginger.', img: 'assets/steps/2.svg' },
               { Step: 'Boil water in a pot or steamer then place the plate of fish in the steamer and steam for 7 minutes.', img: 'assets/steps/3.svg' },
               { Step: 'Meanwhile, prepare the sauce by adding light soya sauce, water and hsao xing wine into a pot. Add rock sugar into a pot and melt it. Then set aside.', img: 'assets/steps/4.svg' },
               { Step: 'Remove the fish from the steamer once its cooked and remove the excess water in the plate of fish.', img: 'assets/steps/5.svg' },
               { Step: 'Pour the sauce over the fish and serve immediately.', img: 'assets/steps/6.svg' }
              ]
    }, // Common

    {
      cat_id: 1, cat_name: 'Common', cat_img: 'assets/babi.jpg',
      image: 'assets/Food/meat-braised-vinegar.png', id: 6, name: 'Meat Braised Vinegar',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Dang Gui Nourishing Soup (当归补血汤), is designed to be consumed during first week of confinement period. Dang Gui Nourishing Soup as your confinement food menu can helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth.',
      des: 'helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth. Dang Gui or Chinese angelica is one of the most well-known Chinese herbs that has a very important place in women’s health and treatment for women’s illnesses. The herb has the ability to strengthen blood, nourish female reproductive organs, regulate menstruation, alleviate period pains and recover from symptoms of low energy or chronic fatigue.',
      ingredients: [{ a: '750g Meat of your choice (chopped into small pieces)', b: '300g old ginger (sliced into strips)', c: '2 cloves of garlic', d: '1.5L hot water', e: '750ml black vinegar', f: '100g brown sugar', g: '2 tbsp sesame oil', h: '4 eggs (hard boiled eggs)', i: '1 stalk Fresh coriander (or gamishing)' }],
      recipe: [{ Step: 'Boil a pot of water and poach the meat for a minute in boiling water.', img: 'assets/steps/1.svg' },
               { Step: 'Remove the meat from the pot and set aside.', img: 'assets/steps/2.svg' },
               { Step: 'Add sesame oil into a pot and fry ginger until it turns golden brown.', img: 'assets/steps/3.svg' },
               { Step: 'Add hot water, black vinegar and brown sugar into the pot.', img: 'assets/steps/4.svg' },
               { Step: 'Boil the soup for 10 minutes.', img: 'assets/steps/5.svg' },
               { Step: 'Add meat and eggs into the soup.', img: 'assets/steps/6.svg' },
               { Step: 'Boil the soup for another 15 minutes on high heat.', img: 'assets/steps/7.svg' },
               { Step: 'Lower the heat and let the soup simmer for 1 hour. Skim off excess oil or foam that is floating.', img: 'assets/steps/8.svg' }
              ]
    }, // Common

    {
      cat_id: 1, cat_name: 'Common', cat_img: 'assets/babi.jpg',
      image: 'assets/Food/sesame-braised-chicken.png', id: 7, name: 'Sesame Braised Chicken',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Dang Gui Nourishing Soup (当归补血汤), is designed to be consumed during first week of confinement period. Dang Gui Nourishing Soup as your confinement food menu can helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth.',
      des: 'helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth. Dang Gui or Chinese angelica is one of the most well-known Chinese herbs that has a very important place in women’s health and treatment for women’s illnesses. The herb has the ability to strengthen blood, nourish female reproductive organs, regulate menstruation, alleviate period pains and recover from symptoms of low energy or chronic fatigue.',
      ingredients: [{ a: '2 tbsp sesame oil', b: '100g old ginger (cut into thin strips)', c: '350g chicken (cut into pieces)', d: '2 tbsp soy sauce', e: '750ml black vinegar', f: '1 tbsp Shaoxing wine', g: '150ml cup water', h: '3 dashes ground white pepper', i: 'Salt and Sugar (to taste)' }],
      recipe: [{ Step: 'In a wok, turn the heat up and add the sesame oil.', img: 'assets/steps/1.svg' },
               { Step: 'Add the ginger strips into the wok and stir fry until it turns brown.', img: 'assets/steps/2.svg' },
               { Step: 'Add the chicken into the wok and stir fry for 15 seconds.', img: 'assets/steps/3.svg' },
               { Step: 'Add in the soy sauce, wine, water and ground white pepper, into the wok and stir fry and ensure that all ingredients are evenly coated.', img: 'assets/steps/4.svg' },
               { Step: 'Boil the soup for 10 minutes.', img: 'assets/steps/5.svg' },
               { Step: 'Cover the skillet or wok with the lid and turn the heat to low heat and let the chicken cook for about 10 minutes or until the sauce thickens and the meat becomes tender.', img: 'assets/steps/6.svg' },
               { Step: 'Reduce the heat to low, and let the chicken simmer in the sauce for 10 minutes. Should the sauce runs out, add some water and cook longer.', img: 'assets/steps/7.svg' },
               { Step: 'You may garnish the dish with some freshly chopped ginger and serve.', img: 'assets/steps/8.svg' }
              ]
    }, // Common

    {
      cat_id: 1, cat_name: 'Common', cat_img: 'assets/babi.jpg',
      image: 'assets/Food/steamed-threadfin.png', id: 8, name: 'Steamed Threadfin',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Dang Gui Nourishing Soup (当归补血汤), is designed to be consumed during first week of confinement period. Dang Gui Nourishing Soup as your confinement food menu can helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth.',
      des: 'helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth. Dang Gui or Chinese angelica is one of the most well-known Chinese herbs that has a very important place in women’s health and treatment for women’s illnesses. The herb has the ability to strengthen blood, nourish female reproductive organs, regulate menstruation, alleviate period pains and recover from symptoms of low energy or chronic fatigue.',
      ingredients: [{ a: '400g threadfin', b: '100g old ginger (grated)', c: '1 large chilli (thinly sliced)(save 2 slices for garnishing)', d: '1 tomato (cut into smaller pieces)', e: '50g preserved mustard (washed and thinly sliced)', f: '3 shitake mushrooms (soaked, stems removed and slice)', g: '2 tbs light soy sauce', h: '2 tbs water', i: '1 tbs Shaoxing wine', j: '2 tsp sesame oil', k: '1/2 tbsp white pepper', l: 'Coriander (for garnish purpose)' }],
      recipe: [{ Step: 'In a plate, add in the fish and pour ginger juice on the fish.', img: 'assets/steps/1.svg' },
               { Step: 'Top the fish with the red chilli slices, mushrooms, preserved mustard and tomato.', img: 'assets/steps/2.svg' },
               { Step: 'Pour light soy sauce, water, wine, pepper and sesame oil over the fish.', img: 'assets/steps/3.svg' },
               { Step: 'Place the fish in the steamer and steam the fish for 25 minutes.', img: 'assets/steps/4.svg' },
               { Step: 'You may top the dish with some coriander or remaining sliced chilli before serving.', img: 'assets/steps/5.svg' }
              ]
    }, // Common

    {
      cat_id: 1, cat_name: 'Common', cat_img: 'assets/babi.jpg',
      image: 'assets/Food/stir-fry-pork-liver.png', id: 9, name: 'Stir-fried meat',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Dang Gui Nourishing Soup (当归补血汤), is designed to be consumed during first week of confinement period. Dang Gui Nourishing Soup as your confinement food menu can helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth.',
      des: 'helps to tonify blood, clear blood stasis and speed up a woman’s recovery from childbirth. Dang Gui or Chinese angelica is one of the most well-known Chinese herbs that has a very important place in women’s health and treatment for women’s illnesses. The herb has the ability to strengthen blood, nourish female reproductive organs, regulate menstruation, alleviate period pains and recover from symptoms of low energy or chronic fatigue.',
      ingredients: [{ a: '150g another meat of your choice (sliced and marinate the pork with 2 tsp light soya sauce and 1 tsp corn flour)', b: '50g old ginger (sliced)', c: '1 tsp minced garlic', d: '1 egg', e: '1 stalked of spring onions (cut into 5cm in length)', f: '1 tbs olive oil', g: '1 tbs seasame oil', h: '150ml warm water', i: '1 tbs oyster sauce', j: '1 1/2 tsp dark soya sauce', k: '1 tsp light soya sauce', l: '2 tsp brandy', m: 'White pepper powder (to taste)'}],
      recipe: [{ Step: 'In a wok, add in sesame, garlic and ginger and fry till ingredients turn golden brown.', img: 'assets/steps/1.svg' },
               { Step: 'Leave the garlic and ginger slices aside once its done.', img: 'assets/steps/2.svg' },
               { Step: 'Add in olive oil in the middle of the wok and fry an egg till its semi-done.', img: 'assets/steps/3.svg' },
               { Step: 'Add in meat in the wok and stir fry with all the other ingredients until the meat is cooked.', img: 'assets/steps/4.svg' },
               { Step: 'Add seasoninga nd warm water and cover the wok with a lid. Bring the gravy to a boil.', img: 'assets/steps/5.svg' },
               { Step: 'Remove lid and stir gently. Add spring onions into the wok.', img: 'assets/steps/6.svg' },
               { Step: 'You may top the dish with some spring onions before serving.', img: 'assets/steps/7.svg' }
              ]
    }, // Common

    { 
      cat_id: 2, cat_name: 'Fusion', cat_img: 'assets/Food/steak.png',
      image: 'assets/Food/seaweed-soup.png', id: 10, name: 'Seaweed Soup Korean',
      information: [{ title: 'Calories', figure: 3000 }, { title: 'Prep Time', figure: '30m' }, { title: 'Cook Time', figure: '165m' }],
      briefDes: 'Healthy steamed chicken. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aspernatur.',
      des: 'Many ways to cook chicken and one is to enjoy it steamed and let it cooked in its own juices. It\'s also healthier than cooking it in oil! Here is a steamed chicken dish that can be prepared without hassle.',
      ingredients: [{ a: '30g Dried Seaweed For Soup (Miyeok or Brown Seaweed)', b: '300g Meat (cut into cube ) (any meat but preferably beef)', c: '1 tbsp Light Soy Sauce for Soup', d: '2 slices of Ginger', e: '2 tsp Sesame Oil', f: '1 tsp Salt (varies for tasting)' }],
      recipe: [{ Step: 'In a bowl of hot water, soak seaweed, or known as dried miyeok, in water for at least an hour.', img: 'assets/steps/1.svg'}, 
               { Step: 'Transfer the paste into a bowl and add oyster sauce, soy sauce, and hot water to form a marinade for the chicken.', img: 'assets/steps/2.svg' }, 
               { Step: 'Using a large pot, add meat and sauté with 1 tbs of sesame oil while stirring on high heat for 1 min. Add dried seaweed and sauté for another 3 min. Add more sesame oil if the dried seaweed starts to stick to the bottom.', img: 'assets/steps/3.svg' },
               { Step: 'Then, place the tin foil-wrapped chicken in a heat-proof plate.', img: 'assets/steps/4.svg' },
               { Step: 'Add 1.5 litres of water, Ginger, 1/2 tsp of salt and 1 tablespoon of light soy sauce for soup to the pot with meat and miyeok. Boil without lid on high heat for about 30 minutes.', img: 'assets/steps/5.svg' },
               { Step: 'Skim off any foam or oil on top.', img: 'assets/steps/6.svg' },
               { Step: 'You may taste the soup and adjust the taste with salt.', img: 'assets/steps/7.svg' },
               { Step: 'Once it\'s ready, you may serve in a bowl and top with some spring onions, if you like.', img: 'assets/steps/8.svg' }]
    },

    { 
      cat_id: 2, cat_name: 'Fusion', cat_img: 'assets/chicken.jpg',
      image: 'assets/Food/cod-fish-teriyaki.png', id: 11, name: 'Cod Fish Teriyaki (Japanese)',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      ingredients: [{ a: '900g of Cod Fish Fillet (cut into 4 portions)', b: '2 inch ginger (grated/minced)', c: '2 Tbsp dark soy sauce', d: '2 Tbsp soy sauce', e: '3 Tbsp of cooking oil', f: '100ml Teriyaki Sauce' }],
      recipe: [{ Step: 'Add ginger, light soy sauce and dark soy sauce in a bowl. Place the Cod Fish in the bowl to marinate for 1 hour in the refrigerator.', img: 'assets/steps/1.svg'}, 
               { Step: 'Heat up a pan with high heat for about 10 seconds. Add in the oil and swirl to coat the pan. Carefully place the Fish on the pan until the fish is cooked', img: 'assets/steps/2.svg' }, 
               { Step: 'Using the sauce that was used to marinate the fish, pour it into the pan along with the teriyaki sauce. When it starts to bubble, reduce the heat and let it simmer until the sauce becomes thick and sticky. Turn the fish to make sure the sauce coats on it evenly.', img: 'assets/steps/3.svg' },
               { Step: 'Remove from the fish from pan and put on a plate. Pour the sauce over the fish and sprinkle with some spring onion or sesame seeds before serving if you like it.', img: 'assets/steps/4.svg' }]
    },

    { 
      cat_id: 2, cat_name: 'Fusion', cat_img: 'assets/chicken.jpg',
      image: 'assets/Food/methiandgingerfish.png', id: 12, name: 'Methi Fish (Indian)',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      ingredients: [{ a: 'Fish 500g (Any type of Fish)', b: '2 stalks of Fenugreek leaves', c: '2 stalks of Coriander leaves', d: '1/2 inch piece - Ginger', e: '2 Green chillies', f: '1 tsp - tumeric powder', g: '1 tsp - coriander powder', h: '3 Tomatoes (Chopped into cubes)', i: '1 tbsp - Oil', j: 'Salt to taste' }],
      recipe: [{ Step: 'Marinate the fish with a pinch of salt and 1/2 tsp turmeric powder and leave it in the refrigerator for 1 hour.', img: 'assets/steps/1.svg'}, 
               { Step: 'Take the fish out from the fridge and steam the fish for 15 minutes.', img: 'assets/steps/2.svg' }, 
               { Step: 'Chop fenugreek as well as coriander leaves and grind them along with ginger and green chillies.', img: 'assets/steps/3.svg' },
               { Step: 'In a food processor, add chopped fenugreek, coriander, ginger and green chilies and blend until it turns into a paste.', img: 'assets/steps/4.svg' },
               { Step: 'Heat pan up and add oil. When the oil is ready, add the ground paste and cook it on low flame and stir it constantly for 1 minute.', img: 'assets/steps/5.svg'}, 
               { Step: 'Add remaining turmeric powder and coriander powder as well as some salt and cook it with low flame for 2 more minutes.', img: 'assets/steps/6.svg' }, 
               { Step: 'Add finely chopped cube tomatoes and cook for another minute.', img: 'assets/steps/7.svg' },
               { Step: 'Add cooked fish and cook for 5 minutes more.', img: 'assets/steps/8.svg' },
               { Step: 'Finally, you may add jeera and elaichi powder. You may also top it with some coriander leaves or green chillies, then serve. (optional)', img: 'assets/steps/9.svg' }]
    },

    { 
      cat_id: 2, cat_name: 'Fusion', cat_img: 'assets/chicken.jpg',
      image: 'assets/Food/angel-hair-pasta-with-goji-berries.png', id: 13, name: 'Pasta (Western)',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      ingredients: [{ a: '1 Tbsp Olive Oil', b: '1 Tbsp Minced Ginger', c: '60g Angel Hair Pasta', d: '80g Cod Fish Fillet', e: 'Some (5 to 10 grams) rinsed Goji Berries (garnish purposes)', f: 'Some (5 to 10 grams perhaps) soaked Wood Ear Black Fungus (julienne) (garnish purposes)' }],
      recipe: [{ Step: 'Season the Cod Fish with a pinch of salt.', img: 'assets/steps/1.svg'}, 
               { Step: 'Heat up a pan and add olive oil in. Once oil is heated up, add fish and cook.', img: 'assets/steps/2.svg' }, 
               { Step: 'When 2/3 of the sides of the fish has turned opaque, turn the fish over and cook for another two minutes , depending on your heat.', img: 'assets/steps/3.svg' },
               { Step: 'In a huge pot, add a pinch of salt and ginger to the boiling water for pasta. Cook pasta for 2 minutes and you may add some oil.', img: 'assets/steps/4.svg' },
               { Step: 'You may add a pinch of minced dried bay leaves into the water.', img: 'assets/steps/5.svg'}, 
               { Step: 'Drain away the pasta water and drizzle some olive oil to moisturise the pasta.', img: 'assets/steps/6.svg' }, 
               { Step: 'Add some goji berries and soaked Wood ear black fungus into the pasta. Add the cod fish and serve.', img: 'assets/steps/7.svg' },
              ]
    },

    { 
      cat_id: 2, cat_name: 'Fusion', cat_img: 'assets/chicken.jpg',
      image: 'assets/Food/steak.png', id: 14, name: 'Steak (Western)',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      ingredients: [{ a: '150g Sirloin Steaks (patted dry)', b: '1 tbsp Unsalted butter', c: '1 tbsp Minced Ginger', d: '1 tbsp Olive Oil', e: '1 tbsp Fresh Chopped Parsley', f: 'Salted and Pepper (to taste)'}],
      recipe: [{ Step: 'Add butter, parsley, and ginger in a bowl and mix. Set aside.', img: 'assets/steps/1.svg'}, 
               { Step: 'Heat your pan up, then lightly grease a layer of oil on your pan and the steaks.', img: 'assets/steps/2.svg' }, 
               { Step: 'Grill your steaks for about 7 minutes on the pan.', img: 'assets/steps/3.svg' },
               { Step: 'Once both sides are slightly brown on the surface, continue to grill for about another 3 minutes to ensure its well done.', img: 'assets/steps/4.svg' },
               { Step: 'Using the mix in step 1, pour it over your steak and leave it aside for 3 minutes.', img: 'assets/steps/5.svg'}, 
               { Step: 'You may add some parsley on top of the steak before serving.', img: 'assets/steps/6.svg' }]
    },

    { 
      cat_id: 2, cat_name: 'Fusion', cat_img: 'assets/chicken.jpg',
      image: 'assets/Food/roasted-chicken.png', id: 15, name: 'Roast Chicken (Western)',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      ingredients: [{ a: '1 11⁄2 kg whole chicken', b: '1 tbs salt', c: '1 tbs oil', d: ' 1 tsp five-spice powder', e: '2 garlic cloves (unpeeled and slightly smashed)', f: '30g ginger (unpeeled and slightly smashed)'}],
      recipe: [{ Step: 'Preheat oven to 200 degrees celsius.', img: 'assets/steps/1.svg'}, 
               { Step: 'Using five-spice powder, salt and oil, rub it on the chicken and set aside for 15 minutes.', img: 'assets/steps/2.svg' }, 
               { Step: 'Place garlic cloves and ginger into the cavity of the chicken.', img: 'assets/steps/3.svg' },
               { Step: 'Roast the chicken in the pre heated oven for one hour.', img: 'assets/steps/4.svg' },
               { Step: 'You may top the chicken with some chopped parsley before serving.', img: 'assets/steps/5.svg' }]
    },

    { 
      cat_id: 2, cat_name: 'Fusion', cat_img: 'assets/chicken.jpg',
      image: 'assets/Food/meatballs.png', id: 16, name: 'Braised Meatballs with Logan',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      ingredients: [{ a: '150g minced meat', b: '1/2 tbsp minced ginger', c: '4 fresh ginger slices', d: '1 garlic cloves flatten', e: '10g black fungi soaked and cut into pieces', f: '30g dried longan', g: '10g Goji berries (rinsed)', h: '1/2 tbsp light soy sauce', i: '1/4 tsp pepper', j: '1 tsp sesame oil', k: '1/2 tbsp cornstarch', l: 'Mix Sauce -> 1 tbsp Ginger juice, 1/2 tbsp light soy sauce, 1/4 tsp pepper, 1/4 tsp salt, 1/2 tbsp shaoxing wine, 400ml water' }],
      recipe: [{ Step: 'Add minced meat, minced ginger, ‘seasoning’ and mix well. Set aside and marinate for 10 minutes.', img: 'assets/steps/1.svg'}, 
               { Step: 'Using a spoon, scoop the meat and roll them into small balls.', img: 'assets/steps/2.svg' }, 
               { Step: 'Steam the meatballs for 15 minutes. Remove and set aside.', img: 'assets/steps/3.svg' },
               { Step: 'Heat up the wok and add 1 tbsp of sesame oil. Add ginger and garlic cloves and lightly fry it until fragrant.', img: 'assets/steps/4.svg' },
               { Step: 'Add the ‘sauce’ in and allow it to boil.', img: 'assets/steps/5.svg' },
               { Step: 'Once it boils, add meatballs, dried longan, black fungi and goji berries into the sauce stir.', img: 'assets/steps/6.svg'},
               { Step: 'Turn down the heat and simmer for another 15 mins. You may top it with some coriander or chopped spring onions and serve', img: 'assets/steps/7.svg' }]
    },

    { 
      cat_id: 2, cat_name: 'Fusion', cat_img: 'assets/chicken.jpg',
      image: 'assets/Food/pumpkin-with-meat-stew.png', id: 17, name: 'Stew Pumpkin with Meat',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      ingredients: [{ a: '150g pumpkin (diced into cubes)', b: '100g any meat', c: '10g ginger thinly stripped', d: '1 tbsp light soy sauce', e: '400ml water', f: 'Salt and sugar to taste'}],
      recipe: [{ Step: 'Heat up a wok and add in sesame oil. Fry in ginger until fragrant.', img: 'assets/steps/1.svg'}, 
               { Step: 'Add meat and pumpkin and stir fry for 2 minutes.', img: 'assets/steps/2.svg' }, 
               { Step: 'Add in light soy sauce and stir fry for 1 minute ensuring everything is evenly coated.', img: 'assets/steps/3.svg' },
               { Step: 'Add 400ml water and allow the gravy to boil.', img: 'assets/steps/4.svg' },
               { Step: 'Add salt and sugar and adjust to taste.', img: 'assets/steps/5.svg' },
               { Step: 'Cover the wok with a lid and turn down the heat. Stew the pumpkin and meat for about 30 mins with low heat.', img: 'assets/steps/6.svg' },
               { Step: 'Lastly, you may top with some parsley or spring onions and serve!', img: 'assets/steps/7.svg' }]
    },

    { 
      cat_id: 2, cat_name: 'Fusion', cat_img: 'assets/chicken.jpg',
      image: 'assets/Food/fried-meat-chop.png', id: 18, name: 'Fillet Meat Chop',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      ingredients: [{ a: '2 pcs of 100g of meat fillet', b: '3 tbsp sesame oil', c: '20g fresh turmeric', d: '30g fresh ginger', e: '1/2 tbsp sesame oil', f: '1 tbsp light soy sauce', g: '1/4 tsp pepper', h: '1 tsp cornstarch', i: 'Mix sauce -> 1/2 tbsp light soy sauce, 1/4 tsp sugar, 1/4 tsp pepper, 80ml water'}],
      recipe: [{ Step: 'Add fresh turmeric and ginger into a food processor and blend it into a paste.', img: 'assets/steps/1.svg'}, 
               { Step: 'Using a meat hammer or the back of the knife, lightly pound the meat so that it becomes tender.', img: 'assets/steps/2.svg' }, 
               { Step: 'Add the meat fillet and paste from step (1) together and marinate for about 30 mins.', img: 'assets/steps/3.svg' },
               { Step: 'Heat up wok and add 3 tbsp sesame oil and fry the meat fillet. Fry both sides for about 5 mins each over medium heat.', img: 'assets/steps/4.svg' },
               { Step: 'You may use an air fryer tentatively and air fry for 15 mins at 180 degrees celsius.', img: 'assets/steps/5.svg' },
               { Step: 'In a pot, add in the marinade solution and sauce mixture. Bring the sauce to a boil.', img: 'assets/steps/6.svg' },
               { Step: 'Boil the sauce until slightly thickened and remove it from heat. Pour over the sauce over the meat chop.', img: 'assets/steps/7.svg' },
               { Step: 'You may top it with some parsely before serving', img: 'assets/steps/8.svg' }]
    },

    { 
      cat_id: 2, cat_name: 'Fusion', cat_img: 'assets/chicken.jpg',
      image: 'assets/Food/osmanthus-cake.png', id: 19, name: 'Osmanthus Cake',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus odit repellendus quisquam pariatur. Beatae deleniti veritatis, est magnam repellat repellendus?',
      ingredients: [{ a: '115g water chestnut flour', b: '750ml water', c: '60g sugar', d: '15g Osmanthus flowers', e: '10g goji berries', f: 'Olive oil (to grease the pan)'}],
      recipe: [{ Step: 'In a bowl, add chestnut flour and 250ml of water and mix well until batter is smooth and no lumps. You may then set it aside.', img: 'assets/steps/1.svg'}, 
               { Step: 'Bring 500ml of water in a pot to boil.', img: 'assets/steps/2.svg' }, 
               { Step: 'Once it boils, add sugar and stir constantly for 2 minutes.', img: 'assets/steps/3.svg' },
               { Step: 'Remove the pot from heat and add goji berries, osmanthus flowers. Allow the osmanthus flowers and goji berries to sit in for 3 minutes', img: 'assets/steps/4.svg' },
               { Step: 'Heat the pot up again over medium heat. Add the batter from step (1) in until it thickens.', img: 'assets/steps/5.svg' },
               { Step: 'In a baking pan, brush the surface with some olive oil.', img: 'assets/steps/6.svg' },
               { Step: 'Pour the mixture in from step (5).', img: 'assets/steps/7.svg'},
               { Step: 'Steam the batter in high heat for about 10 minutes. Then lower it to medium heat and steam for another 10 minutes.', img: 'assets/steps/8.svg' },
               { Step: 'Remove the cake from the steamer and allow it to cool down. Slice the cake before serving.', img: 'assets/steps/9.svg'}, 
               { Step: 'You may add some finely chopped osmanthus flower on it before serving.', img: 'assets/steps/10.svg' }]
    },

    {
      cat_id: 3, cat_name: 'Vegetarian', cat_img: 'assets/Food/ABC-Soup.png',
      image: 'assets/Food/ginger-fried-rice.png', id: 20, name: 'Ginger Fried Rice',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem',
      des: 'Lorem2',
      ingredients: [{ a: '200g rice', b: '3-4 thinly sliced ginger, finely shredded', c: '3 pieces vegetarian ham', d: '1 Shiitake mushroom', e: '2-3 tablespoons sesame oil', f: 'Salt' }],
      recipe: [{ Step: 'Cook the rice at least 2 hours beforehand', img: 'assets/steps/1.svg' }, 
               { Step: 'Cut the shiitake mushroom into cubes and slice vegetarian ham', img: 'assets/steps/2.svg' },
               { Step: 'Heat sesame oil in a wok over medium heat and fry ginger until lightly brown', img: 'assets/steps/3.svg' },
               { Step: 'Fry the shiitake mushroom and vegetarian ham', img: 'assets/steps/4.svg' },
               { Step: 'Stir in the cooked rice and season with salt.', img: 'assets/steps/5.svg' },
               { Step: 'Stir-fry for 2-3 minutes or until rice is heated through. Serve hot' }]
    },

    {
      cat_id: 3, cat_name: 'Vegetarian', cat_img: 'assets/chickenSoup.png',
      image: 'assets/Food/basil-omelette.png', id: 22, name: 'Basil Omelette',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem',
      des: 'Lorem2',
      ingredients: [{ a: 'a small handful fresh basil leaves', b: '60g chickpea flour/ flour', c: '1⁄2 small firm tofu/beancurd, mashed', d: '1⁄2 teaspoon baking powder', e: '60ml water', f: 'salt and pepper, to taste', g: '1 tablespoon oil', h: 'few drops of sesame oil (optional)' }],
      recipe: [{ Step: 'Combine the chickpea flour, baking powder, water, salt and pepper in a bowl. Add in the tofu puree, mix well and leave to stand for at least 5-10 minutes.', img: 'assets/steps/1.svg' }, 
               { Step: 'Heat oil and sesame oil in a non-stick pan over medium heat. Throw in the basil leaves and stir fry for 1⁄2 -1 minute.', img: 'assets/steps/2.svg' },
               { Step: 'Pour in the flour mixture over the basil leaves. Flip over the omelette after 11⁄2 minutes or when the base is slightly brown.', img: 'assets/steps/3.svg' },
               { Step: 'Remove from heat after another 11⁄2 minutes and transfer to a serving plate.', img: 'assets/steps/4.svg' }]
    },

    {
      cat_id: 3, cat_name: 'Vegetarian', cat_img: 'assets/chickenSoup.png',
      image: 'assets/Food/pumpkin-rice.png', id: 23, name: 'Pumpkin Rice',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem',
      des: 'Lorem2',
      ingredients: [{ a: 'Non-GMO canola oil, for frying', b: '4 cloves garlic, chopped', c: '1/2 medium onion, chopped', d: '2 fresh shiitake/button mushrooms, chopped', e: '120g pumpkin, peeled, deseeded & 1cm cubed', f: '135g brown long-grain rice, washed & drained', g: '175ml water or vegetable broth, for cooking rice' }],
      recipe: [{ Step: 'Heat up oil in a wok or large skillet. Sauté the onion and garlic until aromatic.', img: 'assets/steps/1.svg' }, 
               { Step: 'Add in the mushrooms. Reduce the heat to medium high and let the mushrooms cook until soft; about 5 minutes. Stir occasionally.', img: 'assets/steps/2.svg' },
               { Step: 'Pour in pumpkin and uncooked rice, mix gently and be careful not to mash the pumpkin.', img: 'assets/steps/3.svg' },
               { Step: 'Add seasonings, sauté lightly for about 1 minute.', img: 'assets/steps/4.svg'},
               { Step: 'Add water and stir mixture until well combined for 30 seconds.', img: 'assets/steps/5.svg'},
               { Step: 'Transfer mixture into rice cooker pot, turn on the rice cooker. When the rice is cooked, use the rice scoop to stir the rice and loosen it up.', img: 'assets/steps/6.svg'},
               { Step: 'If you find the rice too wet for your liking after stirring, press the mode for \'cook rice\' again. The new cycle will continue to cook and dry up the mixture to the right consistency. Loosen the rice and keep warm in the cooker for a few minutes.', img: 'assets/steps/7.svg'},
               { Step: 'Garnish and serve immediately.', img: 'assets/steps/8.svg'}
              ],
              
    },

    {
      cat_id: 3, cat_name: 'Vegetarian', cat_img: 'assets/chickenSoup.png',
      image: 'assets/Food/eight-treasure-rice.png', id: 24, name: 'Eight Treasure Rice',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem',
      des: 'Lorem2',
      ingredients: [{ a: '150g Glutinous rice', b: '1 tbsp sugar or brown sugar', c: '1 tbsp Butter', d: '1 tsp Goji berry', e: '10 Lotus seeds', f: '10 Dried red dates', g: '2 tbsp raisins', h: '1 tbsp Red bean paste' }],
      recipe: [{ Step: 'Soak the glutinous rice overnight in water', img: 'assets/steps/1.svg' }, 
               { Step: 'Before steaming, drain all the water and add about 3 tbsp of water to the rice. Steam for 30 minutes with the lid on.', img: 'assets/steps/2.svg' },
               { Step: 'Soak the lotus seeds and dried dates in warm water for at least 2 hours. You can do this one day in advance. Cut the dates in halves', img: 'assets/steps/3.svg' },
               { Step: 'While the steamed glutinous rice is still warm, mix in the butter and 1 tbsp of sugar. Mix in some warm water if the rice is too dry.', img: 'assets/steps/4.svg' },
               { Step: 'Assemble the rice and treasures in a serving bowl to your liking. If you do not wish to assemble the rice, can add in the rest of the ingredients and mix well to eat directly.', img: 'assets/steps/5.svg' }]
    },

    {
      cat_id: 3, cat_name: 'Vegetarian', cat_img: 'assets/chickenSoup.png',
      image: 'assets/Food/peanut-lotus-soup.png', id: 25, name: 'Peanut Lotus Soup',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem',
      des: 'Lorem2',
      ingredients: [{ a: '450g lotus root, cleaned, peeled, and sliced crosswise', b: '1 medium corn, chopped into 3 parts', c: '1/2 cup red beans, rinsed and drained', d: '10 red dates, washed', e: '8 cups just-boiled water', f: '1 tbsp dried goji berries', g: 'Sea salt, to taste', h: 'Green onion, chopped, for garnish (optional)' }],
      recipe: [{ Step: 'In a large pot, add all the ingredients except goji berries, green onion, and salt.', img: 'assets/steps/1.svg' }, 
               { Step: 'Bring to a boil and let simmer on low heat for 2 to 3 hours.', img: 'assets/steps/2.svg' },
               { Step: '30 minutes before it\'s done, add the goji berries.', img: 'assets/steps/3.svg' },
               { Step: 'At the end, turn off the heat and add salt to taste.', img: 'assets/steps/4.svg' }]
    },

    {
      cat_id: 3, cat_name: 'Vegetarian', cat_img: 'assets/chickenSoup.png',
      image: 'assets/Food/black-glutinous-rice-porridge.png', id: 26, name: 'Black Glutinous Rice Porridge',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem',
      des: 'Lorem2',
      ingredients: [{ a: '4 tbsp glutinous rice', b: '2 panda leaves', c: '815ml water', d: '70g rock sugar', e: '30g gula melaka', f: '1⁄2 tbsp corn flour', g: 'Coconut milk (up to your preference)' }],
      recipe: [{ Step: 'Soak black glutinous rice for at least 5 hours', img: 'assets/steps/1.svg' }, 
               { Step: 'Boil water with black glutinous rice at high heat', img: 'assets/steps/2.svg' },
               { Step: 'Add pandan leaves', img: 'assets/steps/3.svg' },
               { Step: 'Once it boils, reduce heat to low and simmer for 30 minutes until the black glutinous rice puffs up', img: 'assets/steps/4.svg' },
               { Step: 'Add rock sugar and gula melaka to sweeten', img: 'assets/steps/5.svg' },
               { Step: 'Mix corn flour with water to add into the pot to thicken the porridge if necessary', img: 'assets/steps/6.svg'}, 
               { Step: 'Serve warm', img: 'assets/steps/7.svg' }]
    },

    {
      cat_id: 3, cat_name: 'Vegetarian', cat_img: 'assets/chickenSoup.png',
      image: 'assets/Food/ABC-Soup.png', id: 27, name: 'ABC Soup',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem',
      des: 'Lorem2',
      ingredients: [{ a: '5 medium carrots, chopped', b: '2 medium potatoes, quartered', c: '2 medium tomatoes, halved', d: '1 large onion, quartered', e: '5 cups water', f: 'Salt and pepper, to taste' }],
      recipe: [{ Step: 'Place all the ingredients, except salt and pepper, in a pot and bring to a boil.', img: 'assets/steps/1.svg' }, 
               { Step: 'Then turn down the heat and simmer until the vegetables are tender, about 30 to 40 minutes.', img: 'assets/steps/2.svg' },
               { Step: 'If you want a thicker or creamier soup, let the potatoes cook until mushy.', img: 'assets/steps/3.svg' },
               { Step: 'Season with salt and pepper to taste', img: 'assets/steps/4.svg' }]
    },

    {
      cat_id: 3, cat_name: 'Vegetarian', cat_img: 'assets/chickenSoup.png',
      image: 'assets/Food/vegan-pork-trotter.png', id: 28, name: 'Vegan ‘Trotter’ with old ginger and vinegar',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem',
      des: 'Lorem2',
      ingredients: [{ a: '200g gluten fungus roll, sliced', b: '400g old ginger', c: '250ml black rice vinegar', d: '500ml water', e: '1-11⁄2 tablespoons sesame oil', f: '60g brown sugar', g: 'Salt' }],
      recipe: [{ Step: 'Peel the givers and cut into chunks, rinse and dry it', img: 'assets/steps/1.svg' }, 
               { Step: 'Brush some sesame oil on the ginger and bake in the oven for 10 minutes.', img: 'assets/steps/2.svg' },
               { Step: 'Place all the ingredients in a claypot, bring to a boil and simmer for 45 minutes. Season to taste with salt.', img: 'assets/steps/3.svg' }]
    },

    {
      cat_id: 3, cat_name: 'Vegetarian', cat_img: 'assets/chickenSoup.png',
      image: 'assets/Food/stir-fry-mushroom-with-ginger.png', id: 29, name: 'Stir-fried mushrooms with sesame oil and ginger',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem',
      des: 'Lorem2',
      ingredients: [{ a: '75g-100g mushroom, sliced', b: '25g ginger, peeled and finely shredded', c: '2 tablespoons sesame oil', d: '2 tablespoons cooking rice wine or glutinous rice wine', e: '1 teaspoon light soy sauce', f: '1⁄2 teaspoon dark soy sauce', g: '1⁄4 teaspoon sugar (optional)' }],
      recipe: [{ Step: 'Heat the sesame oil in a wok. Add the ginger and fry till fragrant.', img: 'assets/steps/1.svg' }, 
               { Step: 'Add the mushrooms and stir-fry briskly for a moment. Drizzle the wine over the mushrooms and continue to stir-fry for 1-2 minutes or until the mushrooms are tender.', img: 'assets/steps/2.svg' },
               { Step: 'Season to taste with sugar, light and dark soy sauce.', img: 'assets/steps/3.svg' },
               { Step: 'Transfer to a serving dish and serve immediately.', img: 'assets/steps/4.svg' }]
    },

    {
      cat_id: 3, cat_name: 'Vegetarian', cat_img: 'assets/chickenSoup.png',
      image: 'assets/Food/vegan-chicken-rice.png', id: 30, name: 'Vegetarian Chicken Rice',
      information: [{ title: 'Calories', figure: 100 }, { title: 'Prep Time', figure: '25m' }, { title: 'Cook Time', figure: '125m' }],
      briefDes: 'Lorem',
      des: 'Lorem 3',
      ingredients: [{ a: '1 teaspon cooking oil', b: '3-4 teaspoons ginger, minced', c: '3-4 teaspoons garlic, minced', d: '3-4 tablespoon scallion, white and light green parts only, chopped', e: '3-4 mushrooms, thick sliced', f: '3 cups vegan chicken-style prepared broth', g: '1 1/2 cups uncooked white rice' }],
      recipe: [{ Step: 'Wash the rice.', img: 'assets/steps/1.svg' },
               { Step: 'Heat a pot over high heat with a little vegetable oil. Add a teaspoon of garlic, a teaspoon of ginger, and a tablespoon of chopped scallion.', img: 'assets/steps/2.svg' },
               { Step: 'Add in the mushrooms. Reduce the heat to medium high and let the mushrooms cook until soft; about 5 minutes. Stir occasionally.', img: 'assets/steps/3.svg' },
               { Step: 'Add an additional teaspoon of garlic, a teaspoon of ginger, a tablespoon of scallions (again only white and light green parts), 3 cups of broth.', img: 'assets/steps/4.svg' },
               { Step: 'Turn the heat to high, let the broth come to a boil, then simmer on low for about 3 minutes.', img: 'assets/steps/5.svg' },
               { Step: 'Turn the heat off. Remove the beans and mushrooms with a slotted spoon and transfer to a bowl to cool.', img: 'assets/steps/6.svg'},
               { Step: 'You will have about 3 cups of broth remaining. Reserve one cup and set aside, checking that you have 2 cups left in the pot.', img: 'assets/steps/7.svg'},
               { Step: 'Add washed rice to the pot and turn the heat to high. When it comes to a boil, turn the heat to low, cover and simmer until the rice has absorbed all the broth; about 15 minutes. Do not stir the rice while simmering!', img: 'assets/steps/8.svg'},
               { Step: 'While the rice is cooking, make the Scallion Ginger Sauce and Hainan Chili Sauce.', img: 'assets/steps/9.svg'},
               { Step: 'Serve the hot rice with beans and mushrooms on top, along with Scallion Ginger Sauce, Hainan Chili Sauce', img: 'assets/steps/10.svg'}
              ]
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
      Card: 'Many women do not produce enough milk',
      info: 'Most women produce more than enough milk, even an oversupply of milk is common. The reason why most babies who gain weight slowly or lose weight is not because their mother does not have enough milk, but because the baby does not absorb the milk from the mother, this is usually due to poor latching onto the breast.'
    },

    {
      Card_id: 2,
      Card: 'It is normal for breastfeeding to hurt',
      info: 'During the first few days of Breastfeeding, some form of tenderness is relatively common, this should only be a temporary situation that lasts for a few days. Any pain that is more than mild is abnormal and probably due to poor latching onto the breast. Any nipple pain that is not getting better by day 3 or 4 or lasts beyond 5 or 6 days should not be ignored. Limiting feeding time does not prevent soreness. You should visit the lactation consultant when this happens.'
    },

    {
      Card_id: 3,
      Card: 'There is no or not enough milk during the first three to four days after birth',
      info: 'Most probably due to poor latching onto the breast and when there is not a lot of milk (which is normal in the first few days), the baby must be latched well in order for the baby to get milk. If not latched on well, the baby is unable to get the mother\'s first milk, also known as colostrum. Mothers are encouraged to breastfeed every 2 to 3 hours, and good latching from the beginning can prevent problems later on.'
    },

    {
      Card_id: 4,
      Card: 'A baby should be on the breast 20 (10, 15, 7.6) minutes on each side',
      info: 'There is no fixed amount of time which the baby should be on each breast. The baby should be latched on properly and should actually be drinking, to ensure a better and longer breastfeeding process.'
    },

    {
      Card_id: 5,
      Card: 'A breastfeeding baby needs extra water in hot weather',
      info: 'All the water a baby needs is in Breastmilk.'
    },

    {
      Card_id: 6,
      Card: 'A mother should wash her nipples each time before feeding the baby',
      info: 'Breast Milk protects the baby against infection. Washing of nipples before each feeding will only make breastfeeding unnecessarily complicated and wash away protective oils from the nipple.'
    },

    {
      Card_id: 7,
      Card: 'Pumping is a good way of knowing how much milk the mother has',
      info: 'Pumping can only tell you how much you can pump. The amount of milk pumped depends on various factors, including the mother’s stress level and if a baby breastfeeds well, the baby can get much more milk than the mother can pump.'
    },

    {
      Card_id: 8,
      Card: 'It is easier to bottle feed than to breastfeed',
      info: 'Breastfeeding and bottle feeding requires the baby to use different muscles. While breastfeeding might be difficult, bottle feeding can confuse the baby. A poor start can be conquered, and breastfeeding usually becomes easier as time goes by. Mothers can read-up on breastfeeding materials before birth and visit a lactation consultant when in doubt.'
    },

    {
      Card_id: 9,
      Card: 'Breastfeeding ties the mother down',
      info: 'A baby can be breastfed anywhere, anytime so breastfeeding is actually liberating for the mother. If the baby is not around with the mother, the mother can bring an electronic pump out to pump her breast milk.'
    },

    {
      Card_id: 10,
      Card: 'There is no way to know how much breast milk the baby is getting',
      info: 'The methods are not easy but it does not mean that the Mother cannot know how much breast milk the baby is getting. The best way to find out is when the baby actually drinks (open mouth wide - pause - close mouth type of suck) at the breast for several minutes each feeding.'
    },

    {
      Card_id: 11,
      Card: 'Modern formulas are almost the same as breast milk',
      info: 'Modern formulas are only superficially similar to breast milk. Formulas are inexact copies based on outdated and incomplete knowledge of what breast milk is. A mother’s Breast Milk is specially tailored to suit the baby, but formulas do not vary and are made to suit every baby. Formulas succeed only at making babies grow, but there is more to breastfeeding than just nutrients.'
    },

    {
      Card_id: 12,
      Card: 'If the mother has an infection she should stop breastfeeding',
      info: 'The baby’s best protection against getting the infection is actually for the mother to continue breastfeeding. Breast Infections, including Breast Abscess, though painful, are not reasons to stop breastfeeding. Indeed, the infection is likely to settle more quickly if the mother continues breastfeeding on the affected side.'
    },

    {
      Card_id: 13,
      Card: 'If the baby has diarrhea or vomiting, the mother should stop breastfeeding',
      info: 'The best medicine for a baby\'s gut infection is breastfeeding. Stop other foods for a short time, but the mother should continue breastfeeding. Breast Milk is the only fluid your baby requires when he / she has diarrhea and / or vomiting, except under exceptional circumstances.'
    },

    {
      Card_id: 14,
      Card: 'If the mother is taking medicine she should not breastfeed',
      info: 'There are very few medicines that the mother should not take when breastfeeding. A very small amount of most medicines might appear in the milk, but usually in such small quantities that it is of no concern. If a medicine is truly of concern, there should be equally effective alternatives that are safer. The mother should highlight to the doctor that she is breastfeeding and thus be prescribed breastfeeding-friendly medication.'
    }
  ]

  getLactation() {
    return this.lactationData;
  }
  
}
