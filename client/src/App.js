import Tasks from './Tasks';
import { Paper, TextField, Button, Checkbox  } from '@mui/material';
//import {} from @mui/material;
import './App.css';

class App extends Tasks {
  state = {tasks: [], currentTask:""};

  render() {
    const {tasks} = this.state;
      return(
        <div className="App flex">
          <Paper elevation={3} className="container">

              <div className="heading"> TO-DO</div>

              <form 
                onSubmit={this.handleSubmit}
                className="flex"
                style={{margin: "15px 0"}}
                >

                <TextField 
                variant="outlined"
                size="small"
                style={{width: "80px"}}
                value={this.state.currentTask}
                required={true}
                onChange={this.handleChange}
                placeholder="Add new task..."
                />
                <Button 
                style={{height: "40px"}}
                color="primary"
                variant="outlined"
                type="submit"
                >
                  Add task
                </Button>

              </form>

              <div>
                {tasks.map((task) => (
                  <Paper key={task.id} className="flex task_container">

                      <Checkbox 
                      checked={task.completed}
                        onClick={()=>this.handleUpdate(task._id)}
                        color="primary"
                      />

                      <div 
                      className={task.completed? 'task line_trough' : 'task'}
                      >
                      {tasks.task}
                      </div>
                      <Button
                      onClick={()=>this.handleDelte(task._id)}
                      color="secondary"
                      >
                        delete
                      </Button>
                  </Paper>
                
                ))}
              </div>


          </Paper>
        </div>
      ); 
    }
}

export default  App;

