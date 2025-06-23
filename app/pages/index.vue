
<template>
  <UDashboardPanel id="home" :ui="{ body: 'bg-elevated/50' }">
    <template #header>
      <BreadCrumb/>
      <ToolBar/>
    </template>

    <template #body>
      <PatientRecords />
    </template>
  </UDashboardPanel>
</template>
