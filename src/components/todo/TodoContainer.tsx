import EmptyCard from "./EmptyCard";
import { useAppSelector } from "@/redux/hook";
import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
    const { todos } = useAppSelector((state) => state.todo);

    return (
        <div>
            <div className="flex justify-between mb-4 ">
                <AddTodoModal />
                <TodoFilter />
            </div>

            <div className="bg-primary-gradient w-full h-full rounded-md shadow-lg p-[5px]">
                <div className="bg-white p-5 w-full h-full rounded-md space-y-3 ">
                    {
                        todos.length > 0 ? todos.map((item) => (
                            <TodoCard item={item} />
                        )) : <EmptyCard />
                    }
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;