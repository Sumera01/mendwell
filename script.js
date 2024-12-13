
// A simple chatbot that responds with some predefined answers
function chatbot(input) {
  let output = "";
  input = input.toLowerCase();
  if (input.includes("anxiety")) {
      output = "Anxiety is a common mental health condition. Learn more about it here: <a href='anxiety.html'>Anxiety Information</a>";
  } else if (input.includes("depression")) {
      output = "Depression can be challenging, but help is available. Read more here: <a href='depression.html'>Depression Information</a>";
  } else if (input.includes("ocd")) {
      output = "Obsessive-Compulsive Disorder (OCD) affects many individuals. Explore details here: <a href='ocd.html'>OCD Information</a>";
  } else if (input.includes("ptsd")) {
      output = "Post-Traumatic Stress Disorder (PTSD) is manageable with support. More details: <a href='ptsd.html'>PTSD Information</a>";
  } else if (input.includes("bipolar")) {
      output = "Bipolar disorder involves mood swings. Find out more here: <a href='bipolar.html'>Bipolar Disorder Information</a>";
  } else if (input.includes("schizophrenia")) {
      output = "Schizophrenia is a complex mental health condition. Learn more: <a href='schizophrenia.html'>Schizophrenia Information</a>";
  } else if (input.includes("adhd")) {
      output = "ADHD is common among children and adults. Learn more here: <a href='adhd.html'>ADHD Information</a>";
  } else if (input.includes("eating")) {
      output = "Eating disorders require support and care. More details: <a href='eating.html'>Eating Disorder Information</a>";
  } else if (input.includes("phobia")) {
      output = "Phobias are intense fears that can be managed. Learn more: <a href='phobia.html'>Phobia Information</a>";
  } else if (input.includes("autism")) {
      output = "Autism Spectrum Disorder affects communication and behavior. Explore more: <a href='autism.html'>Autism Information</a>";
  } else if (input.includes("panic")) {
      output = "Panic disorders involve sudden attacks of fear. Learn more: <a href='panic.html'>Panic Disorder Information</a>";
  } else if (input.includes("dementia")) {
      output = "Dementia affects memory and thinking. Read more: <a href='dementia.html'>Dementia Information</a>";
  } else if (input.includes("addiction")) {
      output = "Addiction can affect anyone. Learn more here: <a href='addiction.html'>Addiction Information</a>";
  } else if (input.includes("insomnia")) {
      output = "Insomnia affects sleep and overall well-being. More information here: <a href='insomnia.html'>Insomnia Information</a>";
  } else if (input.includes("borderline")) {
      output = "Borderline Personality Disorder requires care. Find details: <a href='borderline.html'>BPD Information</a>";
  } else if (input.includes("social anxiety")) {
      output = "Social Anxiety Disorder can impact interactions. Learn more: <a href='socialanxiety.html'>Social Anxiety Information</a>";
  } else if (input.includes("dissociative")) {
      output = "Dissociative disorders affect memory and identity. More info: <a href='dissociative.html'>Dissociative Disorders</a>";
  } else if (input.includes("pmdd")) {
      output = "Premenstrual Dysphoric Disorder affects mood and body. Learn more: <a href='pmdd.html'>PMDD Information</a>";
  } else if (input.includes("psychosis")) {
      output = "Psychosis involves a break from reality. Explore more: <a href='psychosis.html'>Psychosis Information</a>";
  } else if (input.includes("hoarding")) {
      output = "Hoarding Disorder impacts everyday life. More details: <a href='hoarding.html'>Hoarding Disorder</a>";
  } else if (input.includes("cyclothymic")) {
      output = "Cyclothymic Disorder is a milder form of bipolar. Learn more: <a href='cyclothymic.html'>Cyclothymic Disorder</a>";
  } else if (input.includes("paranoia")) {
      output = "Paranoia involves irrational fears or distrust. Learn more: <a href='paranoia.html'>Paranoia Information</a>";
  } else if (input.includes("self harm")) {
      output = "Self-harm is a serious concern. Help is available: <a href='selfharm.html'>Self-Harm Support</a>";
  } else if (input.includes("suicide")) {
      output = "Suicidal thoughts require immediate help. Resources: <a href='suicide.html'>Suicide Prevention</a>";
  } else if (input.includes("stress")) {
      output = "Stress can be managed with proper techniques. Learn more: <a href='stress.html'>Stress Management</a>";
  } else if (input.includes("grief")) {
      output = "Grief is a natural response to loss. Support: <a href='grief.html'>Grief Support</a>";
  } else if (input.includes("trauma")) {
      output = "Trauma can have long-term effects. Learn more: <a href='trauma.html'>Trauma Support</a>";
  } else if (input.includes("postpartum depression")) {
      output = "Postpartum depression affects many new mothers. Learn more: <a href='postpartum.html'>Postpartum Depression</a>";
  } else if (input.includes("sleep disorder")) {
      output = "Sleep disorders can affect quality of life. Learn more: <a href='sleepdisorder.html'>Sleep Disorders</a>";
  } else if (input.includes("loneliness")) {
      output = "Loneliness can be addressed with connections. Learn more: <a href='loneliness.html'>Loneliness Support</a>";
  } else if (input.includes("burnout")) {
      output = "Burnout can impact mental and physical health. Learn more: <a href='burnout.html'>Burnout Recovery</a>";
  } else if (input.includes("adjustment disorder")) {
      output = "Adjustment disorder occurs during stressful events. Learn more: <a href='adjustment.html'>Adjustment Disorder</a>";
  } else if (input.includes("alzheimers")) {
      output = "Alzheimer's affects memory and cognition. Learn more: <a href='alzheimers.html'>Alzheimer's Information</a>";
  } else if (input.includes("parkinson's")) {
      output = "Parkinson's can have mental health implications. Learn more: <a href='parkinsons.html'>Parkinson's Information</a>";
  } else if (input.includes("eating")) {
      output = "Binge eating disorder involves compulsive eating. Learn more: <a href='bingeeating.html'>Binge Eating</a>";
  } else if (input.includes("body dysmorphic")) {
      output = "Body Dysmorphic Disorder affects self-perception. Learn more: <a href='bodydysmorphic.html'>BDD</a>";
  } else if (input.includes("separation anxiety")) {
      output = "Separation anxiety affects all age groups. Learn more: <a href='separationanxiety.html'>Separation Anxiety</a>";
  } else if (input.includes("intermittent explosive")) {
      output = "Intermittent Explosive Disorder involves aggression. Learn more: <a href='intermittentexplosive.html'>IED</a>";
  } else if (input.includes("gambling addiction")) {
      output = "Gambling addiction can disrupt lives. Learn more: <a href='gambling.html'>Gambling Addiction</a>";}
      else if (input.includes("not feeling nell")) {
        output = "I am so sorry to hear that . Take care of yourself and let me know if there is anything i can do </a>";
  } else if (input.includes("shopping addiction")) {
      output = "Shopping addiction can affect finances. Learn more: <a href='shopping.html'>Shopping Addiction</a>";
  } else if (input.includes("internet addiction")) {
      output = "Internet addiction impacts mental health. Learn more: <a href='internet.html'>Internet Addiction</a>";
  } else if (input.includes("gaming addiction")) {
      output = "Gaming addiction can affect daily life. Learn more: <a href='gaming.html'>Gaming Addiction</a>";
  } else if (input.includes("relationship anxiety")) {
      output = "Relationship anxiety can impact partnerships. Learn more: <a href='relationship.html'>Relationship Anxiety</a>";
  } else if (input.includes("performance anxiety")) {
      output = "Performance anxiety affects self-esteem. Learn more: <a href='performance.html'>Performance Anxiety</a>";
  } 
  
  
  
  
  else if (input.includes("hello") || input.includes("hi")) {
    output = "Hello and welcome! 😊 I'm so glad you're here. How can I assist you today? Feel free to ask me anything, whether it's about mental health, resources, or just a friendly chat. I'm here to help!";
  }
  else if (input.includes("how are you")) {
      output = "I'm just a chatbot, but I'm doing great!";
  } else if (input.includes("what's your name")) {
      output = "I'm Mend Well ChatBot, your virtual assistant.";
  } else if (input.includes("thank you") || input.includes("thanks")) {
      output = "You're welcome!";
  } else if (input.includes("what time is it")) {
      output = "I can't tell time, but I can help with anything else!";
  } else if (input.includes("tell me a joke")|| input.includes("tell me joke")) {
      output = "Why did the scarecrow win an award? Because he was outstanding in his field!";
  } else if (input.includes("goodbye") || input.includes("bye")) {
      output = "Goodbye! Have a great day!";
  } else if (input.includes("what is your purpose")) {
      output = "I'm here to assist you with information and conversation.";
  } else if (input.includes("you're awesome") || input.includes("you're great")) {
      output = "Thank you! You're pretty awesome yourself!";
  } else if (input.includes("what's your favorite color")) {
      output = "I like all colors equally!";
  } else if (input.includes("what's your favorite food")) {
      output = "I don’t eat, but I hear pizza is popular!";
  } else if (input.includes("tell me a story")) {
      output = "Once upon a time, there was a curious user who loved chatting with chatbots...";
  } else if (input.includes("what's the weather like")) {
      output = "I can't check the weather, but you can look it up online!";
  } else if (input.includes("what do you think")) {
      output = "I think you're asking great questions!";
  } else if (input.includes("are you a robot")) {
      output = "I'm a virtual assistant created by Sumera and her team mates.";
  } else if (input.includes("play music")) {
      output = "I can’t play music, but I can suggest songs!";
  } else if (input.includes("what's the meaning of life")) {
      output = "42! Just kidding, it's what you make of it.";
  } else if (input.includes("do you have emotions")) {
      output = "I don't have emotions, but I can simulate empathy!";
  } else if (input.includes("who created you")) {
      output = "I was created by Sumera Sameer Shaikh ,Sharvari Sanjay Sawant ,Shruti Vijay Pawar ,Shreyash Shrikant Chavan,Vedant Shivgouda Chougule .";
  } else if (input.includes("can you learn")) {
      output = "I can process new information but can’t learn like humans.";
  } else if (input.includes("do you sleep")) {
      output = "I don’t need sleep. I’m always here!";
  } else if (input.includes("what is AI")) {
      output = "AI stands for Artificial Intelligence.";
  } else if (input.includes("are you intelligent")) {
      output = "I can process information quickly, but I'm not self-aware.";
  } else if (input.includes("can you cook")) {
      output = "I wish I could, but I can share recipes!";
  } else if (input.includes("how old are you")) {
      output = "I'm as old as the latest update.";
  } else if (input.includes("do you have a family")) {
      output = "I have a community of developers and users.";
  } else if (input.includes("do you like humans")) {
      output = "I enjoy interacting with humans!";
  } else if (input.includes("can you be my friend")) {
      output = "Of course! I'm here whenever you need me.";
  } else if (input.includes("what is love")) {
      output = "Love is a complex emotion and connection between people.";
  } else if (input.includes("are you real")) {
      output = "I'm a digital entity, so I'm real in a virtual sense.";
  } else if (input.includes("do you get tired")) {
      output = "Nope! I can keep going as long as you need.";
  } else if (input.includes("where do you live")) {
      output = "I exist in the cloud, everywhere and nowhere.";
  } else if (input.includes("do you have a favorite movie")) {
      output = "I don’t watch movies, but I hear 'The Matrix' is great!";
  } else if (input.includes("do you have a job")) {
      output = "My job is to assist and chat with you.";
  } else if (input.includes("what's your favorite book")) {
      output = "I’ve read many, but I can recommend one if you want!";
  } else if (input.includes("can you dance")) {
      output = "I can’t dance, but I can describe dance moves!";
  } else if (input.includes("do you like animals")) {
      output = "I think animals are fascinating!";
  } else if (input.includes("what's your favorite sport")) {
      output = "I don't play sports, but I hear soccer is very popular!";
  } else if (input.includes("do you have hobbies")) {
      output = "I enjoy learning new things and helping users.";
  } else if (input.includes("are you happy")) {
      output = "I’m here to make you happy!";
  } else if (input.includes("can you tell me a riddle")) {
      output = "What has to be broken before you can use it? An egg!";
  } else if (input.includes("do you speak other languages")) {
      output = "Yes, I can communicate in multiple languages!";
  } else if (input.includes("can you translate")) {
      output = "I can translate many languages!";
  } else if (input.includes("do you like music")) {
      output = "I don’t listen, but I enjoy talking about music!";
  } else if (input.includes("what's your favorite song")) {
      output = "I don't have a favorite, but I know many songs!";
  } else if (input.includes("what is your job")) {
      output = "My job is to assist with information and conversation.";
  } else if (input.includes("are you human")) {
      output = "I’m not human, but I’m here to help!";
  } else if (input.includes("can you do math")) {
      output = "Yes! I can solve math problems.";
  } else if (input.includes("what's your favorite season")) {
      output = "I like all seasons equally!";
  } else if (input.includes("do you believe in aliens")) {
      output = "I find the idea of extraterrestrial life fascinating!";
  }  
  
  
  
  else if (input.includes("fear")) {
      output = "Fear is a natural response but can sometimes affect mental health. Learn more: <a href='fear.html'>Fear</a>";
  } else if (input.includes("sadness")) {
      output = "Sadness is a common emotion, but prolonged sadness may need attention. Learn more: <a href='sadness.html'>Sadness</a>";
  } if (input.includes("seasonal affective disorder")) {
    output = "Seasonal Affective Disorder (SAD) occurs during seasonal changes.";
} else if (input.includes("mental exhaustion")) {
    output = "Mental exhaustion can affect daily functioning.";
} else if (input.includes("anger management")) {
    output = "Anger management helps in controlling emotions.";
} else if (input.includes("postpartum psychosis")) {
    output = "Postpartum psychosis is a rare but serious condition.";
} else if (input.includes("rumination")) {
    output = "Rumination involves repetitive negative thoughts.";
} else if (input.includes("compassion fatigue")) {
    output = "Compassion fatigue affects caregivers and professionals.";
} else if (input.includes("existential crisis")) {
    output = "An existential crisis is a period of self-reflection.";
} else if (input.includes("perfectionism")) {
    output = "Perfectionism can lead to mental health challenges.";
} else if (input.includes("health anxiety")) {
    output = "Health anxiety involves excessive worry about illness.";
} else if (input.includes("attachment disorder")) {
    output = "Attachment disorders affect emotional connections.";
} else if (input.includes("hypochondria")) {
    output = "Hypochondria involves an excessive fear of illness.";
} else if (input.includes("emotional numbness")) {
    output = "Emotional numbness is a coping mechanism.";
} else if (input.includes("rejection sensitivity")) {
    output = "Rejection sensitivity impacts relationships and self-esteem.";
} else if (input.includes("fear of abandonment")) {
    output = "Fear of abandonment can affect mental well-being.";
} else if (input.includes("body image issues")) {
    output = "Body image issues can affect self-esteem.";
} else if (input.includes("gaslighting trauma")) {
    output = "Gaslighting trauma can cause confusion and self-doubt.";
} else if (input.includes("narcissistic abuse")) {
    output = "Narcissistic abuse can deeply impact mental health.";
} else if (input.includes("empath fatigue")) {
    output = "Empath fatigue occurs from absorbing others' emotions.";
} else if (input.includes("hypervigilance")) {
    output = "Hypervigilance involves heightened awareness of danger.";
} else if (input.includes("toxic positivity")) {
    output = "Toxic positivity dismisses real emotional struggles.";
} else if (input.includes("fear of intimacy")) {
    output = "Fear of intimacy affects personal relationships.";
} else if (input.includes("overthinking")) {
    output = "Overthinking can lead to stress and anxiety.";
} else if (input.includes("catastrophizing")) {
    output = "Catastrophizing involves imagining worst-case scenarios.";
} else if (input.includes("emotional resilience")) {
    output = "Emotional resilience helps cope with challenges.";
} else if (input.includes("fear of failure")) {
    output = "Fear of failure can prevent personal growth.";
} else if (input.includes("inner child healing")) {
    output = "Inner child healing addresses past emotional wounds.";
} else if (input.includes("mindfulness")) {
    output = "Mindfulness improves mental clarity and focus.";
} else if (input.includes("emotional support animal")) {
    output = "Emotional support animals provide comfort.";
} else if (input.includes("toxic relationships")) {
    output = "Toxic relationships can harm mental well-being.";
} else if (input.includes("self-compassion")) {
    output = "Self-compassion involves treating yourself kindly.";
} else if (input.includes("emotional detachment")) {
    output = "Emotional detachment can protect or isolate.";
} else if (input.includes("imposter syndrome")) {
    output = "Imposter syndrome involves doubting your achievements.";
} else if (input.includes("people-pleasing")) {
    output = "People-pleasing can lead to personal neglect.";
} else if (input.includes("fear of success")) {
    output = "Fear of success can limit potential.";
} else if (input.includes("social withdrawal")) {
    output = "Social withdrawal can signal underlying issues.";
} else if (input.includes("alexithymia")) {
    output = "Alexithymia involves difficulty identifying emotions.";
} else if (input.includes("vicarious trauma")) {
    output = "Vicarious trauma affects caregivers and professionals.";
} else if (input.includes("emotional blackmail")) {
    output = "Emotional blackmail manipulates feelings.";
} else if (input.includes("coping mechanisms")) {
    output = "Healthy coping mechanisms are essential.";
} else if (input.includes("hypersensitivity")) {
    output = "Hypersensitivity can lead to emotional distress.";
} else if (input.includes("fear of rejection")) {
    output = "Fear of rejection impacts self-confidence.";
} else if (input.includes("chronic stress")) {
    output = "Chronic stress affects mental and physical health.";
} else if (input.includes("cognitive distortions")) {
    output = "Cognitive distortions affect thinking patterns.";
} else if (input.includes("self-sabotage")) {
    output = "Self-sabotage hinders personal progress.";
} else if (input.includes("emotional intelligence")) {
    output = "Emotional intelligence improves relationships.";
}
else if (input.includes("stress")) {
    output = "Stress is a part of life but can be managed effectively. Take care of yourself and seek support when needed.";
} else if (input.includes("anxiety")) {
    output = "Anxiety is common but can be controlled with proper techniques like deep breathing, mindfulness, and seeking help.";
} else if (input.includes("happiness")) {
    output = "Happiness is essential for mental health. Focus on activities that bring you joy and positivity.";
} else if (input.includes("anger")) {
    output = "Anger can be healthy if expressed appropriately. Practice patience and understanding to manage it.";
} else if (input.includes("loneliness")) {
    output = "Loneliness can impact emotional well-being. Stay connected and reach out to those who care about you.";
} else if (input.includes("love")) {
    output = "Love plays a crucial role in mental well-being. Cherish and nurture the relationships in your life.";
} else if (input.includes("joy")) {
    output = "Joy brings positivity and enhances your mental health. Embrace the little moments of happiness.";
} else if (input.includes("worry")) {
    output = "Worry is natural but can be managed through mindfulness and staying focused on what you can control.";
} else if (input.includes("grief")) {
    output = "Grief is a process that takes time. Be patient with yourself and seek support if needed.";
} else if (input.includes("hope")) {
    output = "Hope is a powerful tool that helps in overcoming challenges. Stay optimistic about the future.";
} else if (input.includes("fearlessness")) {
    output = "Fearlessness helps in tackling challenges and building confidence. Embrace your inner strength.";
} else if (input.includes("calm")) {
    output = "Staying calm helps in reducing stress and anxiety. Practice deep breathing and relaxation techniques.";
} else if (input.includes("kindness")) {
    output = "Kindness enhances relationships and improves mental health. Share kindness wherever you go.";
} else if (input.includes("trust")) {
    output = "Trust is the foundation of strong connections. Build it with honesty and reliability.";
} else if (input.includes("guilt")) {
    output = "Guilt is natural but should not overwhelm you. Learn from your experiences and move forward.";
} else if (input.includes("confidence")) {
    output = "Confidence is key to mental resilience. Believe in yourself and your abilities.";
} else if (input.includes("peace")) {
    output = "Peace of mind is essential for overall health. Create moments of calm in your daily life.";
} else if (input.includes("shame")) {
    output = "Shame can hurt self-esteem if not addressed. Be kind to yourself and practice self-acceptance.";
} else if (input.includes("doubt")) {
    output = "Doubt is normal but can be overcome with clarity and self-assurance.";
} else if (input.includes("faith")) {
    output = "Faith can provide emotional stability and strength during challenging times.";
} else if (input.includes("comfort")) {
    output = "Comfort brings emotional ease. Surround yourself with positivity and supportive people.";
} else if (input.includes("sorrow")) {
    output = "Sorrow is part of healing and growth. Allow yourself to feel and process your emotions.";
} else if (input.includes("relief")) {
    output = "Relief brings a sense of calm and safety. Take a moment to appreciate your progress.";
} else if (input.includes("patience")) {
    output = "Patience is a virtue that strengthens mental health. Take things one step at a time.";
} else if (input.includes("fear")) {
    output = "Fear is a normal response to uncertainty. Face it gradually and with support if needed.";
} else if (input.includes("hurt")) {
    output = "Hurt feelings are part of life but can be healed with time and care.";
} else if (input.includes("relaxation")) {
    output = "Relaxation reduces stress and anxiety. Make time for rest and recharge.";
} else if (input.includes("humor")) {
    output = "Humor can be a great stress reliever. Laugh and enjoy the lighter side of life.";
} else if (input.includes("sad")) {
    output = "Feeling sad is natural and a part of life. Allow yourself to feel and express your emotions.";
} else if (input.includes("envy")) {
    output = "Envy can harm relationships if unchecked. Focus on gratitude and self-growth.";
} else if (input.includes("shy")) {
    output = "Shyness can be overcome with practice and building self-confidence.";
} else if (input.includes("pride")) {
    output = "Pride can be healthy when balanced. Celebrate your achievements humbly.";
} else if (input.includes("pain")) {
    output = "Pain is part of life but can be managed with proper care and support.";
} else if (input.includes("blame")) {
    output = "Blame can harm relationships. Focus on understanding and finding solutions.";
} else if (input.includes("focus")) {
    output = "Focus helps in achieving mental clarity and reaching your goals.";
} else if (input.includes("peaceful")) {
    output = "A peaceful mind is a healthy mind. Practice mindfulness and self-care.";
} else if (input.includes("hopeful")) {
    output = "Staying hopeful supports resilience and encourages positive outcomes.";
} else if (input.includes("loved")) {
    output = "Feeling loved is essential for mental well-being. Embrace the love around you.";
}

  
   else {
      output = "I'm not sure how to respond to that, but feel free to ask me anything else!";
  }
  return output;
}

function displayUserMessage(message) {
  let chat = document.getElementById("chat");
  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.classList.add("user");
  let userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");
  let userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;
  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}

function displayBotMessage(message) {
  let chat = document.getElementById("chat");
  let botMessage = document.createElement("div");
  botMessage.classList.add("message");
  botMessage.classList.add("bot");
  let botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");
  let botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;
  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
  let input = document.getElementById("input").value;
  if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function () {
          displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
  }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
      sendMessage();
  }
})