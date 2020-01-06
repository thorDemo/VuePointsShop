<template>
  <div class="main-wrap VIP-contain">
    <div>
      <img src="../../assets/images/VIP/VIP-T.png" alt="">
    </div>
    <div class="level-welfare-wrap">
      <el-row>
        <el-tabs type="border-card">
          <el-tab-pane label="普通">
            <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/pt.png" alt=""> <p class="VipTop-level-text">普通</p></span>
            <div class="vip-level-wrap">
              <ul>
                <li>
                  <div>
                    <img src="../../assets/images/VIP/hg.png" alt="">
                  </div>
                  <p>晋级礼金暂无</p>
                </li>
                <li>
                  <div>
                    <img src="../../assets/images/VIP/dg.png" alt="">
                  </div>
                  <p>生日礼金暂无</p>
                </li>
                <li>
                  <div>
                    <img src="../../assets/images/VIP/QQ.png" alt="">
                  </div>
                  <p>QQ客服</p>
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <img src="../../assets/images/VIP/jb.png" alt="">
                  </div>
                  <p>每月免费筹码暂无</p>
                </li>
                <li>
                  <div>
                    <img src="../../assets/images/VIP/sc.png" alt="">
                  </div>
                  <p>积分商城折扣暂无</p>
                </li>
                <li>
                  <div>
                    <img src="../../assets/images/VIP/yhk.png" alt="">
                  </div>
                  <p>单日提款额度<br>限免3次</p>
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <img src="../../assets/images/VIP/qd.png" alt="">
                  </div>
                  <p>VIP救援金暂无</p>
                </li>
                <li>
                  <div>
                    <img src="../../assets/images/VIP/yhbq.png" alt="">
                  </div>
                  <p>存款15%<br>最高需15倍流水</p>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="黄金">
            <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/hj.png" alt=""> <p class="VipTop-level-text">黄金</p></span>
          </el-tab-pane>
          <el-tab-pane label="铂金">
            <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/bj.png" alt=""> <p class="VipTop-level-text">铂金</p></span>
          </el-tab-pane>
          <el-tab-pane label="钻石">
            <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/zs.png" alt=""> <p class="VipTop-level-text">钻石</p></span>
          </el-tab-pane>
          <el-tab-pane label="至尊">
            <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/zz.png" alt=""> <p class="VipTop-level-text">至尊</p></span>
          </el-tab-pane>
          <el-tab-pane label="王者">
            <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/wz.png" alt=""> <p class="VipTop-level-text">王者</p></span>
          </el-tab-pane>
          <el-tab-pane label="特邀">
            <span slot="label"><img class="VipTop-level-sign" src="../../assets/images/VIP/ty.png" alt=""> <p class="VipTop-level-text">特邀</p></span>
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </div>
    <div class="level-require-wrap">
      <p class="Vip-level-T">VIP晋级要求</p>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="level"
          label="会员等级"
          width="100%">
          <!-- <template scope="scope">
            <img v-for="item in scope.row.pictures" :key="item" :src="item" width="40" height="40" class="head_pic"/>
          </template> -->
        </el-table-column>
        <el-table-column
          prop="detail"
          label="晋级条件">
        </el-table-column>
      </el-table>
      <p class="Vip-level-tips">注意事项：1、晋级条件二选一；2、维持当前等级，需完成当月最高流水的10%。</p>
    </div>
    <div class="level-rules-wrap">
      <span>VIP晋级规则</span>
      <p>1、每个月1号前系统自动审核进行升级，系统会以晋级条件中的 1、2 择一来进行升级。</p>
      <p>2、1 号 0:00至最后一天 23:59:59 截止（美东时间）。</p>
      <p>3、玩家达到条件后可以登陆宝马会娱乐城官网的“联系7x24在线客服”进行申请。为避免套利和非正常投注的玩家,投注额为申请条件之一，其次需要经过相关部门综合审核后，给予晋级并派发晋级礼金。（每月3号申领）</p>
      <p>4、维持当前等级需要上月的流水达到当前等级晋级流水的10%，否则系统会在下一个月一号自动降低一级。每个等级晋级礼只能享受一次。</p>
      <p>5、VIP至尊会员等级以上 月结亏损20万以上，即可获得相应等级的VIP救援金，最高88888 1倍流水。（每月5号申领）</p>
      <p>6、每月免费筹码需当月3号之后的任意一天单笔存款200元，一倍流水即可提款。若当月份未进行存款视同放弃，不做补发。</p>
      <p>7、所有VIP会员享受的优惠按照系统自动晋级时的等级为准来派发，若有相关活动疑问请及时联系专属客服服务。</p>
      <p>8、因为需要审核数据，每月4号以后可以申请VIP生日礼金。节假日顺延。</p>
      <p>9、宝马会娱乐拥有最终解释权和裁决权！</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      tableData: [{
        level: '黄金会员',
        detail: '1、单月(全部平台)总投注额50w' + '\n' + '2、单月(全部老虎机)平台总投注额20w'
      }, {
        level: '铂金会员',
        detail: '1、单月(全部平台)总投注额200w' + '\n' + '2、单月(全部老虎机)平台总投注额120w'
      }, {
        level: '钻石会员',
        detail: '1、单月(全部平台)总投注额500w' + '\n' + '2、单月(全部老虎机)平台总投注额300w'
      }, {
        level: '至尊会员',
        detail: '1、单月(全部平台)总投注额800w' + '\n' + '2、单月(全部老虎机)平台总投注额500w'
      }, {
        level: '王者会员',
        detail: '1、单月(全部平台)总投注额1000w' + '\n' + '2、单月(全部老虎机)平台总投注额600w'
      }, {
        level: '特邀会员',
        detail: '1、平台邀请' + '\n' + '2、客户经理推荐'
      }],
      row: [{
        picture: '../../assets/images/VIP/pt.png'
      }]
    }
  }
}
</script>
<style>
.el-table .cell {
  white-space: pre-line;
  font-size: .5em
}
.el-table--border{
  border: 0
}
.el-table td, .el-table th.is-leaf,.el-table--border, .el-table--group{
  border-color: #343947;
  background: #292C35;
  color: #cccccc
}
.el-table td, .el-table th{
  height: 58px;
  padding: 0
}
.el-table th{
  font-weight: normal;
  text-align: center;
  color: #ffffff !important;
}
.el-table td:first-child{
  text-align: center;
  padding-left: 0.8rem;
}
.el-table::before{
  background: transparent
}
.el-table--enable-row-hover .el-table__body tr:hover>td{
  background: #292C35
}
.el-table--border tr:first-child td:first-child .cell{
  padding-left: 20px;
  background: url(../../assets/images/VIP/pt.png) no-repeat;
}
.el-table--border tr:nth-child(2) td:first-child .cell{
  padding-left: 20px;
  background: url(../../assets/images/VIP/hj.png) no-repeat;
}
.el-table--border tr:nth-child(3) td:first-child .cell{
  padding-left: 20px;
  background: url(../../assets/images/VIP/bj.png) no-repeat;
}
.el-table--border tr:nth-child(4) td:first-child .cell{
  padding-left: 20px;
  background: url(../../assets/images/VIP/zs.png) no-repeat;
}
.el-table--border tr:nth-child(5) td:first-child .cell{
  padding-left: 20px;
  background: url(../../assets/images/VIP/zz.png) no-repeat;
}
.el-table--border tr:nth-child(6) td:first-child .cell{
  padding-left: 20px;
  background: url(../../assets/images/VIP/wz.png) no-repeat;
}
.el-table--border tr:nth-child(7) td:first-child .cell{
  padding-left: 20px;
  background: url(../../assets/images/VIP/ty.png) no-repeat;
}
.el-tabs__nav,.el-tabs__nav-wrap{
  width: 100%
}
.el-tabs--border-card{
  border: 0;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item{
  border: 0;
  font-size: .8rem;
}
.el-tabs--border-card>.el-tabs__header{
  padding: 10px 3.65% 0;
  background: #151515
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{
  color: #ffffff;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  height: 39px;
  color: #ffffff;
  background: #292C35;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item{
  color: #666666;
}
.el-tabs__nav-wrap.is-scrollable{
  padding: 0 20px;
  box-sizing: border-box;
}
.el-tabs--border-card{
  box-shadow: 0 0 0 0 rgb(0, 0, 0, 0)
}
.el-tabs--border-card>.el-tabs__content {
  margin-top: -2px;
  background: #292C35;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item,.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child{
  padding: 2px 4.1% 0;
  height: 62px;
  vertical-align: bottom;
}
@media screen and (max-width: 360px) {
  .el-tabs--border-card>.el-tabs__header .el-tabs__item,.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child{
  padding: 2px 3.5% 0;
  height: 62px;
  vertical-align: bottom;
}
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  height: 62px;
}
</style>
