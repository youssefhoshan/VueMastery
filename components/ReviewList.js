app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="review-container">
  <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        The boss: {{ review.name }} gave this {{ review.rating }} stars <br/> and said: 
        <br/>
        "{{ review.review }}"
        <br/>
        Recommends this awesome product?: {{ review.recommend }}
      </li>
    </ul>
  </div>
`
})