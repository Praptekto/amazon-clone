import axios from 'axios';

const instance=axios.create({
    baseURL:'http://localhost:5001/prap-clone/us-central1/api' //this is where the API URL
    //kita dapat saat setelah firebase emulators:start

})

export default instance;