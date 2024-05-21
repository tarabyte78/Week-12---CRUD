const TASKS_URL = 'http://localhost:3000/workTasks'

// CREATE //function
$.get(TASKS_URL).then((data) =>
    data.map((workTasks) => {
        $("tbody").append(
        $(`
            <tr>
                <td>${workTasks.id}</td>
                <td>${workTasks.taskName}</td>
                <td>${workTasks.taskDescription}</td>
                <td>
                    <button onclick="deleteTask(${workTasks.id})">Delete</button>
                </td>
            </tr>`)
        )
      })
    )


// ADD NEW //

$("#submitworkTask").on("click", function(e) {
    e.preventDefault();
    console.log("Ran the post")
    let newTask = {
    //   taskId: $("#taskId").val(),
      taskName: $("#taskName").val(),
      taskDescription: $("#taskDescription").val(),
    };
    $.post(TASKS_URL, newTask)
})


// DELETE //
function deleteTask(taskId) {
    $.ajax(`${TASKS_URL}/${taskId}`, {
        type: 'DELETE',
    })
}

// UPDATE //
$("#update").on("click", function(e) {
    e.preventDefault();
    let id = $("#currentTaskId").val();
    $.ajax(`${TASKS_URL}/${id}`, {
        method: 'PUT',
        data: {
            taskName: $('#newTaskName').val(),
            taskDescription: $('#newTaskDescription').val(),
        },
    })
});