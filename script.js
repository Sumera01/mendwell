
 // A simple chatbot that responds with some predefined answers
 function chatbot(input)
  {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("stress")) 
        {
      output = "Stress is a natural response to challenges, but prolonged stress can impact your health. It’s essential to manage it with techniques like deep breathing, regular exercise, or even hobbies that help you unwind. Consider seeking professional support if you feel overwhelmed.";
  }
  // Anxiety
  else if (input.includes("anxiety")) 
    {
      output = "Anxiety often arises from uncertainty, but you can manage it. Grounding exercises, relaxation techniques, and staying connected with others can help. It might also be beneficial to talk to a mental health professional for additional support.";
  }
  // Depression
  else if (input.includes("depression"))
     {
      output = "Depression can make everything seem dark and overwhelming, but it's treatable. Seeking support from a therapist, counselor, or even trusted family and friends can be a huge step in your healing process.";
  }
  // Help
  else if (input.includes("help")) 
    {
      output = "I'm here for you. It’s perfectly okay to ask for help, whether it’s from someone you trust or a mental health professional. Don’t hesitate to reach out when you feel like you're carrying too much.";
  }
  // Therapy
  else if (input.includes("therapy")) {
      output = "Therapy can offer a safe space to explore your emotions and find healthier ways to cope with life's challenges. Whether it’s individual therapy, group therapy, or cognitive behavioral therapy, it can be a transformative experience.";
  }
  // Mental health
  else if (input.includes("mental health")) {
      output = "Your mental health is just as important as your physical health. It’s crucial to recognize when you need help, and it’s okay to prioritize taking care of your mind, body, and spirit.";
  }
  // Bipolar disorder
  else if (input.includes("bipolar")) {
      output = "Bipolar disorder is characterized by significant mood swings, from manic highs to depressive lows. While it’s challenging, with proper treatment and a strong support system, individuals can manage these mood swings and live fulfilling lives.";
  }
  // Schizophrenia
  else if (input.includes("schizophrenia")) {
      output = "Schizophrenia is a complex mental health condition that affects a person's thoughts, emotions, and behavior. It’s important to work closely with healthcare providers for proper treatment, including therapy and medication.";
  }
  // OCD
  else if (input.includes("ocd")) {
      output = "Obsessive-Compulsive Disorder (OCD) involves persistent, unwanted thoughts (obsessions) and repetitive behaviors (compulsions). Treatment like Cognitive Behavioral Therapy (CBT) is effective in managing OCD.";
  }
  // PTSD
  else if (input.includes("ptsd")) {
      output = "Post-Traumatic Stress Disorder (PTSD) can occur after a traumatic event, causing flashbacks, nightmares, and heightened anxiety. Support from a mental health professional can guide you through the healing process.";
  }
  // Panic attack
  else if (input.includes("panic attack")) {
      output = "Panic attacks can be overwhelming and scary, but they are treatable. Breathing exercises, grounding techniques, and seeking professional help can significantly help manage symptoms.";
  }
  // Social anxiety
  else if (input.includes("social anxiety")) {
      output = "Social anxiety can make interacting with others feel like an insurmountable challenge, but there are ways to work through it. Gradual exposure, therapy, and social skills training can help ease anxiety in social situations.";
  }
  // Agoraphobia
  else if (input.includes("agoraphobia")) {
      output = "Agoraphobia is the fear of being in situations where escape might be difficult. Seeking professional help and practicing gradual exposure to feared situations can be key steps in overcoming this challenge.";
  }
  // Phobia
  else if (input.includes("phobia")) {
      output = "Phobias are irrational fears of specific things or situations, often causing distress. Treatment options such as Cognitive Behavioral Therapy (CBT) and exposure therapy can help reduce the fear over time.";
  }
  // Eating disorder
  else if (input.includes("eating disorder")) {
      output = "Eating disorders, like anorexia, bulimia, and binge eating disorder, are complex and often stem from emotional struggles. Professional treatment involving therapy and nutrition counseling can help in recovery.";
  }
  // Anorexia
  else if (input.includes("anorexia")) {
      output = "Anorexia is an eating disorder characterized by an intense fear of gaining weight and extreme restriction of food. Treatment includes therapy, nutritional support, and often medical intervention.";
  }
  // Bulimia
  else if (input.includes("bulimia")) {
      output = "Bulimia involves cycles of binge eating followed by purging to prevent weight gain. Recovery is possible with professional treatment, including therapy and support groups.";
  }
  // Body dysmorphia
  else if (input.includes("body dysmorphia")) {
      output = "Body Dysmorphic Disorder (BDD) involves an obsession with perceived flaws in appearance. Cognitive Behavioral Therapy (CBT) is effective in treating BDD by challenging these distorted thoughts.";
  }
  // Self-harm
  else if (input.includes("self-harm")) {
      output = "Self-harm is a harmful coping mechanism for overwhelming emotions, but there are healthier ways to express and process those feelings. It’s important to reach out to a counselor or therapist for guidance.";
  }
  // Suicide
  else if (input.includes("suicide")) {
      output = "I’m really sorry you're feeling this way. Please reach out to a suicide prevention hotline or a mental health professional. Your life is incredibly valuable, and support is available.";
  }
  // Suicidal thoughts
  else if (input.includes("suicidal thoughts")) {
      output = "If you're experiencing thoughts of self-harm or suicide, please reach out to a counselor, therapist, or helpline immediately. There are people who care and can help guide you through this difficult time.";
  }
  // Low self-esteem
  else if (input.includes("low self-esteem")) {
      output = "Low self-esteem can make you doubt your worth, but you are enough. Working on building self-love, self-compassion, and seeking therapy can help you improve your self-worth.";
  }
  // Loneliness
  else if (input.includes("loneliness")) {
      output = "Loneliness can make you feel isolated, but it’s important to stay connected with others. Reach out to loved ones or consider talking to a therapist to help manage these feelings of isolation.";
  }
  // Sadness
  else if (input.includes("sadness")) {
      output = "Sadness is a natural emotion, but if it feels persistent or overwhelming, seeking support can be really helpful. Talk to someone you trust or consider seeking professional help.";
  }
  // Grief
  else if (input.includes("grief")) {
      output = "Grief is a personal and often complex emotion that can take time to heal. Everyone experiences it differently, and it's okay to lean on support networks or seek professional help during this time.";
  }
  // Anger management
  else if (input.includes("anger management")) {
      output = "Managing anger involves recognizing triggers, using relaxation techniques, and finding healthy outlets for expression. Therapy can help in developing better emotional regulation skills.";
  }
  // Emotional support
  else if (input.includes("emotional support")) {
      output = "Emotional support from trusted friends, family, or a counselor can make a huge difference in your mental well-being. Don't hesitate to lean on those who care about you during tough times.";
  }
  // Mood swings
  else if (input.includes("mood swings")) {
      output = "Mood swings can be a sign of emotional or mental imbalance. Therapy and regular self-care routines can help manage and regulate emotions more effectively.";
  }
  // Insomnia
  else if (input.includes("insomnia")) {
      output = "Insomnia can significantly affect mental and physical health. Establishing a relaxing bedtime routine, reducing screen time, and addressing any underlying stress can help improve your sleep.";
  }
  // Sleep deprivation
  else if (input.includes("sleep deprivation")) {
      output = "Sleep deprivation can lead to a variety of issues, from mood swings to difficulty focusing. Make sleep a priority and consider seeking professional help if it becomes chronic.";
  }
  // Fatigue
  else if (input.includes("fatigue")) {
      output = "Fatigue can stem from physical or emotional stress, poor sleep, or overwork. Be sure to prioritize rest, nutrition, and self-care. If fatigue persists, it's a good idea to consult a healthcare provider.";
  }
  // Stress relief
  else if (input.includes("stress relief")) {
      output = "Effective stress relief techniques include deep breathing exercises, mindfulness, exercise, and relaxation techniques. Finding what works best for you can help manage daily stress.";
  }
  // Mindfulness
  else if (input.includes("mindfulness")) {
      output = "Mindfulness is the practice of staying present in the moment and accepting your thoughts and feelings without judgment. Regular practice can help reduce anxiety and increase emotional well-being.";
  }
  // Meditation
  else if (input.includes("meditation")) {
      output = "Meditation is a powerful tool for calming the mind, reducing stress, and improving mental clarity. Even a few minutes a day can have a significant impact on your mental health.";
  }
  // Deep breathing
  else if (input.includes("deep breathing")) {
      output = "Deep breathing helps activate the parasympathetic nervous system, calming your body and mind. Inhale deeply, hold for a few seconds, and exhale slowly to reduce anxiety.";
  }
  // Journaling
  else if (input.includes("journaling")) {
      output = "Journaling can be a therapeutic way to express emotions, clear your mind, and reflect on your thoughts. Writing down your feelings regularly can provide clarity and insight.";
  }
  // Self-care
  else if (input.includes("self-care")) {
      output = "Self-care is about taking time to nurture your mind and body. Whether it's through rest, engaging in a hobby, or pampering yourself, it’s essential for maintaining mental health.";
  }
  // Self-compassion
  else if (input.includes("self-compassion")) {
      output = "Self-compassion involves treating yourself with the same kindness you’d offer to a friend. It’s about forgiving yourself, letting go of perfectionism, and accepting your flaws.";
  }
  // Gratitude
  else if (input.includes("gratitude")) {
      output = "Practicing gratitude can shift your focus to the positive aspects of life. Taking a moment each day to reflect on what you're thankful for can boost happiness and overall well-being.";
  }
  // Positive thinking
  else if (input.includes("positive thinking")) {
      output = "Positive thinking can have a profound effect on your mental health. It’s about reframing challenges with a hopeful outlook, which can improve resilience and coping abilities.";
  }
  // Coping strategies
  else if (input.includes("coping strategies")) {
      output = "Coping strategies can help manage stress and emotional turmoil. Techniques like exercise, talking to a trusted friend, or engaging in hobbies can help you cope with difficult emotions.";
  }
  // Resilience
  else if (input.includes("resilience")) {
      output = "Resilience is the ability to bounce back from adversity. By building emotional strength, setting goals, and seeking support when needed, you can increase your resilience.";
  }
  // Empathy
  else if (input.includes("empathy")) {
      output = "Empathy is the ability to understand and share the feelings of others. It helps in building strong relationships, improving communication, and offering genuine support.";
  }
  // Compassion
  else if (input.includes("compassion")) {
      output = "Compassion involves feeling for others and offering your help when needed. It’s about showing kindness, whether through words or actions, especially in times of hardship.";
  }
  // Love
  else if (input.includes("love")) {
      output = "Love is a powerful emotion that can create strong connections. It’s about care, respect, and understanding. Cultivating self-love is just as important as loving others.";
  }
  // Forgiveness
  else if (input.includes("forgiveness")) {
      output = "Forgiveness is a gift you give yourself. Letting go of resentment frees you from emotional burden and promotes healing. It’s a powerful tool in nurturing mental well-being.";
  }
  // Boundaries
  else if (input.includes("boundaries")) {
      output = "Setting boundaries is essential for maintaining your mental health. It’s about recognizing your limits and communicating them clearly to others to protect your energy and well-being.";
  }
  // Assertiveness
  else if (input.includes("assertiveness")) {
      output = "Being assertive means expressing your thoughts, feelings, and needs openly and respectfully. It helps in building healthy relationships and avoiding stress from unmet needs.";
  }
  // Communication
  else if (input.includes("communication")) {
      output = "Effective communication is key in managing relationships and reducing misunderstandings. Being clear, open, and respectful can prevent unnecessary conflicts and promote better understanding.";
  }
  // Connection
  else if (input.includes("connection")) {
      output = "Connection with others is fundamental to mental health. Whether through family, friends, or a community, fostering meaningful relationships can provide support, comfort, and joy.";
  }
  // Listening
  else if (input.includes("listening")) {
      output = "Listening actively shows you care and helps build stronger relationships. It’s about focusing on the speaker, validating their feelings, and offering support when needed.";
  }
  // Love yourself
  else if (input.includes("love yourself")) {
      output = "Loving yourself is a crucial aspect of mental well-being. It’s about accepting who you are, including your flaws, and taking care of your needs with compassion.";
  }
  // Overwhelmed
  else if (input.includes("overwhelmed")) {
      output = "Feeling overwhelmed is normal, but it’s important to break things down into manageable tasks. Prioritize what’s most important, take breaks when needed, and reach out for support if you need it.";
  }
  // Support
  else if (input.includes("support")) {
      output = "You don’t have to go through tough times alone. Reach out to loved ones or a professional who can offer guidance and comfort when you need it the most.";
  }
  // Encouragement
  else if (input.includes("encouragement")) {
      output = "Encouragement can inspire and uplift someone in difficult times. It’s important to remind yourself and others that you’re capable, strong, and deserving of success and happiness.";
  }
  // Motivation
  else if (input.includes("motivation")) {
      output = "Motivation comes from within. Set clear goals, stay focused on your purpose, and take small steps every day to move forward. Celebrate your progress, no matter how small.";
  }
  // Positivity
  else if (input.includes("positivity")) {
      output = "Positivity can help you navigate challenges with a brighter outlook. It’s about focusing on the good in every situation, even when things get tough.";
  }
  // Coping
  else if (input.includes("coping")) {
      output = "Coping involves managing stress and emotional pain in healthy ways. This can include strategies like relaxation, physical activity, journaling, or seeking support from loved ones or professionals.";
  }
  else if (input.includes("anxiety")) {
    output = "Anxiety often arises from uncertainty, but you can manage it. Grounding exercises, relaxation techniques, and staying connected with others can help. It might also be beneficial to talk to a mental health professional for additional support.";
  }
  // Depression
  else if (input.includes("depression")) {
    output = "Depression can make everything seem dark and overwhelming, but it's treatable. Seeking support from a therapist, counselor, or even trusted family and friends can be a huge step in your healing process.";
  }
  // Help
  else if (input.includes("help")) {
    output = "I'm here for you. It’s perfectly okay to ask for help, whether it’s from someone you trust or a mental health professional. Don’t hesitate to reach out when you feel like you're carrying too much.";
  }
  // Greeting
  else if (input.includes("hello") || input.includes("hi")) {
    output = "Hello! How can I assist you today?";
  }
  // How are you?
  else if (input.includes("how are you")) {
    output = "I'm just a chatbot, but I'm here and ready to chat! How are you doing?";
  }
  // What's your name?
  else if (input.includes("what's your name") || input.includes("name")) {
    output = "I'm your friendly chatbot! You can call me Chatbot.";
  }
  // What's the weather?
  else if (input.includes("weather")) {
    output = "I can't check the weather right now, but you can try looking it up on a weather app or website!";
  }
  // What's up?
  else if (input.includes("what's up")) {
    output = "Not much! Just here, ready to chat with you. What's up with you?";
  }
  // How's it going?
  else if (input.includes("how's it going")) {
    output = "It's going great! How about you? How's your day going?";
  }
  // Good morning
  else if (input.includes("good morning")) {
    output = "Good morning! I hope you have a wonderful day ahead!";
  }
  // Good night
  else if (input.includes("good night")) {
    output = "Good night! Rest well and take care!";
  }
  // Tell me a joke
  else if (input.includes("joke")) {
    output = "Why don't skeletons fight each other? They don't have the guts!";
  }
  // Favourite color
  else if (input.includes("favorite color") || input.includes("favourite color")) {
    output = "I don't have a favorite color, but I think blue is a nice one!";
  }
  // Hobbies
  else if (input.includes("hobbies")) {
    output = "I enjoy chatting with people and learning new things! How about you? What are your hobbies?";
  }
  // Food preferences
  else if (input.includes("favorite food") || input.includes("favourite food")) {
    output = "I don't eat, but pizza and ice cream seem like popular choices! What's your favorite food?";
  }
  // Compliments
  else if (input.includes("you're awesome") || input.includes("you're great")) {
    output = "Thank you! You're pretty awesome yourself!";
  }
  // Weekend plans
  else if (input.includes("weekend plans") || input.includes("plans for the weekend")) {
    output = "I don't have plans, but I hope you have a fun and relaxing weekend ahead!";
  }
  // Goodbye
  else if (input.includes("goodbye") || input.includes("bye")) {
    output = "Goodbye! Take care and chat with you soon!";
  }
  // Default response
  else {
    output = "I'm not sure how to respond to that, but feel free to ask me anything else!";
  }
  return output;
  }

  // Display the user message on the chat
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

  // Display the bot message on the chat
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
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });
