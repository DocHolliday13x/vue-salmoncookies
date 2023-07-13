<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
// import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Sales Records</template>

  </WelcomeItem>

  <!-- <WelcomeItem>
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
  </WelcomeItem> -->

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Pat ensures that he utilizes the most up-to-date ethical fishing methods to help preserve the delicate ecosystem of our oceans.

    Check out some of the associations Pat uses to ensure his fishing methods are sustainable:
    <a href="https://www.lrqa.com/en/rfvs/" target="_blank" rel="noopener">LRQA</a>,
    <a href="https://www.seafish.org/responsible-sourcing/tools-for-ethical-seafood-sourcing/records/responsible-fishing-vessel-standard-rfvs/" target="_blank" rel="noopener">seafish - RFVS</a>, and
    <a href="https://www.globalseafood.org/blog/rfvs-issue-2-released/" target="_blank" rel="noopener">Global Seafood Alliance</a>.
    If you are curious about more resources and would like to see how YOU can contribute to ocean conservation, make sure that you pay
    <a href="https://donate.oceanconservancy.org/page/121401/donate/1?ea.tracking.id=23HPXWJAXX&utm_medium=PaidSearch&utm_source=GooglePaid&utm_campaign=NonBranded&gad=1&gclid=CjwKCAjwwb6lBhBJEiwAbuVUSluk6tW2WSSVdkY_dFN6DAF00TdGmkBnQ0BprE03MkaBjcuU98zj-xoCFr4QAvD_BwE" target="_blank" rel="noopener">Ocean Conservancy</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Contact Us</template>

    Do you have questions, comments or concerns? Please feel free to ask your question on
    <a href="https://discord.gg/j5y5vCwf" target="_blank" rel="noopener">Pat's Ocean View Hot Tub</a>, our official
    Discord server, or give us a call at 1-800-555-5555.

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Leave a Review</template>

    As an independent family owned and operated business, we rely on community backing for sustainability. You can help
    us by providing
    <a href="https://discord.gg/j5y5vCwf/" target="_blank" rel="noopener">feedback</a>
    in regard to your experience.
  </WelcomeItem>
</template>
