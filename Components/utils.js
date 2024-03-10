// utils.js
export const generateRandomValues = () => {
    let charSet = ['A', 'B', 'C', 'D', 'E'];
    const operators = ['+', '-', '*', '/'];

    // Shuffle characters and operators individually
    charSet = shuffleArray(charSet);
    const shuffledOperators = shuffleArray(operators);

    const values = {};

    charSet.forEach(char => {
        const imagePath = char;
        values[char] = {
            value: Math.floor(Math.random() * 10) + 1,
            imagePath,
        };
    });

    const equation = `${charSet[0]} ${shuffledOperators[0]} ${charSet[1]} ${shuffledOperators[1]} ${charSet[2]} ${shuffledOperators[2]} ${charSet[3]} ${shuffledOperators[3]} ${charSet[4]}`;
    const answer = calculateAnswer(values, equation);

    return { values, equation, answer };
};

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const calculateAnswer = (values, equation) => {
    try {
        const evaluatedResult = eval(
            equation.replace(/[A-E]/g, char => values[char]?.value || char)
        );

        if (isNaN(evaluatedResult)) {
            console.error('Invalid result:', evaluatedResult);
            return NaN;
        }

        // Limit the answer to two decimal places
        const roundedResult = parseFloat(evaluatedResult.toFixed(2));

        return roundedResult;
    } catch (error) {
        console.error('Error during evaluation:', error);
        return NaN;
    }
};
