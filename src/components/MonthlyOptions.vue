<template>
  <div class="monthly-options">
    <div class="option-group">
      <label class="label">Every</label>
      <div class="input-group">
        <input
          v-model.number="everyMonths"
          type="number"
          min="1"
          max="12"
          class="input-number"
          @input="$emit('change')"
        />
        <span class="unit">month(s)</span>
      </div>
    </div>

    <div class="option-group">
      <label class="label">On pattern</label>
      <div class="radio-group">
        <div class="radio-item">
          <input
            id="dayOfMonth"
            v-model="monthlyPattern"
            type="radio"
            value="dayOfMonth"
            @change="$emit('change')"
          />
          <label for="dayOfMonth">Day {{ dayOfMonth }} of each month</label>
        </div>
        <div class="radio-item">
          <input
            id="dayPattern"
            v-model="monthlyPattern"
            type="radio"
            value="dayPattern"
            @change="$emit('change')"
          />
          <label for="dayPattern">
            <select v-model="dayPatternType" class="pattern-select" @change="$emit('change')">
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="third">Third</option>
              <option value="fourth">Fourth</option>
              <option value="last">Last</option>
            </select>
            <select v-model="dayPatternDay" class="pattern-select" @change="$emit('change')">
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="weekday">Weekday</option>
              <option value="weekend">Weekend</option>
            </select>
            of each month
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonthlyOptions',
  props: {
    data: {
      type: Object,
      default: () => ({ everyMonths: 1, pattern: 'dayOfMonth', dayOfMonth: 1 })
    }
  },
  emits: ['change'],
  data() {
    return {
      everyMonths: this.data.everyMonths || 1,
      monthlyPattern: this.data.pattern || 'dayOfMonth',
      dayOfMonth: this.data.dayOfMonth || 1,
      dayPatternType: this.data.dayPatternType || 'first',
      dayPatternDay: this.data.dayPatternDay || 'Monday'
    };
  },
  watch: {
    everyMonths() {
      this.$emit('change', this.getOptions());
    },
    monthlyPattern() {
      this.$emit('change', this.getOptions());
    },
    dayOfMonth() {
      this.$emit('change', this.getOptions());
    },
    dayPatternType() {
      this.$emit('change', this.getOptions());
    },
    dayPatternDay() {
      this.$emit('change', this.getOptions());
    }
  },
  methods: {
    getOptions() {
      return {
        everyMonths: this.everyMonths,
        pattern: this.monthlyPattern,
        dayOfMonth: this.dayOfMonth,
        dayPatternType: this.dayPatternType,
        dayPatternDay: this.dayPatternDay
      };
    }
  }
};
</script>

<style scoped>
.monthly-options {
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

.radio-item input[type="radio"] {
  cursor: pointer;
}

.radio-item label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #555;
}

.pattern-select {
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px;
  background: white;
  cursor: pointer;
}

.pattern-select:focus {
  outline: none;
  border-color: #667eea;
}
</style>
