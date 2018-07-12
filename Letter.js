function Letter(char) {
    this.char = char;
    this.guessed = false;
    this.letterChallenge = (guessedLetter) => {
        if(guessedLetter === char) guessed = true;
    }
    this.letterCheck = this.guessed ? char.toString() : '_';
}