new Vue({
    el: '#vue-app',
    data: {
        name: 'Max',
        job: 'programmer'
    },
    methods: {
        greet: function (time) {
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
