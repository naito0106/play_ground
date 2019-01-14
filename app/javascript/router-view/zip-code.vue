<template>
  <div id="zip-code">
    <div class="contents">
       <h3>郵便番号から住所を取得</h3>
      <input class="input-zip-code" v-model="zipCode"><button @click="fetchAddress">住所を取得</button>
      <input class="input-address" v-model="address" placeholder="住所1">
      <input class="input-address" placeholder="住所2">
      <div class="link-blog">
        <a href="https://naito-coding0322.hatenablog.com/entry/2019/01/11/163242">ブログ：Promiseの基本</a>
      </div>
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
        address: ''
      }
    },
    methods: {
      getZipAddressApi(zipCode) {
        return new Promise( function (resolve, reject) {
          axios.get('https://api.zipaddress.net/', {
            params: {
              zipcode: zipCode
            }
          })
            // axiosはリクエストが失敗しない限りFulfilledを返す
            .then(function (res) {
              // なのでJSON内のステータスコードで分岐
              if(res.data.code === 200){
                resolve(res.data.data.fullAddress);
              } else {
                reject(new Error(res.data.message));
              }
            });
        });
      },
      fetchAddress(){
        let zipCode = this.zipCode;
        this.getZipAddressApi(zipCode)
          // 成功時の処理
          .then(value =>{
            this.address = value;
          })
          // 失敗時の処理
          .catch(error =>{
            this.address = '取得に失敗しました'
          })
      },
    }
  };
</script>

<style>
#zip-code {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
}  
.contents {
  padding: 30px;
  box-sizing: border-box;
  background-color: gray;
  float: none;
  width: 500px;
  height: 400px;
}
.input-address {
  width: 350px;
}
input {
  margin: 5px;
}
h3 {
  margin: 0 0 10px 0 ;
  color: white;
}
.link-blog {
 width: 300px;
 margin-top: 15px;
}
</style>