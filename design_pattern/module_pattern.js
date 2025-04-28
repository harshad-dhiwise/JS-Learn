const calculatorModule = (function () {
    let result = 0;

    function add(num) {
        result += num;
    }

    function subt(num) {
        result -= num;
    }

    return {
        add,
        subt,
        getResult() {
            return result;
        },
        reset() {
            result = 0;
        }
    }
})();

calculatorModule.add(8);

calculatorModule.subt(5);

console.log(calculatorModule.getResult());



/// Task 1: Implement a Module Pattern
/// Create a simple module for managing a to-do list.

const todo = (
    function () {
        let listOfAllTask = [];

        function addATask(task) {
            listOfAllTask = [...listOfAllTask, task];
        }

        function removeATaskByIndex(index) {
            listOfAllTask.splice(index, index);
        }

        return {
            addATask,
            removeATaskByIndex,
            showList() {
                return listOfAllTask;
            }
        };
    }
)();

todo.addATask("hello");
todo.addATask("world");
todo.addATask("good");

todo.removeATaskByIndex(1);

console.log(todo.showList());