<template>
  <Layout>
    <div class="flex items-start">
      <!-- <div class="hidden lg:block lg:mt-16 lg:w-3/8 h-screen">
        <Sidebar class="min-w-full ml-6" />
      </div>-->

      <div class="flex justify-around flex-wrap mx-4 mt-4 h-auto lg:mt-32">
        <div
          v-for="edge in $page.allPost.edges"
          :key="edge.node.id"
          id="gun-card"
          class="max-w-xs mb-8 sm:w-1/2 sm:m-4 rounded-lg shadow hover:shadow-lg border-2 border-gray-300 hover:border-2 hover:border-ssorange"
        >
          <g-link :to="`blog/${edge.node.slug}`">
            <div class="gun-card-image h-48 w-full">
              <g-image
                :src="edge.node.thumbnail"
                :alt="edge.node.title"
                class="h-48 w-full object-scale-down object-center"
              />
            </div>
            <div class="p-4">
              <h2 class="font-bold uppercase text-xl mt-2">
                {{ edge.node.title }}
              </h2>
              <h5 class="italic">
                {{ edge.node.author }} - {{ edge.node.date }}
              </h5>
              <p style="margin-top: 10px">{{ edge.node.excerpt }}</p>
            </div>
          </g-link>
        </div>

        <div class="flex justify-center mb-8 w-full">
          <Pager
            :linkClass="{ pageNum: true }"
            :info="$page.allPost.pageInfo"
            :showLinks="true"
            class="pageNum"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
import { Pager } from "gridsome";

export default {
  metaInfo() {
    return {
      title: "Blog",
    };
  },
  components: {
    Sidebar,
    Pager,
  },
};
</script>

<page-query>
query ($page: Int) {
  allPost(sortBy: "date", order: DESC, perPage: 12, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        date(format: "DD-MM-YYYY")
        slug
        title
        excerpt
        content
        thumbnail
        author
      }
    }
  }
}
</page-query>

<style>
#gun-card:hover {
  transition: shadow 2s;
}

.pageNum {
  font-size: 1.3em;
  margin-top: 1em;
  margin-right: 0.5em;
}

a.active--exact.active.pageNum {
  border-radius: 15%;
  padding: 3px;
  background: #004d91;
  color: white;
}
</style>
