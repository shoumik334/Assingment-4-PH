/* Frist Problem */

function mindGame(num) 
{
    const sum = (((num * 3) + 10) / 2) - 5;
    return sum;

}

/* Second Problem */

function evenOdd(str)
{
    const strLength = str.length;
    if (strLength % 2 === 0) 
    {
        return "even";
    } else 
    {
        return "odd"
    }
}

/* Third Problem */

function isLGSeven(input)
{
    if(input < 7)
    {
        const inptDifSum = input-7;
        return inptSDifSum;

    }
    else {
        const result = input * 2;
        return result;
    }
}

/*Fourth Problem */
let results = [2, -5, -7, -13]

function findingBadData(arr) {
    let blankArr = [];
    for (i = 0; i < results.length; i++) {
        if (arr[i] < 0) {
            blankArr.push(arr[i])
        }
    }

    return blankArr.length;
}

/*Fifth Problem */


function gemsToDiamond(fd1, fd2, fd3) {
    const gemsFd1 = fd1 * 21;
    const gemsFd2 = fd2 * 32;
    const gemsFd3 = fd3 * 43;
    const gemsFdTotal = gemsFd1 + gemsFd2 + gemsFd3;
    // console.log(gemsFdTotal);
    if (gemsFdTotal > 2000) {
        const gemsFinalTolal = gemsFdTotal - 2000;
        return gemsFinalTolal;
    } else {
        return gemsFdTotal;
    }
}
