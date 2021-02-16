<template>
  <table class="table-container">
    <!-- 每页固定头部 -->
    <thead class="table-header">
      <tr class="table-row">
        <th class="table-row-item">
          <div class="page-header-wrapper">
            <header class="page-header">
              <!-- 左边 -->
              <div class="left">
                <div class="logo-wrapper">
                  <img class="logo" src="@/assets/images/logo.svg" alt="logo" />
                  <div class="user-name">页头</div>
                </div>
              </div>
            </header>
            <!-- 每页之前用来占位的div -->
            <placeholder :height="30" />
          </div>
        </th>
      </tr>
    </thead>

    <!-- 包裹段落容器 -->
    <tbody class="table-body">
      <tr class="table-row">
        <td class="table-row-item">
          <placeholder :height="10" />

          <div class="question-container">
            <div class="page-title">{{ query.title }}</div>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>
            <p>段落</p>

            <placeholder :height="36" />
          </div>
        </td>
      </tr>
    </tbody>

    <!-- 每页固定尾部 -->
    <tfoot class="table-footer">
      <tr class="table-row">
        <td class="table-row-item">
          <placeholder :height="70" />

          <!-- <div class="page-footer">页尾</div> -->
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  created() {
    this.init()
  },
  data() {
    return {
      query: {
        title: '生成分页pdf'
      }
    }
  },
  computed: {
    params() {
      return this.$store.state.params
    }
  },
  methods: {
    init() {
      // this.query = this.params
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
.table-container {
  img {
    // page-break-inside: avoid;
    max-width: 100%;
    max-height: 100%;
  }
  .question-view {
    line-height: 1.4;
    word-break: break-all;
    font-size: 17px;
    color: #000;
    font-family: SimSun;
    .spotted {
      text-emphasis: circle #333;
      text-emphasis-position: under left;
      -webkit-text-emphasis: circle #333;
      -webkit-text-emphasis-position: under;
    }
  }
}
</style>

<style lang="scss" scoped>
.table-container {
  box-sizing: border-box;
  page-break-after: auto;
  page-break-inside: auto;
  width: 690px;
  border-collapse: collapse;
}
// .table-header {
//   display: table-header-group;
// }
// .table-footer {
//   display: table-footer-group;
// }
.table-header,
.table-body,
.table-footer,
.table-row,
.table-row-item {
  width: 100%;
  margin: 0;
}

.page-header-wrapper {
  width: 100%;
}

.page-header {
  width: 100%;
  height: 94px;
  border-bottom: 2px solid #f0f0f0;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 5px;
  .left {
    transform: translateY(-5px);
  }
  .logo-wrapper {
    display: flex;
    align-items: flex-end;
  }
  .logo {
    width: 100px;
    height: 26px;
  }
  .user-name {
    height: 26px;
    margin-left: 11px;
    font-family: SimHei;
    font-size: 20px;
    color: #4d4d4d;
    display: flex;
    align-items: flex-end;
    transform: translateY(3px);
  }
}

.footer-placeholder {
  width: 100%;
  height: 10px;
}

.page-footer {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  font-size: 16px;
  color: #4d4d4d;
  font-family: SimSun;
  .motto {
    transform: translateY(15px);
  }
}
</style>
