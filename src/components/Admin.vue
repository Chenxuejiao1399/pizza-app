<template>
    <h1>Admin</h1>
</template>
<script>
export default {
    data(){
        return{
            name:"Henry"
        }
    },
    //进入组件之前
    // beforeRouteEnter: (to,from,next)=>{
    //     //alert("Hello" + this.name);
    //     next(vm =>{
    //         alert("Hello" + vm.name);
    //     })
    // }

    //离开组件之后
    // beforeRouteLeave: (to,from,next) => {
    //     if(confirm("确定离开吗？") == true){
    //         next();
    //     }else{
    //         next(false);
    //     }
    // }

}
</script>
