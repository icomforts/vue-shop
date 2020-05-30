<template>
  <div class="dashboard">
    <!-- 大略卡片欄位 -->
    <div class="stretched wide column">
      <div class="ts three cards">
        <!-- 本月拜訪次數 -->
        <div class="ts card">
          <div class="content">
            <!-- 統計數據 -->
            <div class="label">本月拜訪次數</div>
            <div class="ts left  aligned statistic">
              <div class="value">
                42,689
                <div class="increment">32</div>
              </div>
            </div>
            <!-- / 統計數據 -->
          </div>
          <div class="symbol">
            <i class="eye icon"></i>
          </div>
        </div>
        <!-- / 本月拜訪次數 -->

        <!-- 總會員數 -->
        <div class="ts card">
          <div class="content">
            <!-- 統計數據 -->
            <div class="label">購物情形</div>
            <div class="ts left  aligned statistic">
              <div class="value">
                8,652
                <div class="increment">351</div>
              </div>
            </div>
            <!-- / 統計數據 -->
          </div>
          <div class="symbol">
            <i class="currency icon"></i>
          </div>
        </div>
        <!-- / 總會員數 -->

        <!-- 平均在線分鐘數 -->
        <div class="ts card">
          <div class="content">
            <!-- 統計數據 -->
            <div class="label">平均在線分鐘數</div>
            <div class="ts left  aligned statistic">
              <div class="value">
                3
                <div class="decrement">14</div>
              </div>
            </div>
            <!-- / 統計數據 -->
          </div>
          <div class="symbol">
            <i class="time icon"></i>
          </div>
        </div>
        <!-- / 平均在線分鐘數 -->
      </div>

      <!-- 區隔線 -->
      <div class="ts section divider"></div>
      <!-- / 區隔線 -->
    </div>
    <!-- / 大略卡片欄位 -->
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    msg: String,
  },
};
</script>
//

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dashboard {
  width: 100%;
}
.ts.card {
  height: 50vh;
  .ts.left.aligned.statistic {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .value {
      font-size: 4rem !important;
    }
    .increment {
      color: green;
    }
    .decrement {
      color: red;
      font-size: 2rem;
    }
  }
  .label {
    position: absolute;
    font-size: 2rem;
  }
  .icon {
    font-size: 18em;
  }
}
</style>
