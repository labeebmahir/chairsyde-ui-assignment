<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const navigationItems: NavigationMenuItem[][] = [
  [
    {
      label: "Notes",
      active: true,
    },
    {
      label: "Bundles",
    },
  ],
  [
    {
      label: "Edit session",
      icon: "streamline-pencil",
      class:
        "border border-gray-300 dark:border-white/20  rounded-md gap-3 md:text-base text-primary md:px-4 md:py-2.5 font-bold",
    },
  ],
];
</script>
<template>
  <UDashboardToolbar>
    <UNavigationMenu
      :items="navigationItems"
      highlight
      class="flex-1"
      :ui="{
        link: 'md:text-lg',
        linkLeadingIcon: 'text-primary',
      }"
    />
  </UDashboardToolbar>
</template>
