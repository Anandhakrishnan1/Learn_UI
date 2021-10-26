const app = Vue.createApp({
    data() {
        return {
            courseGoal:  'Finish this course and be an expert !',
            vueLink: 'https://vuejs.org/'
        };
    }
});
app.mount('#user-goal');