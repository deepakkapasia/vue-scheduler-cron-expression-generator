<template>
  <div class="weekly-options">
    <div class="option-group">
      <label class="label">Every</label>
      <div class="input-group">
        <input
          v-model.number="everyWeeks"
          type="number"
          min="1"
          max="52"
          class="input-number"
          @input="$emit('change')"
        />
        <span class="unit">week(s)</span>
      </div>
    </div>

    <div class="option-group">
      <label class="label">Recur on</label>
      <div class="days-grid">
        <button
          v-for="day in daysOfWeek"
          :key="day"
          :class="['day-btn', { active: selectedDays.includes(day) }]"
          @click="toggleDay(day)"
        >
          {{ day.slice(0, 3) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeeklyOptions',
  props: {
    data: {
      type: Object,
      default: () => ({ everyWeeks: 1, days: ['Monday'] })
    }
  },
  emits: ['change'],
  data() {
    return {
      daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      everyWeeks: this.data.everyWeeks || 1,
      selectedDays: this.data.days || ['Monday']
    };
  },
  methods: {
    toggleDay(day) {
      const index = this.selectedDays.indexOf(day);
      if (index > -1) {
        this.selectedDays.splice(index, 1);
      } else {
        this.selectedDays.push(day);
      }
      this.$emit('change', { everyWeeks: this.everyWeeks, days: this.selectedDays });
    }
  },
  watch: {
    everyWeeks(newValue) {
      this.$emit('change', { everyWeeks: newValue, days: this.selectedDays });
    }
  }
};
</script>

<style scoped>
.weekly-options {
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

.days-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 8px;
}

.day-btn {
  padding: 10px;
  border: 2px solid #ddd;
  background: white;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
}

.day-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

.day-btn.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}
</style>
