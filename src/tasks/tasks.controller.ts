import { Controller, Get } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
	// Injecting the tasks service into the controller through the constructor.
	// Leaving the constructor body empty and prefixing the prop with 'private' or 'public' is Ts syntactic sugar. So you don't have to write the long version with declaring the variable type and the use 'this. ..' key word and calling the prop from the constructor with 'this. ...' again where you need it below.
	constructor(private tasksService: TasksService) { }
	
	@Get()
		// Returns an array of type Task
		getAllTasks(): Task[] { 
			return this.tasksService.getAllTasks();
		}
	
}
