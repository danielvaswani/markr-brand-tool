<template>
  <div id="typography">
    <TitleEdit title="Typography"></TitleEdit>
    <div>
      <Font class="font" name="Roboto"></Font>
      <Font class="font" name="Indie Flower"></Font>
      <textarea name="" id="">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, culpa natus. Saepe porro at possimus, quod esse dolores sint inventore modi eveniet assumenda consectetur, aut laudantium est magni quaerat ratione libero voluptatum nihil repudiandae repellat, quo facere accusantium? Numquam, iusto molestias, incidunt quia quas deleniti praesentium nemo, alias labore ea in ipsam quisquam. Et veritatis natus asperiores sint in. Est velit consequatur dolorum unde repellendus! Suscipit esse quaerat ratione. Minus, cum perferendis minima aspernatur dignissimos ducimus harum. Ex tempora, autem dignissimos nisi est modi distinctio iusto quam velit voluptatem soluta nemo fugiat laudantium nostrum et aliquid deserunt, itaque fuga? Blanditiis voluptas sint doloribus aliquam inventore omnis, non repellendus culpa, vitae ab, accusamus deleniti consequatur magni iusto fugit. Necessitatibus eligendi eius fugit quas tempore? Alias molestias officia, dolorum iure, cum corrupti ipsum veritatis ipsa velit, earum reprehenderit rerum excepturi porro a delectus debitis at eius blanditiis quis in exercitationem dolore commodi magni asperiores! Quaerat voluptate exercitationem maxime dolorem beatae perferendis, nihil inventore ex, obcaecati ipsam mollitia tenetur! Mollitia, esse, nulla repudiandae incidunt sequi fuga quis voluptatum fugiat tempora culpa maxime exercitationem quas omnis, quasi optio perferendis nostrum neque porro saepe cupiditate voluptas odit veritatis adipisci. Quisquam reprehenderit tempore minima quam culpa, quo, blanditiis expedita iste voluptatibus recusandae corporis! Ea reprehenderit voluptatibus modi sapiente quaerat sunt nulla molestiae? Eaque voluptates a eveniet in ratione placeat labore nesciunt quae. Officiis nostrum aut, veritatis iure qui id eveniet inventore obcaecati voluptas, dicta enim dolor necessitatibus beatae, deleniti ex ducimus nemo molestias perspiciatis nobis et modi? Totam laudantium minima nobis quae veniam cupiditate perferendis amet. Temporibus omnis maiores dolores, nam laboriosam natus, tempore, vero perferendis minus culpa aspernatur sapiente sequi. Sequi, ipsum quia tempore placeat sit fugiat alias minus quam, cupiditate beatae, maxime fugit quos et vero rem commodi repellendus inventore cum! Similique commodi aliquam pariatur placeat sunt at nemo dicta totam facere reprehenderit laudantium culpa nulla repellendus voluptas repellat, sapiente iusto! Nihil ipsam odit laudantium totam nisi iusto fugit harum tempore laboriosam repellendus eveniet modi assumenda, animi ab nam corporis! Itaque nesciunt esse hic, minus quis consequuntur ullam tempora doloribus sed mollitia veritatis dolorum, provident placeat amet. Illum aspernatur ea temporibus nulla aliquid totam optio! Dolorum quasi necessitatibus ab adipisci eius blanditiis incidunt perspiciatis omnis, modi, beatae itaque obcaecati illo odio quis iure natus tenetur ex esse, neque saepe nobis molestias nemo fugit! Nihil optio et quia quibusdam dicta explicabo animi reprehenderit unde sit?
      </textarea>
    </div>
  </div>
</template>
<script setup>
import TitleEdit from "@/components/TitleEdit.vue";
import Font from "@/components/Font.vue";
import store from "@/store";
import { onMounted } from "vue";

onMounted(() => {
  store.getters.getFonts;
});
</script>

<style scoped>
textarea {
  padding: 15px;
  border-color: #0088ffea;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  text-align: left;
  width: 95%;
  height: 500px;
}
</style>
