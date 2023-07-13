<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Meet Pat!</template>

    Pat is a 43-year-old fisherman who has dedicated his entire life to the fishing industry. He was born and raised in a small coastal town and spent most of his childhood on the water. Pat's passion for fishing began at an early age when he would go out on his father's boat and help with the family's commercial fishing business.
        
    Pat is a 43-year-old fisherman who has dedicated his entire life to the fishing industry. He was born and raised in a small coastal town and spent most of his childhood on the water. Pat's passion for fishing began at an early age when he would go out on his father's boat and help with the family's commercial fishing business.
    
    As he grew older, Pat became more interested in the sustainability of the fish populations he was catching. He realized that overfishing was a serious threat to the environment, and he wanted to do his part to help preserve it. Pat began working with local conservation organizations to promote responsible fishing practices and to raise awareness about the importance of protecting the ocean's resources.
          
    After many years of hard work and dedication, Pat decided to take his passion for sustainable fishing to the next level. He opened his own bakery, where he combined his love for sweets with his commitment to the environment. Pat's bakery specializes in using only sustainably sourced ingredients, including fish caught using responsible fishing practices.
          
    Pat's bakery has become a popular destination for locals and tourists alike. His customers love the unique and delicious flavors he creates, but they also appreciate the fact that they are supporting a business that is committed to protecting the environment. Pat's bakery has become a symbol of what is possible when you combine your passion with your values.
          
    Pat is a devoted family man, married to his wife Lindsey for over 20 years. They have two children, Sam and Rebecca, who are both proud of their father's accomplishments. Pat's family is his biggest source of inspiration and support. They have been with him every step of the way as he pursued his dreams.
          
    Despite his success, Pat has never forgotten his roots. He still goes out on his boat whenever he can, and he always makes sure to follow responsible fishing practices. Pat's commitment to sustainability and his love for the ocean continue to guide him in everything he does, both in his bakery and in his personal life.
          
    In addition to his work with his bakery, Pat is also actively involved in his local community. He volunteers with several organizations that promote sustainable fishing and ocean conservation. He also helps mentor young people who are interested in pursuing careers in the fishing industry, passing on his knowledge and passion to the next generation.
          
    Pat's story is an inspiring one. He has dedicated his life to his passions, his family, and his community. Through his work with his bakery and his commitment to sustainable fishing practices, he has become a true leader in his field. Pat's legacy will undoubtedly be felt for many years to come, both in his local community and in the wider world.

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
