import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//Models
import { Task } from '../../models/task,class.js';
import { LEVELS } from '../../models/levels.enum.js';

//Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';



const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Created Task');
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);


    /**
     * Function that returns a Badge 
     * depending on the level of the task
     */

    function taskLevelBadge(){
        switch (task.level){
            case LEVELS.NORMAL:
                return(<h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                </h6>)
            case LEVELS.URGENT:
                return(<h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                </h6>)
            case LEVELS.BLOCKING:
                return(<h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                </h6>)
            default:
                break;
        }
    }

        /**
         * Function that returns icon depending on completion of the task 
         */
        function taskCompletedIcon(){
            if(task.completed){
                return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color:'green'}}></i>)
            }else {
                return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color:'grey'}}></i>)
            }
        }

        
        const taskCompleted = {
            color: 'gray',
            fontWeight: 'bold',
            textDecoration: 'line-through',
        }

        const taskPending = {
            color: 'tomato',
            fontWeight: 'bold',
        }


    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
                {/* Execution of function to return badge element */}
            {/* TODO: Sustituir por un badge */}
                { /*<span>{task.level}</span> */ }
            </td>
            <td className='align-middle'>
            {/* Execution of function to return icon depending on completion */}
            {taskCompletedIcon()}
            {/* TODO: Sustituir por Iconos */}

            { /*{ task.completed ?
                (<i className='bi-toggle-on' style={{color:'green'}}></i>)
                :
                (<i className='bi-toggle-off' style={{color:'grey'}}></i>)
            } */}
            <i className='bi-trash task-action' style={{ color:'tomato' }} onClick={() => remove(task)}></i>
                {/* <span>{task.completed ? 'Completed' : 'Pending'}</span> */}
            </td>
        </tr>



        //<div>
        //<h2 className='task-name'>
        //    Nombre: { task.name }
        //</h2>
        //<h3>
        //    Descripción: { task.description }
        //</h3>
        //<h4>
        //    Level: { task.level }
        //</h4>
        //<h5>
         //   This task is: { task.completed ? 'COMPLETED':'PENDING' }
        //</h5>
            
        //</div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
