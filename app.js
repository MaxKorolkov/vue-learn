new Vue({
    el: '#vue-app',
    data: {
        name: 'Max',
        job: 'programmer',
        website: 'https://github.com/MaxKorolkov',
        websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>'
    },
    methods: {
        greet: function (time) {
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
