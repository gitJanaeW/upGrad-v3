const comment = document.querySelector('#comment');

async function postComment () {
    // get the required values & fetch
    const body = comment.value;
    const urlArr = window.location.href.split('/');
    const project_id = urlArr[4];
    console.log("comment", body)
    if(body){
        await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({
                cbody: body,
                project_id
            }),
            headers: { "Content-Type": "application/json" }
        });
    }
    location.reload();
}

document.querySelector('#create-comment-btn').addEventListener('click', postComment);