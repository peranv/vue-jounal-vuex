<template>
 <div class="entry-title d-flex justify-content-between p-2">
     <div>
         <span class="text-sucess fs-3 fw-bold">15</span>
         <span class="mx-1 fs-3">Julio</span>
         <span class="mx-2 fs-4 fw-light">2021, jueves</span>
     </div>
     <div>
         <button class="btn btn-danger mx-2">Borrar
             <i class="fa fa-trash-alt"></i>
         </button>

         <button class="btn btn-primary ">Subir Foto
             <i class="fa fa-upload"></i>
         </button>

     </div>
 </div>
 <hr>
 <div class="d-flex flex-colum px-3 h-75">
    <textarea placeholder="¿Qué sucedio hoy?"></textarea>
 </div>
 <Fab icon="fa-save" ></Fab>

 <img src="https://concepto.de/wp-content/uploads/2015/03/paisaje-2-e1549600987975.jpg" 
 alt="entry-picture"
 class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
   components:{
      Fab: defineAsyncComponent(()=> import('../components/Fab.vue'))
   }
}
</script>

<style lang="scss" scoped>
   textarea{
       font-size: 20px;
       border: none;
       height: 100%;
       &:focues{
           outline:none;
       }
   }
   img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color:#000, $alpha: 0.2);

   }
</style>