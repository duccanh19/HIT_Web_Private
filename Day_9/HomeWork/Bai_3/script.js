count_last_word = (s) => {
    let words = s.trim().split(' ');
    if (words.length > 0) {
        let lastWord = words[words.length - 1];

        return lastWord.length;
    }

    return 0;
};


console.log('Số ký tự của từ cuối cùng:', count_last_word('Hello World'));
console.log('Số ký tự của từ cuối cùng:', count_last_word('HTML, CSS, Javascript,'));
