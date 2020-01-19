Vue.component('task-list', {

    template: '<ul><task v-for="task in tasks">{{ task.task }}</task></ul>',

    data() {

        return {

            tasks: [
                { task: 'Go to the store', complete: true },
                { task: 'Go to the station', complete: false },
                { task: 'Go to the farm', complete: true },
                { task: 'Go to work', complete: false },
            ]

        };

    }

});

Vue.component('task', {

    template: '<li><slot></slot></li>',

});

// Create a Vue instance.
// Use the variable 'app' to easily call the global scope with the Devtools tab Vue.
var app = new Vue({

    // Mount vue on this element.
    el: '#root',

    // The data model with a property
    data: {

    },

})