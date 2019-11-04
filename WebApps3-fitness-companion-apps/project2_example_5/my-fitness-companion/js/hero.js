const hero = new Vue({
    el: "#hero",
    data: {
        workout: [{
            workoutName: [1,2,3],
            workoutDetail: ['a','b','c'],
            training: [{
                excercise: ['ab','ac','ad','ae'],
                wramUp: ['ab','ac','ad','ae'],
                workingSet: ['ab','ac','ad','ae'],
                restPeriod: ['ab','ac','ad','ae'],
            }]
        }],
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
            console.log(workout.workoutName )
            this.workout.workoutName = data.map(a => a.title)
        })
        .catch((error) => console.log(error))
    }
})