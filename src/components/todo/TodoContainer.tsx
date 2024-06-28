// import EmptyCard from "./EmptyCard";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
    return (
        <div>
            <div>
                <button>Add Task</button>
                <button>Filter</button>
            </div>

            <div className="bg-red-300 p-2 w-full h-full rounded-md space-y-3 shadow-lg">
                <TodoCard/>
                <TodoCard/>
                {/* <EmptyCard/> */}
            </div>
        </div>
    );
};

export default TodoContainer;