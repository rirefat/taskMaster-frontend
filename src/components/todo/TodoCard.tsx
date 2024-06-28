

const TodoCard = () => {
    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3">
            <input type="checkbox" name="" id="" />
            <p className="font-semibold">Task title</p>
            <p>time</p>
            <p>desc</p>

            <div className="space-x-5">
                <button>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    );
};

export default TodoCard;