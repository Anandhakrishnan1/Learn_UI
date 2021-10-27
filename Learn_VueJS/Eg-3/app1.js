const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name : '',
        confirmedName : ''
      };
    },
    methods: {
      addCounter(num) {
        this.counter = this.counter + num;
      },
      reduceCounter(num) {
        this.counter = this.counter - num;
      },
      setName(event) {
        this.name = event.target.value;
      },
      submitForm() {
        alert('submitted !');
      },
      confirmName() {
        this.confirmedName = this.name;
      }
    },
  });
  
  app.mount('#events');
  