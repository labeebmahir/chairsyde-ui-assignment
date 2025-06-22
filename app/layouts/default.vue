<template>
  <UDashboardGroup unit="rem">
    <UDashboardSidebar :ui="{ footer: 'border-t border-default' }">
      <template #header>
        <Logo class="h-5 w-auto shrink-0" />
      </template>

      <template #default>
        <UNavigationMenu :items="items[0]" orientation="vertical" />
        <UNavigationMenu
          :items="items[1]"
          orientation="vertical"
          class="mt-auto"
        />
      </template>

      <template #footer>
        <UUser
        to="https://github.com/nuxt/ui-pro"
          name="John Doe"
          description="Software Engineer"
          :avatar="{
            src: 'https://i.pravatar.cc/150?u=john-doe',
          }"
        />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[][] = [
  [
    {
      label: "Home",
      icon: "i-lucide-house",
    },
    {
      label: "View sessions",
      icon: "i-lucide-settings",
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
      icon: "i-lucide-users",
      active: true,
    },
    {
      label: "Media",
      icon: "i-lucide-users",
    },
    {
      label: "Virtual consultation",
      icon: "i-lucide-users",
    },
    {
      label: "Statistics",
      icon: "i-lucide-users",
    },
  ],
  [
    {
      label: "Feedback",
      to: "https://github.com/nuxt-ui-pro/dashboard",
    },
  ],
];
</script>
