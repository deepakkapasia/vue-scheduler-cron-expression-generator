<template>
  <div class="daily-options">
    <div class="option-group">
      <label class="label">Every</label>
      <div class="input-group">
        <input
          v-model.number="everyDays"
          type="number"
          min="1"
          max="365"
          class="input-number"
          @input="$emit('change')"
        />
        <span class="unit">day(s)</span>
      </div>
    </div>

    <div class="option-group">
      <label class="label">Frequency</label>
      <div class="radio-group">
        <div class="radio-item">
          <input
            id="everyday"
            v-model="dailyPattern"
            type="radio"
            value="everyday"
            @change="$emit('change')"
          />
          <label for="everyday">Every weekday (Monday-Friday)</label>
        </div>
        <div class="radio-item">
          <input
            id="everyday"
            v-model="dailyPattern"
            type="radio"
            value="everyday"
            @change="$emit('change')"
          />
          <label for="everyday">Every day</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DailyOptions',
  props: {
    data: {
      type: Object,
      default: () => ({ everyDays: 1, pattern: 'everyday' })
    }
  },
  emits: ['change'],
  data() {
    return {
      everyDays: this.data.everyDays || 1,
      dailyPattern: this.data.pattern || 'everyday'
    };
  },
  watch: {
    everyDays(newValue) {
      this.$emit('change', { everyDays: newValue, pattern: this.dailyPattern });
    },
    dailyPattern(newValue) {
      this.$emit('change', { everyDays: this.everyDays, pattern: newValue });
    }
  }
};
</script>

<style scoped>
.daily-options {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 6px;
}

.option-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  font-size: 13px;
  font-weight: 600;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.input-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.input-number {
  width: 80px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
}

.input-number:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.unit {
  font-size: 14px;
  color: #666;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.radio-item input {
  cursor: pointer;
}

.radio-item label {
  cursor: pointer;
  font-size: 14px;
  color: #555;
}
</style>
