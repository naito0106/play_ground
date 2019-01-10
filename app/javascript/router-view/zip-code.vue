<template>
  <div id="zip-code">
    <div class="contents">
      <p @click='test()'>zip</p>
      {{ $store.state.moduleZipCode.data.message}}
      <input class="input-zip-code" v-model="zipCode"><button @click="PromiseAddress">住所を取得</button>
      <p>{{ this.address }}</p>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'zip-code',
    data(){
      return {
        zipCode: '',
        address: 'test',
        message: 'message'
      }
    },
    methods: {
      test(){
        this.$store.state.moduleZipCode.data.message = 'testメソッド発動';
      },
      getAddress(zipCode) {
        return new Promise( function (resolve, reject) {
          axios.get('https://api.zipaddress.net/', {
            params: {
              zipcode: zipCode
            }
          }).then(res => {
            if(res.data.code === 200){
              resolve(res.data.data.fullAddress);
            } else {
              reject(new Error(res.data.message));
            }
          });
        });
      },
       PromiseAddress(){
        let zipCode = this.zipCode;
        let tmp = '';
        this.getAddress(zipCode).then(function onFulfilled(value){
          //this.addressがなぜか認識されない
          console.log(value)
        }).catch( function onRejected(error){
          console.error(error);

        })
      }
    }
  };
</script>

<style scoped>
#zip-code {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
}  
.contents {
  background-color: gray;

  width: 500px;
  height: 400px;
}
</style>