
function makeRed() {
    document.body.style.backgroundColor = 'red'
}


const pinkButton = document.getElementById("pink-button")
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink'
}



function changeText() {
    const textbtn = document.getElementById("default-text")
    textbtn.innerHTML = "text changed by onclick "
}

document.getElementById('textChange').addEventListener('click', function () {
    const textbtn2 = document.getElementById("default-text")
    textbtn2.innerHTML = "text changed by onclick 2nd method "
})
document.q

{/* <input type="text" id="input-text">
<button id="submit-btn" >Submit</button>
<h2 id="input-text-display" >Hello!</h2> */}

document.getElementById('submit-btn').addEventListener('click', function () {
    const inputField = document.getElementById('input-text')
    const inputText = inputField.value;

    const p = document.getElementById('input-text-display')
    p.innerText = "Hello!," + inputText;
    inputField.value = '';
})


document.getElementById('post-btn').addEventListener('click', function(){
    const commentBox = document.getElementById('new-comment')
    const newComment = commentBox.value;

    const commentDiv = document.getElementById('comment-div')

    const p = document.createElement('p')
    p.innerText =  newComment;
    commentDiv.appendChild(p);
    commentBox.value = '';
})

