var input = document.getElementsByClassName('task');
var btn = document.getElementsByClassName("add")[0];
// console.log(btn);
btn.addEventListener('click', function () {
    let count = true;
    let inputVal = input[0].value.trim().toLowerCase();
    input[0].value = "";
    let localTask = localStorage.getItem('localtask');
    if (localTask == null) {
        var taskArr = [];
    }
    else {
        taskArr = JSON.parse(localTask);
    }
    for (var i = 0; i < taskArr.length; i++) {
        if (taskArr[i] === inputVal) {
            count = false;
        }
    }
    if (count == true && inputVal!=="") {
        taskArr.push(inputVal);
        localStorage.setItem('localtask', JSON.stringify(taskArr));
    }
    else if(inputVal==""){
        alert("Please enter some text to add");
    }
    else { alert("You have already added this content!") }

    // showTask();
    let result = document.getElementsByClassName('result')[0];
    result.innerHTML = "";
    taskArr.forEach((el, index) => {
        if (el !== "") {

            let div = document.createElement('div');
            div.setAttribute('class', 'content');
            let div0 = document.createElement('div');
            div0.innerHTML = index+1;
            let div1 = document.createElement('div');
            div1.setAttribute('class', 'texting')
            div1.innerHTML = el;
            div2 = document.createElement('div');
            let classesToAdd = ['fas', 'editIcon'];
            div2.classList.add(...classesToAdd);
            div2.innerHTML = '&#xf044;';
            div3 = document.createElement('div');
            let classesToAdd1 = ['far', 'doneIcon'];
            div3.classList.add(...classesToAdd1);
            div3.innerHTML = '&#xf274;';
            div4 = document.createElement('div');
            let classesToAdd2 = ['fas', 'delIcon'];
            div4.classList.add(...classesToAdd2);
            div4.innerHTML = '&#xf2ed;';
            div.appendChild(div0);
            div.appendChild(div1);
            div.appendChild(div2);
            div.appendChild(div3);
            div.appendChild(div4);
            result.appendChild(div);
        }


        //   console.log(content.innerHTML);
    });

});

    // function showTask(){
    //   let localTask=localStorage.getItem('localtask');
    //   if(localTask==null){
    //       taskArr=[];
    //     }
    //     else{
    //         taskArr=JSON.parse(localTask);
    //         console.log(taskArr);
    //     }
    //     // let html='';
    //     let content=document.getElementsByClassName('content')[0];
    //     taskArr.forEach((el, index)=>{
    //           content.innerHTML=el;
    //           console.log(content.innerHTML);
    //     });


// }