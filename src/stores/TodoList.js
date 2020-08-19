import ImmutableStore from 'alt/utils/ImmutableUtil'
import { List } from 'immutable'

import AltInstance from 'lib/AltInstance'
import Actions from 'actions/TodoList'

class TodoListStore {
   constructor() {
       let { addTask, removeTask } = Actions

       this.bindListeners({
        add: addTask,
        remove: removeTask
    })

    this.state = List()
   }
}