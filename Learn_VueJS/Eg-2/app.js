const app = Vue.createApp({
    data() {
        return {
            courseGoal:  'Finish this course and be an expert !',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return 'learn Vue!';
            }
            else {
                return 'master Vue!';
            }
        }
    },

});
app.mount('#user-goal');