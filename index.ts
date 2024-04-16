#!/usr/bin/env node 

import inquirer from "inquirer"
import chalk from "chalk"

let answer = await inquirer.prompt([
    {message:"Enter your sentence to count the word?",
     type:"input",
     name:"sentence"   
    }
])
const words =answer.sentence.trim().split(" ")

//Print the array of words to the console
console.log(words);

//Print the word to count the sentence to the console
console.log(chalk.blueBright(`your sentence word count is ${words.length}`));
