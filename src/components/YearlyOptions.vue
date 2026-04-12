<template>
  <div class="yearly-options">
    <div class="option-group">
      <label class="label">Every</label>
      <div class="input-group">
        <input
          v-model.number="everyYears"
          type="number"
          min="1"
          max="10"
          class="input-number"
          @input="$emit('change')"
        />
        <span class="unit">year(s)</span>
      </div>
    </div>

    <div class="option-group">
      <label class="label">On pattern</label>
      <div class="radio-group">
        <div class="radio-item">
          <input
            id="sameDay"
            v-model="yearlyPattern"
            type="radio"
            value="sameDay"
            @change="$emit('change')"
          />
          <label for="sameDay">Same day and month ({{ formatDate }})</label>
        </div>
        <div class="radio-item">
          <input
            id="dayPattern"
            v-model="yearlyPattern"
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
            <select v-model="selectedMonth" class="pattern-select" @change="$emit('change')">
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YearlyOptions',
  props: {
    data: {
      type: Object,
      default: () => ({ everyYears: 1, pattern: 'sameDay' })
    },
    startDate: {
      type: Date,
      default: () => new Date()
    }
  },
  emits: ['change'],
  data() {
    return {
      everyYears: this.data.everyYears || 1,
      yearlyPattern: this.data.pattern || 'sameDay',
      dayPatternType: this.data.dayPatternType || 'first',
      dayPatternDay: this.data.dayPatternDay || 'Monday',
      selectedMonth: this.data.selectedMonth || 'January'
    };
  },
  computed: {
    formatDate() {
      if (!this.startDate) return '';
      return this.startDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric'
      });
    }
  },
  watch: {
    everyYears() {
      this.$emit('change', this.getOptions());
    },
    yearlyPattern() {
      this.$emit('change', this.getOptions());
    },
    dayPatternType() {
      this.$emit('change', this.getOptions());
    },
    dayPatternDay() {
      this.$emit('change', this.getOptions());
    },
    selectedMonth() {
      this.$emit('change', this.getOptions());
    }
  },
  methods: {
    getOptions() {
      return {
        everyYears: this.everyYears,
        pattern: this.yearlyPattern,
        dayPatternType: this.dayPatternType,
        dayPatternDay: this.dayPatternDay,
        selectedMonth: this.selectedMonth
      };
    }
  }
};
</script>

<style scoped>
.yearly-options {
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
