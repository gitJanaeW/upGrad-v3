const subjectVal = document.querySelector('#subject-query');
const collabYesVal = document.querySelector('#collab-query-yes');
const collabNoVal = document.querySelector('#collab-query-no');
const unfinishedYesVal = document.querySelector('#finished-query-yes');
const unfinishedNoVal = document.querySelector('#finished-query-no');
// const obj = {subject: subjectVal.value, collab: collabVal.value, unfinished: unfinishedVal.value};
// this function is creating a query string based on what the user enters. This query string would then be handled
// on the backend.
const getSearchWords = (subjectVal, collabYesVal, collabNoVal, unfinishedYesVal, unfinishedNoVal) => {
    if (!subjectVal.valu, !collabYesVal, !collabNoVal, !unfinishedYesVal, unfinishedNoVal)
    console.log(subjectVal);
    const queriesArr = [];
    let queryCount = 0;
    let subjectQuery;
    let collabYesQuery;
    let collabNoQuery;
    let unfinishedYesQuery;
    let unfinishedNoQuery;
    // if there is a value in input field...
    if (subjectVal !== '') {
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        if(queryCount >= 1) {
            subjectQuery = `&subject=${subjectVal}`;
        } else {
            subjectQuery = `?subject=${subjectVal}`;
        }
        queryCount++;
        queriesArr.push(subjectQuery);
    }
    // if the 'open collab' radio button is checked...
    if (collabYesVal.checked) {
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        if(queryCount >= 1) {
            collabYesQuery = `&collab_status=true`;
        } else {
            collabYesQuery = `?collab_status=true`;
        }
        queryCount++;
        queriesArr.push(collabYesQuery);
    }
    if (collabNoVal.checked) {
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        if(queryCount >= 1) {
            collabNoQuery = `&collab_status=false`;
        } else {
            collabNoQuery = `?collab_status=false`;
        }
        queryCount++;
        queriesArr.push(collabNoQuery);
    }
    // if the 'open collab' radio button is checked...
    if (unfinishedYesVal.checked) {
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        if(queryCount >= 1) {
            unfinishedYesQuery = `&ongoing_status=true`;
        } else {
            unfinishedYesQuery = `?ongoing_status=true`;
        }
        queryCount++;
        queriesArr.push(unfinishedYesQuery);
    }
    if (unfinishedNoVal.checked) {
        // change the start of the query string from '?' to '&'  based on if there are already one or more queries
        if(queryCount >= 1) {
            unfinishedNoQuery = `&ongoing_status=false`;
        } else {
            unfinishedNoQuery = `?ongoing_status=false`;
        }
        queryCount++;
        queriesArr.push(unfinishedNoQuery);
    }
    // join the query fragments into one whole query & return
    if (queriesArr[0] === undefined) {
        return `/`;
    }
    const queryStr = queriesArr.join('');
    console.log(queryStr);
    return `/search${queryStr}`;
}

// the url isn't changing correctly
async function redirectHome (){
    document.location.repalce('/');
}

async function filter (event) {
    event.preventDefault();
        const response = await fetch(`${getSearchWords(
            subjectVal.value, collabYesVal, collabNoVal, unfinishedYesVal, unfinishedNoVal
            )}`, {
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        }
    });
    document.location.replace(`${getSearchWords(subjectVal.value, collabYesVal, collabNoVal, unfinishedYesVal, unfinishedNoVal)}`);
}

document.querySelector('#submit-btn').addEventListener('click', filter);
document.querySelector('#clear-btn').addEventListener('click', redirectHome);