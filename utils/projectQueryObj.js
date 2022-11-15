const getWhereObj = (queryObj) => {
    const queriesObj = {};
    let queryCount = 0;
    // these would be input fields on frontend
    let subjectQuery;
    // these would be radio buttons (true/false) on frontend
    let collabQuery;
    let unfinishedQuery;

    // if there is a value in input field...
    if (queryObj.institution) {
        queriesObj['institution'] = queryObj.institution;
        queryCount++;
    }
    // if there is a value in input field...
    if (queryObj.subject) {
        queriesObj['subject'] = queryObj.subject;
        queryCount++;
    }
    // if the 'open collab' radio button is checked...
    if (queryObj.collab_status) {
        if (queryObj.collab_status === 'true') {
            queriesObj["collab_status"] = true;
        } else {
            queriesObj["collab_status"] = false;
        }
        queryCount++;
    }
    // if the 'open collab' radio button is checked...
    if (queryObj.ongoing_status) {
        if (queryObj.ongoing_status === 'true') {
            queriesObj['ongoing_status'] = true;
        } else {
            queriesObj['ongoing_status'] = false;
        }
        queryCount++;
    }
    return queriesObj;
}

module.exports = getWhereObj;

