<script setup lang="ts">
import type { BreadcrumbItem } from "@nuxt/ui";

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
<template>
  <UDashboardNavbar class="h-11">
    <template #leading>
      <UBreadcrumb
        :items="breadcrumbItems"
      >
        <template #separator>
          <UIcon
            name="streamline-interface-arrows-button-right-arrow-right-keyboard"
            size="14px"
            class="text-gray-400"
          />
        </template>
      </UBreadcrumb>
    </template>

    <template #right>
      <UColorModeButton />
    </template>
  </UDashboardNavbar>
</template>
