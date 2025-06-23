<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[][] = [
  [
    {
      label: "Home",
      icon: "streamline-interface-home-1-home-house-map-roof",
    },
    {
      label: "View sessions",
      icon: "streamline-interface-time-alarm-notification-alert-bell-wake-clock-alarm",
      defaultOpen: false,
      children: [
        {
          label: "General",
        },
        {
          label: "Members",
        },
        {
          label: "Notifications",
        },
      ],
    },
    {
      label: "Patient Records",
      icon: "streamline-user-circle-single",
      active: true,
      class: "before:bg-white/10",
    },
    {
      label: "Media",
      icon: "streamline-image-picture-landscape-1-photos-photo-landscape-picture-photography-camera-pictures",
    },
    {
      label: "Virtual consultation",
      icon: "streamline-computer-laptop-device-laptop-electronics-computer-notebook",
    },
    {
      label: "Statistics",
      icon: "streamline-money-graph-bar-product-data-bars-analysis-analytics-graph-business-chart",
    },
  ],
];
</script>
<template>
  <UDashboardSidebar
    :ui="{
      root: 'bg-green-900',
      content: 'bg-green-900 divide-y-0',
    }"
    :toggle="{
      color: 'primary',
    }"
  >
    <template #header>
      <Logo class="h-4 w-auto shrink-0 [--ui-primary:white]" />
    </template>

    <template #default>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{
          link: 'flex-row px-4 py-3 gap-3 font-medium text-white hover:text-white hover:before:bg-white/10 ',
          linkLeadingIcon: 'shrink-0 size-5 text-white group-hover:text-white',
          childList: 'border-white',
        }"
      />
    </template>

    <template #footer>
      <div
        class="bg-white/10 w-full p-4 mb-4 rounded-lg flex items-center justify-between gap-1 hover:bg-white/20 ease-out duration-200 cursor-pointer"
      >
        <UUser
          name="Robert Lindley"
          description="robertlindley@shoreditchdesign.com"
          :avatar="{
            alt: 'Robert Lindley',
          }"
          class="truncate"
          :ui="{
            wrapper: 'min-w-0',
            name: 'truncate text-white',
            description: 'truncate text-white',
          }"
        />
        <UIcon
          class="size-2 shrink-0 text-white"
          name="streamline-interface-arrows-button-right-arrow-right-keyboard"
        />
      </div>
    </template>
  </UDashboardSidebar>
</template>
