
<template>
 <div id="app">
  <PostList />
  <CreatePost />
  <ParentComp />
  <TemplateRef />
  <br>
  <br>
  <br>
  <ClickCounter />
  <br>
  <HoverCounter />
  <br>
  <OData />
  <DemoOne />
  <DemoTwo />
  <RMethods />
  <VModel />
  <br>
  <RComputed />
  <br>
  <RWatch />
  <br>
  <ProvideInject />
   <br>
  <LifeCycleO />
   <br>
   <LifeCycleC />
   <br>
   <RTemplateRef />
</div>
</template>

<script>

import PostList from './components/PostList.vue'
import CreatePost from './components/CreatePost.vue'
import ParentComp from './components/ParentComp.vue'
import TemplateRef from './components/TemplateRef.vue'
import ClickCounter from './components/ClickCounter.vue'
import HoverCounter from './components/HoverCounter.vue'
import OData from './components/OData.vue'
import DemoOne from './components/DemoOne.vue'
import DemoTwo from './components/DemoTwo.vue'
import RMethods from './components/RMethods.vue'
import VModel from './components/VModel.vue'
import RComputed from './components/RComputed.vue'
import RWatch from './components/RWatch.vue'
import ProvideInject from './components/ProvideInject.vue'
import LifeCycleO from './components/LifeCycleO.vue'
import LifeCycleC from './components/LifeCycleC.vue'
import RTemplateRef from './components/RTemplateRef.vue'


   
export default {
  name: 'App',
  components: {
    PostList,
    CreatePost,
    ParentComp,
    TemplateRef,
    ClickCounter,
    HoverCounter,
    OData,
    DemoOne,
    DemoTwo,
    RMethods,
    VModel,
    RComputed,
    RWatch,
    ProvideInject,
    LifeCycleO,
    LifeCycleC,
    RTemplateRef,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
