<template>
  <UDashboardPanel id="home" :ui="{ body: 'bg-elevated/50' }">
    <template #header>

      <UDashboardNavbar>

        <template #leading>
          <UBreadcrumb :items="breadcrumbItems" />
        </template>

        <template #right>
          <UColorModeButton />
        </template>
        
      </UDashboardNavbar>

      <UDashboardToolbar>
        <UNavigationMenu :items="navigationItems" highlight class="flex-1" />
      </UDashboardToolbar>
    </template>

    <template #body>
      <PatientRecords />
    </template>
  </UDashboardPanel>
</template>

<script setup lang="ts">
import type { NavigationMenuItem, BreadcrumbItem } from "@nuxt/ui";

const navigationItems: NavigationMenuItem[][] = [
  [
    {
      label: "General",
      active: true,
    },
    {
      label: "Members",
    },
  ],
  [
    {
      label: "Edit session",
      icon: "streamline-pencil",
    },
  ],
];

const breadcrumbItems = ref<BreadcrumbItem[]>([
  {
    label: "Patient records",
  },
  {
    label: "Sarah Thompson",
  },
  {
    label: "Emergency visit for tooth ache",
  },
]);
</script>
