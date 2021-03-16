<template>
  <div class="resume">
    <div class="upload mt15 mb20" v-if="!isCommit">
      <div class="upload-title mr20">
        简历上传：
      </div>
      <el-upload
        ref="upload"
        action="#"
        drag
        class="upload-demo upload-main mr20"
        accept="image/png,image/jpg,image/jpeg,image/pdf"
        :limit="1"
        :auto-upload="false"
        :on-exceed="handleExceed"
        :on-change="handleChange"
        :on-remove="handleRemove"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或 <em>点击上传</em></div>
      </el-upload>
      <div class="upload-btn">
        <el-button size="small" type="primary" @click="uploadFile"
          >立即上传</el-button
        >
        <el-button size="small" @click="handleRemove">取消</el-button>
      </div>
    </div>

    <img class="img" :src="url" alt="" />
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      url: "",
      isCommit: false,
    };
  },
  methods: {
    // 上传文件的钩子
    handleChange(file) {
      if (
        !(
          file.raw.type === "image/png" ||
          file.raw.type === "image/jpg" ||
          file.raw.type === "image/jpeg"
        )
      ) {
        this.$refs.upload.clearFiles();
        return this.$message.warning(
          "请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片"
        );
      }
      let size = file.raw.size / 1024 / 1024 / 2;
      if (size > 2) {
        this.$refs.upload.clearFiles();
        return this.$message.warning("图片大小必须小于2M");
      }
      let reader = new FileReader();
      reader.readAsDataURL(file.raw);
      let that = this;
      reader.onload = function(e) {
        that.url = this.result;
      };
    },
    //删除文件的钩子
    handleRemove() {
      this.url = "";
      this.$refs.upload.clearFiles();
    },
    //文件超出个数限制时的钩子
    handleExceed() {
      this.$message.error("只能选择上传一张图片！");
    },
    //上传简历
    async uploadFile() {
      const url = this.url;
      if (!url) return this.$message.error("请先选择一张图片再进行上传！");
      const res = await api.saveResume({ url });
      if (!res) return;
      console.log(url, 111);
    },
    //获取简历
    async getUrl() {
      const res = await api.findResume();
      if (!res) return;
      if (res.data) {
        this.url = res.data.url;
        this.isCommit = true;
      }
    },
  },
  created() {
    this.getUrl();
  },
};
</script>

<style lang="scss" scoped>
.resume {
  height: 100%;
  overflow: auto;
  .upload {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    .upload-title {
      min-width: 80px;
    }
    .upload-main {
      min-width: 360px;
      height: 220px;
    }
    .upload-btn {
      min-width: 150px;
      align-self: flex-end;
      margin-bottom: 40px;
    }
  }
}
.img {
  width: 90%;
}
</style>
