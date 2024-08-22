export default {
    template: `
      <section v-show="inProgressAssignments.length">
        <h2 class="font-bold mb-2">In progress</h2>
        <ul>
          <li v-for="assignment in inProgressAssignments" :key="assignment.id">
            <label>
              {{ assignment.name }}
              <input type="checkbox" v-model="assignment.complete">
            </label>
          </li>
        </ul>
      </section>

      <section v-show="completedAssignments.length" class="mt-8">
        <h2 class="font-bold mb-2">Completed</h2>
        <ul>
          <li v-for="assignment in completedAssignments" :key="assignment.id">
            <label>
              {{ assignment.name }}
              <input type="checkbox" v-model="assignment.complete">
            </label>
          </li>

        </ul>
      </section>
    `,
    data() {
        return {
            assignments: [
                {id: 1, name: 'Finish Homework', complete: false},
                {id: 2, name: 'Read book', complete: false},
                {id: 3, name: 'Turn in Homework', complete: false}
            ]
        }
    },
    computed: {
        inProgressAssignments() {
            return this.assignments.filter(a => !a.complete)
        },
        completedAssignments() {
            return this.assignments.filter(a => a.complete)
        }
    }

}
