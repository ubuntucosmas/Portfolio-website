const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls');
const sectionButton = document.querySelectorAll('.control');
const AllSections = document.querySelectorAll('.main-content');


function PageTransitions(){
    //button click active class
    for(let i = 0; i <  sectionButton.length; i++){
            sectionButton[i].addEventListener('click', function(){
                let currentButton = document.querySelectorAll('.active-btn');
                currentButton[0].className = currentButton[0].className.replace('active-btn', '');
                this.className += ' active-btn';
            })  

            
    }

    //sections active class
    document.getElementsByClassName('main-content', addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //removes selected from the other button
            sectionButtons.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active') 
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }

    }))

    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode'); 
    })



}
PageTransitions();

