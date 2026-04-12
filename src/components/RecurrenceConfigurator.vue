<template>
  <div class="recurrence-configurator">
    <!-- Main Control Row -->
    <div class="repeat-row">
      <label class="repeat-label">Repeat every</label>
      <select v-model="frequency" class="frequency-select" @change="onFrequencyChange">
        <option value="daily">Day</option>
        <option value="weekly">Week</option>
        <option value="monthly">Month</option>
        <option value="yearly">Year</option>
      </select>
    </div>

    <!-- Daily Options -->
    <div v-if="frequency === 'daily'" class="options-section">
      <div class="days-pills">
        <button
          v-for="(day, index) in daysFull"
          :key="'daily-' + index"
          :class="['day-pill', { active: dailySelectedDays.includes(day.short) }]"
          @click="toggleDailyDay(day.short)"
        >
          {{ day.short }}
        </button>
      </div>
    </div>

    <!-- Weekly Options -->
    <div v-if="frequency === 'weekly'" class="options-section">
      <div class="days-pills">
        <button
          v-for="(day, index) in daysFull"
          :key="'weekly-' + index"
          :class="['day-pill', { active: weeklySelectedDays.includes(day.short) }]"
          @click="toggleWeeklyDay(day.short)"
        >
          {{ day.short }}
        </button>
      </div>
    </div>

    <!-- Monthly Options -->
    <div v-if="frequency === 'monthly'" class="options-section">
      <div class="radio-group">
        <!-- Option 1: Specific day of month -->
        <div class="radio-item">
          <input
            id="monthOption1"
            v-model="monthlyPattern"
            type="radio"
            value="dayOfMonth"
            @change="emitChange"
          />
          <label for="monthOption1">On day {{ dayOfMonth }} of each month</label>
        </div>

        <!-- Option 2: Pattern (1st Monday, 2nd Tuesday, etc.) -->
        <div class="radio-item">
          <input
            id="monthOption2"
            v-model="monthlyPattern"
            type="radio"
            value="pattern"
            @change="emitChange"
          />
          <label for="monthOption2">On {{ monthStaticPattern }} of each month</label>
        </div>

        <!-- Option 3: Last occurrence -->
        <div class="radio-item">
          <input
            id="monthOption3"
            v-model="monthlyPattern"
            type="radio"
            value="last"
            @change="emitChange"
          />
          <label for="monthOption3">On last {{ lastDayOfMonth }} of each month</label>
        </div>
      </div>
    </div>

    <!-- Yearly Options -->
    <div v-if="frequency === 'yearly'" class="options-section">
      <div class="radio-group">
        <!-- Option 1: Same date yearly -->
        <div class="radio-item">
          <input
            id="yearOption1"
            v-model="yearlyPattern"
            type="radio"
            value="sameDay"
            @change="emitChange"
          />
          <label for="yearOption1">On {{ monthName }} {{ dayOfMonth }}</label>
        </div>

        <!-- Option 2: Pattern (2nd Sunday of April, etc.) -->
        <div class="radio-item">
          <input
            id="yearOption2"
            v-model="yearlyPattern"
            type="radio"
            value="pattern"
            @change="emitChange"
          />
          <label for="yearOption2">On {{ yearStaticPattern }} of {{ monthName }}</label>
        </div>

        <!-- Option 3: Last occurrence -->
        <div class="radio-item">
          <input
            id="yearOption3"
            v-model="yearlyPattern"
            type="radio"
            value="last"
            @change="emitChange"
          />
          <label for="yearOption3">On last {{ lastDayOfYear }} of {{ monthName }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecurrenceConfigurator',
  props: {
    startDate: {
      type: Date,
      default: () => new Date()
    }
  },
  emits: ['change'],
  data() {
    const today = this.startDate;
    const dayOfWeek = today.getDay();
    
    return {
      frequency: 'daily',
      daysFull: [
        { short: 'S', full: 'Sunday', index: 0 },
        { short: 'M', full: 'Monday', index: 1 },
        { short: 'Tu', full: 'Tuesday', index: 2 },
        { short: 'W', full: 'Wednesday', index: 3 },
        { short: 'Th', full: 'Thursday', index: 4 },
        { short: 'F', full: 'Friday', index: 5 },
        { short: 'Sa', full: 'Saturday', index: 6 }
      ],
      dayOfMonth: today.getDate(),
      monthName: today.toLocaleString('en-US', { month: 'long' }),
      
      // Daily
      dailySelectedDays: ['S', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
      
      // Weekly
      weeklySelectedDays: (() => {
        const dayMap = { 0: 'S', 1: 'M', 2: 'Tu', 3: 'W', 4: 'Th', 5: 'F', 6: 'Sa' };
        return [dayMap[dayOfWeek]];
      })(),
      
      // Monthly
      monthlyPattern: 'dayOfMonth',
      
      // Yearly
      yearlyPattern: 'sameDay'
    };
  },
  computed: {
    monthStaticPattern() {
      const pattern = this.getMonthPatternFromDate(this.startDate);
      return `${pattern.patternName} ${pattern.dayName}`;
    },
    lastDayOfMonth() {
      const pattern = this.getLastDayOfMonthFromDate(this.startDate);
      return pattern.dayName;
    },
    yearStaticPattern() {
      const pattern = this.getYearPatternFromDate(this.startDate);
      return `${pattern.patternName} ${pattern.dayName}`;
    },
    lastDayOfYear() {
      const pattern = this.getLastDayOfYearFromDate(this.startDate);
      return pattern.dayName;
    }
  },
  methods: {
    getDefaultWeeklyDay(dayOfWeek) {
      const dayMap = {
        0: 'S',
        1: 'M',
        2: 'Tu',
        3: 'W',
        4: 'Th',
        5: 'F',
        6: 'Sa'
      };
      return [dayMap[dayOfWeek]];
    },
    getMonthPatternFromDate(date) {
      const dayOfMonth = date.getDate();
      const dayOfWeek = date.getDay();
      
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayName = dayNames[dayOfWeek];
      
      // Calculate which occurrence
      const weekNumber = Math.ceil(dayOfMonth / 7);
      const patternNames = ['first', 'second', 'third', 'fourth'];
      const patternName = patternNames[weekNumber - 1] || 'fourth';
      
      return { patternName, dayName };
    },
    getLastDayOfMonthFromDate(date) {
      const dayOfWeek = date.getDay();
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayName = dayNames[dayOfWeek];
      return { dayName };
    },
    getYearPatternFromDate(date) {
      const dayOfMonth = date.getDate();
      const dayOfWeek = date.getDay();
      
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayName = dayNames[dayOfWeek];
      
      // Calculate which occurrence
      const weekNumber = Math.ceil(dayOfMonth / 7);
      const patternNames = ['first', 'second', 'third', 'fourth'];
      const patternName = patternNames[weekNumber - 1] || 'fourth';
      
      return { patternName, dayName };
    },
    getLastDayOfYearFromDate(date) {
      const dayOfWeek = date.getDay();
      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayName = dayNames[dayOfWeek];
      return { dayName };
    },
    onFrequencyChange() {
      this.$emit('change', this.getRecurrenceData());
    },
    toggleDailyDay(day) {
      const index = this.dailySelectedDays.indexOf(day);
      if (index > -1) {
        this.dailySelectedDays.splice(index, 1);
      } else {
        this.dailySelectedDays.push(day);
      }
      this.$emit('change', this.getRecurrenceData());
    },
    toggleWeeklyDay(day) {
      const index = this.weeklySelectedDays.indexOf(day);
      if (index > -1) {
        this.weeklySelectedDays.splice(index, 1);
      } else {
        this.weeklySelectedDays.push(day);
      }
      this.$emit('change', this.getRecurrenceData());
    },
    getRecurrenceData() {
      const baseData = { frequency: this.frequency };

      switch (this.frequency) {
        case 'daily':
          return {
            ...baseData,
            selectedDays: this.dailySelectedDays
          };
        case 'weekly':
          return {
            ...baseData,
            selectedDays: this.weeklySelectedDays
          };
        case 'monthly':
          const monthPattern = this.getMonthPatternFromDate(this.startDate);
          const lastMonthDay = this.getLastDayOfMonthFromDate(this.startDate);
          return {
            ...baseData,
            pattern: this.monthlyPattern,
            dayOfMonth: this.dayOfMonth,
            monthPattern: monthPattern.patternName,
            monthPatternDay: monthPattern.dayName,
            lastDayOfMonth: lastMonthDay.dayName
          };
        case 'yearly':
          const yearPattern = this.getYearPatternFromDate(this.startDate);
          const lastYearDay = this.getLastDayOfYearFromDate(this.startDate);
          return {
            ...baseData,
            pattern: this.yearlyPattern,
            dayOfMonth: this.dayOfMonth,
            monthName: this.monthName,
            yearPattern: yearPattern.patternName,
            yearPatternDay: yearPattern.dayName,
            lastDayOfYear: lastYearDay.dayName
          };
        default:
          return baseData;
      }
    },
    emitChange() {
      this.$emit('change', this.getRecurrenceData());
    }
  },
  watch: {
    startDate(newDate) {
      this.dayOfMonth = newDate.getDate();
      this.monthName = newDate.toLocaleString('en-US', { month: 'long' });
      const dayOfWeek = newDate.getDay();
      this.weeklySelectedDays = this.getDefaultWeeklyDay(dayOfWeek);
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped>
.recurrence-configurator {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 6px;
}

.repeat-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.repeat-label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
}

.frequency-select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  font-weight: 500;
}

.frequency-select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.options-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.days-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.day-pill {
  width: 36px;
  height: 36px;
  border: 2px solid #ddd;
  background: white;
  border-radius: 50%;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #666;
}

.day-pill:hover {
  border-color: #667eea;
  color: #667eea;
}

.day-pill.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.radio-item input[type="radio"] {
  cursor: pointer;
  width: 18px;
  height: 18px;
}

.radio-item label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 14px;
  color: #555;
  flex-wrap: wrap;
}

.inline-select {
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 13px;
  background: white;
  cursor: pointer;
  min-width: 70px;
}

.inline-select:focus {
  outline: none;
  border-color: #667eea;
}

@media (max-width: 600px) {
  .repeat-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .frequency-select {
    width: 100%;
  }

  .radio-item label {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
