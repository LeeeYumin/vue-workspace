<template>
	<div class="container" v-bind:class="simpleClass">
	Hello
	</div>
	<div class="container" v-bind:class="{active: activeValue, 'text-red' : redValue}">
	Hello
	</div>
	<div class="container" v-bind:class="[activeClass, redClass]">
	Hello
	</div>
	<div style="color:red; background: yellow;">
		style1
	</div>
	<div v-bind:style="{color : att1, background: att2}">
		style2
	</div>
	<div v-bind:style="colorStyle">
		style3
	</div>
</template>

<script>
export default {
	data() {
		return {
			simpleClass : 'active text-red',
			activeValue : true,
			redValue : false,
			activeClass : 'active',
			redClass : 'text-red',
			att1 : 'red',
			att2 : 'yellow',
			//colorStyle:{color : this.att1, background : this.att2} //객체라서 this 붙여줘야됨. 근데 적용은 안된다.
			colorStyle : {color:'red', background:'yellow'} //이런 방법으로 가능함 { }는 자바스크립트 영역
		}
	},
	mounted() {
		console.log(this) // this.att1 의 att1은 변수
	},
	methods : { //이벤트 실행 함수
	
	}
}

</script>

<style>
	.container{
		width : 100%;
		height: 50px;
	}
	.active {
		background-color:yellow;
		font-weight: bold;
		
	}
	.text-red{
		color : red;
	}

</style>