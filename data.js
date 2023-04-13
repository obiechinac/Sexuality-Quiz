const Questions = [

{ "id":"1","slug":"Have you kissed someone of same gender before?", "no":"1", "final":"false", 
"option":[
    { "optionAndValue":{"No never! I would never do such":"1"}}, 
    { "optionAndValue":{"No but I could try that":"3"}}, 
    {"optionAndValue":{"Yes and it felt good":"5"}}, 
    {"optionAndValue":{"Yes but I would not do it again":"2"}}
    ]
},
 {"id":"2","slug":"Have you had crush on someone of same gender before?", "no":"2", "final":"false", 
"option":[
    {"optionAndValue":{"No I never did!": "0"}},
     {"optionAndValue":{"No but I see it as normal thing":"1"}}, 
     {"optionAndValue":{"Yes and it felt good":"2"}}, 
     {"optionAndValue":{"Yes and I still have on someone now":"3"}}
    ]
},
 {"id":"3","slug":"How do you feel about queer characters in TV shows and movies?", "no":"3", "final":"false", 
"option":[
    {"optionAndValue":{"Oh, I’ve totally watched shows just for the queer ships and storylines!": "3"}},
     {"optionAndValue":{"I kind of feel like I can identify with queer characters.":"4"}}, 
     {"optionAndValue":{"I notice queer characters, but I don’t feel strongly about them.":"0"}}, 
     {"optionAndValue":{"I like the positive representation, but they don’t stand out to me":"1"}}
    ]
}



, {"id":"4","slug":"Organizations which promote gay rights are necessary.", "no":"4", "final":"false", 
"option":[
    {"optionAndValue":{"Strongly Agre!": "5"}},
     {"optionAndValue":{"Strongly Disagree":"0"}}, 
     {"optionAndValue":{"agree":"2"}}, 
     {"optionAndValue":{"disagree":"2"}}
    ]

}

,{"id":"5","slug":"I can date someone who is bisexual?", "no":"5", "final":"false", 
"option":[
    {"optionAndValue":{"Not at all!": "0"}},
     {"optionAndValue":{"probable yes":"2"}}, 
     {"optionAndValue":{"Yes definitely":"5"}}, 
     {"optionAndValue":{"I would if they have changed":"1"}}
    ]
}

,{"id":"6","slug":"I would get a full body nude oil massage from a person of same gender", "no":"6", "final":"false", 
"option":[
    {"optionAndValue":{"Not a chance!": "0"}},
     {"optionAndValue":{"Probably yes":"2"}}, 
     {"optionAndValue":{"Yes definitely":"5"}}, 
     {"optionAndValue":{"I wouldn't mind":"2"}}
    ]
}

, {"id":"7","slug":"People ask me if I am gay", "no":"7", "final":"false", 
"option":[
    {"optionAndValue":{"No, they just assume I'm straight and this makes me angry": "5"}},
     {"optionAndValue":{"Yes! on few occasions and I get pissed":"0"}}, 
     {"optionAndValue":{"Yes sometimes and I don't mind":"2"}}, 
     {"optionAndValue":{"No but I wish they did":"3"}}
    ]
}


, {"id":"8","slug":"Have you seen intimate gay couple in public?", "no":"8", "final":"false", 
"option":[
    {"optionAndValue":{"Yes and I was like WTF!": "0"}},
     {"optionAndValue":{"Yes and i felt like it should be me":"5"}}, 
     {"optionAndValue":{"No, not really but I wouldn't care":"1"}}, 
     {"optionAndValue":{"No but I would be encouraged if I saw any":"3"}}
    ]
}

, {"id":"9","slug":"You walk out of a mall and you're offered a rainbow/pride phone sticker", "no":"9", "final":"false", 
"option":[
    {"optionAndValue":{"I would gladly accept it": "3"}},
     {"optionAndValue":{"I would politely reject it":"0"}}, 
     {"optionAndValue":{"I would accept it but dispose it later":"1"}}, 
     {"optionAndValue":{"I will accept it and tape it to my phone":"5"}}
    ]
}


,{"id":"10","slug":"There are only male and female gender", "no":"10", "final":"true", 
"option":[
    {"optionAndValue":{"No!, There are more": "2"}},
     {"optionAndValue":{"No!, My gender identity is not there":"5"}}, 
     {"optionAndValue":{"Yes, I don't beleive there are more genders":"0"}}, 
     {"optionAndValue":{"I feel like people should be able to choose any gender":"3"}}
    ]
}

]

// This function gets the question from the Questions array by no
function getQuestionByNo(no) {
    let intVal = parseInt(no);
    intVal++;
  // Loop through each question in the Questions array
  for (let i = 0; i < Questions.length; i++) {
    if (Questions[i].no ==intVal) {
      return Questions[i];
    }
  }
  return null;
}
function determineSexuality(cumulative) {
    let finalmessage = "You are as straight as an arrow";
  
    if (cumulative >= 20) {
      finalmessage = "You are gay! You should probably be honest about it.";
    } else if (cumulative < 10) {
      finalmessage = "You are straight as an arrow!";
    } else if (cumulative >= 10 && cumulative <= 15) {
      finalmessage = "You are mostly straight! With some elements of curiosity.";
    } else if (cumulative >= 15 && cumulative < 20) {
      finalmessage = "You are bisexual/curious! Opening yourself up a little more would give you a better understanding of your sexuality.";
    }
  
    return finalmessage;
  }
