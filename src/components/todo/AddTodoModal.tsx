import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAddTodosMutation } from "@/redux/api/api"
// import { addTodo } from "@/redux/features/todoSlice"
// import { useAppDispatch } from "@/redux/hook"
import { FormEvent, useState } from "react"

export function AddTodoModal() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  // For local state management
  // const dispatch = useAppDispatch();

  // for server
  // const [addTodo, object] = useAddTodosMutation();  
  // const { isLoading, isError, isSuccess } = object;
  const [addTodo] = useAddTodosMutation();

  const addTask = (event: FormEvent) => {
    event.preventDefault();

    // for local state management
    // dispatch(addTodo({ id, title, description })) 

    // for server
    console.log({ title, description, priority, isCompleted: false });
    addTodo({ title, description, priority, isCompleted: false })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl text-black">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Write your tasks that you want to complete
          </DialogDescription>
        </DialogHeader>

        {/* Todo form */}
        <form onSubmit={addTask}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right"> Title </Label>
              <Input
                onBlur={(event) => setTitle(event.target.value)}
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Description</Label>
              <Input
                onBlur={(event) => setDescription(event.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">Priority</Label>
              {/* <Input id="priority" className="col-span-3" /> */}
              <select onChange={(event) => setPriority(event.target.value)} name="priority" id="priority" className="col-span-3 border p-2 rounded-md" >
                <option value="">Set Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" className="space-x-1">
                <span>Add Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
