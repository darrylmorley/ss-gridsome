<template>
  <Layout>
    <div
      id="filter-menu"
      class="block flex justify-center bg-white p-2 lg:hidden border-b-2 border-black"
    >
      <button @click="toggle" id="filter-menu" class="lg:hidden text-xl">
        Filter
        <!-- <font-awesome :icon="['fas', 'bars']" class="my-4 ml-6 text-ssblue" /> -->
      </button>
    </div>
    <div :class="open ? 'block' : 'hidden'" class="uppercase font-semibold">
      <OpticsSidebar />
    </div>

    <div class="flex items-start">
      <div class="hidden lg:block lg:mt-40 lg:w-3/8 h-screen">
        <OpticsSidebar class="min-w-full ml-6" />
      </div>

      <div
        class="flex justify-center flex-wrap mx-4 mt-8 h-auto lg:w-5/6 lg:mt-12"
      >
        <div
          v-for="edge in $page.allWooProducts.edges"
          :key="edge.node.id"
          id="gun-card"
          class="max-w-xs mb-8 sm:w-1/2 sm:m-4 rounded-lg shadow hover:shadow-lg border-2 border-gray-300 hover:border-2 hover:border-ssorange"
        >
          <g-link :to="`/products/${edge.node.slug}`">
            <div class="gun-card-image h-48 w-full">
              <g-image
                :src="edge.node.images[0].src"
                :alt="edge.node.name"
                class="h-48 w-full object-scale-down object-center"
              />
            </div>
            <div class="p-4">
              <h2 class="font-bold uppercase text-xl mt-2">
                {{ edge.node.name }}
              </h2>
              <p class="font-semibold text-lg mt-2">£{{ edge.node.price }}</p>
            </div>
          </g-link>
        </div>

        <div class="flex justify-center mb-8 w-full">
          <Pager
            :linkClass="{ pageNum: true }"
            :info="$page.allWooProducts.pageInfo"
            :showLinks="true"
          />
        </div>
      </div>
    </div>
    <div class="page-description w-full mt-8 p-20 bg-gray-100">
      <div class="mx-24 my-8">
        <h1 class="font-bold text-2xl">Rangefinders</h1>
        <p class="mt-4">
          We carry a range of Rangefinders & Optics from all of the major
          manufacturers.
        </p>
        <p class="mt-2">
          Please call us on 01527831261 to discuss your current requirements, if
          we don't have it in stock we can usually source it for you.
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
import OpticsSidebar from "~/components/OpticsSidebar.vue";
import { Pager } from "gridsome";

export default {
  metaInfo() {
    return {
      title: "Rangefinders",
    };
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
  components: {
    OpticsSidebar,
    Pager,
  },
};
</script>

<page-query>
query products ($page: Int) {
  allWooProducts(perPage: 12, page: $page, filter: { status: { eq: "publish" }, categories: {id: {eq: 4679}} }, sortBy: "name", order: ASC) @paginate {
    pageInfo {
    totalPages
    currentPage
}
    edges {
      node {
        id
        sku
        name
        slug
        status
        short_description
        description
        price
        stock_status
        categories {
          id
          name
        }
        images {
          src
        }
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
  font-size: 1.6em;
  margin-right: 0.5em;
}
.pageNum:active {
  color: #004d91;
}
</style>
