let list = {}

    let taskIndex = 1

    taskBoard = document.getElementById("task_board")

    let addTask = () => {
        let currentTaskValue = document.getElementById('newTask').value

            if (currentTaskValue.length > 0) {
                let newTaskId = "Id" + taskIndex

                let newTask = '<div class="task-item-container">' +
                    '<span class="task-item">' + currentTaskValue + '</span>' +
                    '<button onclick="deleteTask(\'' +
                    newTaskId +
                    '\')">' +
                    'Delete' +
                    '</button>' +
                    '</div>'

                list[newTaskId] = newTask
                taskIndex++
            }
       
            document.getElementById('newTask').value = ""

            updateList()
    }

    // Delete Todo
    let deleteTask = (taskIndex) => {
        delete list[taskIndex]

        updateList()
    }

    let updateList = () => {
        let listString = ""

        Object.entries(list).forEach(([key, value]) => {
            listString += value
        })

        taskBoard.innerHTML = listString
    }