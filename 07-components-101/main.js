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