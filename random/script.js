Vue.component ('task-list', {
  template: `
    <ul>
      <task v-for="task in tasks">{{ task.description }}</task>
    </ul>
  `,

  data() {
    return {
      tasks: [
        { description: 'Wake up', completed: true },
        { description: 'Brush teeth', completed: true },
        { description: 'Go to work', completed: true },
        { description: 'Go back home', completed: false }
      ]
    };
  }
})

Vue.component ('task', {
  template: '<li><slot></slot></li>'
})

new Vue({
  el: '#app',
  data: {
    newName: '',
    names: ['Bob', 'Jane', 'Bill', 'Mary'],
    isLoading: false,
    message: "This is a message"
  },

  methods: {
    addName() {
      this.names.push(this.newName);
      this.newName = '';
    },
    toggleClass() {
      this.isLoading = true;
    }
  },

  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  }
})
