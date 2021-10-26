const app = Vue.createApp({
    data() {
        return {
            courseGoal:  'Finish this course and be an expert !',
            vueLink: 'https://vuejs.org/',
            courseGoalA: 'Finish this course and be an expert !',
            courseGoalB: 'Master Vue and build amazing things !'
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
        },
        varyGoals() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoalA;
            }
            else {
                return this.courseGoalB;
            }
        }

    },
});
app.mount('#user-goal');