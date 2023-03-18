<template lang="">
  <div class="container" ref="containerRef">
        <!-- 登录 -->
    <div class="Forms-container">
            <div class="signin-signup">
                <Form  ref="formCustom" :model="formCustom" :rules="ruleCustom" class="sign-in-Form">
                    
                  <h2 class="title">登录</h2>
                    <!-- id for login -->
                    <FormItem  prop="userId">                   
                        <Input type="text" placeholder="账号" name="id" v-model="formCustom.userId"></Input>
                    </FormItem>

                    <FormItem  prop="password">
                        <Input type="password" placeholder="密码" name="password" v-model="formCustom.password"></Input>
                    </FormItem>
                   
                    <button class="btn solid" @click="login">登录</button>
                    
                    <MediaText/>
                </Form>

                
                <!-- 注册 -->
                <Form ref="formCustom" :model="formCustom" :rules="ruleCustom"  class="sign-up-Form">
                    <h2 class="title">注册</h2>

                    <FormItem  prop="userName">   
                        <Input type="text" placeholder="昵称" name="userName" v-model="formCustom.userName"></Input>
                    </FormItem>
                    <FormItem class="input-field" prop="userIdReg">
                        
                        <Input type="text" placeholder="账号"  id="userId" name="userId" v-model="formCustom.userIdReg"></Input>
                    </FormItem>
                    <FormItem class="input-field" prop="passwordReg">
                        
                        <Input type="password" placeholder="密码" name="userPassword" v-model="formCustom.passwordReg"></Input>
                    </FormItem>

                    <button class="btn solid" @click="reg">注册</button>
                    
                    <MediaText/>

                </Form>

            </div>
        </div>

        <!-- 图片切换 -->
    <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>初来乍到？</h3>
                    <p>
                        您可以点击下面的按钮进行注册。
                    </p>
                    <button class="btn transparent" @click="signUpClick">
                    注册
                </button>
                </div>
                <img src="../assets/img/log.svg" class="image" alt="" />
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3>已经是会员？</h3>
                    <p>
                        您可以点击下面的按钮进行登录
                    </p>
                    <button class="btn transparent" @click="signInClick">
                    登录
                </button>
                </div>
                <img src="../assets/img/register.svg" class="image" alt="" />
            </div>
        </div>

    </div>
</template>
<script>
import MediaText from '@/components/login/MediaText.vue'
export default {
  name:'LoginView',
  components:{
    MediaText
  },
  data(){
            
    const validatePass = (rule, value, callback) => {
                if (value === ''||value===undefined) {
                    let str=rule.field
                    if(rule.field==="userId" || rule.field==="userIdReg"){
                      str="账号"
                    }else if(rule.field==="userName"){
                      str="昵称"
                    }else{
                      str="密码"
                    }

                    callback(new Error(`请输入${str}`));
                    
                } else{
                    callback();
                }
    };

    return{
      //表单中的验证对象
      formCustom: {
        passwd:'',
        userId:'',
        userName:'',
        userIdReg:'',
        passwordReg:''
      },

      //表单验证规则
      ruleCustom: {
        userId:[
        { validator: validatePass, trigger: 'blur' }, 
        {pattern: /^[0-9]{4,18}$/, message:'账号必须为4到18位的数字，且不能出现空格', trigger: 'blur'}
        ],
        password:[
        { validator: validatePass, trigger: 'blur' },
        {pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, message:'密码只能为6-20包含数字，英文字母，不能出现空格', trigger: 'blur'}
        ],
        userName:[
        { validator: validatePass, trigger: 'blur' },
        {pattern:/^[\u4E00-\u9FA5A-Za-z0-9_]+$/, message:'昵称只能为中文、英文、数字包括下划线', trigger: 'blur'}
        ],
        userIdReg:[
        { validator: validatePass, trigger: 'blur' }, 
        {pattern: /^[0-9]{4,18}$/, message:'账号必须为4到18位的数字，且不能出现空格', trigger: 'blur'}
        ],
        passwordReg:[
        { validator: validatePass, trigger: 'blur' },
        {pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, message:'密码只能为6-20包含数字，英文字母，不能出现空格', trigger: 'blur'}
        ],
      }
    }

  },
  methods:{
    /*
      界面切换
    */
    signUpClick(){
      this.$refs.containerRef.classList.add("sign-up-mode")
    },
    signInClick(){
      this.$refs.containerRef.classList.remove("sign-up-mode")
    }
    /*
      后端交互
    */ 

  },mounted() {
    console.log(this.$store)
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.Forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transForm: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

Form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

Form.sign-up-Form {
  opacity: 0;
  z-index: 1;
}

Form.sign-in-Form {
  z-index: 2;
}

.title {
  font-size: 2rem;
  color: #444;
  margin-bottom: 10px;
}






.social-icon:hover {
  color: #4fe;
  border-color: #4cf;
}

.ivu-input-wrapper{
  width: 330px;
}

.ivu-input {
  height: 40px;
}

.btn {
  width: 150px;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transForm: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  background-image: linear-gradient(
          -45deg
          , #4eb 0%, #4cf 100%);
}

.btn:hover {
  background-image: linear-gradient(
          -45deg
          , #4eb 0%, #08fe 75%);
}
.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transForm: translateY(-50%);
  background-image: linear-gradient(-45deg, #4eb 0%, #04fe 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transForm 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transForm 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transForm: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
  transForm: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transForm: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode Form.sign-up-Form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode Form.sign-in-Form {
  opacity: 0;
  z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transForm: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }
  .panel .content {
    padding: 0.5rem 1rem;
  }
  .container {
    padding: 1.5rem;
  }

  .container:before {
    bottom: 72%;
    left: 50%;
  }

  .container.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}
</style>