function assignGrade(score) {
    if (score >= 90) {
        return '5';
    } else if (score >=80) {
        return '4';
    } else if (score >= 70) {
        return '3';
    } else if (score >= 60) {
        return '2';
    } else {
        return '1';
    }
}


console.log('Вы получили ' + assignGrade(89));
console.log('Вы получили ' + assignGrade(79));