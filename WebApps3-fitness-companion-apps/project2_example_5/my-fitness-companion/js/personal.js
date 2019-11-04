const personal = new Vue({
    el: "#personal",
    data: {
        workout: [],
        add: '',
    },
    methods: {
        addNewWorkout: function() {
            // this.workout.push(this.add)
            // this.add = ''
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title: this.add})
            })
            .then(response => response.json())
            .then((data) => {
                this.workout.push(data.title)
            })

            this.add = ''
        }
    },
    mounted() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then((data) => {
            // console.log(data)
            this.workout = data.map(a => a.title)
        })
    }
})