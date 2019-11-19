const tasks = {
    tasks: [{
            language: 'C++',
            completed: false
        },
        {
            language: 'Python',

            completed: true
        },
        {
            language: 'Javascript',
            completed: true
        }
    ],
    getTasksToDo() {
        return this.tasks.filter((tasks) => tasks.completed === false)
    }
}
console.log(tasks.getTasksToDo())