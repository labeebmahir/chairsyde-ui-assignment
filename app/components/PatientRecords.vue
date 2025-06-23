<script setup lang="ts">
import * as z from "zod";

const medicalNotesSchema = z.object({
  dentist: z.string().optional(),
  nurse: z.string().optional(),
  fractureDate: z.string().optional(),
  location: z.string().optional(),
  reason: z.string().optional(),
  fractureOccurrence: z.string().optional(),
  howItHappened: z.string().optional(),
});

type MedicalNotesSchema = z.output<typeof medicalNotesSchema>;

const medicalNotes = reactive<Partial<MedicalNotesSchema>>({
  dentist: "Dr John Smith",
  nurse: "",
  fractureDate: "Today",
  location: "Broken tooth lorem",
  reason: "Broken tooth lorem",
  fractureOccurrence: "Broken tooth",
  howItHappened: "Broken tooth",
});
</script>

<template>
  <UCard class="p-6" :ui="{ header: 'sm:py-6 space-y-6' }">
    <template #header>
      <div class="flex justify-between items-center">
        <UButton
          class="text-primary"
          color="neutral"
          variant="outline"
          label="Template A"
          icon="streamline-interface-file-text-text-common-file"
        />
        <div class="space-x-2">
          <UButton
            color="neutral"
            variant="outline"
            icon="streamline-align-back-1"
            class="p-2 text-primary"
            :ui="{
              leadingIcon: ' size-[16px]',
            }"
          />
          <UButton
            color="neutral"
            variant="outline"
            icon="streamline-interface-arrows-down-circle-1-arrow-keyboard-circle-button-down"
            class="p-2 text-primary"
            :ui="{
              leadingIcon: ' size-[16px]',
            }"
          />
        </div>
      </div>

      <div class="space-y-2">
        <h3 class="text-[25px] font-medium">Notes</h3>
        <span class="text-gray-400">Last updated today 09:15 AM</span>
      </div>
    </template>

    <UForm :schema="medicalNotesSchema" :state="medicalNotes">
      <div class="space-y-6">
        <UFormField
          name="dentist"
          label="Dentist"
          :ui="{
            label: 'font-bold text-base',
          }"
        >
          <UInput
            v-model="medicalNotes.dentist"
            size="xl"
            placeholder="Type here"
            color="neutral"
            variant="none"
            :ui="{
              base: 'px-0 py-2 fon',
            }"
          />
        </UFormField>

        <UFormField
          name="nurse"
          label="Nurse"
          :ui="{
            label: 'font-bold text-base',
          }"
        >
          <UInput
            v-model="medicalNotes.nurse"
            size="xl"
            placeholder="Type here"
            color="neutral"
            variant="none"
            :ui="{
              base: 'px-0 py-2',
            }"
          />
        </UFormField>

        <UFormField
          name="fractureDate"
          label="When did the fracture occur?"
          :ui="{
            label: 'font-bold text-base',
          }"
        >
          <div class="flex gap-2 flex-wrap">
            <UButton
              :color="
                medicalNotes.fractureDate === 'Today' ? 'primary' : 'neutral'
              "
              :variant="
                medicalNotes.fractureDate === 'Today' ? 'solid' : 'outline'
              "
              size="md"
              @click="medicalNotes.fractureDate = 'Today'"
            >
              Today
            </UButton>
            <UButton
              :color="
                medicalNotes.fractureDate === 'Yesterday'
                  ? 'primary'
                  : 'neutral'
              "
              :variant="
                medicalNotes.fractureDate === 'Yesterday' ? 'solid' : 'outline'
              "
              size="md"
              @click="medicalNotes.fractureDate = 'Yesterday'"
            >
              Yesterday
            </UButton>
            <UButton
              :color="
                medicalNotes.fractureDate === 'Several days ago'
                  ? 'primary'
                  : 'neutral'
              "
              :variant="
                medicalNotes.fractureDate === 'Several days ago'
                  ? 'solid'
                  : 'outline'
              "
              size="md"
              @click="medicalNotes.fractureDate = 'Several days ago'"
            >
              Several days ago
            </UButton>
            <UButton
              :color="
                medicalNotes.fractureDate === 'Over a week ago'
                  ? 'primary'
                  : 'neutral'
              "
              :variant="
                medicalNotes.fractureDate === 'Over a week ago'
                  ? 'solid'
                  : 'outline'
              "
              size="md"
              @click="medicalNotes.fractureDate = 'Over a week ago'"
            >
              Over a week ago
            </UButton>
            <UButton
              :color="
                medicalNotes.fractureDate === 'N/A' ? 'primary' : 'neutral'
              "
              :variant="
                medicalNotes.fractureDate === 'N/A' ? 'solid' : 'outline'
              "
              size="md"
              @click="medicalNotes.fractureDate = 'N/A'"
            >
              N/A
            </UButton>
          </div>
        </UFormField>

        <UFormField
          name="location"
          label="Location of broken tooth"
          :ui="{
            label: 'font-bold text-base',
          }"
        >
          <UInput
            v-model="medicalNotes.location"
            size="xl"
            placeholder="Type here"
            color="neutral"
            variant="none"
            :ui="{
              base: 'px-0 py-2 selection:bg-primary/20',
            }"
          />
        </UFormField>

        <UFormField
          name="reason"
          label="Reason for attendance"
          :ui="{
            label: 'font-bold text-base',
          }"
        >
          <UInput
            v-model="medicalNotes.reason"
            size="xl"
            placeholder="Type here"
            color="neutral"
            variant="none"
            :ui="{
              base: 'px-0 py-2',
            }"
          />
        </UFormField>

        <UFormField
          name="fractureOccurrence"
          label="When did the fracture occur?"
          :ui="{
            label: 'font-bold text-base',
          }"
        >
          <UInput
            v-model="medicalNotes.fractureOccurrence"
            size="xl"
            placeholder="Type here"
            color="neutral"
            variant="none"
            :ui="{
              base: 'px-0 py-2',
            }"
          />
        </UFormField>

        <UFormField
          name="howItHappened"
          label="How did it happen?"
          :ui="{
            label: 'font-bold text-base',
          }"
        >
          <UInput
            v-model="medicalNotes.howItHappened"
            size="xl"
            placeholder="Type here"
            color="neutral"
            variant="none"
            :ui="{
              base: 'px-0 py-2',
            }"
          />
        </UFormField>
      </div>
    </UForm>
  </UCard>
</template>
