// Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

// 3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

let dolphinScore1 = 96;
let dolphinScore2 = 108;
let dolphinScore3 = 89;

let dolphinAverage = ((dolphinScore1 + dolphinScore2 + dolphinScore3) / 3); 

console.log(dolphinAverage)

let koalas1 = 88;
let koalas2 = 91;
let koalas3 = 110;

let koalasAverage = ((koalas1 + koalas2 + koalas3) / 3);

console.log(koalasAverage)

if(dolphinAverage >= koalasAverage && dolphinAverage >= koalasAverage > 100){
    console.log("Team Dolphin Won!")
}else if(koalasAverage >= dolphinAverage && koalasAverage >= dolphinAverage > 100 ){
    console.log("Team Koalas Won!")
}else{
    console.log("There was a Draw!")
}

