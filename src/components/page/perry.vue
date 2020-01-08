<template>
    <div class="page-one">
        <nav v-bind:class="active" v-on:click.prevent>
		<!-- 当菜单上的链接被点击时，我们调用了 makeActive 方法, 该方法在 Vue 实例中创建。 -->
		    <a class="home" @click="switchTo('/shouYe')">首页</a>
		    <a class="projects" @click="switchTo('/youHui')">优惠</a>
		    <a class="services" @click="switchTo('/')">官网</a>
            <a class="services" @click="switchTo('/VIP')">VIP</a>
		    <a class="contact" @click="switchTo('/Member')">我的</a>
	    </nav>
    </div>
</template>
<script>
export default {
    
    data() {
        return {
            active:'首页'
        }
    },
    methods: {            
        switchTo (path) {
            this.$router.replace(path)
        }  
    },

}
</script>

<style scoped>
    *{
		margin:0;
		padding:0;
	}

	a, a:visited {
		outline:none;
		color:#389dc1;
	}

	a:hover{
		text-decoration:none;
	}

	section, footer, header, aside, nav{
		display: block;
	}	

	nav{
		display:inline-block;
		margin:60px auto 45px;
		background-color:#901414;
		box-shadow:0 1px 1px #ccc;
		border-radius:2px;
	}

	nav a{
		display:inline-block;
		padding: 18px 20px;        
		color:#fff !important;
		font-weight:bold;
		font-size:16px;
		text-decoration:none !important;
		line-height:1;
		text-transform: uppercase;
		background-color:transparent;

		-webkit-transition:background-color 0.25s;
		-moz-transition:background-color 0.25s;
		transition:background-color 0.25s;
	}

	nav a:first-child{
		border-radius:2px 0 0 2px;
	}

	nav a:last-child{
		border-radius:0 2px 2px 0;
	}

	nav.home .home,
	nav.projects .projects,
	nav.services .services,
	nav.contact .contact{
		background-color:#e35885;
	}

	p{
		font-size:22px;
		font-weight:bold;
		color:#7d9098;
	}

	p b{
		color:#ffffff;
		display:inline-block;
		padding:5px 10px;
		background-color:#c4d7e0;
		border-radius:2px;
		text-transform:uppercase;
		font-size:18px;
	}
</style>