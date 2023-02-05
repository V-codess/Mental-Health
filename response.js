function getBotResponse(input) {
    if (input == "hello" || input == "hi") {
        return "Hey there! Hope you are doing good.";
    } else if (input == "how are you?" || input == "how are you" || input == "What are you doing?" || input == "Good") {
        return "I'm good, thank you! How are you?";
    } else if (input == "bye" || input == "gtg" || input == "I'm going" || input == "get lost") {
        return "GoodBye! Take care.";
    }
    else if (input == "am I depressed?" || input == "i'm facing anxiety" || input == "facing stress" || input == "panic attacks" || input == "anxiety" || input == "stress" || input == "panic attack" || input == "depression") {
        return `Want to check <a href="/quiz.html">Quiz to test</a>`;
    } else if (input == "therapy") {
        return `Find out our therapists - <a href="https://psychcentral.com/">Therapy</a>`;
    } else {
        return "Sorry! I didn't understand";
    }
    
}
