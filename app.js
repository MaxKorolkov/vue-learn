new Vue({
    el: '#vue-app',
    data: {
        name: 'Max',
        job: 'programmer',
        website: 'https://github.com/MaxKorolkov',
        websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>',
        age: 1,
        test2: 10
    },
    methods: {

    },
    computed: {
        testMethod: function () {
            return this.age + this.test2;
        }
    }
});
