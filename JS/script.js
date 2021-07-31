showTask();
var ind;
var trip=false;
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
        if (taskArr[i].name === inputVal) {
            count = false;
        }
    }
    if (count == true && inputVal!=="") {
        taskArr.push({name:inputVal,done:false});
        localStorage.setItem('localtask', JSON.stringify(taskArr));
    }
    else if(inputVal==""){
        alert("Please enter some text to add");
    }
    else { alert("You have already added this content!") }

    showTask();
   

});
function showTask(){
    //   console.log(test);
    // console.log('hi');
        let localTask=localStorage.getItem('localtask');
        if(localTask==null){
            taskArr=[];
        }
        else{
          taskArr=JSON.parse(localTask);
          // console.log(taskArr);
        }
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
              div1.innerHTML = el.name;
              div2 = document.createElement('div');
              let classesToAdd = ['fas', 'editIcon'];
              div2.classList.add(...classesToAdd);
              div2.innerHTML = '&#xf044;';
              div2.addEventListener('click',editTask);
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
      });


    
      
}

function editTask(){
    // btn.innerHTML="Save"; 
     let del=document.getElementsByClassName('delete');
    let save=document.getElementsByClassName('save');
    let cancel=document.getElementsByClassName('cancel');
    save[0].style.display="block";
    cancel[0].style.display="block";
    btn.style.display="none";
    del[0].style.display="none";
     ind=this.parentElement.firstChild.innerHTML;
     console.log(ind);
    let input = document.getElementsByClassName('task');
    let localTask=localStorage.getItem('localtask');
    let taskArr=JSON.parse(localTask);
    inputVal=input[0].value=taskArr[ind-1].name;
}
   let save=document.getElementsByClassName('save');
    save[0].addEventListener('click',function(){
        let localTask=localStorage.getItem('localtask');
        let taskArr=JSON.parse(localTask);
        let input = document.getElementsByClassName('task');
        for(var i=0;i<taskArr.length;i++){
            if(input[0].value==taskArr[i].name){
               trip=true;
            }
        }
        if(!trip){
            taskArr[ind-1].name=input[0].value;
              console.log(ind);
              localStorage.setItem('localtask', JSON.stringify(taskArr));
              showTask();
              var trip=true;
              input[0].value="";
        }
        else{
            alert("This task already exists!")
        }
        let del=document.getElementsByClassName('delete');
        let save=document.getElementsByClassName('save');
        let cancel=document.getElementsByClassName('cancel');
        let btn=document.getElementsByClassName('add');
        del[0].style.display="block";
        save[0].style.display="none";
        cancel[0].style.display="none";
        btn[0].style.display="block";
   })

   let cancel=document.getElementsByClassName('cancel');
   cancel[0].addEventListener('click', function(){
    let input = document.getElementsByClassName('task');
    input[0].value="";
        let del=document.getElementsByClassName('delete');
        let save=document.getElementsByClassName('save');
        let cancel=document.getElementsByClassName('cancel');
        let btn=document.getElementsByClassName('add');
        del[0].style.display="block";
        save[0].style.display="none";
        cancel[0].style.display="none";
        btn[0].style.display="block";
   })
    
   
    
     

    
