<script lang="ts">

export default {
  data() {
    return {
      dark: true,
      twitter_img: require("../../assets/ico/twitter.svg"),
      twitter_gif: require("../../assets/ico/twitter.gif"),
      twitter_url: 'https://www.twitter.com/beenzer_app/',
      instagram_img: require("../../assets/ico/instagram.png"),
      instagram_gif: require("../../assets/ico/instagram.gif"),
      instagram_url: 'https://www.instagram.com/beenzer_app/',
      discord_img: require("../../assets/ico/discord.png"),
      discord_gif: require("../../assets/ico/discord.gif"),
      discord_url: 'https://www.discord.com/beenzer_app/',
      telegram_img: require("../../assets/ico/telegram.png"),
      telegram_gif: require("../../assets/ico/telegram.gif"),
      telegram_url: 'https://t.me/Beenzerofficial',
      youtube_img: require("../../assets/ico/youtube.png"),
      youtube_gif: require("../../assets/ico/youtube.gif"),
      youtube_url: 'https://youtube.com/Beenzerofficial',
      tiktok_img: require("../../assets/ico/tiktok.png"),
      tiktok_gif: require("../../assets/ico/tiktok.gif"),
      tiktok_url: 'https://tiktok.com/Beenzerofficial',
      magiceden_img: require("../../assets/ico/magiceden.png"),
      magiceden_gif: require("../../assets/ico/magiceden.gif"),
      magiceden_url: 'https://magiceeden.io/Beenzerofficial',
      opensea_img: require("../../assets/ico/opensea.png"),
      opensea_gif: require("../../assets/ico/opensea.gif"),
      opensea_url: 'https://opensea.com/Beenzerofficial',
      sound_black: require("../../assets/ico/sound.png"),
      sound_white: require("../../assets/ico/sound-white.png"),
      mute_black: require("../../assets/ico/mute.png"),
      mute_white: require("../../assets/ico/mute-white.png"),
    }
  }
}
</script>

<template>
  <div class="flex flex-wrap justify-center items-center rounded-xl mt-8 sm:m-0">
    <!-- Twitter Button -->
    <a :href="twitter_url" target="_blank">
      <button class="rounded-full h-10 w-10 m-2 flex justify-center items-center shadow-xl" 
      :class="dark ? 'bg-white/10 shadow-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-white hover:bg-gray-200 text-gray-600'" 
      @mouseover="twitter_img=twitter_gif" 
      @mouseleave="twitter_img=require('../../assets/ico/twitter.svg')">
        <img :src="twitter_img" class="h-6 w-6"/>
      </button>
    </a>
    <!-- Instagram Button -->
    <a :href="instagram_url" target="_blank">
      <button class="rounded-full h-10 w-10 m-2 flex justify-center items-center shadow-xl" 
      :class="dark ? 'bg-white/10 shadow-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-white hover:bg-gray-200 text-gray-600'" 
      @mouseover="instagram_img=instagram_gif"
      @mouseleave="instagram_img=require('../../assets/ico/instagram.png')">
        <img :src="instagram_img" class="h-7 w-7"/>
      </button>
    </a>
    <!-- Discord Button -->
    <a :href="discord_url" target="_blank">
      <button class="rounded-full h-10 w-10 m-2 flex justify-center items-center shadow-xl" 
      :class="dark ? 'bg-white/10 shadow-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-white hover:bg-gray-200 text-gray-600'" 
      @mouseover="discord_img=discord_gif" 
      @mouseleave="discord_img=require('../../assets/ico/discord.png')">
        <img :src="discord_img" class="h-7 w-7"/>
      </button>
    </a>
    <!-- Telegram Button -->
    <a :href="discord_url" target="_blank">
      <button class="rounded-full h-10 w-10 m-2 flex justify-center items-center shadow-xl" :class="dark ? 'bg-white/10 shadow-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-white hover:bg-gray-200 text-gray-600'" 
      @mouseover="telegram_img=telegram_gif" 
      @mouseleave="telegram_img=require('../../assets/ico/telegram.png')">
        <img :src="telegram_img" class="h-7 w-7"/>
      </button>
    </a>
    <!-- Youtube Button -->
    <a :href="youtube_url" target="_blank">
      <button class="rounded-full h-10 w-10 m-2 flex justify-center items-center shadow-xl" :class="dark ? 'bg-white/10 shadow-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-white hover:bg-gray-200 text-gray-600'" 
      @mouseover="youtube_img=youtube_gif" 
      @mouseleave="youtube_img=require('../../assets/ico/youtube.png')">
        <img :src="youtube_img" class="h-7 w-7"/>
      </button>
    </a>
    <!-- TikTok Button -->
    <a :href="tiktok_url" target="_blank">
      <button class="rounded-full h-10 w-10 m-2 flex justify-center items-center shadow-xl" :class="dark ? 'bg-white/10 shadow-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-white hover:bg-gray-200 text-gray-600'" 
      @mouseover="tiktok_img=tiktok_gif" 
      @mouseleave="tiktok_img=require('../../assets/ico/tiktok.png')">
        <img :src="tiktok_img" class="h-7 w-7"/>
      </button>
    </a>
    <!-- MagicEden Button -->
    <a :href="magiceden_url" target="_blank">
      <button class="rounded-full h-10 w-10 m-2 flex justify-center items-center shadow-xl" :class="dark ? 'bg-white/10 shadow-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-white hover:bg-gray-200 text-gray-600'" 
      @mouseover="magiceden_img=magiceden_gif" 
      @mouseleave="magiceden_img=require('../../assets/ico/magiceden.png')">
        <img :src="magiceden_img" class="h-7 w-7"/>
      </button>
    </a>
    <!-- OpenSea Button -->
    <a :href="opensea_url" target="_blank">
      <button class="rounded-full h-10 w-10 m-2 flex justify-center items-center shadow-xl" :class="dark ? 'bg-white/10 shadow-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-white hover:bg-gray-200 text-gray-600'" 
      @mouseover="opensea_img=opensea_gif" 
      @mouseleave="opensea_img=require('../../assets/ico/opensea.png')">
        <img :src="opensea_img" class="h-7 w-7"/>
      </button>
    </a>
  </div>

</template>