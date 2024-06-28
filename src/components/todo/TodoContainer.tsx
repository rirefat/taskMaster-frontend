// import EmptyCard from "./EmptyCard";

import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
    return (
        <div>
            <div className="flex justify-between mb-4 ">
                <AddTodoModal/>
                <span className="text-xl">Filter</span>
                <TodoFilter/>
            </div>

            <div className="bg-primary-gradient w-full h-full rounded-md shadow-lg p-[5px]">
                <div className="bg-white p-5 w-full h-full rounded-md space-y-3 ">
                    <TodoCard />
                    <TodoCard />
                    {/* <EmptyCard/> */}
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;