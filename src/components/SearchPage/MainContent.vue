<template>
  <div class="flex-1 overflow-y-auto p-4 pb-16 scroll-smooth">
    <!-- Loop through each idea -->
    <div v-for="(idea, index) in ideas" :key="index" class="mb-6">
      <!-- Section Name -->
      <h2 class="text-sm font-bold mb-2">{{ idea.name }}</h2>

      <!-- Section Title -->
      <div class="flex justify-between items-center">
        <h3 class="text-xl font-bold">{{ idea.title }}</h3>
        <button>
          <i class="fas fa-chevron-right text-gray-500"></i>
        </button>
      </div>

      <!-- Images Row -->
      <div class="flex justify-center overflow-hidden mt-4 space-x-1 rounded-lg">
        <img
          v-for="(image, imgIndex) in idea.images"
          :key="imgIndex"
          :src="image"
          :alt="'Image ' + (imgIndex + 1)"
          class="w-1/4 h-44 object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const ideas = [
  {
    name: "Ideas for you",
    title: "Feeling is healing",
    images: [
      "https://i.pinimg.com/control2/736x/c9/74/48/c97448bfc1f943f92b95d7a183beb9ad.jpg",
      "https://i.pinimg.com/736x/b3/6e/b4/b36eb4f17223f1d51c5a7247ac84ea31.jpg",
      "https://i.pinimg.com/736x/e5/e9/86/e5e9865c0e4a55d80e840bd4ca8ff7d8.jpg",
      "https://i.pinimg.com/control2/736x/0a/07/14/0a07147981a1bfdcd75ca96ed85fa98e.jpg",
    ],
  },
  {
    name: "Popular on Pinterest",
    title: "Hype Meme",
    images: [
      "https://i.pinimg.com/736x/29/35/37/2935378edbb3969dc2b86abf39fe49f6.jpg",
      "https://i.pinimg.com/736x/44/16/c2/4416c2a1d05e43075210b5763df06cff.jpg",
      "https://i.pinimg.com/736x/79/96/5e/79965ebc5f540c7c3ca40c882b94c441.jpg",
      "https://i.pinimg.com/736x/19/a8/0f/19a80f470490b3b4b5010739e0fd2b3c.jpg",
    ],
  },
  {
    name: "for you bf/gf",
    title: "Flowers",
    images: [
      "https://i.pinimg.com/736x/1d/7d/ed/1d7deddf9e46cd2494ad08d91dd7b35f.jpg",
      "https://i.pinimg.com/control2/736x/0d/48/a7/0d48a7adf87790210ac5b4a828bb8835.jpg",
      "https://i.pinimg.com/736x/51/16/b4/5116b490fe019dca6c1ea36bb7ae8a65.jpg",
      "https://i.pinimg.com/control2/736x/00/f2/1d/00f21dc44f0ad16431e3b36ee050c046.jpg",
    ],
  },
];
</script>