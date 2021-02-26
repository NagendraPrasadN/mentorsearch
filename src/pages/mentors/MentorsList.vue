<template>
    <section>FILTER</section>
    <section>
         <base-card>
        <div class="controls">
            <base-button mode="outline" @click="filteredMentors">Refresh</base-button >
            <base-button link  to="/register">Register Mentors</base-button >
        </div>
       <ul v-if="hasMentors">
           <mentors-data v-for="mentors in filteredMentors" :key="mentors.id"
           :first-name="mentors.firstName" :last-name="mentors.lastName" :areas="mentors.areas" :rate="mentors.hourlyRate" :id="mentors.id"> 
           </mentors-data>
       </ul>
       <h3 v-else>NO MENTORS FOUND</h3>
        </base-card>
    </section>
</template>
<script>
import MentorsData from '../../components/mentorsUI/MentorsData.vue'

export default {
    components:{
      MentorsData
    },
    computed:{
        filteredMentors(){
          return  this.$store.getters['mentors/mentors']
        },
        hasMentors(){
          return  this.$store.getters['mentors/hasMentors']
        }
    }
}
</script>

<style scoped>

</style>