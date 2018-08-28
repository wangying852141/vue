import axios from 'axios';

export default {
  data() {
    return {
      data: ''
    }
  },
  methods: {
    getDataSuccess(res) {
      const {data} = res
      this.data = data[0]
    },
    getDataFail(err) {
      console.log(err)
    }
  },
  mounted () {
//  const {id} = this.$route.params;
     const {id} = this.$route.query;
    axios.get("http://localhost:3030/api/getbookDetail?id=" + id)
      .then(this.getDataSuccess)
      .catch(this.getDataFail)
  }
  
}