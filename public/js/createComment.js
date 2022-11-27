const comment = document.querySelector('#comment');

async function postComment (e) {
    e.preventDefault();
    // get the required values & fetch
    const body = comment.value;
    const urlArr = window.location.href.split('/');
    const project_id = urlArr[4];
    console.log("comment", body)
    console.log("project_id", project_id)
    if(body){
        await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({
                body: body,
                project_id
            }),
            headers: { "Content-Type": "application/json" }
        });
    }
    console.log("RESPONE: \n=========================================\n");
    location.reload();
}

document.querySelector('#create-comment-btn').addEventListener('click', postComment);