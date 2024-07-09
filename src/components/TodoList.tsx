import {Spinner, List} from '@chakra-ui/react'
import { TodoType } from '../types/todo'
import { TodoItem } from './TodoItem'
import { useTodoList } from '../hooks/useTodoList'

const TodoList = () => {

const {data,isLoading,isSuccess} = useTodoList()

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
        {isSuccess && data?.map((todo:TodoType)=>(
         <TodoItem key={todo.id} {...todo}/>
        ))}
    </List>
 )
}

export {TodoList}