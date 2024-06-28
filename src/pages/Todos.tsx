import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";


const Todos = () => {
    return (
        <Container>
            <h1 className="text-center text-4xl py-10 font-semibold">My Tasks</h1>
            <TodoContainer />
        </Container>
    );
};

export default Todos;