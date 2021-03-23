<template>
  <div class="Committed">
    <!-- 审核状态 -->
    <div class="message-status">
      <img
        class="status-img"
        src="~@img/audit-1.png"
        v-if="list.status === 1"
      />
      <img
        class="status-img"
        src="~@img/audit-1.png"
        v-else-if="list.status === 2"
      />
      <img class="status-img" src="~@img/audit-1.png" v-else />
    </div>
    <template v-if="$route.path === '/source'">
      <!-- 基本信息 -->
      <div class="message-list">
        <div class="list-title">基本信息</div>
        <div class="list-item">
          <span class="list-label">姓名：</span>
          <span class="list-value">{{ list.name }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">性别：</span>
          <span class="list-value">{{ list.sex | formatRadio("sex") }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">身份证号：</span>
          <span class="list-value">{{ list.idCardNo }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">出生日期：</span>
          <span class="list-value">{{ list.birth | formatDate }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">政治面貌：</span>
          <span class="list-value">{{ list.politics }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">民族：</span>
          <span class="list-value">{{ list.nation }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">生源所在地：</span>
          <span class="list-value">{{ list.domicile }}</span>
        </div>
      </div>
      <!-- 学籍信息 -->
      <div class="message-list">
        <div class="list-title">学籍信息</div>
        <div class="list-item">
          <span class="list-label">毕业院校：</span>
          <span class="list-value">{{ list.schoolName }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">学历：</span>
          <span class="list-value">{{ list.education }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">所在院系：</span>
          <span class="list-value">{{ list.department }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">专业班级：</span>
          <span class="list-value">{{ list.major }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">学号：</span>
          <span class="list-value">{{ list.studentId }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">就读时间：</span>
          <span class="list-value">{{ list.studyingTime | formatDates }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">学习形式：</span>
          <span class="list-value">{{ list.studyMode }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">学制：</span>
          <span class="list-value">{{ list.educationalSystem }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">专业方向：</span>
          <span class="list-value">{{ list.professional }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">培养方式：</span>
          <span class="list-value">{{ list.trainingMode || "暂无数据" }}</span>
        </div>
      </div>
      <!-- 联系方式 -->
      <div class="message-list">
        <div class="list-title">联系方式</div>
        <div class="list-item">
          <span class="list-label">手机号码：</span>
          <span class="list-value">{{ list.phone }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">QQ：</span>
          <span class="list-value">{{ list.qq || "暂无数据" }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">微信：</span>
          <span class="list-value">{{ list.wx || "暂无数据" }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">电子邮箱：</span>
          <span class="list-value">{{ list.email }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">学号：</span>
          <span class="list-value">{{ list.studentId }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">紧急联系人：</span>
          <span class="list-value">{{ list.emergencyContact }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">家庭电话：</span>
          <span class="list-value">{{ list.homePhone }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">家庭地址：</span>
          <span class="list-value">{{ list.address }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">家庭邮编：</span>
          <span class="list-value">{{ list.postcode || "暂无数据" }}</span>
        </div>
      </div>
      <!-- 档案信息 -->
      <div class="message-list">
        <div class="list-title">档案信息</div>
        <div class="list-item">
          <span class="list-label">档案是否转入学校：</span>
          <span class="list-value">{{ list.record | formatRadio }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">户口是否转入学校：</span>
          <span class="list-value">{{ list.account | formatRadio }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">入学前档案所在单位：</span>
          <span class="list-value">{{ list.unit }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">入学前户口所在地：</span>
          <span class="list-value">{{ list.policeStation }}</span>
        </div>
      </div>
    </template>
    <template v-else-if="$route.path === '/job'">
      <!-- 单位信息 -->
      <div class="message-list">
        <div class="list-title">单位信息</div>
        <div class="list-item">
          <span class="list-label">就业单位名称：</span>
          <span class="list-value">{{ list.companyName }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">社会信用代码：</span>
          <span class="list-value">{{ list.socialCode }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">单位性质：</span>
          <span class="list-value">{{ list.companyType }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">单位行业：</span>
          <span class="list-value">{{ list.industry }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">单位所在地：</span>
          <span class="list-value">{{ list.companyAddress }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">单位联系人：</span>
          <span class="list-value">{{ list.companyContact }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">联系人电话：</span>
          <span class="list-value">{{ list.companyNumber }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">联系人email：</span>
          <span class="list-value">{{ list.companyEmail || "暂无数据" }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">薪资：</span>
          <span class="list-value">{{ list.pay  || "暂无数据" }}</span>
        </div>
      </div>
      <!-- 报到证信息 -->
      <div class="message-list">
        <div class="list-title">报到证信息</div>
        <div class="list-item">
          <span class="list-label">报到证签发类别：</span>
          <span class="list-value">{{ list.certificateType }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">报到证编号：</span>
          <span class="list-value">{{ list.certificateNo || "暂无数据" }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">报到证起始时间：</span>
          <span class="list-value">{{ list.certificateTime }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">签往单位名称：</span>
          <span class="list-value">{{ list.certificateUnit }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">签往单位所在地：</span>
          <span class="list-value">{{ list.certificateUnitLocation }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">签往单位地址：</span>
          <span class="list-value">{{ list.certificateUnitAddress || "暂无数据" }}</span>
        </div>
      </div>
      <!-- 档案信息 -->
      <div class="message-list">
        <div class="list-title">档案信息</div>
        <div class="list-item">
          <span class="list-label">转寄单位名称：</span>
          <span class="list-value">{{ list.recordUnit }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">转寄单位联系人：</span>
          <span class="list-value">{{ list.recordUnitContact || "暂无数据" }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">转寄单位电话：</span>
          <span class="list-value">{{ list.recordUnitPhone || "暂无数据" }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">转寄单位邮编：</span>
          <span class="list-value">{{ list.recordUnitPostcode }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">转寄单位地址：</span>
          <span class="list-value">{{ list.recordUnitAddress || "暂无数据" }}</span>
        </div>
      </div>
      <!-- 户口信息 -->
      <div class="message-list">
        <div class="list-title">户口信息</div>
        <div class="list-item">
          <span class="list-label">户口迁转单位</span>
          <span class="list-value">{{ list.accountUnit || "暂无数据" }}</span>
        </div>
        <div class="list-item">
          <span class="list-label">户口迁转地址：</span>
          <span class="list-value">{{ list.accountAddress || "暂无数据" }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.Committed {
  height: 100%;
  overflow: auto;
  position: relative;
}
</style>
