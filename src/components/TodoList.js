import React from 'react/addons'
import { Container, Row, ListGroup } from 'react-bootstrap'
import TodoListStore from '../stores/TodoList'
import TodoListTask from '../components/TodoListTask'

class TodoList extends React.Component {
    constructor(props){
        super(props)

        let { shouldComponentUpdate } = React.addons.PureRenderMixin

        this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
        this.state = { tasks: TodoListStore.getState() }
        this.listChanged = this.listChanged.bind(this)
    }

    componentDidMount() {
        TodoListStore.listen(this.listChanged)
    }

    componentWillUnmount() {
        TodoListStore.unlisten(this.listChanged)
    }

    listChanged(taskList) {
        this.setState({ tasks: taskList })
    }

    render() {
        let { tasks } = this.state

        return (
            <Container>
                <Row fluid={true}>
                    <h1>Tasks:</h1>
                    <ListGroup>
                        {tasks.map(task => {
                            <TodoListTask key={task.get('id')} task={task}/>}).toJS()}
                    </ListGroup>
                </Row>
            </Container>
        )
    }
}

export default TodoList