<template>
  <div>
    <div class="floor">
      <div class="floorTitle">{{floorName}}</div>
      <div class="floor1">
        <div class="floor1-0">
          <img :src="floorData0.image">
        </div>
        <div class="floor1_1">
          <div>
            <img :src="floorData1.image">
          </div>
          <div>
            <img :src="floorData2.image">
          </div>
        </div>
      </div>
      <div class="floors">
        <div v-for="(item,index) in floorData.slice(3)" :key="index">
          <img :src="item.image" width="100%">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "floor",
    props: ["floorData","floorName"],
    data() {
      return {
        floorData0: {},
        floorData1: {},
        floorData2: {},
      }
    },
    watch: {
      floorData(val) {
        this.floorData0 = this.floorData[0];
        this.floorData1 = this.floorData[1];
        this.floorData2 = this.floorData[2];
      }
    }
  }
</script>

<style scoped lang="less">
  .floorTitle{
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin: 0.1rem 0;
  }
  .floor1 {
    background-color: #fff;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: row;
    img {
      width: 100%
    }
    .floor1-0 {
      width: 9rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .floor1-1 {
      width: 60%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      div {
        height: 50%;
        height: 50%;
      }
    }

  }

  .floors {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    div {
      width: 3.2rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    div:nth-child(odd) {
      border-right: 1px solid #eee;
    }
  }
</style>
