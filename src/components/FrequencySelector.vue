<template>
  <div class="frequency-selector">
    <label class="label">Recurrence Pattern</label>
    <div class="frequency-buttons">
      <button
        v-for="freq in frequencies"
        :key="freq"
        :class="['freq-btn', { active: selectedFrequency === freq }]"
        @click="selectFrequency(freq)"
      >
        {{ freq }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrequencySelector',
  props: {
    modelValue: {
      type: String,
      default: 'Daily'
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      frequencies: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
      selectedFrequency: this.modelValue
    };
  },
  methods: {
    selectFrequency(freq) {
      this.selectedFrequency = freq;
      this.$emit('update:modelValue', freq);
    }
  },
  watch: {
    modelValue(newValue) {
      this.selectedFrequency = newValue;
    }
  }
};
</script>

<style scoped>
.frequency-selector {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.frequency-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
}

.freq-btn {
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
}

.freq-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

.freq-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
}
</style>
