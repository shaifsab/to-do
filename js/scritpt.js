let taskAddInput = document.querySelector('.task-add--input')
let task = document.querySelector('.task')

taskAddInput.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        if (taskAddInput.value == '') {
            alert('fakha reke ki korben be productive')
        } else {
            // create html element
            let taskTextJs = document.createElement('div')
            let roundLinkJs = document.createElement('a')
            let imgOneJs = document.createElement('img')
            let taskTextFontJs = document.createElement('input')
            let dotsJs = document.createElement('a')
            let imgTwoJs = document.createElement('img')

            // sub source and link 
            roundLinkJs.href = "#"
            imgOneJs.src = "assets/icons/round.png"
            imgOneJs.alt = "round image"
            imgTwoJs.src = "assets/icons/dots.png"
            imgTwoJs.alt = "dots"

            // append child 
            task.appendChild(taskTextJs)
            taskTextJs.appendChild(roundLinkJs)
            roundLinkJs.appendChild(imgOneJs)
            taskTextJs.appendChild(taskTextFontJs)
            taskTextJs.appendChild(dotsJs)
            dotsJs.appendChild(imgTwoJs)

            // css class
            taskTextJs.classList.add('task-text')
            roundLinkJs.classList.add('round-link')
            taskTextFontJs.classList.add('task-text--font')
            dotsJs.classList.add('dots')


            // input show koranur jonno
            taskTextFontJs.value = taskAddInput.value


            // set attribute input neya bondo korrar jonno 
            taskTextFontJs.setAttribute('readonly', 'readonly')


            // input faka rakhar jonno
            taskAddInput.value = ''

            // dots hide rakar jonno
            dotsJs.style.display = 'none'

            // first-child diye div backgroud show kora hoise copy from ai start
            if (task.querySelectorAll('.task-text').length === 1) {
                taskTextJs.style.background = '#2E2E2E'
            }
            // end

            // button create er jonno
            let buttonDivJs = document.createElement('div')
            let editButtonJs = document.createElement('a')
            let deleteButtonJs = document.createElement('a')

            // Appendchild 
            taskTextJs.appendChild(buttonDivJs)
            buttonDivJs.appendChild(editButtonJs)
            buttonDivJs.appendChild(deleteButtonJs)

            // css class add korar jonno 
            buttonDivJs.classList.add('button-div')
            editButtonJs.classList.add('edit-button')
            deleteButtonJs.classList.add('delete-button')





            // edit and delete part
            editButtonJs.innerHTML = 'edit'
            deleteButtonJs.innerHTML = 'delete'

            // edit
            editButtonJs.addEventListener('click', () => {
                if (editButtonJs.innerHTML === 'edit') {
                    editButtonJs.innerHTML = 'save'
                    taskTextFontJs.removeAttribute('readonly')
                } else {
                    editButtonJs.innerHTML = 'edit'
                    taskTextFontJs.setAttribute('readonly', 'readonly')

                    buttonDivJs.style.display = 'none'
                }
            })



            // delete 
            deleteButtonJs.addEventListener('click', () => {
                taskTextJs.remove()
            })

            // button hide rakhar jonno
            buttonDivJs.style.display = 'none'

            // button hide korrar jono aita copy korsi ai teke start
            dotsJs.addEventListener('click', () => {
                buttonDivJs.style.display = buttonDivJs.style.display === 'none' ? 'flex' : 'none'
            })
            // end



            // task-task hover korle jate dots show hoy ejonno
            taskTextJs.addEventListener('mouseover', () => {
                dotsJs.style.display = 'block'
            })

            taskTextJs.addEventListener('mouseout', () => {
                dotsJs.style.display = 'none'
            })

            roundLinkJs.addEventListener('click', () => {
                let underLine = roundLinkJs.nextElementSibling

                if (underLine.style.textDecoration == 'line-through') {
                    underLine.style.textDecoration = 'none'
                } else {
                    underLine.style.textDecoration = 'line-through'
                }
            })
        }
    }
})