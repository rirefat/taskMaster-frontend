import EmptyCard from "./EmptyCard";
// import { useAppSelector } from "@/redux/hook";
import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

type TItem = {
    _id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    priority: string;
}

const TodoContainer = () => {
    const [priority, setPriority] = useState('');
    
    // getting data from local state
    // const { todos } = useAppSelector((state) => state.todo);

    // getting data from server
    const { data: todos, isLoading } = useGetTodosQuery(priority);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <div className="flex justify-between mb-4 ">
                <AddTodoModal/>
                <TodoFilter priority={priority} setPriority={setPriority} />
            </div>

            <div className="bg-primary-gradient w-full h-full rounded-md shadow-lg p-[5px]">
                <div className="bg-white p-5 w-full h-full rounded-md space-y-3 ">
                    {
                        todos?.data?.length > 0 ? todos?.data?.map((item: TItem) => (
                            <TodoCard key={item._id} item={item} />
                        )) : <EmptyCard />
                    }
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;