import {Spinner, List} from '@chakra-ui/react'
import { TodoType } from '../types/todo'
import { TodoItem } from './TodoItem'
import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../services/todos-service'

const TodoList = ()=>{

const {data, isLoading, isSuccess} = useQuery<TodoType[]>({
   queryKey:['todo','all'],
   queryFn:() => fetchTodos('all')
})

if(isLoading){
   return (
    <Spinner 
      thickness='4px'
      speed='1s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
   )
};

 return (
    <List>
        {isSuccess && data.map((todo)=>(
         <TodoItem key={todo.id} {...todo}/>
        ))}
    </List>
 )
}

export {TodoList}