// utils.js

export const generateRandomValues = () => {
    const charSet = ['Anna', 'Elsa', 'Kristoff', 'Olaf'];
    const values = {};

    // Shuffle the charSet array
    const shuffledCharSet = shuffleArray(charSet);

    shuffledCharSet.forEach(char => {
        const imagePath = char;
        values[char] = {
            value: Math.floor(Math.random() * 10) + 1,
            imagePath,
        };
    });

    // Shuffle the operators array
    const shuffledOperators = shuffleArray(['+', '-', '*']);

    const equation = `${shuffledCharSet[0]} ${shuffledOperators[0]} ${shuffledCharSet[1]} ${shuffledOperators[1]} ${shuffledCharSet[2]} ${shuffledOperators[2]} ${shuffledCharSet[3]}`;
    const answer = calculateAnswer(values, equation);

    return { values, equation, answer };
};

const calculateAnswer = (values, equation) => {
    try {
        const evaluatedResult = eval(
            equation.replace(/[A-Za-z]+/g, char => values[char]?.value || char)
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

// Function to shuffle an array using Fisher-Yates algorithm
const shuffleArray = array => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};