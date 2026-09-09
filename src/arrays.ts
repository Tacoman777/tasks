/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    return (
        numbers.length === 1 ? numbers.concat(numbers)
        : numbers.length === 0 ? []
        : [numbers[0], numbers[numbers.length - 1]]
    );
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((number: number): number => number * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const int = numbers.map((num: string): number => parseInt(num, 10) || 0);
    return int;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const m = amounts.map((dollar: string): string =>
        dollar.charAt(0) == "$" ? (dollar = dollar.replace("$", "")) : dollar,
    );
    const int = m.map((num: string): number => parseInt(num, 10) || 0);
    return int;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const m2 = messages.filter(
        (m: string): boolean => m.charAt(m.length - 1) !== "?",
    );
    return m2.map((m3: string): string =>
        m3.charAt(m3.length - 1) == "!" ? (m3 = m3.toUpperCase()) : m3,
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const m2 = words.filter((m: string): boolean => m.length <= 3);
    return m2.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgb = colors.every(
        (color: string): boolean =>
            color == "red" || color == "blue" || color == "green",
    );
    return rgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = 0;
    addends.map((num: number): number => (sum = sum + num));
    const add = addends.length == 0 ? 0 : addends.join("+");
    return sum + "=" + add;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    /*
    let sum = 0;
    
    const nvalues = values.map((num: number): number => (num >= 0 ? num : num));
    nvalues.map((num: number): number =>
        nvalues.indexOf(num) < negative ? (sum = sum + num) : num,
    );
    negative !== 0 ? nvalues.splice(negative + 1, 0, sum) : negative;
    */
    const v = [...values];
    const negative =
        v.every((num: number): boolean => num > 0) ? 20 : (
            values.findIndex((n: number): boolean => n < 0)
        );
    const val = v.reduce(
        (sum: number, num: number) =>
            num > 0 ?
                v.indexOf(num) <= negative ?
                    sum + num
                :   sum
            :   sum,
        0,
    );
    const n =
        v.every((num: number): boolean => num > 0) ?
            v.length
        :   v.findIndex((i: number): boolean => i < 0) + 1;
    v.splice(n, 0, val);
    return v;
}
